import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, FaMicrophone, FaCamera, FaTh, FaTimes, FaYoutube,
  FaMapMarkerAlt, FaCloud, FaEnvelope, FaImage, FaLanguage, FaNewspaper,
  FaGithub, FaSpotify, FaAmazon, FaTwitter, FaLinkedin, FaWhatsapp,
  FaTelegram, FaDiscord, FaReddit, FaSnapchat, FaTiktok, FaPinterest,
  FaInstagram, FaFacebook, FaGoogle
} from 'react-icons/fa';

const GoogleClone = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showMoreApps, setShowMoreApps] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

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
  const moreApps = apps.slice(8);

  // Common search suggestions like Google
  const popularSearches = [
    'weather', 'news', 'movies', 'sports', 'recipes', 
    'shopping', 'travel', 'music', 'games', 'technology'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  const handleAppClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(link, '_blank');
  };

  const enhancedNeumorphicStyle = (size = 15, inset = false, intensity = 1) => ({
    boxShadow: inset 
      ? `inset ${size}px ${size}px ${size * 2}px rgba(209, 209, 209, ${intensity}), 
         inset -${size}px -${size}px ${size * 2}px rgba(255, 255, 255, ${intensity})`
      : `${size}px ${size}px ${size * 2}px rgba(209, 209, 209, ${intensity}), 
         -${size}px -${size}px ${size * 2}px rgba(255, 255, 255, ${intensity})`
  });

  const getGlowColor = (glow) => {
    const colors = {
      blue: 'from-blue-400/20 to-blue-600/20',
      red: 'from-red-400/20 to-red-600/20',
      green: 'from-green-400/20 to-green-600/20',
      yellow: 'from-yellow-400/20 to-yellow-600/20',
      orange: 'from-orange-400/20 to-orange-600/20',
      purple: 'from-purple-400/20 to-purple-600/20',
      pink: 'from-pink-400/20 to-pink-600/20',
      gray: 'from-gray-400/20 to-gray-600/20'
    };
    return colors[glow] || colors.blue;
  };

  const AppIcon = ({ app, size = 'clamp(3rem, 12vw, 4rem)', isPopup = false }) => (
    <motion.a
      href={app.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => handleAppClick(e, app.link)}
      whileHover={{ 
        scale: 1.15, 
        y: -8,
        rotateY: 15
      }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setActiveIcon(app.name)}
      onHoverEnd={() => setActiveIcon(null)}
      className={`relative rounded-3xl flex items-center justify-center border-2 border-white/40 backdrop-blur-lg transition-all duration-500 group overflow-hidden ${
        isPopup ? 'bg-gradient-to-br from-white/30 to-white/10' : 'bg-gradient-to-br from-white/50 to-white/20'
      }`}
      style={{ 
        ...enhancedNeumorphicStyle(isPopup ? 4 : 6, false, 0.8),
        width: size, 
        height: size 
      }}
    >
      {/* Animated Gradient Background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${app.bg} opacity-0 group-hover:opacity-100 transition-all duration-500`}
        initial={false}
        whileHover={{ scale: 1.1 }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute bg-white/30 rounded-full"
            initial={{ 
              scale: 0,
              opacity: 0,
              x: Math.random() * 40 - 20,
              y: Math.random() * 40 - 20
            }}
            whileHover={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              transition: { 
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 2
              }
            }}
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
            }}
          />
        ))}
      </div>
      
      {/* Icon with enhanced glow effect */}
      <motion.div
        animate={{
          scale: activeIcon === app.name ? 1.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="relative z-10"
      >
        <app.icon className={`text-xl sm:text-2xl md:text-3xl ${
          activeIcon === app.name ? 'text-white' : app.color
        } transition-all duration-300 filter drop-shadow-2xl`} />
      </motion.div>
      
      {/* Enhanced border glow */}
      <motion.div 
        className="absolute inset-0 rounded-3xl border-3 border-transparent group-hover:border-white/50 transition-all duration-500"
        whileHover={{ borderWidth: "4px" }}
      />
    </motion.a>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-3xl opacity-40"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-green-300 to-yellow-300 rounded-full blur-3xl opacity-40"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.3, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-300 to-red-300 rounded-full blur-3xl opacity-30"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Enhanced Header */}
      <header className="relative z-10 flex justify-end items-center p-6 space-x-4">
        {['Gmail', 'Images'].map((item) => (
          <motion.a 
            key={item}
            href={`https://${item.toLowerCase()}.google.com`}
            onClick={(e) => handleAppClick(e, `https://${item.toLowerCase()}.google.com`)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-gray-700 hover:text-gray-900 px-4 py-3 rounded-2xl transition-all duration-300 backdrop-blur-lg bg-white/40 border-2 border-white/30 font-semibold hover:shadow-lg"
            style={enhancedNeumorphicStyle(6)}
          >
            {item}
          </motion.a>
        ))}
        <motion.button 
          onClick={() => setShowMoreApps(!showMoreApps)}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center relative backdrop-blur-lg bg-white/40 border-2 border-white/30 group"
          style={enhancedNeumorphicStyle(6)}
        >
          <FaTh className="text-gray-700 text-xl group-hover:text-blue-600 transition-colors duration-300" />
          {/* Notification dot */}
          <motion.div 
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </header>

      {/* Enhanced Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center mt-12 px-4">
        {/* Premium Google Logo - FIXED TO STAY IN ONE LINE */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="mb-12 w-full max-w-4xl"
        >
          <div className="relative">
            <motion.div
              whileHover={{ 
                scale: 1.02,
                y: -10,
              }}
              className="backdrop-blur-2xl bg-white/30 rounded-4xl p-8 sm:p-10 md:p-12 border-4 border-white/40 relative overflow-hidden mx-auto shadow-2xl"
              style={enhancedNeumorphicStyle(20)}
            >
              {/* Animated background overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
              />
              
              {/* Google Logo - Fixed to stay in one line */}
              <div className="relative z-10 flex items-center justify-center flex-nowrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 overflow-visible">
                {[
                  { letter: 'G', color: 'text-blue-500', bg: 'from-blue-400 to-blue-600', delay: 0 },
                  { letter: 'o', color: 'text-red-500', bg: 'from-red-400 to-red-600', delay: 0.1 },
                  { letter: 'o', color: 'text-yellow-500', bg: 'from-yellow-400 to-yellow-600', delay: 0.2 },
                  { letter: 'g', color: 'text-blue-500', bg: 'from-blue-400 to-blue-600', delay: 0.3 },
                  { letter: 'l', color: 'text-green-500', bg: 'from-green-400 to-green-600', delay: 0.4 },
                  { letter: 'e', color: 'text-red-500', bg: 'from-red-400 to-red-600', delay: 0.5 }
                ].map((item, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0, y: -50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15,
                      delay: item.delay 
                    }}
                    whileHover={{ 
                      scale: 1.3, 
                      y: -15,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className={`flex-shrink-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black rounded-3xl p-4 sm:p-5 md:p-6 border-4 border-white/50 backdrop-blur-lg flex items-center justify-center bg-gradient-to-br ${item.bg} text-white shadow-2xl relative overflow-hidden`}
                    style={{ 
                      width: 'clamp(3.5rem, 10vw, 6rem)',
                      height: 'clamp(3.5rem, 10vw, 6rem)',
                      minWidth: '3.5rem'
                    }}
                  >
                    {/* Letter shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    {item.letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Premium Search Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="w-full max-w-3xl mb-16 relative z-30"
        >
          <form onSubmit={handleSearch}>
            <div className="relative">
              <motion.div 
                className={`flex items-center rounded-3xl px-6 sm:px-8 py-4 sm:py-6 transition-all duration-500 backdrop-blur-xl bg-white/40 border-4 ${
                  isFocused ? 'border-blue-400/60 bg-white/50 shadow-2xl' : 'border-white/40'
                }`}
                style={isFocused ? enhancedNeumorphicStyle(12, true, 0.9) : enhancedNeumorphicStyle(12)}
                whileHover={{ y: -5, scale: 1.01 }}
              >
                <motion.div 
                  className="mr-4 sm:mr-6"
                  style={enhancedNeumorphicStyle(4, true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaSearch className={`text-xl sm:text-2xl transition-colors duration-300 ${
                    isFocused ? 'text-blue-500' : 'text-gray-600'
                  }`} />
                </motion.div>
                
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Search Google or type a URL"
                  className="w-full focus:outline-none text-lg sm:text-xl md:text-2xl bg-transparent placeholder-gray-600 font-semibold tracking-wide"
                />
                
                <div className="flex items-center space-x-3 sm:space-x-4 ml-4 sm:ml-6">
                  <motion.button 
                    type="button"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center backdrop-blur-lg bg-white/40 border-2 border-white/30 transition-all duration-300 group relative overflow-hidden"
                    style={enhancedNeumorphicStyle(6)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <FaMicrophone className="relative z-10 text-lg sm:text-xl text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </motion.button>
                  <motion.button 
                    type="button"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center backdrop-blur-lg bg-white/40 border-2 border-white/30 transition-all duration-300 group relative overflow-hidden"
                    style={enhancedNeumorphicStyle(6)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <FaCamera className="relative z-10 text-lg sm:text-xl text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Google-style Search suggestions */}
              <AnimatePresence>
                {isFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-4 rounded-3xl backdrop-blur-xl bg-white/80 border-2 border-white/30 p-4 sm:p-6 z-40 shadow-2xl"
                    style={enhancedNeumorphicStyle(8)}
                  >
                    {/* Recent searches section */}
                    {searchQuery && (
                      <div className="mb-4">
                        <div className="flex items-center space-x-3 text-gray-500 text-sm font-medium mb-3">
                          <FaSearch className="text-gray-400" />
                          <span>Search for "{searchQuery}"</span>
                        </div>
                        
                        {/* Query-based suggestions */}
                        <div className="space-y-2">
                          {[`${searchQuery} news`, `${searchQuery} images`, `${searchQuery} videos`, `${searchQuery} near me`].map((suggestion, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                              className="p-3 rounded-2xl cursor-pointer transition-all duration-200 font-medium text-gray-700 flex items-center space-x-4"
                              onClick={() => {
                                setSearchQuery(suggestion);
                                window.open(`https://www.google.com/search?q=${encodeURIComponent(suggestion)}`, '_blank');
                              }}
                            >
                              <FaSearch className="text-gray-400 text-sm" />
                              <span>{suggestion}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Popular searches section */}
                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="text-sm font-semibold text-gray-500 mb-3">Popular searches</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {popularSearches.map((search, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                            className="p-3 rounded-xl cursor-pointer transition-all duration-200 text-gray-700 text-sm font-medium"
                            onClick={() => {
                              setSearchQuery(search);
                              window.open(`https://www.google.com/search?q=${encodeURIComponent(search)}`, '_blank');
                            }}
                          >
                            {search}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>

        {/* Enhanced Quick Icons Grid with Hover Effects */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
          className="grid grid-cols-4 md:grid-cols-8 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl relative z-20"
        >
          {quickIcons.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
              className="flex flex-col items-center space-y-4 sm:space-y-5 cursor-pointer group"
            >
              <AppIcon app={app} />
              
              {/* Enhanced App Name with Glow */}
              <motion.span 
                whileHover={{ y: -3 }}
                className="text-xs sm:text-sm font-bold text-gray-800 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl backdrop-blur-lg bg-white/40 border-2 border-white/30 text-center min-w-[80px] sm:min-w-[90px] relative overflow-hidden"
                style={enhancedNeumorphicStyle(4)}
              >
                {/* Background glow based on app color */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${getGlowColor(app.glow)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <span className="relative z-10">{app.name}</span>
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Premium Apps Popup */}
      <AnimatePresence>
        {showMoreApps && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 backdrop-blur-2xl"
              onClick={() => setShowMoreApps(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed z-50 overflow-hidden rounded-4xl backdrop-blur-2xl bg-white/30 border-4 border-white/40"
              style={{
                ...enhancedNeumorphicStyle(20),
                top: '100px',
                right: '20px',
                left: '20px',
                width: 'auto',
                maxWidth: '500px',
                margin: '0 auto',
                maxHeight: 'clamp(450px, 70vh, 600px)',
              }}
            >
              {/* Popup Header */}
              <div className="p-6 sm:p-8 border-b-2 border-white/30 bg-gradient-to-r from-white/40 to-white/10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                      <FaTh className="text-white text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-gray-800">Google Apps</h3>
                      <p className="text-gray-600 font-medium text-sm sm:text-base">All your favorite apps in one place</p>
                    </div>
                  </div>
                  <motion.button 
                    onClick={() => setShowMoreApps(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center backdrop-blur-lg bg-white/40 border-2 border-white/30 relative group"
                    style={enhancedNeumorphicStyle(4)}
                  >
                    <FaTimes className="text-gray-700 text-base sm:text-lg group-hover:text-red-500 transition-colors duration-300" />
                  </motion.button>
                </div>
              </div>

              {/* Apps Grid */}
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 overflow-y-auto custom-scrollbar" style={{ maxHeight: '400px' }}>
                  {apps.map((app, index) => (
                    <motion.div
                      key={app.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 }}
                      className="flex flex-col items-center space-y-3 sm:space-y-4 cursor-pointer p-2 sm:p-3 group"
                    >
                      <AppIcon app={app} size="clamp(3rem, 10vw, 4.5rem)" isPopup={true} />
                      <span className="text-xs font-black text-gray-800 text-center leading-tight bg-white/40 px-2 sm:px-3 py-1 sm:py-2 rounded-xl backdrop-blur-lg border border-white/30">
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

      {/* Enhanced Custom Scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          margin: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #4F46E5, #7C3AED);
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #3730A3, #6D28D9);
        }
      `}</style>
    </div>
  );
};

export default GoogleClone;