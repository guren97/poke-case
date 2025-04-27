import { Link } from 'react-router-dom'
import { ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '../store/useStore'
import { useState } from 'react'

import pokeCaseLogo from '../assets/images/poke-case-logo.svg'

const Navbar = () => {
    const totalItems = useStore((state) => state.getTotalItems())
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20 ml-2">
                    <Link to="/" className="flex items-center">
                        <img src={pokeCaseLogo} alt="Poke Cases" className="w-10 h-12" />
                        <motion.h1
                            className="text-3xl font-pokemon text-pokemon-red"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Poke Cases
                        </motion.h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/all-products">Shop</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>

                    {/* Cart Button */}
                    <Link to="/cart" className="relative">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
                        </motion.div>
                        {totalItems > 0 && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-1 -right-1 bg-pokemon-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium"
                            >
                                {totalItems}
                            </motion.span>
                        )}
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Bars3Icon className="h-6 w-6 text-gray-600" />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-4">
                                <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                                <MobileNavLink to="/all-products" onClick={() => setIsMenuOpen(false)}>Shop</MobileNavLink>
                                <MobileNavLink to="/collections" onClick={() => setIsMenuOpen(false)}>Collections</MobileNavLink>
                                <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
                                <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
        <motion.span
            className="text-gray-600 hover:text-pokemon-red transition-colors relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pokemon-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.span>
    </Link>
)

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
    <Link to={to} onClick={onClick}>
        <motion.span
            className="block text-gray-600 hover:text-pokemon-red transition-colors py-2"
            whileHover={{ x: 10 }}
        >
            {children}
        </motion.span>
    </Link>
)

export default Navbar 