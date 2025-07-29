import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Home = () => {
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
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-12 max-w-5xl mx-auto border border-gaming-gold/20">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gaming-gold rounded-full flex items-center justify-center">
                  <Icon name="Target" className="text-gaming-dark" size={40} />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-bold text-gaming-gold mb-8" style={{ fontFamily: 'Russo One, sans-serif' }}>
                CS 1.6 SERVER
              </h1>
              
              <p className="text-xl md:text-3xl text-gaming-white mb-12 leading-relaxed max-w-4xl mx-auto">
                Возвращайся в легендарную Counter-Strike 1.6! <br />
                Классические карты, честная игра, активное сообщество.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-black/20 rounded-xl p-6 border border-gaming-gold/10">
                  <Icon name="Users" className="text-gaming-gold mx-auto mb-4" size={48} />
                  <h3 className="text-gaming-gold text-xl font-bold mb-2" style={{ fontFamily: 'Russo One, sans-serif' }}>
                    АКТИВНОЕ СООБЩЕСТВО
                  </h3>
                  <p className="text-gaming-white">
                    Более 15,000 зарегистрированных игроков
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-xl p-6 border border-gaming-gold/10">
                  <Icon name="Shield" className="text-gaming-gold mx-auto mb-4" size={48} />
                  <h3 className="text-gaming-gold text-xl font-bold mb-2" style={{ fontFamily: 'Russo One, sans-serif' }}>
                    БЕЗ ЧИТЕРОВ
                  </h3>
                  <p className="text-gaming-white">
                    Современная античит система и активная модерация
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-xl p-6 border border-gaming-gold/10">
                  <Icon name="Clock" className="text-gaming-gold mx-auto mb-4" size={48} />
                  <h3 className="text-gaming-gold text-xl font-bold mb-2" style={{ fontFamily: 'Russo One, sans-serif' }}>
                    24/7 ОНЛАЙН
                  </h3>
                  <p className="text-gaming-white">
                    Стабильная работа серверов круглосуточно
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/servers">
                  <Button 
                    className="bg-gaming-gold hover:bg-yellow-500 text-gaming-dark font-bold py-4 px-10 text-xl transition-all transform hover:scale-105"
                    style={{ fontFamily: 'Russo One, sans-serif' }}
                  >
                    ИГРАТЬ СЕЙЧАС
                  </Button>
                </Link>
                
                <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="border-2 border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark font-bold py-4 px-10 text-xl transition-all"
                    style={{ fontFamily: 'Russo One, sans-serif' }}
                  >
                    <Icon name="MessageCircle" className="mr-2" size={24} />
                    DISCORD
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-20 bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gaming-gold mb-2" style={{ fontFamily: 'Russo One, sans-serif' }}>
                  99
                </div>
                <p className="text-gaming-white">Игроков онлайн</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gaming-gold mb-2" style={{ fontFamily: 'Russo One, sans-serif' }}>
                  4
                </div>
                <p className="text-gaming-white">Активных сервера</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gaming-gold mb-2" style={{ fontFamily: 'Russo One, sans-serif' }}>
                  24/7
                </div>
                <p className="text-gaming-white">Работаем</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gaming-gold mb-2" style={{ fontFamily: 'Russo One, sans-serif' }}>
                  2018
                </div>
                <p className="text-gaming-white">Год основания</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;