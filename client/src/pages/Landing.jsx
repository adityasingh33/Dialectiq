import React from 'react'

const Landing = () => {
  return (
    <div>
      {/* <h1>LANDING PAGE</h1> */}
      <div className="bg-[url('/bgm.png')] bg-cover bg-center h-screen">
          <h1 className="font-press text-3xl absolute top-20">Challenge Ideas. Sharpen Minds. </h1>
          
          <h1 className="font-press text-3xl absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Speak Freely. Think Deeply. Debate Smartly 
          </h1>

          <h1 className='font-press text-3xl absolute top-90 left-200 transform -translate-x-1/8 -translate-y-1/8'>Join The Conversation.</h1>
      </div>
    </div>
  )
}

export default Landing
