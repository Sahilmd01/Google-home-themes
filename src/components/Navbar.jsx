import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaHouseUser, FaCity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Right Side Floating Circular Buttons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">

        {/* Home Button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/")}
          className="group relative p-3 rounded-full bg-white/80 dark:bg-gray-800/80 
                     backdrop-blur-xl border border-white/40 dark:border-gray-600/40 
                     hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all 
                     duration-200 shadow-lg"
        >
          <div className="absolute inset-0 rounded-full translate-y-1.5 -z-10 blur-sm 
                          opacity-40 dark:opacity-50 bg-gray-400/30 dark:bg-black/40 
                          group-hover:translate-y-1 group-hover:opacity-30 transition-all" />

          <FaHome className="w-4 h-4 text-gray-700 dark:text-gray-300 
                             group-hover:text-green-600 dark:group-hover:text-green-400 
                             transition-colors" />

          {/* Tooltip */}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 
                          bg-gray-900/90 dark:bg-gray-700/90 text-white 
                          group-hover:text-green-400 text-xs py-2 px-3 rounded-lg 
                          opacity-0 group-hover:opacity-100 transition-all duration-200 
                          whitespace-nowrap backdrop-blur-sm border border-gray-600/30">
            Home
            <div className="absolute top-1/2 left-0 transform -translate-x-1 
                            -translate-y-1/2 w-2 h-2 bg-gray-900/90 dark:bg-gray-700/90 
                            rotate-45" />
          </div>
        </motion.button>

        {/* Design 2 Button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/design2")}
          className="group relative p-3 rounded-full bg-white/80 dark:bg-gray-800/80 
                     backdrop-blur-xl border border-white/40 dark:border-gray-600/40 
                     hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all 
                     duration-200 shadow-lg"
        >
          <div className="absolute inset-0 rounded-full translate-y-1.5 -z-10 blur-sm 
                          opacity-40 dark:opacity-50 bg-gray-400/30 dark:bg-black/40 
                          group-hover:translate-y-1 group-hover:opacity-30 transition-all" />

          <FaBuilding className="w-4 h-4 text-gray-700 dark:text-gray-300 
                             group-hover:text-purple-600 dark:group-hover:text-purple-400 
                             transition-colors" />

          {/* Tooltip */}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 
                          bg-gray-900/90 dark:bg-gray-700/90 text-white 
                          group-hover:text-purple-400 text-xs py-2 px-3 rounded-lg 
                          opacity-0 group-hover:opacity-100 transition-all duration-200 
                          whitespace-nowrap backdrop-blur-sm border border-gray-600/30">
            Design 2
            <div className="absolute top-1/2 left-0 transform -translate-x-1 
                            -translate-y-1/2 w-2 h-2 bg-gray-900/90 dark:bg-gray-700/90 
                            rotate-45" />
          </div>
        </motion.button>

        {/* Design 3 Button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/design3")}
          className="group relative p-3 rounded-full bg-white/80 dark:bg-gray-800/80 
                     backdrop-blur-xl border border-white/40 dark:border-gray-600/40 
                     hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all 
                     duration-200 shadow-lg"
        >
          <div className="absolute inset-0 rounded-full translate-y-1.5 -z-10 blur-sm 
                          opacity-40 dark:opacity-50 bg-gray-400/30 dark:bg-black/40 
                          group-hover:translate-y-1 group-hover:opacity-30 transition-all" />

          <FaHouseUser className="w-4 h-4 text-gray-700 dark:text-gray-300 
                             group-hover:text-yellow-600 dark:group-hover:text-yellow-400 
                             transition-colors" />

          {/* Tooltip */}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 
                          bg-gray-900/90 dark:bg-gray-700/90 text-white 
                          group-hover:text-yellow-400 text-xs py-2 px-3 rounded-lg 
                          opacity-0 group-hover:opacity-100 transition-all duration-200 
                          whitespace-nowrap backdrop-blur-sm border border-gray-600/30">
            Design 3
            <div className="absolute top-1/2 left-0 transform -translate-x-1 
                            -translate-y-1/2 w-2 h-2 bg-gray-900/90 dark:bg-gray-700/90 
                            rotate-45" />
          </div>
        </motion.button>

        {/* Design 4 Button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/design4")}
          className="group relative p-3 rounded-full bg-white/80 dark:bg-gray-800/80 
                     backdrop-blur-xl border border-white/40 dark:border-gray-600/40 
                     hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all 
                     duration-200 shadow-lg"
        >
          <div className="absolute inset-0 rounded-full translate-y-1.5 -z-10 blur-sm 
                          opacity-40 dark:opacity-50 bg-gray-400/30 dark:bg-black/40 
                          group-hover:translate-y-1 group-hover:opacity-30 transition-all" />

          <FaCity className="w-4 h-4 text-gray-700 dark:text-gray-300 
                                 group-hover:text-blue-600 dark:group-hover:text-blue-400 
                                 transition-colors" />

          {/* Tooltip */}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 
                          bg-gray-900/90 dark:bg-gray-700/90 text-white 
                          group-hover:text-blue-400 text-xs py-2 px-3 rounded-lg 
                          opacity-0 group-hover:opacity-100 transition-all duration-200 
                          whitespace-nowrap backdrop-blur-sm border border-gray-600/30">
            Design 4
            <div className="absolute top-1/2 left-0 transform -translate-x-1 
                            -translate-y-1/2 w-2 h-2 bg-gray-900/90 dark:bg-gray-700/90 
                            rotate-45" />
          </div>
        </motion.button>

      </div>
    </>
  );
};

export default Navbar;