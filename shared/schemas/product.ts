import {z} from 'zod';
import {ProductSchema} from "../generated/zod"; 

export const CreateProductSchema = ProductSchema.pick({
    name: true,
    price: true,
    description: true,
    image: true,
    category: true,
}).extend({
    name: z.string().min(1, "Name is required"),
    price: z.number().min(0, "Price must be at least 0"),
    description: z.string().optional(),
    image: z.url("Image URL must be a valid URL").optional(),
});