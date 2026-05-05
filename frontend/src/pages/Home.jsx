import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ShapeLandingHero from "../components/ui/shape-landing-hero";
import Testimonials from "../components/ui/Testimonials";
import FAQMonochrome from "../components/ui/Faq";
import PropertyActions from "../components/GlowCard";
import logo from '../assets/logo2.png';
import {
  FacebookIcon,
  FrameIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

const Home = () => {
  const testimonials = [
    {
      author: {
        name: "Ananya Sharma",
        handle: "@ananyasharma",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      },
      text:
        "The clarity they provided made our home search effortless. Every recommendation actually matched what we were looking for.",
    },
    {
      author: {
        name: "Rahul Mehta",
        handle: "@rahulmehta",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      text:
        "Instead of endless listings, we received focused options with real market insight. It saved us weeks of decision time.",
    },
    {
      author: {
        name: "Priya Nair",
        handle: "@priyanair",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      text:
        "This was the first time real estate felt calm and informed. No pressure, just smart guidance and transparency.",
    },
  ];

  const stats = [
    { number: "500+", label: "Properties Listed" },
    { number: "1000+", label: "Happy Clients" },
    { number: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-[80vh] md:min-h-screen bg-[#030303] ">
      {/* Hero Section */}
      <ShapeLandingHero
        badge={
          <img
            src={logo}
            alt="Room N Roof Realty Logo"
            className="max-h-full max-w-full object-contain"
          />
        }
        title1="Room N Roof Realty"
        title2="Your Trusted Real Estate Partner"
        description="Rent your property or find your dream home with us. We make real estate simple and accessible."
      />


      {/* Testimonials Section */}
      <Testimonials
        title="What Our Clients Say"
        description="Hear from our satisfied clients who found their perfect homes and properties with us."
        testimonials={testimonials}
      />

      {/* Features Section */}
      <section className="relative bg-black py-32">
        {/* subtle depth background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              What We Offer
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
              Choose the service that best fits your property needs
            </p>
          </div>

          {/* Cards */}
          <PropertyActions />
        </div>
      </section>


      {/* Stats Section */}
      <section className="relative bg-[#030303] text-white py-24">
        {/* background depth (NO pointer events) */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-center mb-20">
            Signals That Converted
          </h1>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="
                group relative z-10 cursor-pointer
                rounded-2xl border border-white/10
                bg-black/40 py-12
                transition-all
              "
              >
                {/* Number */}
                <div className="text-5xl font-semibold mb-3 text-white group-hover:text-blue-500 transition-colors duration-300">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-lg text-white/60 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Underline */}
                <div className="mx-auto mt-6 h-[3px] w-12 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQMonochrome />

      {/* Footer Section */}
      <div className="relative max-w-13xl mx-auto mt-20 px-4">
        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/25 via-white/10 to-transparent blur-md" />

        <footer className="relative bg-[#030303] text-gray-300 rounded-3xl border border-white/10 overflow-hidden">
          <div className="px-8 py-12">
            <div className="grid md:grid-cols-4 gap-10 mb-8">

              {/* Company Info */}
              <div>
                <h3 className="text-white text-2xl font-bold mb-4">
                  Room N Roof Realty
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Your trusted partner in finding the perfect property. We make real estate simple and accessible.
                </p>
                <img
                  src={logo}
                  alt="Room N Roof Reality Logo"
                  className="mt-2 h-25 w-auto rounded-lg"
                />
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-lg">
                  <li ><Link to="/" className="cursor-pointer text-white ">Home</Link></li>
                  <li><Link to="/about" className="cursor-pointer text-white ">About Us</Link></li>
                  <li><Link to="/rent-property" className="cursor-pointer text-white ">Rent Property</Link></li>
                  <li><Link to="/book-enquiry" className="cursor-pointer text-white ">Book Enquiry</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-2 text-lg">
                  <li className="hover:text-white cursor-pointer">Email: roomnroof02@gmail.com</li>
                  <li className="hover:text-white cursor-pointer">Phone: +917992283827 / +916350416325</li>
                  <li className="hover:text-white cursor-pointer">Address: Shop no 1, Godrej Oasis  </li>
                  <li className="hover:text-white cursor-pointer">Sector 88A , Gurgaon, Haryana 122505</li>
                </ul>
              </div>
              {/* Social Links */}
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Social Links
                </h4>

                <ul className="space-y-2 text-lg">
                  <li>
                    <a
                      href="https://www.instagram.com/roomnroofrealty/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-600 cursor-pointer flex items-center gap-2 transition-colors duration-200"
                    >
                      <FacebookIcon className="size-5" />
                      Facebook
                    </a>
                  </li>

                  <li >
                    <a
                      href="https://www.instagram.com/roomnroofrealty/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-pink-600 cursor-pointer flex items-center gap-2 transition-colors duration-200"
                    >
                      <InstagramIcon className="size-5" />
                      Instagram
                    </a>
                  </li>

                  <li >
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-red-600 cursor-pointer flex items-center gap-2 transition-colors duration-200"
                    >
                      <YoutubeIcon className="size-5" />
                      Youtube
                    </a>
                  </li>

                  <li >
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-600 cursor-pointer flex items-center gap-2 transition-colors duration-200"
                    >
                      <LinkedinIcon className="size-5" />
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>




            <div className="border-t border-white/10 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Room N Roof Realty. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
};

export default Home;
