import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { products } from '../data/products'

export interface Product {
  id: string
  name: string
  pokemon: string
  type: ('fire' | 'water' | 'electric' | 'grass' | 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'dark' | 'fairy' | 'ice' | 'psychic' | 'dragon' | 'steel')[]
  price: number
  image: string
  description: string
  compatibility: 'iPhone' | 'Android'
  caseType: 'Tough' | 'Shock' | 'Standard'
  rating: {
    stars: number
    count: number
    reviews: {
      user: string
      rating: number
      comment: string
      date: string
    }[]
  }
  specifications: {
    material: string
    dimensions: string
    weight: string
    protection: string[]
  }
}

interface CartItem extends Product {
  quantity: number
}

interface StoreState {
  products: Product[]
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      products,
      cart: [],
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id)
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] }
        })
      },
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }))
      },
      updateQuantity: (productId, quantity) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }))
      },
      clearCart: () => set({ cart: [] }),
      getTotalItems: () => {
        const state = get()
        return state.cart.reduce((total, item) => total + item.quantity, 0)
      },
      getTotalPrice: () => {
        const state = get()
        return state.cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      },
    }),
    {
      name: 'poke-case-store',
    }
  )
)

export default useStore 