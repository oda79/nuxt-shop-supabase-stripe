import type { Product } from "~/prisma/src/generated/zod"

type CartItem = Product & { quantity: number }

export const useCart = () => {

  const cart = useState<CartItem[]>('cart', () => [])

  function addToCart(product: Product, quantity: number = 1) {
    const existingItem = cart.value.find(item => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.value.push({ ...product, quantity })
    }
  } 

  function isInCart(productId: number): boolean {
    return cart.value.some(item => item.id === productId)
  }

  return {
    cart,
    addToCart,
    isInCart
  }
}
