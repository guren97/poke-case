import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import useStore from '../store/useStore'

const FeaturedProducts = () => {
  const addToCart = useStore((state) => state.addToCart)
  
  // Get 4 random products for featured section
  const featuredProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <Link to={`/product/${product.id}`}>
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <motion.button
                  className="bg-pokemon-blue text-white font-semibold px-4 py-2 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault()
                    addToCart(product)
                  }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </Link>
          
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.pokemon}</p>
            <div className="flex items-center gap-2 mb-2">
              {product.type.map((type, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
                >
                  {type}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-pokemon-blue font-bold text-lg">Rs {product.price}</span>
              <Link 
                to={`/product/${product.id}`}
                className="text-sm text-gray-600 hover:text-pokemon-blue transition-colors"
              >
                View Details →
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FeaturedProducts 