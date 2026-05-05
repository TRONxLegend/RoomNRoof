import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const cards = [
  {
    title: "Rent Property",
    desc: "List your property and reach thousands of verified tenants.",
    link: "/rent-property",
  },
  {
    title: "Sale Property",
    desc: "Sell your property faster with verified buyers.",
    link: "/sale-property",
  },
  {
    title: "Book Enquiry",
    desc: "Find your perfect home quickly and safely with expert help.",
    link: "/book-enquiry",
  },
  {
    title: "Interior Services",
    desc: "Get premium interior design solutions for your space.",
    link: "/interior",
  },
];

export default function PropertyActions() {
  const [glow, setGlow] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlow({
      x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
      y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
    });
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          style={{ "--x": glow.x, "--y": glow.y }}
          className="relative rounded-2xl bg-[#0f0f0f]
          border border-white/15 hover:border-blue-500/50
          shadow-lg hover:shadow-blue-500/10
          p-7 min-h-[280px] overflow-hidden group"
        >
          {/* Blue line */}
          <span className="absolute left-0 top-7 h-14 w-[3px] bg-blue-600 rounded-full" />

          {/* Glow */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(500px circle at var(--x) var(--y), rgba(59,130,246,0.18), transparent 40%)",
            }}
          />

          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-white mb-3">
              {card.title}
            </h3>

            <p className="text-white/65 text-sm mb-6 leading-relaxed flex-grow">
              {card.desc}
            </p>

            <Link
              to={card.link}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white
              px-5 py-2 rounded-lg text-sm font-medium transition self-start"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
