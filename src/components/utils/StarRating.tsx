// File: src/components/ui/StarRating.tsx
import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number; // de 1 a 5
};

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-primary-500" : "text-gray-300"
          }`}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}