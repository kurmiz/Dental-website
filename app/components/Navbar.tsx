'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700">
            Subha Dental Care
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink href="/" active={pathname === '/'}>Home</NavLink>
            <NavLink href="/about" active={pathname === '/about'}>About</NavLink>
            <NavLink href="/services" active={pathname === '/services'}>Services</NavLink>
            <NavLink href="/contact" active={pathname === '/contact'}>Contact</NavLink>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink href="/login" active={pathname === '/login'}>Login</NavLink>
                <NavLink href="/signup" active={pathname === '/signup'}>Signup</NavLink>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="flex flex-col space-y-2">
            <MobileNavLink href="/" active={pathname === '/'}>Home</MobileNavLink>
            <MobileNavLink href="/about" active={pathname === '/about'}>About</MobileNavLink>
            <MobileNavLink href="/services" active={pathname === '/services'}>Services</MobileNavLink>
            <MobileNavLink href="/contact" active={pathname === '/contact'}>Contact</MobileNavLink>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </button>
            ) : (
              <>
                <MobileNavLink href="/login" active={pathname === '/login'}>Login</MobileNavLink>
                <MobileNavLink href="/signup" active={pathname === '/signup'}>Signup</MobileNavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) => (
  <Link
    href={href}
    className={`${
      active ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900'
    } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
  >
    {children}
  </Link>
)

const MobileNavLink = ({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) => (
  <Link
    href={href}
    className={`${
      active ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900'
    } block px-3 py-2 rounded-md text-base font-medium`}
  >
    {children}
  </Link>
)

export default Navbar

