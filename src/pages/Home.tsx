import { motion } from 'framer-motion';
import { Download, Brain, Users, Zap, Shield, Feather, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'Smart AI Engine',
      description: 'Advanced AI that adapts to your playing style and provides challenging gameplay at any skill level.'
    },
    {
      icon: Users,
      title: 'Multiplayer Mode',
      description: 'Play with friends locally or online. Cross-platform support for seamless gaming experience.'
    },
    {
      icon: Zap,
      title: 'Smooth Gameplay',
      description: 'Optimized performance with stunning graphics and fluid animations across all devices.'
    },
    {
      icon: Shield,
      title: 'Secure Downloads',
      description: 'HTTPS-secured downloads with no malware, no trackers, and complete privacy protection.'
    },
    {
      icon: Feather,
      title: 'Lightweight',
      description: 'Minimal system requirements. Fast installation and efficient resource usage.'
    },
    {
      icon: MessageCircle,
      title: 'Community Support',
      description: 'Active community, regular updates, and dedicated support team ready to help.'
    }
  ];

  const downloads = [
    { platform: 'Windows', link: '#windows' },
    { platform: 'macOS', link: '#macos' },
    { platform: 'Android', link: '#android' },
    { platform: 'iOS', link: '#ios' },
    { platform: 'Linux', link: '#linux' },
    { platform: 'Web', link: '#web' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Casual Gamer',
      text: 'The AI is incredibly smart! Every game feels fresh and challenging. Best Flying Chess experience ever.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Strategy Enthusiast',
      text: 'Beautiful interface, smooth gameplay, and the multiplayer mode is flawless. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Parent',
      text: 'Safe, educational, and fun for the whole family. My kids love it and I appreciate the privacy focus.',
      rating: 5
    }
  ];

  return (
    <>
      <SEO />

{/* HERO SECTION */}
<section className="relative flex flex-col items-center justify-start pt-28 pb-16 px-4 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />

  <div className="max-w-4xl mx-auto text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
        Download Flying Chess AI
      </h1>

      <p className="text-lg sm:text-xl text-slate-300 mb-10">
        Choose your platform to start playing instantly.
      </p>

      {/* STACKED DOWNLOAD BUTTONS */}
      <div className="flex flex-col items-center gap-4">
        {[
          { platform: "Download Flying Chess", link: "#" },
          { platform: "Download 3 Patti Teen", link: "#" },
          { platform: "Download 3 Patti Gold", link: "#" },
          { platform: "Download 3 Patti No 1", link: "#" },
          { platform: "Download 3 Patti Lucky", link: "#" },
          { platform: "Download 3 Patti Room", link: "#" },
        ].map((item, index) => (
          <motion.a
            key={item.platform}
            href={item.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex items-center justify-center w-72 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500 transition-all"
          >
            <Download className="inline-block w-5 h-5 mr-2 group-hover:text-cyan-400 transition-colors" />
            <span className="text-white font-medium">{item.platform}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  </div>
</section>



      {/* FEATURES SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose Flying Chess AI?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cutting-edge features designed for the ultimate gaming experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-500/10 rounded-xl mb-6 group-hover:bg-cyan-500/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What Players Are Saying
            </h2>
            <p className="text-xl text-slate-400">
              Join thousands of satisfied players worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AD SECTION */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-4">
            <p className="text-slate-400 text-center text-sm">
              Advertisement Space - AdSense Integration
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
