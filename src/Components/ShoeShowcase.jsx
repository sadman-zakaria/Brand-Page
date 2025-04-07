import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ShoeShowcaseDark = () => {
  const [cart, setCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  const shoes = [
    {
      id: 1,
      name: "Phantom Lux",
      price: 2490,
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      colors: ["#6b7280", "#111827", "#b91c1c"],
      sizes: [8, 9, 10, 11],
      category: "running",
      rating: 4.8,
      stock: 15
    },
    {
      id: 2,
      name: "Nebula Runner",
      price: 2190,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      colors: ["#1e40af", "#7c3aed", "#0d9488"],
      sizes: [7, 8, 9, 10, 11],
      category: "lifestyle",
      rating: 4.5,
      stock: 8
    },
    {
      id: 3,
      name: "Onyx Trailblazer",
      price: 1990,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      colors: ["#1f2937", "#831843", "#854d0e"],
      sizes: [8, 9, 10, 12],
      category: "hiking",
      rating: 4.9,
      stock: 5
    },
    {
      id: 4,
      name: "Velocity Pro",
      price: 2790,
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      colors: ["#0ea5e9", "#f59e0b", "#10b981"],
      sizes: [7, 8, 9, 10, 11, 12],
      category: "running",
      rating: 4.7,
      stock: 12
    },
    {
      id: 5,
      name: "Eclipse Carbon",
      price: 2990,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      colors: ["#000000", "#333333", "#555555"],
      sizes: [8, 9, 10, 11],
      category: "running",
      rating: 4.9,
      stock: 3,
      limited: true
    },
    {
      id: 6,
      name: "Aurora Flex",
      price: 2390,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      colors: ["#7c3aed", "#9333ea", "#a855f7"],
      sizes: [7, 8, 9, 10],
      category: "lifestyle",
      rating: 4.6,
      stock: 7
    },
    {
      id: 7,
      name: "Terra Trek",
      price: 2590,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      colors: ["#854d0e", "#a16207", "#ca8a04"],
      sizes: [8, 9, 10, 11, 12],
      category: "hiking",
      rating: 4.8,
      stock: 9
    },
    {
      id: 8,
      name: "Neon Pulse",
      price: 2290,
      image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
      colors: ["#e11d48", "#db2777", "#c026d3"],
      sizes: [7, 8, 9, 10, 11],
      category: "lifestyle",
      rating: 4.4,
      stock: 11,
      new: true
    }
  ];

  const filteredShoes = activeFilter === "all" 
    ? shoes 
    : shoes.filter(shoe => shoe.category === activeFilter);

  const addToCart = (shoe) => {
    if (!selectedSize) return;
    setCart([...cart, { ...shoe, size: selectedSize, quantity: 1 }]);
    setSelectedSize(null);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ));
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      {/* Shopping Cart Preview */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-4 right-4 bg-gray-800 p-4 rounded-lg shadow-xl z-50 max-w-xs w-full"
          >
            <h3 className="font-bold mb-2 flex justify-between items-center">
              <span>Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</span>
              <button 
                onClick={() => setCart([])}
                className="text-sm text-gray-400 hover:text-white"
              >
                Clear All
              </button>
            </h3>
            <div className="max-h-60 overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex items-center py-2 border-b border-gray-700">
                  <img 
                    src={`${item.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`} 
                    alt={item.name} 
                    className="w-12 h-12 object-cover rounded mr-2"
                  />
                  <div className="flex-1">
                    <p className="text-sm">{item.name}</p>
                    <p className="text-xs text-gray-400">Size: {item.size} | Qty: 
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="mx-1 px-1 rounded hover:bg-gray-700"
                      >
                        -
                      </button>
                      {item.quantity}
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="mx-1 px-1 rounded hover:bg-gray-700"
                      >
                        +
                      </button>
                    </p>
                  </div>
                  <p className="font-bold">${item.price * item.quantity}</p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 text-red-500 hover:text-red-400"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
              <span className="font-bold">Total:</span>
              <span className="font-bold">
                ${cart.reduce((total, item) => total + (item.price * item.quantity), 0)}
              </span>
            </div>
            <button className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 py-2 rounded font-medium">
              Proceed to Checkout
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setQuickViewProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-8 p-6">
                <div className="relative h-96">
                  <img
                    src={`${quickViewProduct.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`}
                    alt={quickViewProduct.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  {quickViewProduct.limited && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      LIMITED EDITION
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{quickViewProduct.name}</h2>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-gray-400">{quickViewProduct.rating} ({quickViewProduct.stock} in stock)</span>
                  </div>
                  <p className="text-2xl font-bold mb-6">${quickViewProduct.price}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Colors</h3>
                    <div className="flex space-x-2">
                      {quickViewProduct.colors.map((color) => (
                        <div 
                          key={color}
                          className="w-8 h-8 rounded-full border-2 border-gray-600 hover:border-white cursor-pointer"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Select Size</h3>
                    <div className="flex flex-wrap gap-2">
                      {quickViewProduct.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-12 h-12 rounded flex items-center justify-center ${
                            selectedSize === size
                              ? 'bg-white text-gray-900'
                              : 'bg-gray-700 hover:bg-gray-600'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={() => {
                        if (selectedSize) {
                          addToCart(quickViewProduct);
                          setQuickViewProduct(null);
                        }
                      }}
                      className={`flex-1 py-3 rounded-lg font-bold ${
                        selectedSize
                          ? 'bg-emerald-600 hover:bg-emerald-500'
                          : 'bg-gray-700 cursor-not-allowed'
                      }`}
                    >
                      Add to Cart
                    </button>
                    <button className="bg-transparent border-2 border-gray-600 hover:border-white px-6 rounded-lg font-bold">
                      Save for Later
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* E-commerce Showcase */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold mb-2">Premium Collection</h2>
            <p className="text-gray-400">Engineered for performance, designed for style</p>
          </div>
          
          <div className="flex space-x-2 mt-4 md:mt-0 overflow-x-auto pb-2 w-full md:w-auto">
            {['all', 'running', 'lifestyle', 'hiking'].map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm capitalize whitespace-nowrap ${
                  activeFilter === filter 
                    ? 'bg-white text-gray-900' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredShoes.map((shoe, index) => (
            <motion.div
              key={shoe.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden hover:shadow-gray-800/50 transition-all duration-300 relative group"
            >
              {/* Product Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
                {shoe.limited && (
                  <span className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    LIMITED
                  </span>
                )}
                {shoe.new && (
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}
                {shoe.stock < 5 && (
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    SELLING FAST
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 p-2 bg-gray-900/50 rounded-full hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => setQuickViewProduct(shoe)}
              >
                <img
                  src={`${shoe.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`}
                  alt={shoe.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-2">
                    {shoe.colors.map((color) => (
                      <div 
                        key={color}
                        className="w-5 h-5 rounded-full border border-gray-600"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{shoe.name}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm">{shoe.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-3">{shoe.category.toUpperCase()}</p>
                
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-2xl font-bold">${shoe.price}</span>
                    {shoe.stock < 10 && (
                      <p className="text-xs text-red-400 mt-1">Only {shoe.stock} left!</p>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuickViewProduct(shoe);
                    }}
                    className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company Story Section */}
      <section 
        ref={ref}
        className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-3xl my-16 overflow-hidden relative"
      >
        {/* Animated background elements */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 0.1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-900 blur-3xl"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 0.1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-purple-900 blur-3xl"
        />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              Crafting The Future of Footwear
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl">
              Each pair is meticulously designed using sustainable materials and cutting-edge technology to deliver unparalleled comfort and style.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-white transition-colors"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-300">
                Our R&D team constantly pushes boundaries with new materials and construction techniques.
              </p>
              <button className="mt-4 text-sm text-emerald-400 hover:text-emerald-300 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-white transition-colors"
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-300">
                85% of our materials are recycled or plant-based, with a goal of 100% by 2025.
              </p>
              <button className="mt-4 text-sm text-emerald-400 hover:text-emerald-300 flex items-center">
                Our initiatives
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-white transition-colors"
            >
              <div className="text-4xl mb-4">✊</div>
              <h3 className="text-2xl font-bold mb-3">Community</h3>
              <p className="text-gray-300">
                We support athlete development programs and local manufacturing communities.
              </p>
              <button className="mt-4 text-sm text-emerald-400 hover:text-emerald-300 flex items-center">
                Meet the team
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-all"
            >
              Explore Our Technology
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all"
            >
              Customize Your Pair
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8 md:p-12 my-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Subscribe to get exclusive offers, early access to new releases, and insider updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold"
          >
            Subscribe
          </motion.button>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </motion.section>
    </div>
  );
};

export default ShoeShowcaseDark;