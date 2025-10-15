// ================================
// 8. src/components/RatingStars.js
// ================================
import { Star } from "lucide-react";

export function RatingStars({
  rating,
  maxRating = 5,
  size = "md",
  interactive = false,
  onRate,
}) {
  const [hoverRating, setHoverRating] = React.useState(0);

  const sizes = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-7 h-7",
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        const isFilled =
          starValue <= (interactive && hoverRating ? hoverRating : rating);

        return (
          <button
            key={index}
            type="button"
            disabled={!interactive}
            onMouseEnter={() => interactive && setHoverRating(starValue)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            onClick={() => interactive && onRate && onRate(starValue)}
            className={interactive ? "cursor-pointer" : "cursor-default"}
          >
            <Star
              className={`${sizes[size]} ${
                isFilled
                  ? "fill-amber-400 text-amber-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
