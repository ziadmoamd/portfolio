import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import {motion , AnimatePresence } from "framer-motion"

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 
                 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-400 
                 bg-[length:200%_200%] animate-gradient 
                 text-white shadow-lg backdrop-blur-lg">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <h1 className="text-2xl font-extrabold tracking-wide"> My portfolio</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-lg font-medium">
                    {["Home", "Skills", "Objects", "Contact"].map((item, i) => (
                        <motion.li
                            key={i}
                            whileHover={{ scale: 1.2, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 300 }}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-cyan-300 transition-all duration-300 relative 
                           after:content-[''] after:block after:w-0 after:h-[2px] 
                           after:bg-cyan-300 after:transition-all after:duration-500 
                           hover:after:w-full">
                                {item}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ?
                        <X size={28} />
                    :   <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="md:hidden flex flex-col space-y-6 mt-4 
                       bg-black/60 backdrop-blur-xl p-6 rounded-xl text-center">
                        {["Home", "Skills", "Objects", "Contact"].map((item, i) => (
                            <motion.li
                                key={i}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="block text-lg hover:text-cyan-300 transition-colors">
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Nav
