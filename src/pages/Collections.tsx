import { motion } from 'framer-motion'
import AllProducts from './AllProducts'

const Collections = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AllProducts />
    </motion.div>
  )
}

export default Collections 