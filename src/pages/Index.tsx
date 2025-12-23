import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([
    { text: 'Привет! Я помогу подобрать идеальный тур. Задавайте вопросы!', sender: 'bot' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const tours = [
    {
      id: 1,
      title: 'Банджи-джампинг в горах',
      price: '15 000 ₽',
      duration: '1 день',
      difficulty: 'Экстремальный',
      image: 'https://cdn.poehali.dev/projects/860eef9e-5ea9-42c7-b3b8-4c56e4d5e9e0/files/0076bf87-cfd4-4045-bb2f-d94f37352f04.jpg',
      description: 'Прыжок с высоты 200 метров над горным каньоном'
    },
    {
      id: 2,
      title: 'Восхождение на вершину',
      price: '45 000 ₽',
      duration: '5 дней',
      difficulty: 'Сложный',
      image: 'https://cdn.poehali.dev/projects/860eef9e-5ea9-42c7-b3b8-4c56e4d5e9e0/files/52f5f7fa-2021-410d-8e39-8a2bcfa56580.jpg',
      description: 'Покорение снежных вершин с опытными инструкторами'
    },
    {
      id: 3,
      title: 'Рафтинг на горной реке',
      price: '8 000 ₽',
      duration: '3 часа',
      difficulty: 'Средний',
      image: 'https://cdn.poehali.dev/projects/860eef9e-5ea9-42c7-b3b8-4c56e4d5e9e0/files/50c931ad-0236-45cc-b089-58b97be78eac.jpg',
      description: 'Адреналин на бурных порогах с профессиональным гидом'
    }
  ];

  const reviews = [
    { name: 'Дмитрий К.', rating: 5, text: 'Банджи-джампинг был невероятным! Организация на высшем уровне!', avatar: 'DK' },
    { name: 'Анна М.', rating: 5, text: 'Рафтинг превзошёл все ожидания. Море эмоций и безопасности!', avatar: 'AM' },
    { name: 'Сергей П.', rating: 5, text: 'Восхождение на вершину - мечта сбылась! Гиды профессионалы.', avatar: 'СП' }
  ];

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, { text: chatInput, sender: 'user' }]);
    
    setTimeout(() => {
      const responses = [
        'Отличный выбор! Расскажу подробнее об этом туре.',
        'У нас есть специальные предложения на этот тур. Хотите узнать?',
        'Для этого тура нужна базовая физическая подготовка. Подойдёт?',
        'Могу подобрать похожие туры с другим уровнем сложности!'
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
    }, 1000);
    
    setChatInput('');
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 animate-fade-in">
            <Icon name="Flame" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ExtremeGo
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'tours', label: 'Туры', icon: 'Compass' },
              { id: 'gallery', label: 'Галерея', icon: 'Images' },
              { id: 'about', label: 'О нас', icon: 'Info' },
              { id: 'reviews', label: 'Отзывы', icon: 'Star' },
              { id: 'contacts', label: 'Контакты', icon: 'Mail' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 transition-all hover:text-primary ${
                  activeSection === item.id ? 'text-primary font-semibold' : 'text-foreground'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                {item.label}
              </button>
            ))}
          </div>

          <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
            Забронировать
          </Button>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse"></div>
          <div className="container mx-auto px-4 relative z-10 text-center animate-slide-up">
            <Badge className="mb-4 text-lg px-4 py-2" variant="secondary">
              <Icon name="Zap" size={20} className="mr-2" />
              Экстремальные приключения 2024
            </Badge>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Живи на полную!
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Почувствуй адреналин
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Банджи-джампинг, альпинизм, рафтинг — твои экстремальные приключения начинаются здесь
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all" onClick={() => scrollToSection('tours')}>
                <Icon name="Rocket" size={24} className="mr-2" />
                Выбрать тур
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => setChatOpen(true)}>
                <Icon name="MessageCircle" size={24} className="mr-2" />
                Задать вопрос
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: 'Shield', title: 'Безопасность', text: 'Сертифицированное снаряжение' },
                { icon: 'Users', title: 'Опыт', text: '10+ лет на рынке' },
                { icon: 'Award', title: 'Гарантия', text: '100% эмоций' }
              ].map((item, idx) => (
                <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <CardHeader>
                    <Icon name={item.icon as any} className="text-primary mb-2" size={40} />
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.text}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="tours" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="outline">
                <Icon name="Compass" size={18} className="mr-2" />
                Наши туры
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Экстремальные приключения</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                От прыжков с высоты до покорения вершин — выбери своё приключение
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {tours.map((tour, idx) => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="relative h-64 overflow-hidden">
                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform hover:scale-110" />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {tour.difficulty}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{tour.title}</CardTitle>
                    <CardDescription className="text-base">{tour.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Clock" size={18} />
                        {tour.duration}
                      </div>
                      <div className="text-2xl font-bold text-primary">{tour.price}</div>
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Calendar" size={18} className="mr-2" />
                      Забронировать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="outline">
                <Icon name="Images" size={18} className="mr-2" />
                Галерея
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Моменты приключений</h2>
              <p className="text-xl text-muted-foreground">Реальные эмоции наших клиентов</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {tours.map((tour, idx) => (
                <div key={tour.id} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <img src={tour.image} alt={tour.title} className="w-full h-80 object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                      <p className="text-sm">{tour.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <Badge className="mb-4" variant="outline">
                  <Icon name="Info" size={18} className="mr-2" />
                  О компании
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">ExtremeGo — эксперты в экстриме</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Мы создаём незабываемые приключения с 2014 года. Наша команда — сертифицированные инструкторы
                  с международными лицензиями. Более 10,000 довольных клиентов доверили нам свои эмоции.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {[
                  { icon: 'Target', title: 'Наша миссия', text: 'Дарить людям яркие эмоции и незабываемые впечатления через безопасные экстремальные приключения' },
                  { icon: 'Heart', title: 'Наши ценности', text: 'Безопасность превыше всего, профессионализм в каждом действии, искренняя забота о клиентах' }
                ].map((item, idx) => (
                  <Card key={idx} className="border-2 hover:border-primary transition-all animate-scale-in" style={{ animationDelay: `${idx * 150}ms` }}>
                    <CardHeader>
                      <Icon name={item.icon as any} className="text-primary mb-4" size={48} />
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{item.text}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="outline">
                <Icon name="Star" size={18} className="mr-2" />
                Отзывы
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
              <p className="text-xl text-muted-foreground">Реальные отзывы от наших искателей приключений</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: `${idx * 150}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-14 h-14 border-2 border-primary">
                        <AvatarFallback className="bg-primary text-primary-foreground font-bold">{review.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">"{review.text}"</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <Badge className="mb-4" variant="outline">
                  <Icon name="Mail" size={18} className="mr-2" />
                  Контакты
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
                <p className="text-xl text-muted-foreground">Готовы к приключениям? Напишите нам!</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="animate-scale-in">
                  <CardHeader>
                    <CardTitle>Наши контакты</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67' },
                      { icon: 'Mail', label: 'Email', value: 'info@extremego.ru' },
                      { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Приключений, 1' },
                      { icon: 'Clock', label: 'Режим работы', value: 'Пн-Вс: 09:00 - 21:00' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <Icon name={item.icon as any} className="text-primary mt-1" size={24} />
                        <div>
                          <div className="font-semibold">{item.label}</div>
                          <div className="text-muted-foreground">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="animate-scale-in" style={{ animationDelay: '150ms' }}>
                  <CardHeader>
                    <CardTitle>Быстрая заявка</CardTitle>
                    <CardDescription>Оставьте контакты, мы перезвоним в течение 10 минут</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <Input placeholder="Ваше имя" />
                      <Input type="tel" placeholder="Телефон" />
                      <Input type="email" placeholder="Email" />
                      <Textarea placeholder="Сообщение" rows={4} />
                      <Button className="w-full" size="lg">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Flame" className="text-primary" size={32} />
              <span className="text-xl font-bold">ExtremeGo</span>
            </div>
            <div className="text-center md:text-right">
              <p>© 2024 ExtremeGo. Все права защищены.</p>
              <p className="text-sm text-muted">Твой экстрим начинается здесь 🚀</p>
            </div>
          </div>
        </div>
      </footer>

      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border-2 border-primary z-50 animate-scale-in">
          <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="border-2 border-white">
                <AvatarFallback className="bg-accent text-accent-foreground">🎯</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-white">Консультант ExtremeGo</h3>
                <p className="text-xs text-white/80">Онлайн</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={() => setChatOpen(false)}>
              <Icon name="X" size={20} />
            </Button>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gradient-to-br from-secondary/5 to-accent/5">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-primary text-primary-foreground rounded-br-sm' 
                    : 'bg-white border border-border rounded-bl-sm shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <Input 
                placeholder="Напишите ваш вопрос..." 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}

      <Button
        onClick={() => setChatOpen(!chatOpen)}
        size="lg"
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all z-40 animate-scale-in"
      >
        <Icon name={chatOpen ? "X" : "MessageCircle"} size={28} />
      </Button>
    </div>
  );
};

export default Index;
