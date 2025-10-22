import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-gray-400">
            <span>© 2025 CodePup AI — Built with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>and AI</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#terms"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
