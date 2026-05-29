export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Фото */}
          <div className="relative">
            <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-red-500/30 relative">
              <img
                src="/placeholder-user.jpg"
                alt="Михаил"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Красный оверлей снизу */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-500/30 to-transparent pointer-events-none" />
            </div>
            {/* Декоративная рамка */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-red-500/40 rounded-br-2xl hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-red-500/40 rounded-tl-2xl hidden lg:block" />
          </div>

          {/* Текст */}
          <div className="slide-up">
            <p className="text-red-500 font-space-mono text-sm uppercase tracking-widest mb-4">Об авторе</p>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
              Михаил
            </h2>
            <div className="space-y-4 text-gray-300 font-space-mono leading-relaxed">
              <p>
                Михаил — автор и исполнитель, который пишет музыку и тексты к каждому своему треку.
                Его работы охватывают широкий диапазон жанров и настроений, объединённых личным взглядом
                на жизнь и честностью в каждой строке.
              </p>
              <p>
                Все песни написаны Михаилом — от первого аккорда до финального сведения.
                Это не просто музыка, это личный дневник, открытый для всех.
              </p>
              <p>
                За годы творческого пути он выступал на сценах разного масштаба,
                сотрудничал с музыкантами и продюсерами, но всегда оставался верен
                своему звуку и своим словам.
              </p>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-red-500/20">
              <div className="text-center">
                <div className="font-orbitron text-3xl font-bold text-red-500 mb-1">100%</div>
                <div className="text-gray-400 font-space-mono text-xs uppercase tracking-wider">Авторские тексты</div>
              </div>
              <div className="text-center">
                <div className="font-orbitron text-3xl font-bold text-red-500 mb-1">100%</div>
                <div className="text-gray-400 font-space-mono text-xs uppercase tracking-wider">Авторская музыка</div>
              </div>
              <div className="text-center">
                <div className="font-orbitron text-3xl font-bold text-red-500 mb-1">Live</div>
                <div className="text-gray-400 font-space-mono text-xs uppercase tracking-wider">Живые концерты</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
