import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useStore from '../store/useStore'
import { TrashIcon } from '@heroicons/react/24/outline'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useStore()

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-16 text-center mt-20"
      >
        <h1 className="text-4xl font-pokemon text-pokemon-blue mb-8">Your Cart is Empty</h1>
        <p className="text-lg mb-8">Looks like you haven't caught any Pokemon cases yet!</p>
        <Link to="/collections">
          <motion.button
            className="bg-pokemon-blue text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Shopping
          </motion.button>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-16 mt-20"
    >
      <h1 className="text-4xl font-pokemon text-pokemon-blue mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-6 mb-4 flex items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.pokemon}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="border rounded-lg px-2 py-1"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <span className="text-pokemon-red font-bold">Rs {item.price * item.quantity}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs {getTotalPrice()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>Rs {getTotalPrice()}</span>
                </div>
              </div>
            </div>
            <Link to="/checkout">
              <motion.button
                className="w-full bg-pokemon-blue text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Cart 