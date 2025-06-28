import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navi = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-white">
        
        {/* Main heading */}
        <div className="text-center mb-8 opacity-0 animate-fade-in-up">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Challenge Ideas
          </h1>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sharpen Minds
          </h2>
        </div>
        
        {/* Secondary heading */}
        <div className="text-center mb-12 opacity-0 animate-slide-in-delayed max-w-4xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-200 leading-relaxed">
            Speak Freely. Think Deeply. Debate Smartly
          </h3>
        </div>
        
        {/* Call to action */}
        <div className="text-center mb-16 opacity-0 animate-bounce-in">
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-300">
            Join The Conversation.
          </h4>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center opacity-0 animate-scale-in-late">
          <button
            onClick={() => navi('/register')}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transform active:scale-95 overflow-hidden min-w-[160px]"
          >
            <span className="relative z-10">Sign Up</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => navi('/login')}
            className="group relative px-8 py-4 border-2 border-purple-400 rounded-full text-purple-300 font-semibold text-lg transition-all duration-300 hover:scale-110 hover:bg-purple-400 hover:text-white hover:shadow-2xl hover:shadow-purple-400/50 transform active:scale-95 min-w-[160px]"
          >
            <span className="relative z-10">Login</span>
          </button>
        </div>
        
        {/* Get started indicator */}
        <div className="mt-12 opacity-0 animate-fade-in-late">
          <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer group">
            <span className="text-lg font-medium">Get Started</span>
            <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-slide-in-delayed {
          animation: slide-in 1s ease-out 0.5s forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out 1s forwards;
        }
        
        .animate-scale-in-late {
          animation: scale-in 0.8s ease-out 1.3s forwards;
        }
        
        .animate-fade-in-late {
          animation: fade-in-up 0.8s ease-out 1.8s forwards;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Landing