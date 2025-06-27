import React from 'react';
import { Search, Bell, Edit3, Plus } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-orange-400 to-purple-500 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-white text-2xl font-semibold">Welcome, Amanda....user name dalna idhar </h1>
            <p className="text-white/80 text-sm">Tue, 07 June 2022  idhar date</p>
          </div>
          <div className="flex items-center gap-4">
            {/* <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div> */}
            {/* <Bell className="h-6 w-6 text-white cursor-pointer hover:text-white/80" /> */}
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">A</span>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex gap-8">
          <div className="w-16 flex flex-col gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
              <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
            </div>
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            </div>
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
              <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
            </div>
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
              <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
            </div>
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
              <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
            </div>
          </div>

          {/* Main Profile Content */}
          <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            {/* Profile Header Section */}
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" 
                      alt="Alexa Rawles" 
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">Alexa Rawles</h2>
                    <p className="text-gray-600">alexarawles@gmail.com</p>
                  </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                  <Edit3 className="h-4 w-4" />
                  Edit
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your First Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nick Name</label>
                <input
                  type="text"
                  placeholder="Your First Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white">
                  <option>Your First Name</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white">
                  <option>Your First Name</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white">
                  
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>

            {/* Email Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">My email Address</label>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">@</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">alexarawles@gmail.com</p>
                    <p className="text-sm text-gray-500">1 month ago</p>
                  </div>
                </div>
                <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-2 transition-colors">
                  <Plus className="h-4 w-4" />
                  Add Email Address
                </button>
              </div>
            </div>

            {/* Time Zone */}
            <div className="text-right">
              <p className="text-sm text-gray-500">Time Zone: UTC+0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}