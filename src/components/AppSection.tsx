import React from 'react';
import { Phone, Bell, Download, Share2 } from 'lucide-react';

export function AppSection() {
  return (
    <section id="app" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Control Everything from Your Phone
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Access live footage, download recordings, and receive instant alerts with our
              intuitive mobile app.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Bell className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Instant Alerts</h3>
                  <p className="text-gray-600">Get notified immediately when activity is detected</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Download className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Easy Downloads</h3>
                  <p className="text-gray-600">Save and share footage with a single tap</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Share2 className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Quick Sharing</h3>
                  <p className="text-gray-600">Share important moments instantly</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <img
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200"
                alt="App Store"
                className="h-12 cursor-pointer hover:opacity-80 transition"
              />
              <img
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200"
                alt="Play Store"
                className="h-12 cursor-pointer hover:opacity-80 transition"
              />
            </div>
          </div>
          <div className="relative">
            <Phone className="absolute -top-4 -left-4 h-12 w-12 text-indigo-600" />
            <img
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=600"
              alt="Dashly Owl 360 App Interface"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}