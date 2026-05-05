import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const inputClass =
  "box-border h-10 w-full px-4 py-2 text-sm leading-tight rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none appearance-none overflow-hidden";

const textareaClass = `${inputClass} resize-none h-auto min-h-[100px]`;

const labelClass = "text-sm text-gray-300 mb-1.5 font-medium";

const InteriorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    style: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await toast.promise(
        axios.post("http://localhost:5000/api/interior/interior", formData),
        {
          loading: "Submitting enquiry...",
          success: "Enquiry submitted successfully! We'll contact you soon.",
          error: (err) =>
            err.response?.data?.message ||
            "Failed to submit enquiry. Please try again.",
        }
      );

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        roomType: "",
        style: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      // Error handled by toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
        <div className="flex flex-col">
          <label className={labelClass}>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col">
          <label className={labelClass}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col">
          <label className={labelClass}>
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter Your Number"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col">
          <label className={labelClass}>
            Room Type <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select Room Type</option>
              <option>Living Room</option>
              <option>Bedroom</option>
              <option>Kitchen</option>
              <option>Bathroom</option>
              <option>Dining Room</option>
              <option>Office/Study</option>
              <option>Entire Home</option>
              <option>Commercial Space</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
              ▼
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <label className={labelClass}>
            Design Style <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="style"
              value={formData.style}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select Style</option>
              <option>Modern</option>
              <option>Contemporary</option>
              <option>Minimalist</option>
              <option>Traditional</option>
              <option>Industrial</option>
              <option>Scandinavian</option>
              <option>Bohemian</option>
              <option>Luxury</option>
              <option>Not Sure</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
              ▼
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <label className={labelClass}>
            Budget Range <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="e.g. ₹40000 - ₹100000"
            />
          </div>
        </div>

        {/* <div className="flex flex-col sm:col-span-2">
          <label className={labelClass}>
            Timeline <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select Timeline</option>
              <option>ASAP</option>
              <option>Within 1 month</option>
              <option>1-3 months</option>
              <option>3-6 months</option>
              <option>6+ months</option>
              <option>Just exploring</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
              ▼
            </span>
          </div>
        </div> */}
      </div>

      <div className="flex flex-col ">
        <label className={labelClass}>
          Additional Details / Requirements
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your vision, specific requirements, or any questions you have..."
          className={textareaClass}
        />
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="h-12 w-full mt-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-sm font-semibold text-white hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Submitting...
          </span>
        ) : (
          "Submit Enquiry"
        )}
      </motion.button>
    </motion.form>
  );
};

export default InteriorForm;

