import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const inputClass =
  "box-border h-10 w-full px-4 py-2 text-sm leading-tight rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none overflow-hidden";

const labelClass = "text-xm text-gray-300 mb-1";

const BookEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    location: "",
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
        axios.post("http://localhost:5000/api/enquiries/book", formData),
        {
          loading: "Submitting enquiry...",
          success: "Enquiry submitted successfully! We’ll contact you soon.",
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
        propertyType: "",
        budget: "",
        location: "",
        message: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
        <div className="flex flex-col">
          <label className={labelClass}>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
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
            className={inputClass}
          />
        </div>

        <div className="flex flex-col">
          <label className={labelClass}>
            Property Type <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select Property Type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
              <option>Studio</option>
              <option>Commercial</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
              ▼
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <label className={labelClass}>
            Budget <span className="text-red-500">*</span>
          </label>
          <input
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            placeholder="e.g. $1000–$1500 / month"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col">
          <label className={labelClass}>
            Preferred Location <span className="text-red-500">*</span>
          </label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="e.g. Downtown"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={2}
          placeholder="Briefly describe your requirements"
          className={`${inputClass} resize-none h-auto`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="h-10 w-full mt-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Enquiry"}
      </button>
    </motion.form>
  );
};

export default BookEnquiryForm;
