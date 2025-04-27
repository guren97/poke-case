import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import useStore from '../store/useStore'
import { 
  ShoppingCartIcon, 
  StarIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  TruckIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

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

const ProductDetails = () => {
  const { id } = useParams()
  const addToCart = useStore((state) => state.addToCart)
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-4xl font-pokemon text-pokemon-blue mb-4">Product Not Found</h1>
        <p className="text-gray-600">The product you're looking for doesn't exist.</p>
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
      {/* Product Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Image */}
        <div className="space-y-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-contain"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              {product.type.map((type, index) => (
                <span key={index} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              ))}
            </div>
          </div>
          
          {/* Product Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl">
              <ShieldCheckIcon className="w-6 h-6 text-pokemon-blue mb-2" />
              <h4 className="font-semibold">Premium Protection</h4>
              <p className="text-sm text-gray-600">Military-grade protection</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <DevicePhoneMobileIcon className="w-6 h-6 text-pokemon-blue mb-2" />
              <h4 className="font-semibold">Perfect Fit</h4>
              <p className="text-sm text-gray-600">Designed for {product.compatibility}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <TruckIcon className="w-6 h-6 text-pokemon-blue mb-2" />
              <h4 className="font-semibold">Free Shipping</h4>
              <p className="text-sm text-gray-600">On all orders</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <ArrowPathIcon className="w-6 h-6 text-pokemon-blue mb-2" />
              <h4 className="font-semibold">Easy Returns</h4>
              <p className="text-sm text-gray-600">30-day guarantee</p>
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-pokemon text-pokemon-blue mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <div className="flex">{renderStars(product.rating.stars)}</div>
                <span className="text-sm text-gray-500">({product.rating.count} reviews)</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-pokemon-blue">Rs {product.price.toFixed(2)}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {product.compatibility}
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {product.caseType}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Pokemon</h2>
            <p className="text-gray-600">{product.pokemon}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-medium text-gray-900">Material</h4>
                <p className="text-sm text-gray-600">{product.specifications.material}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-medium text-gray-900">Dimensions</h4>
                <p className="text-sm text-gray-600">{product.specifications.dimensions}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-medium text-gray-900">Weight</h4>
                <p className="text-sm text-gray-600">{product.specifications.weight}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-medium text-gray-900">Protection</h4>
                <p className="text-sm text-gray-600">{product.specifications.protection}</p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addToCart(product)}
            className="w-full bg-pokemon-blue text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-pokemon-blue/90 transition-colors font-medium"
          >
            <ShoppingCartIcon className="w-5 h-5" />
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductDetails 