import { motion } from 'framer-motion'
import { useState } from 'react'
import useStore from '../store/useStore'
import { useNavigate } from 'react-router-dom'
import { 
  TruckIcon, 
  ShieldCheckIcon,
  ArrowPathIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

import easePaisia from '../assets/images/paymentlogo/easypaisa.png'
import jasscashCard from '../assets/images/paymentlogo/jazzcashcard.png'
import jazzcashMobile from '../assets/images/paymentlogo/jazzcashmobile.png'

const Checkout = () => {
  const navigate = useNavigate()
  const { cart, getTotalPrice, clearCart } = useStore()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '', 
    country: 'Pakistan',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPayment) {
      alert('Please select a payment method')
      return
    }
    setIsSubmitting(true)
    // Handle payment processing here
    setTimeout(() => {
      clearCart()
      navigate('/order-success')
    }, 1500)
  }

  const paymentMethods = [
    { id: 'easypaisa', name: 'EasePaisa', logo: easePaisia },
    { id: 'jazzcashcard', name: 'JazzCash Card', logo: jasscashCard },
    { id: 'jazzcashmobile', name: 'JazzCash Mobile', logo: jazzcashMobile }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-16 mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-pokemon text-pokemon-blue mb-4">Checkout</h1>
        <p className="text-gray-600">Complete your order and get ready to catch your Pokemon case!</p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Shipping Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <TruckIcon className="w-6 h-6 text-pokemon-blue" />
            <h2 className="text-2xl font-semibold">Shipping Information</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pokemon-blue focus:border-transparent transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pokemon-blue focus:border-transparent transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pokemon-blue focus:border-transparent transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pokemon-blue focus:border-transparent transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pokemon-blue focus:border-transparent transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div> 
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pokemon-blue focus:border-transparent transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
       

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-pokemon-blue text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <ArrowPathIcon className="w-5 h-5" />
                  </motion.div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <ShieldCheckIcon className="w-5 h-5" />
                  <span>Place Order</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold mb-8">Order Summary</h2>
          <div className="space-y-6">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <span className="text-pokemon-red font-bold">${item.price * item.quantity}</span>
              </motion.div>
            ))}
            
            <div className="border-t pt-6 space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${getTotalPrice()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-4">
                <span>Total</span>
                <span className="text-pokemon-red">${getTotalPrice()}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
              <div className="flex flex-wrap gap-4">
                {paymentMethods.map((method) => (
                  <motion.div
                    key={method.id}
                    className={`relative bg-white p-3 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedPayment === method.id
                        ? 'border-pokemon-blue shadow-md'
                        : 'border-gray-200 hover:border-pokemon-blue/50'
                    }`}
                    onClick={() => setSelectedPayment(method.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img src={method.logo} alt={method.name} className="h-8" />
                    {selectedPayment === method.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-pokemon-blue rounded-full p-1"
                      >
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
              {!selectedPayment && (
                <p className="text-red-500 text-sm mt-2">Please select a payment method</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Checkout 