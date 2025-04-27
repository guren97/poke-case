import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon,  
  StarIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import darkraiAbout from '../assets/images/darkrai.webp'
import arceusAbout from '../assets/images/arceus.webp'
import articunoAbout from '../assets/images/articuno.webp'

import pikachuAbout from '../assets/images/pikachu-about.jpg'

const About = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Premium Protection',
      description: 'Our cases are made with military-grade materials to ensure your device stays protected from drops, scratches, and daily wear.'
    },
    {
      icon: StarIcon,
      title: 'Quality Design',
      description: 'Each case is carefully designed with attention to detail, featuring high-quality prints and durable materials.'
    },
    {
      icon: HeartIcon,
      title: 'Pokemon Love',
      description: 'We\'re passionate about Pokemon and create cases that celebrate your favorite characters with authentic designs.'
    },
    {
      icon: SparklesIcon,
      title: 'Unique Collection',
      description: 'From Starter Pokemon to Legendaries, we offer a wide range of designs to suit every trainer\'s style.'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pokemon-blue to-pokemon-red text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-pokemon mb-6">About Poke Cases</h1>
            <p className="text-xl text-white/90">
              Your premier destination for Pokemon-themed phone cases. We combine your love for Pokemon with high-quality phone protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Founded by Pokemon enthusiasts, Poke Cases started with a simple idea: to create phone cases that combine our love for Pokemon with practical device protection.
              </p>
              <p className="text-lg mb-4">
                What began as a small collection of Starter Pokemon cases has grown into a comprehensive catalog featuring your favorite Pokemon from all generations.
              </p>
              <p className="text-lg">
                Today, we're proud to offer a wide range of Pokemon-themed cases, from classic designs to modern interpretations, all while maintaining our commitment to quality and protection.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={pikachuAbout}
              alt="Our Story"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-pokemon-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Collection Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Our Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            From Starter Pokemon to Legendaries, we offer a wide range of designs to suit every trainer's style. Each case is carefully crafted to showcase your favorite Pokemon while providing reliable protection for your device.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Darkrai Collection', image: darkraiAbout },
              { name: 'Arceus Collection', image: arceusAbout },
              { name: 'Articuno Collection', image: articunoAbout }
            ].map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-xl"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">{collection.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Poke Cases, our mission is to bring the world of Pokemon to your everyday life through high-quality, stylish phone cases. We believe that your phone case should not only protect your device but also express your personality and love for Pokemon.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About 