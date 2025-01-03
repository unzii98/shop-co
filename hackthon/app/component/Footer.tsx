import { FaTwitter, FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Subscription Section */}
      <div className="flex flex-wrap bg-black w-full md:w-[800px] h-auto md:h-40 mx-4 md:mx-auto rounded-[20px] p-4 items-center">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center md:text-left w-full md:w-auto flex-1 mb-4 md:mb-0">
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>
        <form className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-full text-black placeholder-gray-600 focus:outline-none border border-gray-300 w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-white text-black font-medium py-3 px-6 rounded-full w-full md:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo and Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-black">SHOP.CO</h2>
          <p className="text-sm text-gray-500">
            We have clothes that suit your style and which you're proud to wear.
            From women to men.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-black">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <FaPinterest size={18} />
            </a>
          </div>
        </div>

        {/* Links Sections */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Company</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Works</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Career</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Help</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-black">Customer Support</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Delivery Details</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Resources</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-black">Free eBooks</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Development Tutorial</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">How to - Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">YouTube Playlist</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p className="text-center sm:text-left">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Image src="/Badge.png" alt="Visa" width={46} height={30} />
            <Image src="/Badge1.png" alt="MasterCard" width={46} height={30} />
            <Image src="/Badge3.png" alt="ePay" width={46} height={30} />
            <Image src="/Badge4.png" alt="Google Store" width={46} height={40} />
          </div>
        </div>
      </div>
    </footer>
  );
}
