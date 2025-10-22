export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-600/15 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-blue-500/25 rounded-full blur-lg animate-float-slow"></div>
      <div className="absolute bottom-20 right-1/4 w-36 h-36 bg-blue-600/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute top-1/2 left-10 w-28 h-28 bg-blue-400/15 rounded-full blur-xl animate-float-delayed"></div>

      <div className="absolute top-60 right-40 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-700/30 rounded-full animate-spin-slow shadow-lg shadow-blue-500/20"></div>
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-br from-blue-400/40 to-blue-600/40 rounded-full animate-pulse-slow"></div>
    </div>
  );
}
