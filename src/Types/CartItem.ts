import { Product } from "@/types/Product";

export interface CartItem {
    product: Product;
    quantity: number;
}