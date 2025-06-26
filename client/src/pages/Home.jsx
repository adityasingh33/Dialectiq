import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const navi = useNavigate();
  
  const rotatingTexts = [
    "Challenge Ideas. Sharpen Minds.",
    "Speak Freely. Think Deeply.",
    "Debate Smartly. Grow Together.",
    "Join The Conversation."
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-700 via-red-500 to-pink-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4">
        {/* Main Title with Rotating Text */}
        <div className="text-center mb-16">
          <h1 className={`font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-orange-200 via-pink-200 to-red-400 bg-clip-text text-transparent animate-pulse">
              Dialectiq
            </span>
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <h2 className={`font-semibold text-xl sm:text-2xl md:text-3xl text-white transition-all duration-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`} key={currentTextIndex}>
              {rotatingTexts[currentTextIndex]}
            </h2>
          </div>
        </div>

        {/* Feature Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl w-full transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { icon: "🤖", title: "Smart Debates", desc: "AI-powered discussion insights" },
            { icon: "🧐", title: "Debate Privately", desc: "Structured argument frameworks" },
            { icon: "🌐", title: "Global Community", desc: "Connect with minds worldwide" }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20 cursor-pointer"
            >
              <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: `${index * 500}ms` }}>
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

      
        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-3 gap-8 text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { number: "10K+", label: "Active Debaters" },
            { number: "50K+", label: "Debates Hosted" },
            { number: "100+", label: "Countries" }
          ].map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                {stat.number}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}

export default Home