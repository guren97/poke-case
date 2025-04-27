import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import pokeCaseLogo from '../assets/images/poke-case-logo.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
                <img src={pokeCaseLogo} alt="Poke Cases" className="w-10 h-10" />
                <h3 className="text-xl font-pokemon text-pokemon-yellow">Poke Cases</h3>
            </div>
            <p className="text-gray-400">
              Your one-stop shop for Pokemon-themed phone cases. Catch 'em all!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/collections">Collections</FooterLink></li>
              <li><FooterLink to="/about">About</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><FooterLink to="/privacy-policy">Privacy Policy</FooterLink></li>
              <li><FooterLink to="/terms">Terms & Conditions</FooterLink></li>
              <li><FooterLink to="/shipping">Shipping Info</FooterLink></li> 
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon="twitter" />
              <SocialIcon href="#" icon="facebook" />
              <SocialIcon href="#" icon="instagram" />
              <SocialIcon href="#" icon="pinterest" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>{/* Copyright ©️ 2025 | Powered by NAFEES ALI TRADERS (SMC-PRIVATE) LIMITED */}
        Copyright ©️ 2025 | Gwen Bautista</p>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to}>
    <motion.span
      className="text-gray-400 hover:text-pokemon-yellow transition-colors"
      whileHover={{ x: 5 }}
    >
      {children}
    </motion.span>
  </Link>
)

const SocialIcon = ({ href, icon }: { href: string; icon: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <motion.div
      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pokemon-red transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className={`fab fa-${icon} text-xl`}></i>
    </motion.div>
  </a>
)

export default Footer 