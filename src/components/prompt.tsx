import { useState } from "react";
import { Send, X } from "lucide-react";

export default function PromptPage() {
  const [prompt, setPrompt] = useState("");

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex flex-col items-center justify-center px-4">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
          Generate Your AI Website
        </h1>
        <p className="text-lg text-white/80 mb-12 animate-fade-in-up delay-100">
          Enter a prompt below and watch CodePup AI imagine your dream website. 
        </p>

        {/* Prompt input */}
        <div className="relative w-full flex">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt here..."
            className="w-full px-6 py-4 pr-16 rounded-3xl border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-md hover:shadow-lg transition-all duration-300"
          />
          {prompt && (
            <button
              onClick={() => setPrompt("")}
              className="absolute right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={() => alert("Prompt sent! (not really)")}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            Send <Send className="w-5 h-5" />
          </button>
        </div>

        {/* Decorative message */}
        <p className="mt-6 text-white/50 italic animate-fade-in-up delay-200">
          Example: "Create a sleek landing page for a tech startup"
        </p>
      </div>
    </section>
  );
}
