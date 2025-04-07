import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const shoeTestimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Marathon Runner",
    message: "The Phantom Lux gave me the perfect balance of cushion and responsiveness for my last race. Beat my personal best by 3 minutes! The breathable material kept my feet cool even during the final sprint. I've never felt this supported in a running shoe before.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    shoe: "Phantom Lux",
    rating: 5,
    verified: true,
    shoeImage: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Hiking Enthusiast",
    message: "My Onyx Trailblazers handled the Rocky Mountains like a dream. Never slipped once on wet terrain! The ankle support was perfect for carrying my 30lb pack. After 50 miles, they still look and feel brand new.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    shoe: "Onyx Trailblazer",
    rating: 4,
    verified: true,
    shoeImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Sneaker Collector",
    message: "The limited edition Eclipse Carbons are my new grails. The carbon fiber details are insane in person. The craftsmanship is impeccable - every stitch is perfect. They're surprisingly comfortable for all-day wear too.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    shoe: "Eclipse Carbon",
    rating: 5,
    verified: true,
    shoeImage: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    name: "Jamal Williams",
    role: "Personal Trainer",
    message: "I recommend the Velocity Pro to all my clients. The arch support is perfect for high-intensity workouts. The energy return during plyometrics is unmatched. Plus, they come in wide sizes which is rare for performance shoes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    shoe: "Velocity Pro",
    rating: 5,
    verified: true,
    shoeImage: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    role: "Fashion Blogger",
    message: "The Neon Pulse shoes get me compliments everywhere I go. That pop of color is everything! I've styled them with both athleisure and dresses - so versatile. The comfort makes them perfect for city walking tours.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    shoe: "Neon Pulse",
    rating: 4,
    verified: true,
    shoeImage: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    name: "David Kim",
    role: "Ultra Runner",
    message: "Put 500 miles on my Nebula Runners and they're still going strong. Worth every penny. The outsole shows minimal wear even after rocky trails. The cushioning hasn't compressed at all - incredible durability.",
    image: "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    shoe: "Nebula Runner",
    rating: 5,
    verified: true,
    shoeImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const starVariants = {
  hidden: { scale: 0, rotate: -90 },
  visible: (i) => ({
    scale: 1,
    rotate: 0,
    transition: { 
      delay: i * 0.15,
      type: "spring",
      stiffness: 500,
      damping: 15
    }
  }),
  hover: { scale: 1.2 }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -45 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { 
      delay: i * 0.15, 
      duration: 0.8,
      type: "spring",
      stiffness: 100
    }
  }),
  hover: {
    y: -10,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.3 }
  },
  tap: { scale: 0.98 }
};

const shoeImageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { delay: 0.4, duration: 0.6 }
  },
  hover: { scale: 1.05 }
};

export default function EnhancedShoeTestimonialSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const constraintsRef = useRef(null);

  const filteredTestimonials = activeFilter === "all" 
    ? shoeTestimonials 
    : shoeTestimonials.filter(t => t.shoe.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white">
            Runners Love Our Kicks
          </h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Hear from athletes and enthusiasts who put our shoes to the test
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {["all", "Phantom", "Onyx", "Eclipse", "Velocity", "Neon", "Nebula"].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6", color: "#111827" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm capitalize ${
                activeFilter === filter 
                  ? 'bg-white text-gray-900' 
                  : 'bg-gray-800 text-gray-300'
              }`}
            >
              {filter === "all" ? "All Shoes" : filter}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={constraintsRef}>
          <AnimatePresence>
            {filteredTestimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer relative overflow-hidden"
                custom={i}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                variants={cardVariants}
                viewport={{ once: true, margin: "-50px" }}
                onClick={() => setExpandedCard(expandedCard === testimonial.id ? null : testimonial.id)}
                onHoverStart={() => setHoveredCard(testimonial.id)}
                onHoverEnd={() => setHoveredCard(null)}
                layout
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <motion.div
                    className="relative mb-6"
                    whileHover="hover"
                    variants={shoeImageVariants}
                  >
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-lg"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    />
                    {hoveredCard === testimonial.id && (
                      <motion.img
                        src={testimonial.shoeImage}
                        alt={testimonial.shoe}
                        className="absolute -bottom-6 -right-6 w-16 h-16 rounded-lg object-cover border border-gray-600 shadow-md"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                  
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, index) => (
                      <motion.svg
                        key={index}
                        className={`w-5 h-5 ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        variants={starVariants}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  
                  <motion.h3 
                    className="text-xl font-semibold mb-1"
                    whileHover={{ color: "#f3f4f6" }}
                  >
                    {testimonial.name}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-gray-400 mb-3"
                    whileHover={{ color: "#d1d5db" }}
                  >
                    {testimonial.role}
                  </motion.p>
                  
                  <motion.div
                    className="bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-300 mb-4"
                    whileHover={{ backgroundColor: "#374151" }}
                  >
                    {testimonial.shoe}
                  </motion.div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      className="relative overflow-hidden"
                      initial={{ height: "4.5rem" }}
                      animate={{ 
                        height: expandedCard === testimonial.id ? "auto" : "4.5rem" 
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <motion.p 
                        className="text-gray-300 text-left"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        "{testimonial.message}"
                      </motion.p>
                      
                      {expandedCard !== testimonial.id && (
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-800 to-transparent"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                  
                  {testimonial.verified && (
                    <motion.div 
                      className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold transition-all relative overflow-hidden"
          >
            <span className="relative z-10">Read More Testimonials</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 hover:opacity-100"
              style={{ zIndex: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}