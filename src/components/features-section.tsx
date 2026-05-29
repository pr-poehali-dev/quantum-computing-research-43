import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Живые концерты",
    description: "Незабываемые выступления с мощным звуком, световыми шоу и полным погружением в атмосферу музыки.",
    icon: "mic",
    badge: "Live",
  },
  {
    title: "Авторские треки",
    description: "Каждая песня — история из жизни. Уникальный стиль на стыке жанров, который невозможно спутать с другими.",
    icon: "music",
    badge: "Оригинал",
  },
  {
    title: "Коллаборации",
    description: "Совместные проекты с лучшими артистами и продюсерами. Всегда в поиске нового звучания и свежих идей.",
    icon: "users",
    badge: "Команда",
  },
  {
    title: "Студийные записи",
    description: "Высококачественные записи на профессиональном оборудовании. Каждый звук доведён до совершенства.",
    icon: "headphones",
    badge: "Студия",
  },
  {
    title: "Мерч и релизы",
    description: "Ограниченные коллекции одежды и эксклюзивные физические издания для настоящих фанатов.",
    icon: "star",
    badge: "Эксклюзив",
  },
  {
    title: "Социальные сети",
    description: "Ежедневный контент: закулисье, репетиции, новые треки. Будь первым, кто узнаёт о новинках.",
    icon: "globe",
    badge: "Online",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё, что создаёт артист</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Музыка, концерты, коллаборации — погружайся в мир без границ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "mic" && "🎤"}
                    {feature.icon === "music" && "🎵"}
                    {feature.icon === "users" && "🤝"}
                    {feature.icon === "headphones" && "🎧"}
                    {feature.icon === "star" && "⭐"}
                    {feature.icon === "globe" && "🌐"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
