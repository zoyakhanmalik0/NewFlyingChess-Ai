import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Flying Chess AI</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Flying Chess AI</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-200 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-slate-200 hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-slate-200 hover:text-cyan-400 transition-colors">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {children}
      </main>

<<<<<<< HEAD
      <footer className="bg-gray-900 border-t border-gray-800 mt-20">
=======
<<<<<<< HEAD
      <footer className="bg-gray-900 border-t border-gray-800 mt-20">
=======
<<<<<<< HEAD
      <footer className="bg-gray-900 border-t border-gray-800 mt-20">
=======
      <footer className="bg-slate-900/90 border-t border-slate-700 mt-20">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
                <Plane className="w-6 h-6 text-blue-500" />
                <span className="text-lg font-bold text-white">Flying Chess AI</span>
              </div>
              <p className="text-gray-400 text-sm">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
                <Plane className="w-6 h-6 text-cyan-400" />
                <span className="text-lg font-bold text-white">Flying Chess AI</span>
              </div>
              <p className="text-slate-400 text-sm">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
                Experience the future of Flying Chess with cutting-edge AI technology.
                Secure, fun, and educational gaming for everyone.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
<<<<<<< HEAD
                  <Link to="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
<<<<<<< HEAD
                  <Link to="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
<<<<<<< HEAD
                  <Link to="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
                  <Link to="/" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
                    Home
                  </Link>
                </li>
                <li>
<<<<<<< HEAD
                  <Link to="/about" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
<<<<<<< HEAD
                  <Link to="/about" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
<<<<<<< HEAD
                  <Link to="/about" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
                  <Link to="/about" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
                    About Us
                  </Link>
                </li>
                <li>
<<<<<<< HEAD
                  <Link to="/contact" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
<<<<<<< HEAD
                  <Link to="/contact" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
<<<<<<< HEAD
                  <Link to="/contact" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
                  <Link to="/contact" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
<<<<<<< HEAD
                  <Link to="/privacy" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
<<<<<<< HEAD
                  <Link to="/privacy" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
<<<<<<< HEAD
                  <Link to="/privacy" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
                  <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
                    Privacy Policy
                  </Link>
                </li>
                <li>
<<<<<<< HEAD
                  <Link to="/terms" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
<<<<<<< HEAD
                  <Link to="/terms" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
<<<<<<< HEAD
                  <Link to="/terms" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
=======
                  <Link to="/terms" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

<<<<<<< HEAD
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
=======
<<<<<<< HEAD
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
=======
<<<<<<< HEAD
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
=======
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
              © {new Date().getFullYear()} Flying Chess AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
