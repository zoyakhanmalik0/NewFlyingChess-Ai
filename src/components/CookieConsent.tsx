import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('cookieConsent', 'dismissed');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t-2 border-gray-200 shadow-lg z-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-gray-700 text-sm">
            We use cookies to enhance your browsing experience and analyze site traffic.
            By clicking "Accept", you consent to our use of cookies.
            Read our{' '}
            <a href="/privacy" className="text-blue-600 hover:underline font-medium">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-700 z-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-slate-200 text-sm">
            We use cookies to enhance your browsing experience and analyze site traffic.
            By clicking "Accept", you consent to our use of cookies.
            Read our{' '}
            <a href="/privacy" className="text-cyan-400 hover:underline">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
              Privacy Policy
            </a>{' '}
            for more information.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDismiss}
<<<<<<< HEAD
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
=======
<<<<<<< HEAD
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
=======
<<<<<<< HEAD
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
=======
            className="px-4 py-2 text-slate-300 hover:text-white transition-colors flex items-center gap-2"
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
          >
            <X className="w-4 h-4" />
            Dismiss
          </button>
          <button
            onClick={handleAccept}
<<<<<<< HEAD
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
=======
<<<<<<< HEAD
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
=======
<<<<<<< HEAD
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
=======
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium"
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
>>>>>>> b5007b06da44a0a711da5b3998b04d422ac95fb9
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
