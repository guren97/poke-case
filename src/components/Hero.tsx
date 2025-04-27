import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import pokeBall from '../assets/images/pokeball.svg'
import { products } from '../data/products'

const Hero = () => {
  const featuredCases = products.slice(0, 3)

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-pokemon-blue via-pokemon-red to-pokemon-yellow overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute h-full w-full inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/images/pokeball-pattern.svg)',
          backgroundSize: '200px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-40 h-40 bg-pokemon-yellow rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-60 h-60 bg-pokemon-green rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container relative mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            className="text-white md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-pokemon mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Catch Your Style!
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white/90 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Protect your phone with our exclusive Pokemon-themed cases. 
              Choose from your favorite Pokemon designs and show off your style!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link to="/all-products">
                <motion.button
                  className="w-full sm:w-auto bg-white text-pokemon-blue font-semibold px-8 py-4 rounded-xl text-lg hover:bg-opacity-90 transition-colors shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop Now
                </motion.button>
              </Link>
              <Link to="/collections">
                <motion.button
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Collections
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Pokemon Image */}
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src={pokeBall}
                alt="Pikachu with phone case"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Featured Cases */}
            <motion.div 
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {featuredCases.map((product) => (
                <motion.div
                  key={product.id}
                  className="w-26 h-36 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Features Bar */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-white font-semibold">Free Shipping</p>
            <p className="text-white/80 text-sm">On all orders</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-white font-semibold">30-Day Returns</p>
            <p className="text-white/80 text-sm">Hassle-free</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-white font-semibold">Secure Payment</p>
            <p className="text-white/80 text-sm">100% secure</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 