import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@flyingchessai.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Flying Chess AI. We're here to help with any questions, feedback, or support needs."
      />

<<<<<<< HEAD
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
=======
<<<<<<< HEAD
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
=======
      <section className="py-20 px-4">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
<<<<<<< HEAD
=======
=======
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
              Have questions, feedback, or need support? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <Mail className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">
<<<<<<< HEAD
=======
=======
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              <Mail className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Email Us</h3>
              <p className="text-slate-400 mb-4">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
                For general inquiries and support
              </p>
              <a
                href="mailto:contact@flyingchessai.com"
<<<<<<< HEAD
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
=======
<<<<<<< HEAD
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
=======
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
              >
                contact@flyingchessai.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-gray-600 mb-4">
                We typically respond within 24-48 hours
              </p>
              <p className="text-gray-500 text-sm">
<<<<<<< HEAD
=======
=======
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              <MessageSquare className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Quick Response</h3>
              <p className="text-slate-400 mb-4">
                We typically respond within 24-48 hours
              </p>
              <p className="text-slate-500 text-sm">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
                Monday - Friday: 9 AM - 6 PM EST
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 sm:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-700">
<<<<<<< HEAD
=======
=======
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-cyan-500/10 border border-cyan-500/50 rounded-lg">
                <p className="text-cyan-400">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
                  Your email client should open shortly. Thank you for contacting us!
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
<<<<<<< HEAD
                <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
=======
<<<<<<< HEAD
                <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
=======
                <label htmlFor="name" className="block text-white font-medium mb-2">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
<<<<<<< HEAD
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
=======
<<<<<<< HEAD
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
=======
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
                  placeholder="John Doe"
                />
              </div>

              <div>
<<<<<<< HEAD
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
=======
<<<<<<< HEAD
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
=======
                <label htmlFor="email" className="block text-white font-medium mb-2">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
<<<<<<< HEAD
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
=======
<<<<<<< HEAD
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
=======
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
                  placeholder="john@example.com"
                />
              </div>

              <div>
<<<<<<< HEAD
                <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
=======
<<<<<<< HEAD
                <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
=======
                <label htmlFor="message" className="block text-white font-medium mb-2">
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
<<<<<<< HEAD
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
=======
<<<<<<< HEAD
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
=======
                className="w-full sm:w-auto px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>

<<<<<<< HEAD
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                <strong className="text-gray-900">Privacy Notice:</strong> We respect your privacy.
=======
<<<<<<< HEAD
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                <strong className="text-gray-900">Privacy Notice:</strong> We respect your privacy.
=======
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                <strong className="text-white">Privacy Notice:</strong> We respect your privacy.
>>>>>>> 347525115ef20ad50f759c5ab2adadfaf93ee0be
>>>>>>> 664a809628480733e7cfa0e359849c4a7c5472a5
                Your information will only be used to respond to your inquiry and will never be
                sold or shared with third parties. No spam, ever.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
