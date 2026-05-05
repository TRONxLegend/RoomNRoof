import { motion } from "framer-motion";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const pagetop = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    pagetop.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <AnimatedBackground>
      <div ref={pagetop} className="container mx-auto px-4 py-20 ">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            About Us
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto">
            Your trusted partner in finding the perfect property. We combine expertise,
            technology, and personalized service to make your real estate journey seamless.
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 hover:border-white/40 transition-all duration-500 cursor-pointer group"
            >
              {/* Icon */}
              <div className="flex justify-start mb-6">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Our Story</h3>
              <p className="text-gray-200 mb-6 text-lg">
                With a vision to revolutionize real estate
              </p>
              <ul className="space-y-3 text-gray-200 text-md">
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0 group-hover:bg-purple-400"></span>
                  <span>Years of market expertise</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0 group-hover:bg-purple-400"></span>
                  <span>Trusted by thousands of clients</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0 group-hover:bg-purple-400"></span>
                  <span>Commitment to excellence</span>
                </li>
              </ul>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:border-white/40 transition-all duration-500 cursor-pointer group"
            >
              {/* Icon */}
              <div className="flex justify-start mb-6">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">Our Services</h3>
              <p className="text-gray-200 mb-6 text-lg">
                Comprehensive solutions for all your needs
              </p>
              <ul className="space-y-3 text-gray-200 text-md">
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-400"></span>
                  <span>Property buying and selling</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-400"></span>
                  <span>Rental and leasing services</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-400"></span>
                  <span>Investment consultation</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-400"></span>
                  <span>Market analysis and insights</span>
                </li>
              </ul>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-white/40 transition-all duration-500 cursor-pointer group"
            >
              {/* Icon */}
              <div className="flex justify-start mb-6">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors duration-300">Why Choose Us</h3>
              <p className="text-gray-200 mb-6 text-lg">
                Experience the difference with our approach
              </p>
              <ul className="space-y-3 text-gray-200 text-md">
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0 group-hover:bg-indigo-400"></span>
                  <span>Local market expertise</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0 group-hover:bg-indigo-400"></span>
                  <span>Client-centric approach</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0 group-hover:bg-indigo-400"></span>
                  <span>Transparent processes</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0 group-hover:bg-indigo-400"></span>
                  <span>Proven track record</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Mission and Vision Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-6 mt-12 max-w-7xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 hover:border-white/40 transition-all duration-500 cursor-pointer group"
          >
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">Our Mission</h3>
            <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
              To provide exceptional real estate services by combining market expertise,
              innovative technology, and personalized attention. We strive to make the
              property buying, selling, and renting process seamless, transparent, and
              rewarding for every client.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/40 transition-all duration-500 cursor-pointer group"
          >
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">Our Vision</h3>
            <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
              To be the most trusted and innovative real estate company, setting new
              standards in customer service and leveraging technology to create meaningful
              connections between people and properties that transform lives.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/30 shadow-2xl text-center mt-12 max-w-7xl mx-auto hover:from-purple-500/30 hover:to-blue-500/30 hover:shadow-purple-500/20 transition-all duration-500 group"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:scale-105 transition-transform duration-300">
            Ready to Get Started?
          </h2>
          <p className="text-gray-200 mb-8 text-base max-w-2xl mx-auto">
            Let us help you find your perfect property or sell your current one.
            Our team of experts is ready to assist you every step of the way.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/90 backdrop-blur-md text-gray-900 px-10 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/30 border border-white/50 relative overflow-hidden group/button"
          >
            <span
              className="relative z-10 cursor-pointer"
              onClick={() => navigate("/book-enquiry")}
            >
              Contact Us Today
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default About;

