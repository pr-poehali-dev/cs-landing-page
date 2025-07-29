import Icon from '@/components/ui/icon';

const Rules = () => {
  const rules = [
    {
      category: 'Общие правила',
      icon: 'Shield',
      items: [
        'Запрещены читы и любые программы, дающие преимущество',
        'Не используйте нецензурную лексику в общем чате',
        'Уважайте других игроков и администрацию',
        'Никнеймы должны быть адекватными и не содержать оскорблений'
      ]
    },
    {
      category: 'Игровой процесс',
      icon: 'Target',
      items: [
        'Запрещено намеренное вредительство команде (TK, блокировка)',
        'Запрещено использование багов карт для получения преимущества',
        'Не злоупотребляйте голосовым чатом и текстовыми сообщениями',
        'Играйте честно и соблюдайте спортивный дух'
      ]
    },
    {
      category: 'Коммуникация',
      icon: 'MessageCircle',
      items: [
        'Не спамьте в чате и микрофоне',
        'Реклама других серверов строго запрещена',
        'Обращайтесь к администрации в случае нарушений',
        'Конструктивная критика приветствуется'
      ]
    },
    {
      category: 'Наказания',
      icon: 'AlertTriangle',
      items: [
        'Предупреждение → Мут/Кик → Временный бан → Постоянный бан',
        'За серьёзные нарушения сразу применяется бан',
        'Читерство карается постоянной блокировкой',
        'Апелляции рассматриваются в Discord или на форуме'
      ]
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
              ПРАВИЛА СЕРВЕРА
            </h1>
            <p className="text-xl text-gaming-white max-w-3xl mx-auto">
              Соблюдение правил обеспечивает комфортную игру для всех участников. Незнание правил не освобождает от ответственности.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {rules.map((section, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-sm border border-gaming-gold/30 rounded-xl p-8 hover:bg-black/70 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gaming-gold rounded-lg flex items-center justify-center">
                    <Icon name={section.icon as any} className="text-gaming-dark" size={24} />
                  </div>
                  <h2 className="text-gaming-gold text-2xl font-bold" style={{ fontFamily: 'Russo One, sans-serif' }}>
                    {section.category}
                  </h2>
                </div>
                
                <ul className="space-y-4">
                  {section.items.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start space-x-3 text-gaming-white">
                      <div className="w-2 h-2 bg-gaming-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-gaming-gold/20 p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Icon name="Info" className="text-gaming-gold" size={32} />
                <h3 className="text-gaming-gold text-3xl font-bold" style={{ fontFamily: 'Russo One, sans-serif' }}>
                  ВАЖНАЯ ИНФОРМАЦИЯ
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 text-gaming-white">
                <div>
                  <h4 className="text-gaming-gold text-xl font-bold mb-4" style={{ fontFamily: 'Russo One, sans-serif' }}>
                    КОНТАКТЫ АДМИНИСТРАЦИИ
                  </h4>
                  <div className="space-y-2 text-left">
                    <p>Discord: discord.gg/cs16server</p>
                    <p>VK: vk.com/cs16server</p>
                    <p>Email: admin@cs16server.ru</p>
                    <p>Telegram: @cs16admin</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-gaming-gold text-xl font-bold mb-4" style={{ fontFamily: 'Russo One, sans-serif' }}>
                    ВРЕМЯ РАБОТЫ АДМИНОВ
                  </h4>
                  <div className="space-y-2 text-left">
                    <p>Понедельник - Пятница: 18:00 - 02:00</p>
                    <p>Суббота - Воскресенье: 12:00 - 03:00</p>
                    <p>Экстренная связь: 24/7</p>
                    <p>Время: МСК (UTC+3)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                <p className="text-red-300 font-bold">
                  ⚠️ ВНИМАНИЕ: Администрация оставляет за собой право изменять правила без предварительного уведомления. 
                  Следите за обновлениями в Discord и на сайте.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;