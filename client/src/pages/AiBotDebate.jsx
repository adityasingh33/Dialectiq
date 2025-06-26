import React, { useState } from 'react';

const AiBotDebate = () => {
  const [topic, setTopic] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [matchMake, setMatchmake] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (topic.trim() !== '') {
      setIsSubmitted(true);
      setMatchmake(true);
    }
  };

  const handleSend = async () => {
    if (userInput.trim() === '') return;

    const updatedMessages = [...messages, { sender: 'User', text: userInput }];
    setMessages(updatedMessages);
    setUserInput('');
    setLoading(true);

    const prompt = updatedMessages.map(m => `${m.sender}: ${m.text}`).join('\n') + '\nAI:';

    try {
      const res = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: prompt })
      });

      const data = await res.json();

      if (!Array.isArray(data) || !data[0]?.generated_text) {
        setMessages(prev => [...prev, { sender: 'AI', text: "⚠️ AI model is currently unavailable. Try again later." }]);
      } else {
        // Extract the part after the last "AI:"
        const lastAiReply = data[0].generated_text.split('AI:').pop().trim();
        setMessages(prev => [...prev, { sender: 'AI', text: lastAiReply || "🤖 ...thinking" }]);
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { sender: 'AI', text: "❌ Network error or model busy." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-700 via-red-500 to-pink-600 p-6">
      {!isSubmitted ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-white mb-6">Enter Your Debate Topic</h1>
          <input
            type="text"
            placeholder="e.g. Is AI dangerous?"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="p-3 w-80 rounded-md text-black mb-4"
          />
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200"
          >
            Submit
          </button>
        </div>
      ) : matchMake ? (
        <>
          <h1 className="text-center text-4xl underline mb-10 text-white font-bold">Topic: {topic}</h1>

          <div className="flex h-[calc(100vh-200px)] w-full gap-3">
            {/* Chat Area */}
            <div className="w-4/5 border-2 border-gray-300 rounded-lg p-4 flex flex-col  bg-opacity-10 backdrop-blur-md">
              <div className="flex-1 overflow-y-auto mb-4 space-y-2">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl max-w-[75%] ${
                      msg.sender === 'User'
                        ? 'bg-orange-500 text-white self-end ml-auto'
                        : 'bg-slate-800 text-white'
                    }`}
                  >
                    <p className="text-sm">
                      <strong>{msg.sender}:</strong> {msg.text}
                    </p>
                  </div>
                ))}
                {loading && (
                  <div className="p-3 rounded-xl bg-slate-800 text-white max-w-[75%]">
                    <p className="text-sm"><strong>AI:</strong> Typing...</p>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-300 pt-4 flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="w-full p-2 border border-gray-400 rounded"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-white text-black rounded-md"
                  disabled={loading}
                >
                  Send
                </button>
              </div>
            </div>

            {/* Participants */}
            <div className="w-1/5 border-2 border-gray-300 rounded-lg p-4 bg-white bg-opacity-10 backdrop-blur-md text-white">
              <h2 className="font-bold mb-4">Participants</h2>
              <div className="space-y-2">
                <div className="p-2 bg-pink-100 text-black rounded">You</div>
                <div className="p-2 bg-gray-100 text-black rounded">AI Bot</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <h1 className="text-3xl">Gotta matchMake dumbfuck</h1>
          <p className="mt-2">Making your match....</p>
        </div>
      )}
    </div>
  );
};

export default AiBotDebate;
