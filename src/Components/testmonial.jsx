import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, Acme Corp",
    message: "This product has completely transformed the way we work. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "John Smith",
    role: "Developer, DevStudio",
    message: "Great experience! The UI is sleek and the performance is top-notch.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Alice Johnson",
    role: "Designer, PixelPerfect",
    message: "Loved the intuitive design and smooth animations. A+ experience!",
    image: "https://i.pravatar.cc/150?img=45",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 mb-12">Hear from some of our happy customers</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                <p className="text-gray-700 mt-4 italic">"{testimonial.message}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
