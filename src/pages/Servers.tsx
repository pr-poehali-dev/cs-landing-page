import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Servers = () => {
  const [copiedIP, setCopiedIP] = useState<string>('');

  const copyToClipboard = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedIP(ip);
    setTimeout(() => setCopiedIP(''), 2000);
  };

  const servers = [
    { 
      name: 'Dust2 24/7', 
      ip: '185.135.10.53:27015', 
      players: '28/32',
      map: 'de_dust2',
      ping: '15ms',
      status: 'online'
    },
    { 
      name: 'Mirage Only', 
      ip: '185.135.10.54:27015', 
      players: '24/32',
      map: 'de_mirage',
      ping: '12ms',
      status: 'online'
    },
    { 
      name: 'Classic Maps Mix', 
      ip: '185.135.10.55:27015', 
      players: '31/32',
      map: 'de_inferno',
      ping: '18ms',
      status: 'online'
    },
    { 
      name: 'Deathmatch Arena', 
      ip: '185.135.10.56:27015', 
      players: '16/32',
      map: 'de_dust2',
      ping: '20ms',
      status: 'online'
    }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark relative overflow-x-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/4eba2a41-8697-4da5-94a6-9e27e1541fcf.jpg')`,
          filter: 'brightness(0.2)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gaming-gold mb-6" style={{ fontFamily: 'Russo One, sans-serif' }}>
              НАШИ СЕРВЕРЫ
            </h1>
            <p className="text-xl text-gaming-white max-w-3xl mx-auto">
              Выбирай сервер по душе и присоединяйся к игре! Все серверы работают на высокой скорости с низким пингом.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {servers.map((server, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-sm border border-gaming-gold/30 rounded-xl p-6 hover:bg-black/70 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <h3 className="text-gaming-gold text-2xl font-bold" style={{ fontFamily: 'Russo One, sans-serif' }}>
                      {server.name}
                    </h3>
                  </div>
                  <span className="text-gaming-white bg-gaming-gray px-4 py-2 rounded-full font-bold">
                    {server.players}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-gaming-gold font-bold mb-1">КАРТА</div>
                    <div className="text-gaming-white">{server.map}</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-gaming-gold font-bold mb-1">ПИНГ</div>
                    <div className="text-gaming-white">{server.ping}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="text-gaming-gold text-sm font-bold mb-1">IP-АДРЕС</div>
                    <code className="text-gaming-white bg-gaming-gray px-4 py-3 rounded-lg font-mono text-lg block">
                      {server.ip}
                    </code>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Button
                      onClick={() => copyToClipboard(server.ip)}
                      className={`transition-all ${
                        copiedIP === server.ip 
                          ? 'bg-green-600 hover:bg-green-700 text-white' 
                          : 'bg-gaming-gold hover:bg-yellow-500 text-gaming-dark'
                      }`}
                      style={{ fontFamily: 'Russo One, sans-serif' }}
                    >
                      <Icon name={copiedIP === server.ip ? "Check" : "Copy"} size={16} className="mr-2" />
                      {copiedIP === server.ip ? 'СКОПИРОВАНО' : 'КОПИРОВАТЬ'}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark transition-all"
                      style={{ fontFamily: 'Russo One, sans-serif' }}
                    >
                      <Icon name="Play" size={16} className="mr-2" />
                      ИГРАТЬ
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-gaming-gold/20 p-8 max-w-2xl mx-auto">
              <h3 className="text-gaming-gold text-2xl font-bold mb-4" style={{ fontFamily: 'Russo One, sans-serif' }}>
                КАК ПОДКЛЮЧИТЬСЯ?
              </h3>
              <div className="space-y-3 text-gaming-white text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-gaming-gold font-bold" style={{ fontFamily: 'Russo One, sans-serif' }}>1.</span>
                  <span>Скопируй IP-адрес сервера</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gaming-gold font-bold" style={{ fontFamily: 'Russo One, sans-serif' }}>2.</span>
                  <span>Запусти Counter-Strike 1.6</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gaming-gold font-bold" style={{ fontFamily: 'Russo One, sans-serif' }}>3.</span>
                  <span>Нажми "~" и введи: connect IP-адрес</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gaming-gold font-bold" style={{ fontFamily: 'Russo One, sans-serif' }}>4.</span>
                  <span>Наслаждайся игрой!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servers;