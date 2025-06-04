import { useState } from "react";
import { Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-white font-montserrat">
            CinemaHub
          </h1>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Фильмы
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Сериалы
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Мой список
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            {isSearchOpen ? (
              <Input
                type="text"
                placeholder="Поиск фильмов..."
                className="w-64 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* User Profile */}
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <User className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
