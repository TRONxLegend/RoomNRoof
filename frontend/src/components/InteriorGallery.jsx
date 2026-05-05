import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "/images/interior/modern-living-room.png",
    title: "Modern Living Room",
    category: "Living Room",
  },
  {
    id: 2,
    src: "/images/interior/elegant-bedroom.png",
    title: "Elegant Bedroom",
    category: "Bedroom",
  },
  {
    id: 3,
    src: "/images/interior/contemporary-kitchen.png",
    title: "Contemporary Kitchen",
    category: "Kitchen",
  },
  {
    id: 4,
    src: "/images/interior/luxury-bathroom.png",
    title: "Luxury Bathroom",
    category: "Bathroom",
  },
  {
    id: 5,
    src: "/images/interior/minimalist-office.png",
    title: "Minimalist Office",
    category: "Office",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    title: "Stylish Dining Area",
    category: "Dining",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    title: "Cozy Reading Nook",
    category: "Living Room",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    title: "Modern Studio",
    category: "Studio",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Elegant Entryway",
    category: "Entryway",
  },
];

const InteriorGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openLightbox = (index) => setSelectedPhoto(index);
  const closeLightbox = () => setSelectedPhoto(null);

  const goToPrev = () => {
    setSelectedPhoto((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const goToNext = () => {
    setSelectedPhoto((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full">
      {/* Photos Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-square overflow-hidden rounded-xl bg-white/5">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm mb-1">
                  {photo.title}
                </p>
                <p className="text-gray-300 text-xs">{photo.category}</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                <ImageIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 md:left-8 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 md:right-8 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedPhoto}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].title}
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <p className="text-white font-semibold text-lg">
                  {photos[selectedPhoto].title}
                </p>
                <p className="text-gray-400 text-sm">
                  {photos[selectedPhoto].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteriorGallery;
