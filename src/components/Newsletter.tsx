import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowPathIcon, XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (email.includes('@')) {
      setStatus('success')
      setEmail('')
      setShowSuccess(true)
    } else {
      setStatus('error')
    }
  }

  return (
    <section className="bg-pokemon-blue py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-pokemon text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Catch the Latest Updates!
          </motion.h2>
          <motion.p 
            className="text-white/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Subscribe to our newsletter for exclusive Pokemon case designs and special offers.
          </motion.p>

          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pokemon-yellow"
              required
              disabled={status === 'loading'}
            />
            <motion.button
              type="submit"
              className="bg-pokemon-yellow text-pokemon-blue font-semibold px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[120px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <ArrowPathIcon className="w-5 h-5" />
                  </motion.div>
                  <span>Subscribing...</span>
                </>
              ) : (
                'Subscribe'
              )}
            </motion.button>
          </motion.form>

          {status === 'error' && (
            <motion.p 
              className="text-red-400 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Please enter a valid email address.
            </motion.p>
          )}
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setShowSuccess(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-pokemon-blue to-pokemon-red p-4 relative">
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 rounded-full p-2">
                      <CheckCircleIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Successfully Subscribed!</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircleIcon className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-2">Thank you for subscribing!</h4>
                  <p className="text-gray-600 mb-6">
                    You'll now receive updates about our latest Pokemon case designs and exclusive offers.
                  </p>
                  <motion.button
                    onClick={() => setShowSuccess(false)}
                    className="bg-pokemon-blue text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Newsletter 