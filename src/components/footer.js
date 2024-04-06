import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 lg:px-6 pt-6 pb-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-md mb-2">ABOUT US</h2>
            <p className="text-sm">Learn more about our mission, vision, and values.</p>
            <Link href="#" className="text-sm inline-block mt-2 underline">Read More</Link>
          </div>
          <div>
            <h2 className="font-bold text-md mb-2">TERMS OF USE</h2>
            <p className="text-sm">Review the terms and conditions for using our platform.</p>
            <Link href="#" className="text-sm inline-block mt-2 underline">View Terms</Link>
          </div>
          <div>
            <h2 className="font-bold text-md mb-2">CONTACT</h2>
            <p className="text-sm">Get in touch with us for any questions or support.</p>
            <Link href="#" className="text-sm inline-block mt-2 underline">Contact Us</Link>
          </div>
          <div>
            <h2 className="font-bold text-md mb-2">FOLLOW US</h2>
            <div className="flex items-center space-x-4 mt-2">
              <a href="#" aria-label="Facebook" className="text-white hover:text-gray-400">
                <FaFacebookSquare />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-gray-400">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="email" className="text-white hover:text-gray-400">
                <MdMailOutline />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>© 2024 ASTA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}