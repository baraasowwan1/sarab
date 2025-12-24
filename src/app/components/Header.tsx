import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl tracking-wide">سراب</h1>
          <span className="text-xl text-gray-600">SARAB</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button onClick={() => scrollToSection('home')} className="hover:text-gray-600 transition-colors">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('collection')} className="hover:text-gray-600 transition-colors">
              Collection
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 transition-colors">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 transition-colors">
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <ul className="flex flex-col p-4 gap-4">
              <li>
                <button onClick={() => scrollToSection('home')} className="w-full text-left py-2">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collection')} className="w-full text-left py-2">
                  Collection
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="w-full text-left py-2">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="w-full text-left py-2">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
