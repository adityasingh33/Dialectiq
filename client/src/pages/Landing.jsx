import React from 'react'
import { useNavigate } from 'react-router-dom'


const Landing = () => {
  const navi = useNavigate();

  return (
    <div>

      <div className="bg-[url('/bgm.png')] bg-cover bg-center h-screen  flex-col items-center justify-center px-4">
          <h1 className="font-press text-2xl sm:text-3xl md:text-4xl  absolute top-20">Challenge Ideas. Sharpen Minds. </h1>
          
          <h1 className="font-press text-3xl sm:text-2xl md:text-3xl absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Speak Freely. Think Deeply. Debate Smartly 
          </h1>

          <h1 className='font-press text-3xl sm:text-xl md:text-3xl absolute top-90 left-200 transform -translate-x-1/8 -translate-y-1/8'>Join The Conversation.</h1>

          <div className="p-6 max-w-md mx-auto  shadow-md border border-gray-300 absolute bottom-20 left-2/3 flex flex-col items-center">
              

                    <button 
                    onClick={() => navi('/register')}
                    className="m-3 p-3 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition flex  w-full sm:w-auto">
                         
                         Sign Up
                    </button>

                    <button 
                    onClick={() => navi('/login')}
                    className="m-3 p-3 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition sm:w-auto">
                          Login
                    </button>


                    <div className="text-white text-2xl font-semibold">
                        Get Started →
                    </div>


          </div>

      </div>
    </div>
  )
}

export default Landing
