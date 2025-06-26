// File: src/sections/Testimonials.tsx
import StarRating from "@/components/utils/StarRating";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      name: "Carlos Silva",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      rating: 4,
      name: "Maria Oliveira",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      rating: 5,
      name: "João Martins",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section className="container-large py-40 bg-gray-100 bg-[url('/assets/testimonials.svg')] bg-no-repeat bg-bottom">
      <h2 className="text-center text-secondary-500 mb-10">Depoimentos</h2>
      <div className="flex flex-wrap gap-10">
        {testimonials.map(({ name, text, rating }) => (
          <blockquote
            key={name}
            className="flex flex-col flex-1 w-full sm:min-w-[420px] p-8 bg-white rounded-2xl"
          >
            <StarRating rating={rating} />
            <p className="r4 text-gray-800 mb-4">"{text}"</p>
            <p className="sb4 mt-auto text-secondary-500">— {name}</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}