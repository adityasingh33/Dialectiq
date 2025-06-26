// import React from 'react'
// import { useNavigate } from 'react-router-dom'


// const Landing = () => {
//   const navi = useNavigate();

//   return (
//     <div>

//       <div className="bg-[url('/bgm.png')] bg-cover bg-center h-screen  flex-col items-center justify-center px-4">
//           <h1 className="font-press text-2xl sm:text-3xl md:text-4xl  absolute top-20">Challenge Ideas. Sharpen Minds. </h1>
          
//           <h1 className="font-press text-3xl sm:text-2xl md:text-3xl absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 Speak Freely. Think Deeply. Debate Smartly 
//           </h1>

//           <h1 className='font-press text-3xl sm:text-xl md:text-3xl absolute top-90 left-200 transform -translate-x-1/8 -translate-y-1/8'>Join The Conversation.</h1>

//           <div className="p-6 max-w-md mx-auto  shadow-md border border-gray-300 absolute bottom-20 left-2/3 flex flex-col items-center">
              

//                     <button 
//                     onClick={() => navi('/register')}
//                     className="m-3 p-3 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition flex  w-full sm:w-auto">
                         
//                          Sign Up
//                     </button>

//                     <button 
//                     onClick={() => navi('/login')}
//                     className="m-3 p-3 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition sm:w-auto">
//                           Login
//                     </button>


//                     <div className="text-white text-2xl font-semibold">
//                         Get Started →
//                     </div>


//           </div>

//       </div>
//     </div>
//   )
// }

// export default Landing


import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  // const navi = (path) => {
  //   console.log(`Navigating to: ${path}`);
  //   // In your actual app, replace this with your navigation logic
  // };

  const navi = useNavigate();

  return (
    <div>
      <div className="bg-[url('/bgm.png')] bg-cover bg-center h-screen flex-col items-center justify-center px-4 relative overflow-hidden">
        
        {/* Main heading with fade-in animation */}
        <h1 className="font-press text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                       absolute top-16 sm:top-20 left-4 right-4 text-center
                       animate-pulse opacity-0 animate-fade-in">
          Challenge Ideas. Sharpen Minds.
        </h1>
        
        {/* Secondary heading with slide-in animation */}
        <h1 className="font-press text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 
                       absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       text-center px-4 max-w-4xl
                       opacity-0 animate-slide-in-delayed">
          Speak Freely. Think Deeply. Debate Smartly
        </h1>
        
        {/* Third heading with bounce animation */}
        <h1 className="font-press text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 
                       absolute bottom-1/3 left-1/2 transform -translate-x-1/2
                       text-center px-4
                       opacity-0 animate-bounce-in">
          Join The Conversation.
        </h1>
        
        {/* Button container with scale animation */}
        <div className="p-4 sm:p-6 max-w-xs sm:max-w-md mx-auto shadow-lg border border-gray-300 
                        absolute bottom-16 sm:bottom-20 left-1/2 sm:left-2/3 
                        transform -translate-x-1/2 sm:translate-x-0
                        flex flex-col items-center
                        opacity-0 animate-scale-in-late
                        bg-white/10 backdrop-blur-sm rounded-lg
                        hover:shadow-2xl transition-all duration-300 hover:scale-105">
          
          <button
            onClick={() => navi('/register')}
            className="m-2 sm:m-3 p-3 bg-purple-600 text-white px-6 py-2 rounded-lg 
                       hover:bg-purple-700 transition-all duration-300 
                       flex w-full sm:w-auto justify-center
                       hover:shadow-lg hover:scale-105 transform
                       active:scale-95">
            Sign Up
          </button>
          
          <button
            onClick={() => navi('/login')}
            className="m-2 sm:m-3 p-3 bg-pink-500 text-white px-6 py-2 rounded-lg 
                       hover:bg-pink-600 transition-all duration-300 
                       w-full sm:w-auto
                       hover:shadow-lg hover:scale-105 transform
                       active:scale-95">
            Login
          </button>
          
          <div className="text-white text-lg sm:text-xl md:text-2xl font-semibold mt-2
                          animate-pulse hover:animate-bounce cursor-pointer">
            Get Started →
          </div>
        </div>
      </div>
      
      <style >{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) translateX(0);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(0.8);
          }
          50% {
            transform: translateX(-50%) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }
        
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-in-delayed {
          animation: slide-in 1.2s ease-out 0.5s forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out 1s forwards;
        }
        
        .animate-scale-in-late {
          animation: scale-in 0.8s ease-out 1.5s forwards;
        }
      `}</style>
    </div>
  )
}

export default Landing
