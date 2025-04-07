import React from "react";

const shoes = [
  {
    id: 1,
    name: "Nike Air Zoom",
    price: 120,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-zoom-pegasus-40-mens-road-running-shoes-lZ7khV.png",
  },
  {
    id: 2,
    name: "Nike Flyknit Racer",
    price: 130,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-zoom-pegasus-40-mens-road-running-shoes-lZ7khV.png",
  },
  {
    id: 3,
    name: "Nike Free RN",
    price: 110,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-zoom-pegasus-40-mens-road-running-shoes-lZ7khV.png",
  },
  {
    id: 4,
    name: "Nike Revolution 5",
    price: 100,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-zoom-pegasus-40-mens-road-running-shoes-lZ7khV.png",
  },
];

const ShoeSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto py-16 px-6 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              className="w-full h-48 object-contain mb-4"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/300x300?text=Shoe+Image+Not+Found";
              }}
            />
            <h3 className="text-lg font-semibold">{shoe.name}</h3>
            <p className="text-gray-600 mb-4">${shoe.price}</p>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShoeSection;