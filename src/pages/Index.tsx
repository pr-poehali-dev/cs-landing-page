import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [copiedIP, setCopiedIP] = useState<string>('');

  const copyToClipboard = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedIP(ip);
    setTimeout(() => setCopiedIP(''), 2000);
  };

  const privileges = [
    {
      name: 'VIP',
      price: '299₽',
      features: ['Эксклюзивные скины', 'Приоритет в очереди', 'Специальные команды', 'VIP чат'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'ADMIN',
      price: '599₽',
      features: ['Все VIP привилегии', 'Модерация сервера', 'Кик/бан игроков', 'Админ панель'],
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'SLOT',
      price: '99₽',
      features: ['Зарезервированный слот', 'Быстрое подключение', 'Защита от кика', '30 дней доступа'],
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const servers = [
    { name: 'Dust2 24/7', ip: '185.135.10.53:27015', players: '28/32' },
    { name: 'Mirage Only', ip: '185.135.10.54:27015', players: '24/32' },
    { name: 'Classic Maps', ip: '185.135.10.55:27015', players: '31/32' },
    { name: 'Deathmatch', ip: '185.135.10.56:27015', players: '16/32' }
  ];

  const rules = [
    'Запрещены читы и любые программы, дающие преимущество',
    'Не используйте нецензурную лексику в общем чате',
    'Запрещено намеренное вредительство команде (TK, блокировка)',
    'Уважайте других игроков и администрацию',
    'Запрещено использование багов карт',
    'Не спамьте в чате и микрофоне',
    'Реклама других серверов запрещена',
    'Никнеймы должны быть адекватными'
  ];

  return (
    <div className="min-h-screen bg-gaming-dark relative overflow-x-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/4eba2a41-8697-4da5-94a6-9e27e1541fcf.jpg')`,
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black/80 backdrop-blur-sm border-b border-gaming-gold/20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gaming-gold rounded-lg flex items-center justify-center">
                  <Icon name="Target" className="text-gaming-dark" size={24} />
                </div>
                <h1 className="text-gaming-gold text-2xl font-bold" style={{ fontFamily: 'Russo One, sans-serif' }}>
                  CS 1.6 SERVER
                </h1>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#privileges" className="text-gaming-white hover:text-gaming-gold transition-colors">
                  Привилегии
                </a>
                <a href="#servers" className="text-gaming-white hover:text-gaming-gold transition-colors">
                  Серверы
                </a>
                <a href="#rules" className="text-gaming-white hover:text-gaming-gold transition-colors">
                  Правила
                </a>
                <a href="#contact" className="text-gaming-white hover:text-gaming-gold transition-colors">
                  Контакты
                </a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-gaming-gold/20">
              <h1 className="text-5xl md:text-7xl font-bold text-gaming-gold mb-6" style={{ fontFamily: 'Russo One, sans-serif' }}>
                ДОБРО ПОЖАЛОВАТЬ
              </h1>
              <p className="text-xl md:text-2xl text-gaming-white mb-8 leading-relaxed">
                Легендарный Counter-Strike 1.6 ждёт тебя! Присоединяйся к нашему сообществу и покажи своё мастерство в классических матчах.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gaming-gold hover:bg-yellow-500 text-gaming-dark font-bold py-3 px-8 text-lg transition-all transform hover:scale-105"
                  style={{ fontFamily: 'Russo One, sans-serif' }}
                >
                  НАЧАТЬ ИГРУ
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark font-bold py-3 px-8 text-lg transition-all"
                  style={{ fontFamily: 'Russo One, sans-serif' }}
                >
                  DISCORD
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Privileges Section */}
        <section id="privileges" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gaming-gold mb-12" style={{ fontFamily: 'Russo One, sans-serif' }}>
              ПРИВИЛЕГИИ
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {privileges.map((privilege, index) => (
                <Card key={index} className="bg-black/60 border-gaming-gold/30 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${privilege.color} flex items-center justify-center mb-4`}>
                      <Icon name="Crown" className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-gaming-gold text-2xl" style={{ fontFamily: 'Russo One, sans-serif' }}>
                      {privilege.name}
                    </CardTitle>
                    <p className="text-gaming-white text-3xl font-bold">{privilege.price}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {privilege.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gaming-white">
                          <Icon name="Check" className="text-gaming-gold mr-2" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-gaming-gold hover:bg-yellow-500 text-gaming-dark font-bold transition-all transform hover:scale-105"
                      style={{ fontFamily: 'Russo One, sans-serif' }}
                    >
                      КУПИТЬ
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Servers Section */}
        <section id="servers" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gaming-gold mb-12" style={{ fontFamily: 'Russo One, sans-serif' }}>
              НАШИ СЕРВЕРЫ
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {servers.map((server, index) => (
                <div key={index} className="bg-black/60 backdrop-blur-sm border border-gaming-gold/30 rounded-lg p-6 hover:bg-black/70 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gaming-gold text-xl font-bold" style={{ fontFamily: 'Russo One, sans-serif' }}>
                      {server.name}
                    </h3>
                    <span className="text-gaming-white bg-gaming-gray px-3 py-1 rounded-full text-sm">
                      {server.players}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <code className="text-gaming-white bg-gaming-gray px-3 py-2 rounded font-mono">
                      {server.ip}
                    </code>
                    <Button
                      onClick={() => copyToClipboard(server.ip)}
                      variant="outline"
                      className={`ml-3 border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark transition-all ${
                        copiedIP === server.ip ? 'bg-gaming-gold text-gaming-dark' : ''
                      }`}
                    >
                      <Icon name={copiedIP === server.ip ? "Check" : "Copy"} size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section id="rules" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gaming-gold mb-12" style={{ fontFamily: 'Russo One, sans-serif' }}>
              ПРАВИЛА СЕРВЕРА
            </h2>
            <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gaming-gold/20">
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start text-gaming-white">
                    <span className="text-gaming-gold font-bold mr-3 mt-1" style={{ fontFamily: 'Russo One, sans-serif' }}>
                      {index + 1}.
                    </span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-black/80 backdrop-blur-sm border-t border-gaming-gold/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-gaming-gold text-xl font-bold mb-4" style={{ fontFamily: 'Russo One, sans-serif' }}>
                  КОНТАКТЫ
                </h3>
                <p className="text-gaming-white mb-2">Discord: discord.gg/cs16server</p>
                <p className="text-gaming-white mb-2">VK: vk.com/cs16server</p>
                <p className="text-gaming-white">Email: admin@cs16server.ru</p>
              </div>
              <div>
                <h3 className="text-gaming-gold text-xl font-bold mb-4" style={{ fontFamily: 'Russo One, sans-serif' }}>
                  БЫСТРЫЕ ССЫЛКИ
                </h3>
                <div className="space-y-2">
                  <a href="#privileges" className="block text-gaming-white hover:text-gaming-gold transition-colors">
                    Купить привилегии
                  </a>
                  <a href="#servers" className="block text-gaming-white hover:text-gaming-gold transition-colors">
                    Список серверов
                  </a>
                  <a href="#rules" className="block text-gaming-white hover:text-gaming-gold transition-colors">
                    Правила
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-gaming-gold text-xl font-bold mb-4" style={{ fontFamily: 'Russo One, sans-serif' }}>
                  СТАТИСТИКА
                </h3>
                <p className="text-gaming-white mb-2">Онлайн: 99/128</p>
                <p className="text-gaming-white mb-2">Всего игроков: 15,432</p>
                <p className="text-gaming-white">Работаем с 2018 года</p>
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
    </div>
  );
};

export default Index;