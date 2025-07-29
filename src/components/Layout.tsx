import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Главная', path: '/', icon: 'Home' },
    { name: 'Серверы', path: '/servers', icon: 'Server' },
    { name: 'Правила', path: '/rules', icon: 'Shield' },
    { name: 'Поддержка', path: '/donate', icon: 'Heart' }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gaming-gold/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gaming-gold rounded-lg flex items-center justify-center">
                <Icon name="Target" className="text-gaming-dark" size={24} />
              </div>
              <h1 className="text-gaming-gold text-2xl font-bold" style={{ fontFamily: 'Russo One, sans-serif' }}>
                CS 1.6 SERVER
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? 'bg-gaming-gold text-gaming-dark font-bold'
                      : 'text-gaming-white hover:text-gaming-gold hover:bg-gaming-gold/10'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gaming-gold p-2"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gaming-gold/20 pt-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      location.pathname === item.path
                        ? 'bg-gaming-gold text-gaming-dark font-bold'
                        : 'text-gaming-white hover:text-gaming-gold hover:bg-gaming-gold/10'
                    }`}
                  >
                    <Icon name={item.icon as any} size={20} />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm border-t border-gaming-gold/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-gaming-gold text-xl font-bold mb-4" style={{ fontFamily: 'Russo One, sans-serif' }}>
                КОНТАКТЫ
              </h3>
              <div className="space-y-2 text-gaming-white">
                <p>Discord: discord.gg/cs16server</p>
                <p>VK: vk.com/cs16server</p>
                <p>Email: admin@cs16server.ru</p>
              </div>
            </div>
            <div>
              <h3 className="text-gaming-gold text-xl font-bold mb-4" style={{ fontFamily: 'Russo One, sans-serif' }}>
                БЫСТРЫЕ ССЫЛКИ
              </h3>
              <div className="space-y-2">
                {navItems.slice(0, 3).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-gaming-white hover:text-gaming-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-gaming-gold text-xl font-bold mb-4" style={{ fontFamily: 'Russo One, sans-serif' }}>
                СТАТИСТИКА
              </h3>
              <div className="space-y-2 text-gaming-white">
                <p>Онлайн: 99/128</p>
                <p>Всего игроков: 15,432</p>
                <p>Работаем с 2018 года</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gaming-gold/20 text-center">
            <p className="text-gaming-white">
              © 2024 CS 1.6 Server. Все права защищены. Counter-Strike является торговой маркой Valve Corporation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;