import { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/hero-video.mp4";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function Hero() {
  const fullText = ["Build Stunning Websites", "in Minutes with AI"];
  const [displayText, setDisplayText] = useState<string[]>(["", ""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  // Typing effect
  useEffect(() => {
    if (currentLine >= fullText.length) return;

    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        const newDisplay = [...prev];
        newDisplay[currentLine] += fullText[currentLine][charIndex];
        return newDisplay;
      });
      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === fullText[currentLine].length) {
        setCurrentLine((prev) => prev + 1);
        setCharIndex(0);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentLine]);

  // Particle effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particleCount = 60;
    const mouse = { x: 0, y: 0 };
    let particles: Particle[] = [];

    const initializeParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      initializeParticles(); // re-initialize on resize
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.vx += dx * 0.001;
          p.vy += dy * 0.001;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black py-20 md:py-32 mt-20">
      {/* Canvas for moving dots */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Website Builder</span>
          </div>

          {/* Typing Animation Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span>{displayText[0]}</span>
            <span className="block bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
              {displayText[1]}
              <span className="inline-block w-1 h-6 bg-white animate-blink ml-1 align-bottom"></span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto animate-slide-up-delay">
            CodePup AI transforms your ideas into beautiful, responsive websites automatically.
            No coding required. Just describe what you want.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <button
              onClick={() => navigate("/prompt")}
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            > Try it now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50">
              See templates
            </button>
          </div>

          {/* Code editor mockup with video */}
          <div className="mt-16 animate-float">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-2xl max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-400">codepup.ai</div>
                </div>

                {/* Video content */}
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <video
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover rounded-b-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind animation for blinking cursor */}
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </section>
  );
}
