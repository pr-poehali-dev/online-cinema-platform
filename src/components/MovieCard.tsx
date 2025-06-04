import { useState } from "react";
import { Play, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster: string;
    year: string;
    rating: string;
    genre: string;
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Poster */}
      <div className="relative overflow-hidden rounded-lg bg-gray-800">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="icon"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
            >
              <Play className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span className="text-white text-xs font-semibold">
            {movie.rating}
          </span>
        </div>
      </div>

      {/* Movie Info */}
      <div className="mt-3 space-y-1">
        <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
        </div>
      </div>

      {/* Hover Actions */}
      {isHovered && (
        <div className="absolute -bottom-2 left-0 right-0 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="secondary" className="text-xs">
            <Plus className="h-3 w-3 mr-1" />
            Список
          </Button>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
