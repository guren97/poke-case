import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Newsletter from '../components/Newsletter'
import { 
  ShieldCheckIcon, 
  TruckIcon, 
  ArrowPathIcon, 
  StarIcon,
  FireIcon,
  BoltIcon,
  CloudIcon,
  SparklesIcon,
  MoonIcon,
  BugAntIcon,
  ShieldExclamationIcon,
  SunIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import darkraiAbout from '../assets/images/darkrai.webp'
import arceusAbout from '../assets/images/arceus.webp'
import articunoAbout from '../assets/images/articuno.webp'   

type PokemonType = 'fire' | 'water' | 'electric' | 'grass' | 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'dark' | 'fairy' | 'ice' | 'psychic' | 'dragon' | 'steel'

const Home = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Premium Protection',
      description: 'Military-grade protection for your device with our Tough and Shock cases.'
    },
    {
      icon: TruckIcon,
      title: 'Free Shipping',
      description: 'Free shipping on all orders within Pakistan.'
    },
    {
      icon: ArrowPathIcon,
      title: 'Easy Returns',
      description: '30-day hassle-free returns if you\'re not satisfied.'
    },
    {
      icon: StarIcon,
      title: 'Quality Guaranteed',
      description: 'All our cases are quality tested and guaranteed.'
    }
  ]

  const pokemonTypes = [
    { type: 'Fire', icon: FireIcon, color: 'bg-red-500', count: products.filter(p => p.type.includes('fire')).length },
    { type: 'Water', icon: CloudIcon, color: 'bg-blue-500', count: products.filter(p => p.type.includes('water')).length },
    { type: 'Electric', icon: BoltIcon, color: 'bg-yellow-500', count: products.filter(p => p.type.includes('electric')).length },
    { type: 'Grass', icon: SunIcon, color: 'bg-green-500', count: products.filter(p => p.type.includes('grass')).length },
    { type: 'Psychic', icon: SparklesIcon, color: 'bg-purple-500', count: products.filter(p => p.type.includes('psychic')).length },
    { type: 'Ghost', icon: MoonIcon, color: 'bg-indigo-500', count: products.filter(p => p.type.includes('ghost')).length },
    { type: 'Dragon', icon: ShieldExclamationIcon, color: 'bg-violet-500', count: products.filter(p => p.type.includes('dragon')).length },
    { type: 'Dark', icon: MoonIcon, color: 'bg-gray-800', count: products.filter(p => p.type.includes('dark')).length },
    { type: 'Bug', icon: BugAntIcon, color: 'bg-lime-500', count: products.filter(p => p.type.includes('bug')).length },
    { type: 'Steel', icon: ShieldExclamationIcon, color: 'bg-gray-400', count: products.filter(p => p.type.includes('steel')).length },
    { type: 'Fairy', icon: SparklesIcon, color: 'bg-pink-500', count: products.filter(p => p.type.includes('fairy')).length },
    { type: 'Ice', icon: CloudIcon, color: 'bg-cyan-500', count: products.filter(p => p.type.includes('ice')).length },
    { type: 'Normal', icon: ShieldCheckIcon, color: 'bg-gray-500', count: products.filter(p => p.type.includes('normal')).length },
    { type: 'Fighting', icon: ShieldExclamationIcon, color: 'bg-orange-500', count: products.filter(p => p.type.includes('fighting')).length },
    { type: 'Flying', icon: CloudIcon, color: 'bg-sky-500', count: products.filter(p => p.type.includes('flying')).length },
    { type: 'Poison', icon: ShieldExclamationIcon, color: 'bg-purple-600', count: products.filter(p => p.type.includes('poison')).length },
    { type: 'Ground', icon: ShieldCheckIcon, color: 'bg-amber-700', count: products.filter(p => p.type.includes('ground')).length },
    { type: 'Rock', icon: ShieldExclamationIcon, color: 'bg-amber-500', count: products.filter(p => p.type.includes('rock')).length }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Poke Cases?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer premium quality Pokemon phone cases with military-grade protection and stunning designs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <feature.icon className="w-12 h-12 text-pokemon-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Cases</h2>
              <p className="text-gray-600">Discover our most popular Pokemon phone cases</p>
            </div>
            <Link 
              to="/all-products" 
              className="text-pokemon-blue hover:text-pokemon-blue/80 font-medium flex items-center gap-2"
            >
              View All Cases
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Pokemon Types Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-2">Shop by Pokemon Type</h2>
              <p className="text-gray-600">Find cases featuring your favorite Pokemon types</p>
            </div>
            <Link 
              to="/all-products" 
              className="text-pokemon-blue hover:text-pokemon-blue/80 font-medium flex items-center gap-2"
            >
              View All Types
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pokemonTypes.map((pokemonType, index) => (
              <motion.div
                key={pokemonType.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link 
                  to={`/all-products?type=${pokemonType.type.toLowerCase()}`}
                  className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
                >
                  <div className={`absolute inset-0 ${pokemonType.color} opacity-10`} />
                  <div className="relative z-10">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${pokemonType.color} text-white shadow-lg`}>
                      <pokemonType.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 capitalize">{pokemonType.type}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        {pokemonType.count} {pokemonType.count === 1 ? 'case' : 'cases'} available
                      </p>
                      <span className="text-xs font-medium text-gray-500">
                        Starting from Rs {Math.min(...products.filter(p => p.type.includes(pokemonType.type.toLowerCase() as PokemonType)).map(p => p.price))}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 transition-all group-hover:from-white/0 group-hover:via-white/0 group-hover:to-white/10" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Popular Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections of Pokemon phone cases
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Darkrai Collection', image: darkraiAbout },
              { name: 'Arceus Collection', image: arceusAbout },
              { name: 'Articuno Collection', image: articunoAbout }
            ].map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    {collection.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>
    </motion.div>
  )
}

export default Home 