import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { SheetSide } from "./sheet"; // Ensure this component is correctly implemented.
import Link from "next/link";
import { NavigationMenuDemo } from "./navigation-menu";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      {/* Top Bar */}
      <div className="w-full h-10 bg-[#070707] text-white text-sm flex items-center justify-center">
        <p className="px-4">Sign up and get 20% off on your first order.</p>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center">
          {/* Sidebar Menu (Mobile) */}
          <div className="md:hidden">
            <SheetSide />
          </div>

          {/* Logo */}
          <div className="text-2xl font-bold ml-4 md:ml-0">
            <Link href="/">SHOP.CO</Link>
          </div>
        </div>

        {/* Center Section - Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/">
              <NavigationMenuDemo />
            </Link>
          </li>
          <li>
            <Link href="/casual" className="hover:text-gray-700">
              On Sale
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-700">
              New Arrival
            </Link>
          </li>
          <li>
            <Link href="/brands" className="hover:text-gray-700">
              Brands
            </Link>
          </li>
        </ul>

        {/* Right Section - Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Input (Hidden on Mobile) */}
          <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none w-full text-sm"
              aria-label="Search for products"
            />
            <FaSearch size={18} className="text-gray-500" />
          </div>

          {/* Cart Icon */}
          <Link href="/cart" className="text-gray-600 hover:text-gray-800">
            <FaShoppingCart size={18} />
          </Link>

          {/* User Icon */}
          <Link href="/profile" className="text-gray-600 hover:text-gray-800">
            <FaUser size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
