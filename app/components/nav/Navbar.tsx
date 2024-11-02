import Link from 'next/link'
import MobileNavDropdown from './MobileNavDropdown'

export const navLinks = [
  {
    label: 'Home',
    href: '/',
    mobile: true
  },
  {
    label: 'About',
    href: '/about',
    mobile: true
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    mobile: true
  },
  {
    label: 'Blog',
    href: '/blog',
    mobile: true
  }
]

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 bg-base-200 md:bg-base-100">
      <div className="w-full flex md:justify-center justify-between md:items-center md:gap-2">
        {/* desktop */}
        <ul className="menu menu-horizontal items-center gap-10 hidden md:flex">
          {navLinks.map((link, index) => (
            <li key={index}><Link href={link.href}>{link.label}</Link></li>
          ))}
        </ul>
        {/* mobile */}
        <MobileNavDropdown />
        <div className="md:hidden flex">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="px-2">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
