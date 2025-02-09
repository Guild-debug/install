import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service Request Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-600">The Installers Guild</h1>
      <p className="text-gray-700 mt-2">Connecting you with expert service providers for Electrical, Plumbing, WiFi, and Security.</p>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mt-6 w-full max-w-md">
        <label className="block mb-2">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md" required />
        
        <label className="block mt-4 mb-2">Service Type:</label>
        <select name="service" value={formData.service} onChange={handleChange} className="w-full p-2 border rounded-md" required>
          <option value="">Select a service</option>
          <option value="Electrical Installation">Electrical Installation</option>
          <option value="Plumbing">Plumbing</option>
          <option value="WiFi Setup">WiFi Setup</option>
          <option value="Security Systems">Security Systems</option>
        </select>
        
        <label className="block mt-4 mb-2">Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded-md" required />
        
        <label className="block mt-4 mb-2">Preferred Date & Time:</label>
        <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded-md" required />
        
        <button type="submit" className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg w-full">
          Submit Request
        </button>
      </form>
    </div>
  );
}
