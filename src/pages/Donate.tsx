import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Donate = () => {
  const privileges = [
    {
      name: 'SLOT',
      price: '99₽',
      duration: '30 дней',
      features: [
        'Зарезервированный слот на всех серверах',
        'Быстрое подключение при полном сервере',
        'Защита от кика при заполнении',
        'Приоритет в очереди подключения'
      ],
      color: 'from-blue-400 to-blue-600',
      popular: false
    },
    {
      name: 'VIP',
      price: '299₽',
      duration: '30 дней',
      features: [
        'Все привилегии SLOT',
        'Эксклюзивные модели игроков',
        'Расширенный набор звуков',
        'VIP чат и команды',
        'Статистика и ранги',
        'Специальные эмоции'
      ],
      color: 'from-yellow-400 to-yellow-600',
      popular: true
    },
    {
      name: 'ADMIN',
      price: '599₽',
      duration: '30 дней',
      features: [
        'Все привилегии VIP',
        'Права модерации сервера',
        'Кик/бан нарушителей',
        'Смена карт и режимов',
        'Админ панель управления',
        'Доступ к логам сервера'
      ],
      color: 'from-red-400 to-red-600',
      popular: false
    }
  ];

  const paymentMethods = [
    { name: 'Банковская карта', icon: 'CreditCard', description: 'Visa, MasterCard, МИР' },
    { name: 'СБП', icon: 'Smartphone', description: 'Система быстрых платежей' },
    { name: 'QIWI', icon: 'Wallet', description: 'QIWI кошелёк' },
    { name: 'Steam', icon: 'Gift', description: 'Скины и предметы' }
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
              ПОДДЕРЖКА ПРОЕКТА
            </h1>
            <p className="text-xl text-gaming-white max-w-3xl mx-auto">
              Твоя поддержка помогает развивать серверы и поддерживать их работу. Получи крутые привилегии и помоги проекту!
            </p>
          </div>

          {/* Privileges */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {privileges.map((privilege, index) => (
              <Card key={index} className={`bg-black/60 border-gaming-gold/30 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:scale-105 ${privilege.popular ? 'ring-2 ring-gaming-gold' : ''}`}>
                {privilege.popular && (
                  <div className="bg-gaming-gold text-gaming-dark text-center py-2 rounded-t-lg font-bold">
                    ПОПУЛЯРНЫЙ ВЫБОР
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${privilege.color} flex items-center justify-center mb-4`}>
                    <Icon name="Crown" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-gaming-gold text-3xl" style={{ fontFamily: 'Russo One, sans-serif' }}>
                    {privilege.name}
                  </CardTitle>
                  <div>
                    <p className="text-gaming-white text-4xl font-bold">{privilege.price}</p>
                    <p className="text-gaming-white/70 text-sm">на {privilege.duration}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {privilege.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gaming-white">
                        <Icon name="Check" className="text-gaming-gold mr-3 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-gaming-gold hover:bg-yellow-500 text-gaming-dark font-bold py-3 transition-all transform hover:scale-105"
                    style={{ fontFamily: 'Russo One, sans-serif' }}
                  >
                    КУПИТЬ {privilege.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-gaming-gold/20 p-8 max-w-4xl mx-auto mb-16">
            <h3 className="text-gaming-gold text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Russo One, sans-serif' }}>
              СПОСОБЫ ОПЛАТЫ
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-black/30 rounded-lg p-6 text-center hover:bg-black/50 transition-all">
                  <Icon name={method.icon as any} className="text-gaming-gold mx-auto mb-4" size={48} />
                  <h4 className="text-gaming-gold font-bold mb-2" style={{ fontFamily: 'Russo One, sans-serif' }}>
                    {method.name}
                  </h4>
                  <p className="text-gaming-white/70 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-gaming-gold/20 p-8 max-w-4xl mx-auto">
            <h3 className="text-gaming-gold text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Russo One, sans-serif' }}>
              ЧАСТЫЕ ВОПРОСЫ
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-gaming-gold text-lg font-bold mb-2">Как активируются привилегии?</h4>
                <p className="text-gaming-white">После успешной оплаты привилегии активируются автоматически в течение 5 минут. Если этого не произошло, свяжитесь с администрацией.</p>
              </div>
              <div>
                <h4 className="text-gaming-gold text-lg font-bold mb-2">Можно ли вернуть деньги?</h4>
                <p className="text-gaming-white">Возврат средств возможен только в случае технических проблем с нашей стороны. Добровольный возврат не производится.</p>
              </div>
              <div>
                <h4 className="text-gaming-gold text-lg font-bold mb-2">Работают ли привилегии на всех серверах?</h4>
                <p className="text-gaming-white">Да, все привилегии действуют на всех серверах нашего проекта без исключений.</p>
              </div>
              <div>
                <h4 className="text-gaming-gold text-lg font-bold mb-2">Что если меня забанили?</h4>
                <p className="text-gaming-white">При получении бана привилегии не возвращаются. Срок действия не продлевается на время бана.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;