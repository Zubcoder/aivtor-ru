import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <header className="flex items-center justify-between px-6 py-5 lg:px-12">
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-[#7C3AED]">AI</span>vtor
        </span>
        <Link
          href="https://app.aivtor.ru"
          className="rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-medium hover:bg-[#6D28D9] transition-colors"
        >
          Войти
        </Link>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-12">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight lg:text-6xl">
          AI Creator OS <br />
          <span className="text-[#06B6D4]">для русскоязычных авторов</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Всё, чтобы монетизировать аудиторию: AI-лендинг, цифровые товары и
          подписки, автоматический контент, аналитика, сообщество и единый
          календарь публикаций.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://app.aivtor.ru"
            className="rounded-full bg-[#06B6D4] px-8 py-3.5 font-semibold text-[#0B0F19] hover:bg-[#22D3EE] transition-colors"
          >
            Начать бесплатно
          </Link>
          <Link
            href="#modules"
            className="rounded-full border border-white/20 px-8 py-3.5 font-medium hover:bg-white/10 transition-colors"
          >
            Узнать больше
          </Link>
        </div>

        <section id="modules" className="mt-32">
          <h2 className="text-2xl font-bold">Семь модулей AIvtor</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left"
              >
                <div className="mb-4 text-2xl">{m.icon}</div>
                <h3 className="font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500 lg:px-12">
        © {new Date().getFullYear()} AIvtor. ИП Зубков С.В.
      </footer>
    </div>
  );
}

const modules = [
  {
    icon: "🧩",
    title: "AI-конструктор страниц",
    desc: "Опиши себя — получи готовый лендинг, витрину и цены.",
  },
  {
    icon: "🛍️",
    title: "Цифровые товары и подписки",
    desc: "Продавай PDF, курсы, мембершипы с рекуррентными платежами.",
  },
  {
    icon: "♻️",
    title: "AI-репурпозинг контента",
    desc: "Одно видео → нарезки, посты, превью для всех соцсетей.",
  },
  {
    icon: "💬",
    title: "AI-сообщество",
    desc: "Автоответы и модерация Telegram, VK, YouTube.",
  },
  {
    icon: "📊",
    title: "AI-аналитика и наставник",
    desc: "Не графики, а конкретные задачи на каждый день.",
  },
  {
    icon: "🗓️",
    title: "Публикации и календарь",
    desc: "Кросс-постинг и план-график для всех платформ.",
  },
];
