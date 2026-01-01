import { prisma } from "../utils/prisma";
import {z} from "zod";
import { ProductSchema } from "@commerce/shared/schemas/zod";

const ProductsSchema = z.array(ProductSchema);

export default defineEventHandler(async (event) => {
  const products = await prisma.product.findMany();
  return ProductsSchema.parse(products);
})
