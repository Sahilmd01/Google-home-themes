import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, FaMicrophone, FaCamera, FaTh, FaTimes, FaYoutube,
  FaMapMarkerAlt, FaCloud, FaEnvelope, FaImage, FaLanguage, FaNewspaper,
  FaGithub, FaSpotify, FaAmazon, FaTwitter, FaLinkedin, FaWhatsapp,
  FaTelegram, FaDiscord, FaReddit, FaSnapchat, FaTiktok, FaPinterest,
  FaInstagram, FaFacebook, FaGoogle
} from 'react-icons/fa';

const GoogleCloneBlack = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showMoreApps, setShowMoreApps] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

  const apps = [
    { name: 'Search', icon: FaSearch, color: 'text-blue-400', link: 'https://google.com', bg: 'from-blue-900 to-black' },
    { name: 'YouTube', icon: FaYoutube, color: 'text-red-500', link: 'https://youtube.com', bg: 'from-red-900 to-black' },
    { name: 'Maps', icon: FaMapMarkerAlt, color: 'text-green-400', link: 'https://maps.google.com', bg: 'from-green-900 to-black' },
    { name: 'Drive', icon: FaCloud, color: 'text-yellow-400', link: 'https://drive.google.com', bg: 'from-yellow-900 to-black' },
    { name: 'Gmail', icon: FaEnvelope, color: 'text-red-400', link: 'https://mail.google.com', bg: 'from-red-800 to-black' },
    { name: 'Photos', icon: FaImage, color: 'text-blue-300', link: 'https://photos.google.com', bg: 'from-blue-800 to-black' },
    { name: 'Translate', icon: FaLanguage, color: 'text-blue-500', link: 'https://translate.google.com', bg: 'from-blue-900 to-black' },
    { name: 'News', icon: FaNewspaper, color: 'text-green-300', link: 'https://news.google.com', bg: 'from-green-800 to-black' },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-300', link: 'https://github.com', bg: 'from-gray-900 to-black' },
    { name: 'Spotify', icon: FaSpotify, color: 'text-green-400', link: 'https://spotify.com', bg: 'from-green-900 to-black' },
    { name: 'Amazon', icon: FaAmazon, color: 'text-orange-400', link: 'https://amazon.com', bg: 'from-orange-900 to-black' },
    { name: 'Twitter', icon: FaTwitter, color: 'text-blue-300', link: 'https://twitter.com', bg: 'from-blue-800 to-black' },
    { name: 'LinkedIn', icon: FaLinkedin, color: 'text-blue-400', link: 'https://linkedin.com', bg: 'from-blue-900 to-black' },
    { name: 'WhatsApp', icon: FaWhatsapp, color: 'text-green-400', link: 'https://web.whatsapp.com', bg: 'from-green-900 to-black' },
    { name: 'Telegram', icon: FaTelegram, color: 'text-blue-300', link: 'https://web.telegram.org', bg: 'from-blue-800 to-black' },
    { name: 'Discord', icon: FaDiscord, color: 'text-purple-400', link: 'https://discord.com', bg: 'from-purple-900 to-black' },
    { name: 'Reddit', icon: FaReddit, color: 'text-orange-400', link: 'https://reddit.com', bg: 'from-orange-900 to-black' },
    { name: 'Snapchat', icon: FaSnapchat, color: 'text-yellow-300', link: 'https://snapchat.com', bg: 'from-yellow-800 to-black' },
    { name: 'TikTok', icon: FaTiktok, color: 'text-gray-300', link: 'https://tiktok.com', bg: 'from-gray-800 to-black' },
    { name: 'Pinterest', icon: FaPinterest, color: 'text-red-500', link: 'https://pinterest.com', bg: 'from-red-900 to-black' },
    { name: 'Instagram', icon: FaInstagram, color: 'text-pink-400', link: 'https://instagram.com', bg: 'from-pink-900 to-black' },
    { name: 'Facebook', icon: FaFacebook, color: 'text-blue-400', link: 'https://facebook.com', bg: 'from-blue-900 to-black' },
  ];

  const quickIcons = apps.slice(0, 8);
  const moreApps = apps.slice(8);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  const neumorphicStyle = (size = 15, inset = false) => ({
    boxShadow: inset 
      ? `inset ${size}px ${size}px ${size * 2}px #000000, inset -${size}px -${size}px ${size * 2}px #1a1a1a`
      : `${size}px ${size}px ${size * 2}px #000000, -${size}px -${size}px ${size * 2}px #1a1a1a`
  });

  const AppIcon = ({ app, size = 'clamp(3rem, 12vw, 4rem)', isPopup = false }) => (
    <motion.a
      href={app.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.15, 
        y: -4,
        rotateY: 10
      }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setActiveIcon(app.name)}
      onHoverEnd={() => setActiveIcon(null)}
      className={`relative rounded-2xl flex items-center justify-center border-2 border-gray-800 backdrop-blur-sm transition-all duration-500 group overflow-hidden ${
        isPopup ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-900 to-black'
      }`}
      style={{ 
        ...neumorphicStyle(isPopup ? 3 : 4),
        width: size, 
        height: size 
      }}
    >
      {/* Animated Gradient Background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${app.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        initial={false}
      />
      
      {/* Icon with glow effect */}
      <motion.div
        animate={{
          scale: activeIcon === app.name ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <app.icon className={`relative z-10 text-lg sm:text-xl md:text-2xl ${
          activeIcon === app.name ? 'text-white' : app.color
        } transition-all duration-300 filter drop-shadow-lg`} />
      </motion.div>
      
      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-600 transition-all duration-300" />
    </motion.a>
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-gray-900 to-black rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-gray-800 to-black rounded-full blur-3xl opacity-40 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-900 to-black rounded-full blur-3xl opacity-30 animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-end items-center p-6 space-x-4">
        {['Gmail', 'Images'].map((item) => (
          <motion.a 
            key={item}
            href={`https://${item.toLowerCase()}.google.com`}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-gray-400 hover:text-white px-4 py-2 rounded-xl transition-all duration-200 backdrop-blur-sm bg-black border border-gray-800 font-medium"
            style={neumorphicStyle(4)}
          >
            {item}
          </motion.a>
        ))}
        <motion.button 
          onClick={() => setShowMoreApps(!showMoreApps)}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-xl flex items-center justify-center relative backdrop-blur-sm bg-black border border-gray-800"
          style={neumorphicStyle(4)}
        >
          <FaTh className="text-gray-400 text-lg" />
        </motion.button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center mt-16 px-4">
        {/* Enhanced Google Logo with Dark Theme */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-16 w-full max-w-2xl"
        >
          <div className="relative">
            <motion.div
              whileHover={{ 
                scale: 1.02,
                y: -5,
                rotateX: 5
              }}
              className="backdrop-blur-xl bg-black rounded-3xl p-8 border-2 border-gray-800 relative overflow-hidden mx-auto"
              style={neumorphicStyle(12)}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm" />
              
              <div className="relative z-10 flex items-center justify-center flex-wrap gap-4">
                {[
                  { letter: 'G', color: 'text-blue-500', bg: 'from-blue-900 to-black' },
                  { letter: 'o', color: 'text-red-500', bg: 'from-red-900 to-black' },
                  { letter: 'o', color: 'text-yellow-500', bg: 'from-yellow-900 to-black' },
                  { letter: 'g', color: 'text-blue-500', bg: 'from-blue-900 to-black' },
                  { letter: 'l', color: 'text-green-500', bg: 'from-green-900 to-black' },
                  { letter: 'e', color: 'text-red-500', bg: 'from-red-900 to-black' }
                ].map((item, index) => (
                  <motion.span 
                    key={index}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -8,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className={`text-4xl md:text-6xl font-bold rounded-2xl p-4 border-2 border-gray-800 backdrop-blur-sm flex items-center justify-center bg-gradient-to-br ${item.bg} text-white shadow-2xl`}
                    style={{ 
                      width: 'clamp(3rem, 10vw, 5rem)',
                      height: 'clamp(3rem, 10vw, 5rem)',
                    }}
                  >
                    {item.letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Search Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-2xl mb-16"
        >
          <form onSubmit={handleSearch}>
            <div className="relative">
              <motion.div 
                className={`flex items-center rounded-2xl px-6 py-5 transition-all duration-500 backdrop-blur-sm bg-black border-2 ${
                  isFocused ? 'border-blue-500/50 bg-gray-900' : 'border-gray-800'
                }`}
                style={isFocused ? neumorphicStyle(8, true) : neumorphicStyle(8)}
                whileHover={{ y: -2 }}
              >
                <motion.div 
                  className="mr-4"
                  style={neumorphicStyle(3, true)}
                  whileHover={{ scale: 1.1 }}
                >
                  <FaSearch className="text-gray-500 text-lg" />
                </motion.div>
                
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Search Google or type a URL"
                  className="w-full focus:outline-none text-xl bg-transparent placeholder-gray-500 text-white font-medium"
                />
                
                <div className="flex items-center space-x-3 ml-4">
                  <motion.button 
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm bg-black border border-gray-800 transition-all duration-300 group"
                    style={neumorphicStyle(4)}
                  >
                    <FaMicrophone className="text-gray-500 group-hover:text-blue-400 text-lg transition-colors duration-300" />
                  </motion.button>
                  <motion.button 
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm bg-black border border-gray-800 transition-all duration-300 group"
                    style={neumorphicStyle(4)}
                  >
                    <FaCamera className="text-gray-500 group-hover:text-green-400 text-lg transition-colors duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </form>
        </motion.div>

        {/* Enhanced Quick Icons Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-4 md:grid-cols-8 gap-8 w-full max-w-4xl"
        >
          {quickIcons.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex flex-col items-center space-y-4 cursor-pointer"
            >
              <AppIcon app={app} />
              <motion.span 
                whileHover={{ y: -2 }}
                className="text-sm font-semibold text-gray-400 px-3 py-2 rounded-xl backdrop-blur-sm bg-black border border-gray-800 text-center min-w-[80px]"
                style={neumorphicStyle(3)}
              >
                {app.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Enhanced Apps Popup */}
      <AnimatePresence>
        {showMoreApps && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 backdrop-blur-sm bg-black/80"
              onClick={() => setShowMoreApps(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="fixed z-50 overflow-hidden rounded-3xl backdrop-blur-xl bg-black border-2 border-gray-800"
              style={{
                ...neumorphicStyle(12),
                top: '80px',
                right: '20px',
                width: 'clamp(300px, 90vw, 400px)',
                maxHeight: 'clamp(400px, 70vh, 500px)',
              }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-white">Google Apps</h3>
                  <motion.button 
                    onClick={() => setShowMoreApps(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm bg-black border border-gray-800"
                    style={neumorphicStyle(3)}
                  >
                    <FaTimes className="text-gray-400 text-sm" />
                  </motion.button>
                </div>

                <div className="grid grid-cols-4 gap-4 overflow-y-auto custom-scrollbar" style={{ maxHeight: '350px' }}>
                  {apps.map((app, index) => (
                    <motion.div
                      key={app.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03 }}
                      className="flex flex-col items-center space-y-3 cursor-pointer p-2"
                    >
                      <AppIcon app={app} size="clamp(3rem, 12vw, 4rem)" isPopup={true} />
                      <span className="text-xs font-semibold text-gray-400 text-center leading-tight">
                        {app.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default GoogleCloneBlack;