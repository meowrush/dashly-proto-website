import React from 'react';
import { Shield, Smartphone, Video } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Car's Ultimate Night Vision Guardian
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience unparalleled 360° protection with crystal clear 4K recording,
            day and night. Stay connected to your vehicle anywhere, anytime.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
              Pre-order Now
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition">
              Watch Demo
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Video className="h-8 w-8 text-indigo-600 mb-2" />
              <h3 className="font-semibold text-gray-900">4K Resolution</h3>
              <p className="text-gray-600">Crystal clear footage day & night</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-indigo-600 mb-2" />
              <h3 className="font-semibold text-gray-900">Advanced Security</h3>
              <p className="text-gray-600">24/7 vehicle monitoring</p>
            </div>
            <div className="flex flex-col items-center">
              <Smartphone className="h-8 w-8 text-indigo-600 mb-2" />
              <h3 className="font-semibold text-gray-900">Mobile Access</h3>
              <p className="text-gray-600">Stream footage instantly</p>
            </div>
          </div>
        </div>
        <div className="mt-16 relative">
          <img
            src="https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=1200"
            alt="Dashly Owl 360 in action"
            className="rounded-xl shadow-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
}