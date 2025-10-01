import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const phoneNumber = "+79175423023";
  const whatsappLink = `https://wa.me/79175423023`;

  const services = [
    {
      icon: "Wrench",
      title: "Отключение мочевины",
      description: "Профессиональное программное отключение системы AdBlue с сохранением всех функций двигателя"
    },
    {
      icon: "Cpu",
      title: "Перепрошивка ЭБУ",
      description: "Корректировка программного обеспечения блока управления для стабильной работы без системы SCR"
    },
    {
      icon: "Settings",
      title: "Удаление ошибок",
      description: "Полное удаление ошибок, связанных с системой AdBlue, без влияния на другие системы"
    },
    {
      icon: "Shield",
      title: "Диагностика систем",
      description: "Комплексная диагностика всех систем грузовика на современном оборудовании"
    }
  ];

  const guarantees = [
    {
      icon: "Award",
      title: "Гарантия качества",
      description: "12 месяцев гарантии на все виды работ"
    },
    {
      icon: "Clock",
      title: "Быстрое выполнение",
      description: "Отключение за 2-4 часа в день обращения"
    },
    {
      icon: "FileCheck",
      title: "Официальный договор",
      description: "Документальное оформление всех услуг"
    },
    {
      icon: "Gauge",
      title: "Без потери мощности",
      description: "Сохранение заводских характеристик двигателя"
    }
  ];

  const reviews = [
    {
      name: "Александр М.",
      company: "ТК «Логистик Плюс»",
      text: "Отключили мочевину на трёх Скания. Работают без нареканий уже 8 месяцев. Экономия на расходниках ощутимая.",
      rating: 5
    },
    {
      name: "Дмитрий К.",
      company: "ИП Транспорт",
      text: "Быстро и профессионально. Приехал утром, к обеду уже уехал. Все ошибки убрали, двигатель работает как часы.",
      rating: 5
    },
    {
      name: "Сергей В.",
      company: "МАН-Сервис",
      text: "Сотрудничаем уже год, отключаем всю технику только здесь. Ребята знают своё дело на 100%.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Законно ли отключение системы мочевины?",
      answer: "Отключение AdBlue не запрещено для коммерческого транспорта. Однако важно понимать, что это влияет на экологический класс автомобиля."
    },
    {
      question: "Повлияет ли отключение на мощность двигателя?",
      answer: "При профессиональном отключении мощность двигателя сохраняется на заводском уровне. Мы используем проверенные прошивки, которые не влияют на характеристики мотора."
    },
    {
      question: "Какие грузовики обслуживаете?",
      answer: "Работаем со всеми европейскими марками: Scania, Volvo, MAN, Mercedes-Benz, DAF, Iveco, Renault. Также обслуживаем российские КАМАЗ с системой AdBlue."
    },
    {
      question: "Сколько времени занимает процедура?",
      answer: "Стандартное отключение занимает 2-4 часа в зависимости от модели грузовика. Работаем без предварительной записи, в день обращения."
    },
    {
      question: "Какая гарантия на работу?",
      answer: "Предоставляем гарантию 12 месяцев на все виды работ. В случае возникновения проблем устраняем их бесплатно."
    },
    {
      question: "Можно ли вернуть систему AdBlue обратно?",
      answer: "Да, при необходимости можем вернуть заводские настройки. Это займёт примерно столько же времени, сколько и отключение."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.85)), url(/img/aa49f0da-7657-43d2-b86e-042c48ba5aaf.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Отключение мочевины на грузовиках
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Профессиональное программное отключение AdBlue с гарантией 12 месяцев
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={24} />
                Написать в WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-background px-8 py-6 text-lg"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
              >
                <Icon name="Phone" className="mr-2" size={24} />
                {phoneNumber}
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} />
                <span>Работа за 2-4 часа</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} />
                <span>Гарантия 12 месяцев</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Полный спектр услуг по отключению и диагностике систем AdBlue
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-background border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantees" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Наши гарантии
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Профессиональный подход и ответственность за результат
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <Card 
                key={index} 
                className="bg-card border-border text-center hover:border-secondary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon name={guarantee.icon as any} className="text-secondary" size={32} />
                  </div>
                  <CardTitle className="text-white text-xl">{guarantee.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {guarantee.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Отзывы клиентов
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Нам доверяют владельцы грузового транспорта по всей России
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="bg-background border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-secondary fill-secondary" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-white text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-primary">{review.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Вопросы и ответы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Ответы на часто задаваемые вопросы
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-white hover:text-primary text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ответим на все вопросы и запишем на удобное время
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card className="bg-background border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Phone" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-white">Позвоните нам</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                  <p className="text-muted-foreground mt-2">Ежедневно с 9:00 до 21:00</p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:border-secondary transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon name="MessageCircle" className="text-secondary" size={32} />
                  </div>
                  <CardTitle className="text-white">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white w-full"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Написать в WhatsApp
                  </Button>
                  <p className="text-muted-foreground mt-2">Быстрые ответы 24/7</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-background border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 max-w-2xl mx-auto">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-2">Адрес сервиса</h3>
                  <p className="text-muted-foreground">
                    Уточните адрес при звонке или в WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Отключение мочевины. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Профессиональное обслуживание грузовой техники
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
