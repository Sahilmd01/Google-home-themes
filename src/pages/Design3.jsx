import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  FaSearch, FaMicrophone, FaCamera, FaTh, FaTimes, FaYoutube,
  FaMapMarkerAlt, FaCloud, FaEnvelope, FaImage, FaLanguage, FaNewspaper,
  FaGithub, FaSpotify, FaAmazon, FaTwitter, FaLinkedin, FaWhatsapp,
  FaTelegram, FaDiscord, FaReddit, FaSnapchat, FaTiktok, FaPinterest,
  FaInstagram, FaFacebook, FaGoogle, FaBolt, FaMagic, FaRocket
} from 'react-icons/fa';

const GoogleClone = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showMoreApps, setShowMoreApps] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const apps = [
    { name: 'Search', icon: FaSearch, color: 'text-blue-500', link: 'https://google.com', bg: 'from-blue-400 to-blue-600', glow: 'blue' },
    { name: 'YouTube', icon: FaYoutube, color: 'text-red-600', link: 'https://youtube.com', bg: 'from-red-500 to-red-700', glow: 'red' },
    { name: 'Maps', icon: FaMapMarkerAlt, color: 'text-green-600', link: 'https://maps.google.com', bg: 'from-green-400 to-green-600', glow: 'green' },
    { name: 'Drive', icon: FaCloud, color: 'text-yellow-600', link: 'https://drive.google.com', bg: 'from-yellow-400 to-yellow-600', glow: 'yellow' },
    { name: 'Gmail', icon: FaEnvelope, color: 'text-red-500', link: 'https://mail.google.com', bg: 'from-red-400 to-red-600', glow: 'red' },
    { name: 'Photos', icon: FaImage, color: 'text-blue-400', link: 'https://photos.google.com', bg: 'from-blue-300 to-blue-500', glow: 'blue' },
    { name: 'Translate', icon: FaLanguage, color: 'text-blue-600', link: 'https://translate.google.com', bg: 'from-blue-500 to-blue-700', glow: 'blue' },
    { name: 'News', icon: FaNewspaper, color: 'text-green-500', link: 'https://news.google.com', bg: 'from-green-300 to-green-500', glow: 'green' },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-800', link: 'https://github.com', bg: 'from-gray-600 to-gray-800', glow: 'gray' },
    { name: 'Spotify', icon: FaSpotify, color: 'text-green-500', link: 'https://spotify.com', bg: 'from-green-400 to-green-600', glow: 'green' },
    { name: 'Amazon', icon: FaAmazon, color: 'text-orange-500', link: 'https://amazon.com', bg: 'from-orange-400 to-orange-600', glow: 'orange' },
    { name: 'Twitter', icon: FaTwitter, color: 'text-blue-400', link: 'https://twitter.com', bg: 'from-blue-300 to-blue-500', glow: 'blue' },
    { name: 'LinkedIn', icon: FaLinkedin, color: 'text-blue-700', link: 'https://linkedin.com', bg: 'from-blue-600 to-blue-800', glow: 'blue' },
    { name: 'WhatsApp', icon: FaWhatsapp, color: 'text-green-500', link: 'https://web.whatsapp.com', bg: 'from-green-400 to-green-600', glow: 'green' },
    { name: 'Telegram', icon: FaTelegram, color: 'text-blue-400', link: 'https://web.telegram.org', bg: 'from-blue-300 to-blue-500', glow: 'blue' },
    { name: 'Discord', icon: FaDiscord, color: 'text-purple-500', link: 'https://discord.com', bg: 'from-purple-400 to-purple-600', glow: 'purple' },
    { name: 'Reddit', icon: FaReddit, color: 'text-orange-500', link: 'https://reddit.com', bg: 'from-orange-400 to-orange-600', glow: 'orange' },
    { name: 'Snapchat', icon: FaSnapchat, color: 'text-yellow-400', link: 'https://snapchat.com', bg: 'from-yellow-300 to-yellow-500', glow: 'yellow' },
    { name: 'TikTok', icon: FaTiktok, color: 'text-gray-800', link: 'https://tiktok.com', bg: 'from-gray-700 to-gray-900', glow: 'gray' },
    { name: 'Pinterest', icon: FaPinterest, color: 'text-red-600', link: 'https://pinterest.com', bg: 'from-red-500 to-red-700', glow: 'red' },
    { name: 'Instagram', icon: FaInstagram, color: 'text-pink-500', link: 'https://instagram.com', bg: 'from-pink-400 to-pink-600', glow: 'pink' },
    { name: 'Facebook', icon: FaFacebook, color: 'text-blue-600', link: 'https://facebook.com', bg: 'from-blue-500 to-blue-700', glow: 'blue' },
  ];

  const quickIcons = apps.slice(0, 8);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  const FloatingParticle = ({ delay = 0 }) => {
    const x = useMotionValue(Math.random() * 100);
    const y = useMotionValue(Math.random() * 100);
    
    useEffect(() => {
      const animate = () => {
        x.set(Math.random() * 100);
        y.set(Math.random() * 100);
      };
      const interval = setInterval(animate, 3000 + delay);
      return () => clearInterval(interval);
    }, [x, y, delay]);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 3, delay, repeat: Infinity }}
        className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
        style={{ x: x, y: y }}
      />
    );
  };

  const InteractiveBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useSpring(useTransform(mouseY, [0, window.innerHeight], [10, -10]));
    const rotateY = useSpring(useTransform(mouseX, [0, window.innerWidth], [-10, 10]));

    useEffect(() => {
      const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
      <motion.div
        className="fixed inset-0 -z-10"
        style={{ rotateX, rotateY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 150} />
        ))}
      </motion.div>
    );
  };

  const HolographicIcon = ({ app, size = 'clamp(3rem, 12vw, 4rem)', isPopup = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.a
        href={app.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ 
          scale: 1.2, 
          y: -8,
          rotateY: 15
        }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => {
          setActiveIcon(app.name);
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setActiveIcon(null);
          setIsHovered(false);
        }}
        className={`relative rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-xl transition-all duration-700 group overflow-hidden ${
          isPopup ? 'bg-slate-800/30' : 'bg-slate-800/40'
        }`}
        style={{ 
          width: size, 
          height: size,
          background: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
        }}
      >
        {/* Animated Border */}
        <motion.div
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-sm"
        />
        
        {/* Main Content */}
        <div className="absolute inset-[2px] rounded-2xl bg-slate-900/80 backdrop-blur-xl flex items-center justify-center">
          <motion.div
            animate={{
              scale: isHovered ? 1.3 : 1,
              filter: isHovered ? 'drop-shadow(0 0 20px currentColor)' : 'drop-shadow(0 0 5px rgba(255,255,255,0.1))'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <app.icon className={`text-2xl ${app.color} transition-all duration-500`} />
          </motion.div>
        </div>

        {/* Holographic Effect */}
        <motion.div
          animate={isHovered ? { x: ['0%', '200%'] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform"
        />
      </motion.a>
    );
  };

  const CyberText = ({ children, className = "" }) => (
    <motion.span
      className={`font-mono font-black ${className}`}
      style={{
        textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
      }}
      animate={{ 
        textShadow: [
          '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          '0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor',
          '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {children}
    </motion.span>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <InteractiveBackground />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Header */}
      <header className="relative z-10 flex justify-end items-center p-6 space-x-4">
        {['Gmail', 'Images'].map((item) => (
          <motion.a 
            key={item}
            href={`https://${item.toLowerCase()}.google.com`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg bg-slate-800/40 backdrop-blur-xl border border-white/10 text-sm text-white/80 hover:text-white hover:border-blue-500/50 transition-all duration-300 font-medium"
          >
            {item}
          </motion.a>
        ))}
        <motion.button 
          onClick={() => setShowMoreApps(!showMoreApps)}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-800/40 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
        >
          <FaTh className="text-white/80 text-lg" />
        </motion.button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4">
        {/* Cyberpunk Google Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="mb-16 w-full max-w-2xl"
        >
          <div className="relative">
            {/* Outer Glow */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 40px rgba(59, 130, 246, 0.3)',
                  '0 0 80px rgba(59, 130, 246, 0.5)',
                  '0 0 40px rgba(59, 130, 246, 0.3)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl blur-xl"
            />
            
            <motion.div
              whileHover={{ 
                scale: 1.02,
                y: -5,
              }}
              className="relative bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden"
            >
              {/* Animated Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
              
              {/* Google Letters with Cyberpunk Style */}
              <div className="relative z-10 flex items-center justify-center gap-4 flex-nowrap">
                {[
                  { letter: 'G', color: 'text-blue-400' },
                  { letter: 'o', color: 'text-red-400' },
                  { letter: 'o', color: 'text-yellow-400' },
                  { letter: 'g', color: 'text-blue-400' },
                  { letter: 'l', color: 'text-green-400' },
                  { letter: 'e', color: 'text-red-400' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.3, 
                      y: -10,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="relative"
                  >
                    <CyberText className={`text-5xl md:text-7xl ${item.color}`}>
                      {item.letter}
                    </CyberText>
                    
                    {/* Floating particles around letters */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.6 + index * 0.2
                        }}
                        className={`absolute w-1 h-1 rounded-full ${item.color.replace('text-', 'bg-')} blur-sm`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Futuristic Search Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-2xl mb-16"
        >
          <form onSubmit={handleSearch}>
            <div className="relative">
              <motion.div 
                className={`flex items-center rounded-2xl px-6 py-5 transition-all duration-500 backdrop-blur-xl bg-slate-800/40 border-2 ${
                  isFocused ? 'border-blue-500/50 bg-slate-800/60' : 'border-white/10 hover:border-white/20'
                }`}
                whileHover={{ y: -2 }}
              >
                <motion.div 
                  className="mr-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaSearch className="text-white/60 text-lg" />
                </motion.div>
                
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Search Google or type a URL"
                  className="w-full focus:outline-none text-xl bg-transparent placeholder-white/40 text-white font-light"
                />
                
                <div className="flex items-center space-x-3 ml-4">
                  <motion.button 
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-700/40 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <FaMicrophone className="text-white/60 group-hover:text-blue-400 text-lg transition-colors duration-300" />
                  </motion.button>
                  <motion.button 
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-700/40 border border-white/10 hover:border-green-500/50 transition-all duration-300 group"
                  >
                    <FaCamera className="text-white/60 group-hover:text-green-400 text-lg transition-colors duration-300" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Search Box Glow */}
              <motion.div
                animate={isFocused ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl -z-10"
              />
            </div>
          </form>
        </motion.div>

        {/* Holographic Icons Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-4 md:grid-cols-8 gap-8 w-full max-w-4xl"
        >
          {quickIcons.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
              className="flex flex-col items-center space-y-4 cursor-pointer"
            >
              <HolographicIcon app={app} />
              <motion.span 
                whileHover={{ y: -2 }}
                className="text-sm font-semibold text-white/70 px-3 py-2 rounded-lg bg-slate-800/40 backdrop-blur-xl border border-white/10 text-center min-w-[80px] hover:text-white hover:border-blue-500/30 transition-all duration-300"
              >
                {app.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Cyberpunk Apps Popup */}
      <AnimatePresence>
        {showMoreApps && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 backdrop-blur-sm"
              onClick={() => setShowMoreApps(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="fixed z-50 overflow-hidden rounded-3xl backdrop-blur-xl bg-slate-800/60 border border-white/10"
              style={{
                top: '80px',
                right: '20px',
                width: '400px',
                maxHeight: '500px',
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)'
              }}
            >
              {/* Popup Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex justify-between items-center">
                  <CyberText className="text-lg text-blue-400">GOOGLE APPS</CyberText>
                  <motion.button 
                    onClick={() => setShowMoreApps(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-700/40 border border-white/10 hover:border-red-500/50 transition-all duration-300"
                  >
                    <FaTimes className="text-white/60 text-sm" />
                  </motion.button>
                </div>
              </div>

              {/* Apps Grid */}
              <div className="grid grid-cols-4 gap-4 p-6 overflow-y-auto custom-scrollbar" style={{ maxHeight: '350px' }}>
                {apps.map((app, index) => (
                  <motion.div
                    key={app.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center space-y-3 cursor-pointer p-2"
                  >
                    <HolographicIcon app={app} size="3.5rem" isPopup={true} />
                    <span className="text-xs font-semibold text-white/70 text-center leading-tight hover:text-white transition-colors duration-300">
                      {app.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <motion.div 
        className="fixed bottom-8 right-8 flex flex-col space-y-4 z-30"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300"
        >
          <FaRocket className="text-blue-400" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-xl bg-purple-500/20 backdrop-blur-xl border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300"
        >
          <FaMagic className="text-purple-400" />
        </motion.button>
      </motion.div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default GoogleClone;