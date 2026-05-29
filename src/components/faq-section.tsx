import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Где можно послушать музыку?",
      answer:
        "Все треки доступны на крупнейших стриминговых платформах: Spotify, Apple Music, YouTube Music, VK Музыка и других. Просто введи имя артиста в поиске.",
    },
    {
      question: "Как узнать о предстоящих концертах?",
      answer:
        "Анонсы всех выступлений публикуются в социальных сетях и на этом сайте. Подпишись, чтобы не пропустить — билеты разлетаются быстро!",
    },
    {
      question: "Можно ли заказать выступление на мероприятие?",
      answer:
        "Да, принимаем заявки на частные выступления, корпоративы и фестивали. Напиши нам через форму контактов, и мы обсудим детали.",
    },
    {
      question: "Как купить мерч?",
      answer:
        "Официальный мерч доступен в интернет-магазине на сайте. Следи за обновлениями — коллекции выходят ограниченными тиражами.",
    },
    {
      question: "Как связаться по вопросам прессы и коллабораций?",
      answer:
        "По всем вопросам сотрудничества, интервью и совместных проектов пиши на официальную почту или через форму обратной связи на сайте.",
    },
    {
      question: "Выходит ли новый альбом?",
      answer:
        "Работа над новым материалом идёт полным ходом! Подпишись на новости и будь первым, кто узнает дату релиза и услышит тизеры.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что хочется знать — собрали здесь.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
