import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-600">The Installers Guild</h1>
      <p className="text-gray-700 mt-2">Connecting you with expert service providers for Electrical, Plumbing, WiFi, and Security.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full max-w-2xl">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl shadow-md">
          Electrical Installation
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl shadow-md">
          Plumbing
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-xl shadow-md">
          WiFi Setup
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-xl shadow-md">
          Security Systems
        </button>
      </div>
      
      <button className="mt-8 bg-black text-white py-3 px-6 rounded-lg shadow-lg">
        Request a Service
      </button>
    </div>
  );
}
