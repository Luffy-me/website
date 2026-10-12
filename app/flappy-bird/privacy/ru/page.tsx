import type { Metadata } from "next";
import Link from "next/link";
import { MobileNavigation } from "../../../MobileNavigation";
import { SiteFooter } from "../../../SiteFooter";
import { SiteSidebar } from "../../../SiteSidebar";
import { profile } from "../../../site-config";
import "../../flappy-bird.css";

export const metadata: Metadata = {
  title: "Политика конфиденциальности – Flappy Bird | Dey Intelligence",
  description: "Flappy Bird работает без интернета, не запрашивает разрешений и не собирает персональные данные.",
  alternates: { canonical: "/flappy-bird/privacy/ru", languages: { en: "/flappy-bird/privacy", ru: "/flappy-bird/privacy/ru" } },
  openGraph: { url: "/flappy-bird/privacy/ru", locale: "ru_RU" },
};

export default function FlappyBirdPrivacyRuPage() {
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteSidebar active="work" /><MobileNavigation active="work" />
    <main className="page-content fb-page" id="main-content" lang="ru">
      <article className="fb-policy">
        <p className="eyebrow"><Link href="/flappy-bird" lang="en">← Flappy Bird</Link> · <Link href="/flappy-bird/privacy" hrefLang="en" lang="en">English version</Link></p>
        <h1>Политика конфиденциальности</h1>
        <p>Flappy Bird для Android (пакет <code>com.deyintelligence.birdgame</code>), разработчик — {profile.brand}. Дата последнего обновления: 11.10.2026 (версия приложения 1.8.1).</p>
        <p className="fb-callout">Игра не собирает персональные данные и никогда не подключается к сети.</p>

        <h2>Коротко</h2>
        <ul>
          <li>Приложение <strong>не собирает персональные данные</strong> ни в каком виде.</li>
          <li>Приложение <strong>не требует доступа в интернет</strong> и не обращается к сети или серверам.</li>
          <li>Приложение <strong>не запрашивает разрешений</strong> (геолокация, контакты, камера, микрофон, память и т. п.).</li>
          <li>В приложении <strong>нет рекламы, аналитики, трекеров и сторонних SDK</strong>.</li>
        </ul>

        <h2>Что хранится на устройстве</h2>
        <p>Единственное, что сохраняется:</p>
        <ul>
          <li>десять лучших результатов с датами и простая статистика (число игр, сумма очков) для каждой сложности;</li>
          <li>настройки звука, вибрации, управления, темы, сложности и режима игры;</li>
          <li>выбор и открытые миры, выбор языка и темы интерфейса;</li>
          <li>коллекция: виртуальные монеты, открытые предметы и персонажи, выбранный внешний вид, мастерство персонажей и простые счётчики прогресса, например число игр.</li>
        </ul>
        <p>Эти данные хранятся только на вашем устройстве в закрытом хранилище приложения, никуда не передаются и удаляются при очистке данных приложения или его удалении.</p>

        <h2>Передача третьим лицам</h2>
        <p>Поскольку данные не покидают устройство, они не передаются третьим лицам и не продаются.</p>

        <h2>Дети</h2>
        <p>В приложении нет функций, собирающих информацию о ком-либо, включая детей.</p>

        <h2>Изменения политики</h2>
        <p>Если политика изменится, обновлённая версия будет опубликована на этой странице с новой датой, а также вместе с обновлением приложения.</p>

        <h2>Контакты</h2>
        <p>Вопросы по этой политике: <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a></p>
        <p>Разработчик: {profile.brand}, {profile.name}.</p>
      </article>
      <SiteFooter />
    </main>
  </div>;
}
