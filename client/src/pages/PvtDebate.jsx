import React, { useState } from 'react'

const PvtDebate = () => {
  const [topic, setTopic] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [matchMake, setMatchmake] = useState(false);

  const handleSubmit = () => {
    if (topic.trim() !== '') {
      setIsSubmitted(true);
      setMatchmake(true);
    }
  };

  return (
    <div>

      <div className="min-h-screen bg-gradient-to-br from-orange-700 via-red-500 to-pink-600 relative overflow-hidden">




        {!isSubmitted ? (
          <div>
            <input
              type="text"
              placeholder="Enter your debate topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="p-2 rounded-md text-black flex items-center  relative top-74 left-110"
            />
            <button
              onClick={handleSubmit}
              className="ml-2 px-4 py-2 bg-white text-black rounded-md text-center  relative top-74 left-120"
            >
              Submit
            </button>
          </div>
        ) : matchMake ? (
        
          <>
            <h1 className='font-oswald text-center text-4xl underline mb-10'>Topic: {topic}</h1>

            <div className="flex h-[calc(100vh-200px)] w-full gap-3">
              
              <div className='w-4/5 border-2 border-gray-300 rounded-lg p-4 flex flex-col'>
                <div className="flex-1 overflow-y-auto mb-4">
                 
                  <h1>Your Messages goes here..</h1>
                </div>

                
                <div className="border-t border-gray-300 pt-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 border border-gray-400 rounded"
                  />
                </div>
              </div>

             
              <div className='w-1/5 border-2 border-gray-300 rounded-lg p-4 overflow-y-auto'>
                <h2 className="font-bold mb-4">Participants</h2>
                <div className="space-y-2">
                  <div className="p-2 bg-gray-100 rounded">user1</div>
                  <div className="p-2 bg-gray-100 rounded">user2</div>
                </div>
              </div>
            </div>
          </>
        ) : (

          <div className='relative top-74 left-110'>
            <h1>Gotta matchMake dumbfuck</h1>
            <p>Making your match....</p>
          </div>
        )}


      </div>
    </div>
  )
}

export default PvtDebate
