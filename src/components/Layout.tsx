import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
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
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-slate-900/90 border-t border-slate-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="w-6 h-6 text-cyan-400" />
                <span className="text-lg font-bold text-white">Flying Chess AI</span>
              </div>
              <p className="text-slate-400 text-sm">
                Experience the future of Flying Chess with cutting-edge AI technology.
                Secure, fun, and educational gaming for everyone.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Flying Chess AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
