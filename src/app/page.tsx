import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <header className="flex items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-[#7C3AED]">AI</span>vtor
        </Link>
        <Link
          href="https://app.aivtor.ru"
          className="rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold hover:bg-[#6D28D9] transition shadow-lg shadow-purple-900/30"
        >
          Войти
        </Link>
      </header>

      <main className="mx-auto max-w-5xl px-6 pt-10 pb-16 text-center lg:px-12">
        <div className="flex flex-col items-center">
          <img
            src="/logo.png?v=6"
            alt="AIvtor"
            className="h-40 w-auto object-contain lg:h-52"
          />
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl mt-4">
            Платформа для авторов <br />
            <span className="text-[#06B6D4]">с искусственным интеллектом</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
            Создавайте лендинги, цифровые товары, подписки и контент —
            всё в одном месте, без разработчиков и дизайнеров.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://app.aivtor.ru"
              className="rounded-full bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] px-8 py-3.5 font-bold text-[#0B0F19] shadow-lg shadow-cyan-500/25 hover:brightness-110 transition"
            >
              Начать бесплатно
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-full border border-white/20 bg-[#0B0F19] px-8 py-3.5 font-semibold hover:bg-white/5 transition"
            >
              Как это работает
            </Link>
          </div>
        </div>

        <section id="modules" className="mt-24">
          <h2 className="text-2xl font-bold">Семь модулей AIvtor</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/10 bg-[#0B0F19] p-6 text-left hover:border-white/20 transition"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED]/20 to-[#06B6D4]/20 text-[#06B6D4]">
                  {m.icon}
                </div>
                <h3 className="font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mt-24">
          <h2 className="text-2xl font-bold">Как это работает</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-[#0B0F19] p-6 text-left"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#7C3AED] text-sm font-bold">
                  {i + 1}
                </div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500 lg:px-12">
        <p>© {new Date().getFullYear()} AIvtor. ИП Зубков С.В.</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/privacy" className="hover:text-white">
            Политика конфиденциальности
          </Link>
          <Link href="/terms" className="hover:text-white">
            Пользовательское соглашение
          </Link>
        </div>
      </footer>
    </div>
  );
}

const modules = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "AI-конструктор страниц",
    desc: "Опишите нишу — получите готовый лендинг, витрину и цены.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Цифровые товары и подписки",
    desc: "Продавайте PDF, курсы, мембершипы с рекуррентными платежами.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "AI-репурпозинг контента",
    desc: "Одно видео → нарезки, посты, превью для всех соцсетей.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "AI-сообщество",
    desc: "Автоответы и модерация Telegram, VK, YouTube.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "AI-аналитика и наставник",
    desc: "Не просто графики, а конкретные задачи на каждый день.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Публикации и календарь",
    desc: "Кросс-постинг и план-график для всех платформ.",
  },
];

const steps = [
  {
    title: "Расскажите о ниши",
    desc: "Напишите, кто ваша аудитория и что вы продаёте. AI сгенерирует страницу.",
  },
  {
    title: "Добавьте товары",
    desc: "Загрузите PDF, курсы или настройте подписки за пару минут.",
  },
  {
    title: "Свяжите каналы",
    desc: "Подключите Telegram, VK, email и AppMetrica для аналитики.",
  },
  {
    title: "Получайте оплату",
    desc: "Клиенты платят картой, а вы выводите деньги на свой счёт.",
  },
];
