import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const inputClass =
  "box-border h-10 w-full px-4 py-2 text-sm leading-tight rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none appearance-none overflow-hidden";

const labelClass = "text-xm text-gray-300 mb-1";

const SaleForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    address: "",
    city: "",
    state: "",
    bhk: "",
    area: "",
    saleAmount: "",
    description: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await toast.promise(
        axios.post(`${import.meta.env.VITE_API_URL}/api/sale/sale`, formData),
        {
          loading: "Submitting property...",
          success: "Property listed successfully!",
          error:
            "Failed to submit property. Please check details and try again.",
        }
      );

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        address: "",
        city: "",
        state: "",
        bhk: "",
        area: "",
        saleAmount: "",
        description: "",

      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">

        {/* Name */}
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

        {/* Email */}
        <div className="flex flex-col">
          <label className={labelClass}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className={labelClass}>
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Property Type */}
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
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
              ▼
            </span>
          </div>
        </div>

        {/* BHK */}
        <div className="flex flex-col">
          <label className={labelClass}>
            BHK <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="bhk"
              value={formData.bhk}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select BHK</option>
              <option>2 BHK</option>
              <option>2.5 BHK</option>
              <option>3 BHK</option>
              <option>3.5 BHK</option>
              <option>4 BHK</option>
              <option>4.5 BHK</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
              ▼
            </span>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className={labelClass}>
            Address <span className="text-red-500">*</span>
          </label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className={labelClass}>
            City <span className="text-red-500">*</span>
          </label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* State */}
        <div className="flex flex-col">
          <label className={labelClass}>
            State <span className="text-red-500">*</span>
          </label>
          <input
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Area */}
        <div className="flex flex-col">
          <label className={labelClass}>
            Area (sq ft) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Rent */}
        <div className="flex flex-col">
          <label className={labelClass}>
            Sale Amount(Including Maintenance) <span className="text-red-500">*</span>
          </label>
          <input
            name="saleAmount"
            value={formData.saleAmount}
            onChange={handleChange}
            required
            placeholder="e.g. $1000 / month"
            className={inputClass}
          />
        </div>
      </div>



      {/* Description */}
      <div className="flex flex-col">
        <label className={labelClass}>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={2}
          className={`${inputClass} resize-none h-auto`}
          placeholder="Short description of your property"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="mt-4 h-10 w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Property"}
      </button>
    </form>
  );
};

export default SaleForm;
