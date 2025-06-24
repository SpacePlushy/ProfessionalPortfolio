import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="relative w-32 h-32">
        {/* Outer circle animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-teal-400/30"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* Middle circle animation */}
        <motion.div 
          className="absolute inset-2 rounded-full border-4 border-teal-500/50" 
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.2 
          }}
        />

        {/* Inner circle with initials */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: 0.3,
            duration: 0.8,
            ease: "easeOut" 
          }}
        >
          <div className="flex items-center justify-center w-20 h-20 bg-teal-500 rounded-full">
            <motion.span 
              className="text-2xl font-bold text-white" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              FP
            </motion.span>
          </div>
        </motion.div>
      </div>
      
      {/* Loading text */}
      <motion.p 
        className="mt-6 text-lg text-white" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default LoadingScreen;
