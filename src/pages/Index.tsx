import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [calcLength, setCalcLength] = useState([3]);
  const [calcMaterial, setCalcMaterial] = useState('mdf');
  const [calcPrice, setCalcPrice] = useState(45000);

  const services = [
    {
      icon: 'ChefHat',
      title: 'Кухни на заказ',
      description: 'Современные и классические кухни с учётом всех ваших пожеланий',
      features: ['3D-проект бесплатно', 'Любые размеры', 'Гарантия 5 лет']
    },
    {
      icon: 'Shirt',
      title: 'Шкафы-купе',
      description: 'Встроенные и корпусные шкафы, идеально вписанные в интерьер',
      features: ['Зеркальные двери', 'Внутренняя организация', 'До потолка']
    },
    {
      icon: 'Home',
      title: 'Гардеробные',
      description: 'Системы хранения любой сложности для вашего удобства',
      features: ['Планировка под вас', 'Выдвижные системы', 'LED-подсветка']
    },
    {
      icon: 'Briefcase',
      title: 'Офисная мебель',
      description: 'Столы, стеллажи и системы хранения для бизнеса',
      features: ['Модульные решения', 'Быстрое производство', 'Корпоративный стиль']
    }
  ];

  const portfolio = [
    {
      id: 1,
      title: 'Белоснежная кухня',
      category: 'kitchen',
      image: 'https://cdn.poehali.dev/projects/860eef9e-5ea9-42c7-b3b8-4c56e4d5e9e0/files/31d142e7-4951-46c4-84d7-bc0102dfedd1.jpg',
      description: 'Минимализм с деревянными акцентами'
    },
    {
      id: 2,
      title: 'Встроенный шкаф',
      category: 'wardrobe',
      image: 'https://cdn.poehali.dev/projects/860eef9e-5ea9-42c7-b3b8-4c56e4d5e9e0/files/0ee91080-ab2c-446b-ad0a-9c4d5f45f1a7.jpg',
      description: 'Элегантная система хранения'
    },
    {
      id: 3,
      title: 'Производство',
      category: 'process',
      image: 'https://cdn.poehali.dev/projects/860eef9e-5ea9-42c7-b3b8-4c56e4d5e9e0/files/867bc93b-3385-4a80-8215-2aed94a0d2de.jpg',
      description: 'Качество в каждой детали'
    }
  ];

  const process = [
    { step: 1, icon: 'Phone', title: 'Заявка', text: 'Оставьте заявку онлайн или позвоните нам' },
    { step: 2, icon: 'Ruler', title: 'Замер', text: 'Бесплатный выезд замерщика в удобное время' },
    { step: 3, icon: 'Palette', title: 'Дизайн-проект', text: '3D-визуализация вашей будущей мебели' },
    { step: 4, icon: 'Factory', title: 'Производство', text: 'Изготовление мебели 10-15 рабочих дней' },
    { step: 5, icon: 'Truck', title: 'Доставка и сборка', text: 'Привезём и соберём под ключ' },
    { step: 6, icon: 'Award', title: 'Гарантия', text: 'Полная гарантия на всю продукцию 5 лет' }
  ];

  const materials = [
    { id: 'mdf', name: 'МДФ', price: 15000 },
    { id: 'chipboard', name: 'ДСП', price: 10000 },
    { id: 'wood', name: 'Массив дерева', price: 35000 },
    { id: 'plastic', name: 'Пластик', price: 12000 }
  ];

  const calculatePrice = (length: number, material: string) => {
    const baseMaterial = materials.find(m => m.id === material)?.price || 15000;
    const total = baseMaterial * length;
    setCalcPrice(total);
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Home" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">МебельПро</h1>
              <p className="text-xs text-muted-foreground">Корпусная мебель с 2010 года</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'services', label: 'Услуги' },
              { id: 'portfolio', label: 'Портфолио' },
              { id: 'calculator', label: 'Калькулятор' },
              { id: 'process', label: 'Как мы работаем' },
              { id: 'contact', label: 'Контакты' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary font-semibold' : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать звонок
          </Button>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="animate-slide-up">
              <Badge className="mb-4 text-sm px-4 py-2" variant="secondary">
                <Icon name="Star" size={16} className="mr-2" />
                14 лет на рынке мебели
              </Badge>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-primary">
                Мебель вашей мечты
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Производим кухни, шкафы-купе, гардеробные и офисную мебель премиум-качества. 
                Бесплатный замер и дизайн-проект в подарок.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection('calculator')}>
                  <Icon name="Calculator" size={24} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('portfolio')}>
                  <Icon name="Images" size={24} className="mr-2" />
                  Портфолио работ
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { value: '2500+', label: 'Проектов' },
                  { value: '5 лет', label: 'Гарантия' },
                  { value: '14 дней', label: 'Производство' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/860eef9e-5ea9-42c7-b3b8-4c56e4d5e9e0/files/31d142e7-4951-46c4-84d7-bc0102dfedd1.jpg" 
                  alt="Кухня премиум класса" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs animate-scale-in" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Check" className="text-primary" size={32} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4" variant="outline">
                <Icon name="Wrench" size={18} className="mr-2" />
                Наши услуги
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Что мы производим</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Полный цикл производства корпусной мебели любой сложности
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in border-2" style={{ animationDelay: `${idx * 100}ms` }}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" className="text-primary" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4" variant="outline">
                <Icon name="Images" size={18} className="mr-2" />
                Портфолио
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Наши работы</h2>
              <p className="text-xl text-muted-foreground">
                Более 2500 реализованных проектов по всей России
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="kitchen">Кухни</TabsTrigger>
                <TabsTrigger value="wardrobe">Шкафы</TabsTrigger>
                <TabsTrigger value="process">Процесс</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="grid md:grid-cols-3 gap-6">
                {portfolio.map((item, idx) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                    <img src={item.image} alt={item.title} className="w-full h-80 object-cover transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <Badge className="mb-2 w-fit">{item.category === 'kitchen' ? 'Кухни' : item.category === 'wardrobe' ? 'Шкафы' : 'Производство'}</Badge>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="kitchen" className="grid md:grid-cols-3 gap-6">
                {portfolio.filter(p => p.category === 'kitchen').map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                    <img src={item.image} alt={item.title} className="w-full h-80 object-cover transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="wardrobe" className="grid md:grid-cols-3 gap-6">
                {portfolio.filter(p => p.category === 'wardrobe').map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                    <img src={item.image} alt={item.title} className="w-full h-80 object-cover transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="process" className="grid md:grid-cols-3 gap-6">
                {portfolio.filter(p => p.category === 'process').map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                    <img src={item.image} alt={item.title} className="w-full h-80 object-cover transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="calculator" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <Badge className="mb-4" variant="outline">
                  <Icon name="Calculator" size={18} className="mr-2" />
                  Калькулятор стоимости
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Рассчитайте стоимость</h2>
                <p className="text-xl text-muted-foreground">
                  Узнайте примерную стоимость вашей мебели за 30 секунд
                </p>
              </div>

              <Card className="p-8 shadow-xl border-2 animate-scale-in">
                <CardContent className="space-y-8">
                  <div>
                    <label className="text-lg font-semibold mb-4 block flex items-center gap-2">
                      <Icon name="Ruler" size={20} className="text-primary" />
                      Длина кухни (м): {calcLength[0]} м
                    </label>
                    <Slider
                      value={calcLength}
                      onValueChange={(val) => {
                        setCalcLength(val);
                        calculatePrice(val[0], calcMaterial);
                      }}
                      min={2}
                      max={8}
                      step={0.5}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>2 м</span>
                      <span>8 м</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-lg font-semibold mb-4 block flex items-center gap-2">
                      <Icon name="Layers" size={20} className="text-primary" />
                      Материал фасада
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {materials.map((material) => (
                        <Button
                          key={material.id}
                          variant={calcMaterial === material.id ? 'default' : 'outline'}
                          className="h-auto py-4 flex flex-col gap-1"
                          onClick={() => {
                            setCalcMaterial(material.id);
                            calculatePrice(calcLength[0], material.id);
                          }}
                        >
                          <span className="font-semibold">{material.name}</span>
                          <span className="text-xs opacity-80">{material.price.toLocaleString()} ₽/м</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
                    <div className="text-sm text-muted-foreground mb-2">Примерная стоимость</div>
                    <div className="text-5xl font-bold text-primary mb-2">
                      {calcPrice.toLocaleString()} ₽
                    </div>
                    <div className="text-sm text-muted-foreground mb-6">
                      Финальная цена рассчитывается после замера
                    </div>
                    <Button size="lg" onClick={() => scrollToSection('contact')}>
                      <Icon name="Phone" size={20} className="mr-2" />
                      Заказать точный расчёт
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-0.5" size={18} />
                      <span className="text-muted-foreground">Замер и дизайн-проект бесплатно</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-0.5" size={18} />
                      <span className="text-muted-foreground">Гарантия 5 лет на всю мебель</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary mt-0.5" size={18} />
                      <span className="text-muted-foreground">Рассрочка 0% на 12 месяцев</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4" variant="outline">
                <Icon name="Cog" size={18} className="mr-2" />
                Процесс работы
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Как мы работаем</h2>
              <p className="text-xl text-muted-foreground">
                От первого звонка до установки — прозрачный процесс в 6 этапов
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, idx) => (
                <Card key={idx} className="relative overflow-hidden hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5">{item.step}</div>
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 relative z-10">
                      <Icon name={item.icon as any} className="text-white" size={28} />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary">Этап {item.step}</Badge>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.text}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <Badge className="mb-4" variant="outline">
                  <Icon name="Mail" size={18} className="mr-2" />
                  Контакты
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Оставьте заявку</h2>
                <p className="text-xl text-muted-foreground">
                  Перезвоним в течение 10 минут и запишем на бесплатный замер
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="animate-scale-in">
                  <CardHeader>
                    <CardTitle>Контактная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67' },
                      { icon: 'Mail', label: 'Email', value: 'info@mebelpro.ru' },
                      { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Мебельная, 10' },
                      { icon: 'Clock', label: 'График работы', value: 'Пн-Вс: 09:00 - 21:00' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={item.icon as any} className="text-primary" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{item.label}</div>
                          <div className="text-muted-foreground">{item.value}</div>
                        </div>
                      </div>
                    ))}

                    <div className="pt-4 border-t">
                      <div className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Gift" className="text-primary" size={20} />
                        Бонусы при заказе
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={16} />
                          Бесплатный замер и дизайн-проект
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={16} />
                          Скидка 10% при заказе до конца месяца
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={16} />
                          Рассрочка 0% на 12 месяцев
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-scale-in" style={{ animationDelay: '200ms' }}>
                  <CardHeader>
                    <CardTitle>Быстрая заявка</CardTitle>
                    <CardDescription>Заполните форму и мы перезвоним вам</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                        <Input placeholder="Иван Иванов" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Телефон</label>
                        <Input type="tel" placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Что вас интересует?</label>
                        <Textarea placeholder="Например: кухня 4 метра, белый цвет" rows={4} />
                      </div>
                      <Button className="w-full" size="lg">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить заявку
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Icon name="Home" className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-xl font-bold">МебельПро</div>
                  <div className="text-xs opacity-80">С 2010 года</div>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Производство корпусной мебели премиум-качества
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Кухни на заказ</li>
                <li>Шкафы-купе</li>
                <li>Гардеробные</li>
                <li>Офисная мебель</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О компании</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@mebelpro.ru</li>
                <li>Москва, ул. Мебельная, 10</li>
                <li>Пн-Вс: 09:00 - 21:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
            <div>© 2024 МебельПро. Все права защищены.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-100 transition-opacity">Политика конфиденциальности</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Публичная оферта</a>
            </div>
          </div>
        </div>
      </footer>

      <a 
        href="tel:+74951234567"
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40 animate-scale-in"
      >
        <Icon name="Phone" className="text-white" size={28} />
      </a>
    </div>
  );
};

export default Index;
