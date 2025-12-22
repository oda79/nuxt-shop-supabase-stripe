import { prisma } from "~/server/utils/prisma";
import {z} from "zod";
import { ProductSchema } from "~/prisma/src/generated/zod";

const ProductsSchema = z.array(ProductSchema);

export default defineEventHandler(async (event) => {
  const products = await prisma.product.findMany();
  return ProductsSchema.parse(products);
})
