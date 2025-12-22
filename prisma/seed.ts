import { PrismaClient } from "./src/generated/prisma-client/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { $fetch } from "ofetch";
import { z } from "zod";
import { ProductCreateManyInputSchema } from "../shared/generated/zod"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const FakeStoreProductsSchema = z.array(
  z.object({
    id: z.number().int(),
    title: z.string(),
    price: z.number(),
    description: z.string().nullable().optional(),
    category: z.string(),
    image: z.url(),
  })
);

async function seed() {
  const raw = await $fetch("https://fakestoreapi.com/products");
  const products = FakeStoreProductsSchema.parse(raw);

  const data = products.map((product) =>
    ProductCreateManyInputSchema.parse({
      name: product.title,
      description: product.description ?? "",
      price: product.price,
      category: product.category,
      image: product.image ?? "",
    }));
  await prisma.product.createMany({ data });
}

seed()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
  await pool.end();
});
