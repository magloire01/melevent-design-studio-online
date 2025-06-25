
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, User, LogIn, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/reservations', label: 'Réserver' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-rose-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-rose-gold" />
            <span className="font-playfair text-2xl font-bold gradient-text">
              MelEvent
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-rose-gold border-b-2 border-rose-gold'
                    : 'text-charcoal hover:text-rose-gold'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" size="sm" className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white">
                  <LogIn className="h-4 w-4 mr-2" />
                  Connexion
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="bg-rose-gold hover:bg-rose-gold/90 text-white">
                  <User className="h-4 w-4 mr-2" />
                  Inscription
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 rounded-md font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-rose-gold text-white'
                    : 'text-charcoal hover:bg-soft-pink'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-rose-gold/20">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white">
                  <LogIn className="h-4 w-4 mr-2" />
                  Connexion
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-rose-gold hover:bg-rose-gold/90 text-white">
                  <User className="h-4 w-4 mr-2" />
                  Inscription
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
