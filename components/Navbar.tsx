import {AccountMenu, MobileMenu, NavbarItem} from "./"
import { items } from "../data"
import {BsBell, BsChevronDown, BsSearch} from 'react-icons/bs'
import { useCallback, useEffect, useState } from "react"

const TOP_OFFSET = 66

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)
    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current)
    }, [])

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= TOP_OFFSET) {
            setShowBackground(true)
        } else {
            setShowBackground(false)
        }
      }
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
    

  return (
    <nav className="w-full fixed z-40">
        <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900/90': ''}`}>
            <img src="/images/logo.png" alt="Logo" className="h-4 lg:h-7" />
            <div className="flex-row ml-8 gap-7 hidden lg:flex">
                {items.map(item => (
                    <NavbarItem label={item.name} key={item.name} />
                ))}
            </div>
            <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                <p className="text-white text-sm">Browse</p>
                <BsChevronDown className={`transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                <MobileMenu visible={showMobileMenu} />
            </div>

            <div className="flex flex-row ml-auto gap-7 items-center">
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <BsSearch />
                </div>
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <BsBell />
                </div>
                <div className="flex flex-row items-center gap-2 cursor-pointer relative" onClick={toggleAccountMenu}>
                    <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-full overflow-hidden">
                        <img src="/images/default-blue.png" alt="profile" />
                    </div>
                    <BsChevronDown className={`transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <AccountMenu visible={showAccountMenu} />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar