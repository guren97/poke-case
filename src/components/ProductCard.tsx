import { motion } from 'framer-motion'
import { Product } from '../store/useStore'
import useStore from '../store/useStore'
import { ShoppingCartIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useStore((state) => state.addToCart)
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking the Add to Cart button
    addToCart(product)
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index}>
        {index < Math.floor(rating) ? (
          <StarIconSolid className="w-4 h-4 text-yellow-400" />
        ) : (
          <StarIcon className="w-4 h-4 text-gray-300" />
        )}
      </span>
    ))
  }

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-46 object-cover transform group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
          />
          {imageError && (
            <div className="w-full h-46 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Image not available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className="bg-pokemon-blue text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              Add to Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-pokemon-blue px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              View Details
            </motion.button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <span className="text-pokemon-blue font-bold">Rs {product.price.toLocaleString()}</span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-600">{product.pokemon}</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-600">{product.type}</span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
              {product.compatibility}
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
              {product.caseType}
            </span>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <div className="flex">{renderStars(product.rating.stars)}</div>
            <span className="text-sm text-gray-500">({product.rating.count})</span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <ShieldCheckIcon className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600">{product.specifications.protection.join(', ')}</span>
          </div>

          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProductCard 