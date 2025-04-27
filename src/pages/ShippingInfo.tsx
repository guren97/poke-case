import { motion } from 'framer-motion'
import { TruckIcon, ClockIcon, MapPinIcon, ShieldCheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-pokemon text-pokemon-blue mb-4">Shipping Information</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our shipping process, delivery times, and tracking your order.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Shipping Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <TruckIcon className="w-6 h-6 text-pokemon-blue" />
              Shipping Methods
            </h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Standard Shipping</h3>
                <p className="text-gray-600 mb-2">3-5 business days</p>
                <p className="text-gray-600">Free on orders over Rs. 16259</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Express Shipping</h3>
                <p className="text-gray-600 mb-2">1-2 business days</p>
                <p className="text-gray-600">Rs. 8300 flat rate</p>
              </div>
            </div>
          </motion.div>

          {/* Delivery Times */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <ClockIcon className="w-6 h-6 text-pokemon-blue" />
              Delivery Times
            </h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Processing Time</h3>
                <p className="text-gray-600">Orders are processed within 24 hours of placement</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Delivery Windows</h3>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Tracking Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <ArrowPathIcon className="w-6 h-6 text-pokemon-blue" />
              Track Your Order
            </h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Tracking Number</h3>
                <p className="text-gray-600 mb-4">You'll receive your tracking number via email once your order ships</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter tracking number"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pokemon-blue"
                  />
                  <button className="bg-pokemon-blue text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                    Track
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Shipping Coverage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <MapPinIcon className="w-6 h-6 text-pokemon-blue" />
              Shipping Coverage
            </h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Domestic Shipping</h3>
                <p className="text-gray-600">We ship to all major cities and towns across India</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">International Shipping</h3>
                <p className="text-gray-600">Currently available to select countries. Contact us for details.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <ShieldCheckIcon className="w-6 h-6 text-pokemon-blue" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">What happens if I'm not home during delivery?</h3>
              <p className="text-gray-600">Our delivery partner will attempt to deliver your package up to 3 times. If unsuccessful, you can collect it from the nearest delivery center.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Can I change my delivery address?</h3>
              <p className="text-gray-600">Yes, you can update your delivery address within 24 hours of placing your order by contacting our customer service.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">What's your return policy?</h3>
              <p className="text-gray-600">We offer a 30-day return policy for all unused items in their original packaging. Return shipping is free for defective items.</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Our customer service team is here to help with any shipping-related questions.
          </p>
          <Link to="/contact">
          <button className="bg-pokemon-blue text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            Contact Support
          </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default ShippingInfo 