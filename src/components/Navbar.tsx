import React from 'react';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">DailyHelp</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Solutions</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Categories</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Community</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Blog</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Solutions</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Community</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</a>
              <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;