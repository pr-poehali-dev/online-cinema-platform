import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MovieRow from "@/components/MovieRow";

const Index = () => {
  // Mock data для демонстрации
  const trendingMovies = [
    {
      id: 1,
      title: "Дюна",
      poster:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "2021",
      rating: "8.0",
      genre: "Фантастика",
    },
    {
      id: 2,
      title: "Топ Ган: Мэверик",
      poster:
        "https://images.unsplash.com/photo-1489599577372-f437f4cfca2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "2022",
      rating: "8.3",
      genre: "Боевик",
    },
    {
      id: 3,
      title: "Всё везде и сразу",
      poster:
        "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "2022",
      rating: "7.8",
      genre: "Комедия",
    },
    {
      id: 4,
      title: "Тёмный рыцарь",
      poster:
        "https://images.unsplash.com/photo-1478720568477-b0ac8b6f5a4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "2008",
      rating: "9.0",
      genre: "Боевик",
    },
    {
      id: 5,
      title: "Начало",
      poster:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "2010",
      rating: "8.8",
      genre: "Триллер",
    },
    {
      id: 6,
      title: "Матрица",
      poster:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "1999",
      rating: "8.7",
      genre: "Фантастика",
    },
  ];

  const popularMovies = [
    {
      id: 7,
      title: "Побег из Шоушенка",
      poster:
        "https://images.unsplash.com/photo-1489599577372-f437f4cfca2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "1994",
      rating: "9.3",
      genre: "Драма",
    },
    {
      id: 8,
      title: "Крёстный отец",
      poster:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "1972",
      rating: "9.2",
      genre: "Криминал",
    },
    {
      id: 9,
      title: "Форрест Гамп",
      poster:
        "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "1994",
      rating: "8.8",
      genre: "Драма",
    },
    {
      id: 10,
      title: "Криминальное чтиво",
      poster:
        "https://images.unsplash.com/photo-1478720568477-b0ac8b6f5a4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "1994",
      rating: "8.9",
      genre: "Криминал",
    },
    {
      id: 11,
      title: "Властелин колец",
      poster:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "2001",
      rating: "8.8",
      genre: "Фэнтези",
    },
    {
      id: 12,
      title: "Звёздные войны",
      poster:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      year: "1977",
      rating: "8.6",
      genre: "Фантастика",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main className="pt-16">
        <HeroSection />

        <div className="container mx-auto px-4 py-12 space-y-12">
          <MovieRow title="В тренде" movies={trendingMovies} />
          <MovieRow title="Популярные фильмы" movies={popularMovies} />
        </div>
      </main>
    </div>
  );
};

export default Index;
