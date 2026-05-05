import { motion } from "framer-motion";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import SaleForm from "../components/SaleForm";

const SaleProperty = () => {
  return (
    <AnimatedBackground>
      <div className="min-h-screen flex items-center justify-center mt-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative z-10 w-full max-w-5xl px-4 py-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="glass rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-xl"
          >
            {/* Header */}
            <div className="mb-5">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Sell Your Property
              </h1>
              <p className="mt-2 text-lg text-gray-300">
                List your property and reach thousands of potential tenants.
              </p>
            </div>

            <SaleForm />
          </motion.div>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default SaleProperty;
