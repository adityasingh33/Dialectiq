// import React from 'react';
// import { Search, Bell, Edit3, Plus } from 'lucide-react';
// import{useAuth} from '../context/AuthContext'

// export default function Profile() {
// //MOCK CONTEXT
//   const {user} = useAuth();

//   if (!user) {
//     return <div>No user data found. Please register first.</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-400 via-orange-400 to-purple-500 p-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-white text-2xl font-semibold">Welcome, Amanda....user name dalna idhar </h1>
//             <p className="text-white/80 text-sm">Tue, 07 June 2022  idhar date</p>
//           </div>
//           <div className="flex items-center gap-4">
//             {/* <div className="relative">
//               <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="pl-10 pr-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
//               />
//             </div> */}
//             {/* <Bell className="h-6 w-6 text-white cursor-pointer hover:text-white/80" /> */}
//             <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
//               <span className="text-white font-semibold">A</span>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar Navigation */}
//         <div className="flex gap-8">
//           <div className="w-16 flex flex-col gap-4">
//             <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
//               <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
//             </div>
//             <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
//               <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
//             </div>
//             <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
//               <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
//             </div>
//             <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
//               <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
//             </div>
//             <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
//               <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
//             </div>
//           </div>

//           {/* Main Profile Content */}
//           <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
//             {/* Profile Header Section */}
//             <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6 mb-6">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   {/* <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full overflow-hidden">
//                     <img 
//                       src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" 
//                       alt="Alexa Rawles" 
//                       className="w-full h-full object-cover"
//                     />
//                   </div> */}
//                   <div>
//                     <h2 className="text-xl font-semibold text-gray-800">Alexa Rawles  {user.name}</h2>
//                     <p className="text-gray-600">alexarawles@gmail.com {user.email}</p>
//                   </div>
//                 </div>
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
//                   <Edit3 className="h-4 w-4" />
//                   Edit
//                 </button>
//               </div>
//             </div>

//             {/* Form Fields */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Your First Name"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Nick Name</label>
//                 <input
//                   type="text"
//                   placeholder="Your First Name"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
//                 <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white">
//                   <option>Your First Name</option>
//                   <option>Male</option>
//                   <option>Female</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
//                 <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white">
//                   <option>Your First Name</option>
//                   <option>United States</option>
//                   <option>Canada</option>
//                   <option>United Kingdom</option>
//                   <option>Australia</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
//                 <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white">
                  
//                   <option>English</option>
//                   <option>Spanish</option>
//                   <option>French</option>
//                   <option>German</option>
//                 </select>
//               </div>
//             </div>

//             {/* Email Section */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">My email Address</label>
//               <div className="bg-gray-50 rounded-lg p-4">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
//                     <span className="text-white text-sm">@</span>
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-800">alexarawles@gmail.com</p>
//                     <p className="text-sm text-gray-500">1 month ago</p>
//                   </div>
//                 </div>
//                 <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-2 transition-colors">
//                   <Plus className="h-4 w-4" />
//                   Add Email Address
//                 </button>
//               </div>
//             </div>

//             {/* Time Zone */}
//             <div className="text-right">
//               <p className="text-sm text-gray-500">Time Zone: UTC+0</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Search, Bell, Edit3, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    gender: user?.gender || '',
    nickname: '',
    country: '',
    language: 'English'
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-orange-400 to-purple-500">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">No user data found</h2>
          <p className="text-gray-600 mb-4">Please register first.</p>
          <a href="/register" className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
            Go to Register
          </a>
        </div>
      </div>
    );
  }

  const handleEditChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', { 
      weekday: 'short', 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-orange-400 to-purple-500 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-white text-2xl font-semibold">Welcome, {user.name}</h1>
            <p className="text-white/80 text-sm">{getCurrentDate()}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">{user.name.charAt(0).toUpperCase()}</span>
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
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{user.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Edit3 className="h-4 w-4" />
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={isEditing ? editData.name : user.name}
                  onChange={handleEditChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nick Name</label>
                <input
                  type="text"
                  name="nickname"
                  value={editData.nickname}
                  onChange={handleEditChange}
                  disabled={!isEditing}
                  placeholder="Your nickname"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select 
                  name="gender"
                  value={isEditing ? editData.gender : user.gender || ''}
                  onChange={handleEditChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white disabled:bg-gray-50 disabled:text-gray-500"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <select 
                  name="country"
                  value={editData.country}
                  onChange={handleEditChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white disabled:bg-gray-50 disabled:text-gray-500"
                >
                  <option value="">Select Country</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select 
                  name="language"
                  value={editData.language}
                  onChange={handleEditChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white disabled:bg-gray-50 disabled:text-gray-500"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
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
                    <p className="font-medium text-gray-800">{user.email}</p>
                    <p className="text-sm text-gray-500">Registered recently</p>
                  </div>
                </div>
                <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-2 transition-colors">
                  <Plus className="h-4 w-4" />
                  Add Email Address
                </button>
              </div>
            </div>

            {/* Save Button - Only show when editing */}
            {isEditing && (
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Here you would normally update the user context
                    console.log('Updated data:', editData);
                    setIsEditing(false);
                  }}
                  className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                >
                  Save Changes
                </button>
              </div>
            )}

            {/* Time Zone */}
            <div className="text-right mt-4">
              <p className="text-sm text-gray-500">Time Zone: UTC+5:30 (IST)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}