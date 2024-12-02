import React from 'react';
import { Camera } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Dashly Owl 360</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#security" className="text-gray-600 hover:text-indigo-600">Security</a>
            <a href="#app" className="text-gray-600 hover:text-indigo-600">Mobile App</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Pre-order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}