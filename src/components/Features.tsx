import React from 'react';
import { Eye, Moon, Wifi, Shield, BatteryFull, Camera } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "360° Coverage",
      description: "No blind spots with complete surrounding view"
    },
    {
      icon: <Moon className="h-6 w-6" />,
      title: "Night Vision",
      description: "Advanced sensors for perfect night recording"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "4K Resolution",
      description: "Ultra-clear footage with HDR support"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Instant Streaming",
      description: "View footage instantly on your phone"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Parking Guard",
      description: "24/7 monitoring while parked"
    },
    {
      icon: <BatteryFull className="h-6 w-6" />,
      title: "Long Battery Life",
      description: "Extended recording without drain"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Features for Complete Protection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Packed with cutting-edge technology to keep your vehicle safe and secure
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}