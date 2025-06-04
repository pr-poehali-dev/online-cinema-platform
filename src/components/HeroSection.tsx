import { Play, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const featuredMovie = {
    title: "Интерстеллар",
    description:
      "Команда исследователей путешествует через червоточину в космосе в попытке обеспечить выживание человечества.",
    year: "2014",
    rating: "8.6",
    genre: "Фантастика, Драма",
    backdrop:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  };

  return (
    <section className="relative h-[70vh] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${featuredMovie.backdrop})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 max-w-2xl">
        <div className="space-y-4">
          {/* Movie Info */}
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded font-semibold">
              ★ {featuredMovie.rating}
            </span>
            <span>{featuredMovie.year}</span>
            <span>{featuredMovie.genre}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white font-montserrat leading-tight">
            {featuredMovie.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
            {featuredMovie.description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 pt-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 font-semibold"
            >
              <Play className="h-5 w-5 mr-2" />
              Смотреть
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-gray-400 text-white hover:bg-white hover:text-black"
            >
              <Plus className="h-5 w-5 mr-2" />
              Мой список
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:bg-gray-800"
            >
              <Info className="h-5 w-5 mr-2" />
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
