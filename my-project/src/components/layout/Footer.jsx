import React from 'react';
import { Link } from './Link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Smartphone
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white">Team</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="hover:text-white">Help & Support</Link></li>
              <li><Link href="/partner" className="hover:text-white">Partner with us</Link></li>
              <li><Link href="/ride" className="hover:text-white">Ride with us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Install App</h3>
            <div className="flex items-center space-x-4 mb-4">
              <Smartphone className="h-6 w-6" />
              <div>
                <p className="text-sm">Get the Swiggy App</p>
                <p className="text-xs text-gray-400">Order from your favorite restaurants</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Social Media</h3>
            <p className="text-sm mb-4">Follow us on social media for updates and offers:</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Swiggy Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
