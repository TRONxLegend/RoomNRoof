import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const cards = [
  {
    title: "Rent Property",
    desc: "List your property and reach thousands of verified tenants.",
    link: "/rent-property",
    count: "2500",
    label: "Properties",
  },
  {
    title: "Sale Property",
    desc: "Sell your property faster with verified buyers.",
    link: "/sale-property",
    count: "1800",
    label: "Sold",
  },
  {
    title: "Book Enquiry",
    desc: "Find your perfect home quickly and safely with expert help.",
    link: "/book-enquiry",
    count: "5200",
    label: "Happy Clients",
  },
  {
    title: "Interior Services",
    desc: "Get premium interior design solutions for your space.",
    link: "/interior",
    count: "30",
    label: "Projects",
  },
];

function MovingDotCard({ card, index }) {
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(card.count, 10);
    const range = end - start;
    if (range <= 0) return;
    const increment = Math.ceil(end / 40);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setAnimatedCount(start);
    }, 50);
    return () => clearInterval(timer);
  }, [card.count]);

  const display = animatedCount < 1000 ? animatedCount : `${Math.floor(animatedCount / 1000)}k`;

  return (
    <motion.div
      key={index}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative rounded-2xl bg-[#080808] border border-white/10 hover:border-white/20 shadow-2xl p-8 min-h-[380px] overflow-hidden group flex flex-col"
    >
      {/* Top Left Corner Glow */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 blur-[60px] rounded-full group-hover:bg-white/15 transition-all duration-700 pointer-events-none z-0"></div>

      {/* Reticle Crosshair Lines */}
      <div className="absolute top-0 bottom-0 left-[24px] w-[1px] bg-white/[0.07] group-hover:bg-white/[0.15] transition-colors duration-500 pointer-events-none z-0"></div>
      <div className="absolute top-0 bottom-0 right-[24px] w-[1px] bg-white/[0.07] group-hover:bg-white/[0.15] transition-colors duration-500 pointer-events-none z-0"></div>
      <div className="absolute left-0 right-0 top-[24px] h-[1px] bg-white/[0.07] group-hover:bg-white/[0.15] transition-colors duration-500 pointer-events-none z-0"></div>
      <div className="absolute left-0 right-0 bottom-[24px] h-[1px] bg-white/[0.07] group-hover:bg-white/[0.15] transition-colors duration-500 pointer-events-none z-0"></div>

      {/* Animated Reticle Dot */}
      <div className="reticle-dot"></div>

      <div className="relative z-10 flex flex-col h-full pt-4 px-2 pb-0">
        {/* Counter Section */}
        <div className="text-center mb-8">
          <div className="font-extrabold text-6xl mb-2 bg-gradient-to-r from-white via-[#bae6fd] to-[#38bdf8] bg-clip-text text-transparent inline-block drop-shadow-md">
            {display}
          </div>
          <div className="text-white/50 tracking-[0.3em] text-[11px] font-bold uppercase mt-1">
            {card.label}
          </div>
        </div>

        {/* Title & Description */}
        <div className="flex-grow flex flex-col items-center justify-center mb-8">
          <h3 className="text-xl font-semibold text-white/90 mb-3 text-center">
            {card.title}
          </h3>
          <p className="text-white/40 text-sm leading-relaxed text-center max-w-[90%]">
            {card.desc}
          </p>
        </div>

        {/* Button */}
        <div className="mt-auto flex justify-center">
          <Link
            to={card.link}
            className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function PropertyActions() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {cards.map((card, i) => (
        <MovingDotCard key={i} card={card} index={i} />
      ))}
    </div>
  );
}
