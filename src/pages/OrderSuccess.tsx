import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, HomeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const OrderSuccess = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pokemon-blue/5 via-pokemon-red/5 to-pokemon-yellow/5"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2
            }}
            className="relative flex justify-center mb-8"
          >
            <div className="absolute inset-0 bg-pokemon-green/20 rounded-full blur-2xl" />
            <div className="relative bg-pokemon-green rounded-full p-4">
              <CheckCircleIcon className="h-16 w-16 text-white" />
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-4xl font-pokemon text-pokemon-blue mb-4">
              Order Successful!
            </h1>
            
            <p className="text-xl text-gray-600 mb-2">
              Thank you for your purchase!
            </p>
            <p className="text-gray-500 mb-8">
              Your Pokemon cases are being prepared for shipping. We'll send you a confirmation email shortly.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/collections">
              <motion.button
                className="w-full sm:w-auto bg-pokemon-blue text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBagIcon className="w-5 h-5" />
                Continue Shopping
              </motion.button>
            </Link>
            
            <Link to="/">
              <motion.button
                className="w-full sm:w-auto bg-white text-pokemon-blue border-2 border-pokemon-blue px-8 py-3 rounded-lg hover:bg-pokemon-blue/5 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HomeIcon className="w-5 h-5" />
                Return to Home
              </motion.button>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 pt-8 border-t border-gray-100"
          >
            <p className="text-sm text-gray-500">
              Need help? Contact our support team at{' '}
              <a href="mailto:support@poke-case.shop" className="text-pokemon-blue hover:text-pokemon-red transition-colors">
                support@poke-case.shop
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default OrderSuccess 