export type SupportedLang = "ru" | "en";

export type Dictionary = {
  nav: {
    home: string;
    sponsors: string;
    benefits: string;
    features: string;
    how: string;
    pricing: string;
    faq: string;
  };
  footer: {
    contacts: string;
    support: string;
    sections: string;
    countries: string;
    benefits: string;
    features: string;
    how: string;
    pricing: string;
    help: string;
    faq: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  home: {
    hero: {
      titleStart: string;
      titleMid: string;
      titleEnd: string;
      desc: string;
      cta: string;
      aria: string;
    };
    sponsors: {
      title: string;
      countries: { emoji: string; name: string }[];
    };
    benefits: {
      sectionKicker: string;
      sectionTitle: string;
      sectionDesc: string;
      items: { icon: string; title: string; description: string }[];
    };
    features: {
      kicker: string;
      title: string;
      sub: string;
      items: { icon: string; title: string; description: string }[];
    };
    howItWorks: {
      kicker: string;
      title: string;
      steps: { step: number; title: string; description: string }[];
      cta: string;
      aria: string;
    };
    pricing: {
      kicker: string;
      title: string;
      sub: string;
      currencySuffix: string;
      plans: {
        title: string;
        popular: number;
        price: number;
        description: string;
        buttonText: string;
        buttonAria: string;
        benefitList: string[];
      }[];
    };
    faq: {
      kicker: string;
      title: string;
      items: { question: string; answer: string; value: string }[];
    };
  };
  privacy: {
    breadcrumbsHome: string;
    pageTitle: string;
    updatedLabel: string;
    introParts: [string, string];
    s1: string; s1_p1: string; s1_li1: string; s1_li2: string; s1_li3: string; s1_p2: string;
    s2: string; s2_p1: string; s2_p2_prefix: string;
    s3: string; s3_p1: string;
    s4: string; s4_p1: string;
    s5: string; s5_p1: string;
    s6: string; s6_p1: string;
    s7: string; s7_p1: string;
    s8: string; s8_p1: string;
    s9: string; s9_p1_prefix: string; s9_p1_suffix: string;
    toc: { id: string; label: string }[];
  };
  terms: {
    breadcrumbsHome: string;
    pageTitle: string;
    updatedLabel: string;
    s1: string; s1_p1_prefix: string; s1_p2: string; s1_p3: string; s1_list: string[];
    s2: string; s2_p1: string; s2_p2_prefix: string; s2_p2_value: string; s2_p3: string;
    s3: string; s3_p1_prefix: string; s3_p2: string; s3_p3: string;
    s4: string; s4_list: string[];
    s5: string; s5_p1_prefix: string; s5_p1_value1: string; s5_p1_value2: string; s5_p1_suffix: string;
    s6: string; s6_list: string[];
    s7: string; s7_list: string[];
    s8: string; s8_p1: string; s8_p2: string; s8_list: string[]; s8_p3: string;
    s9: string; s9_p1_prefix: string; s9_p2: string;
    toc: { id: string; label: string }[];
  };
};

const RU: Dictionary = {
  nav: {
    home: "Главная",
    sponsors: "Страны подключения",
    benefits: "Преимущества",
    features: "Особенности",
    how: "Как это работает",
    pricing: "Тарифы",
    faq: "FAQ",
  },
  footer: {
    contacts: "Контакты",
    support: "Поддержка в Telegram",
    sections: "Разделы",
    countries: "Страны подключения",
    benefits: "Преимущества",
    features: "Особенности",
    how: "Как это работает",
    pricing: "Тарифы",
    help: "Помощь",
    faq: "FAQ",
    privacy: "Политика конфиденциальности",
    terms: "Правила пользования",
    rights: "Все права защищены.",
  },
  home: {
    hero: {
      titleStart: "Ваш личный",
      titleMid: "VPS",
      titleEnd: "сервер\nбез сложной настройки",
      desc: "Подключение за 1 минуту через Telegram. Работает на iPhone, Android, Windows, macOS и Smart TV.",
      cta: "Подключиться",
      aria: "Открыть Dzen VPS",
    },
    sponsors: {
      title: "Страны подключения",
      countries: [
        { emoji: "🇩🇪", name: "Германия" },
        { emoji: "🇮🇶", name: "Ирак" },
        { emoji: "🇫🇷", name: "Франция" },
        { emoji: "🇷🇺", name: "Россия" },
        { emoji: "🇳🇱", name: "Нидерланды" },
        { emoji: "🇺🇸", name: "США" },
      ],
    },
    benefits: {
      sectionKicker: "Преимущества",
      sectionTitle: "Ваш путь к комфорту",
      sectionDesc: "Собственное приложение внутри Telegram — подключайте и управляйте в пару кликов.",
      items: [
        { icon: "Tv", title: "Стриминг и Smart TV", description: "Смотрите фильмы и сериалы на смартфоне, ноутбуке и Smart TV без сложной настройки." },
        { icon: "Wifi", title: "Путешествия и публичный Wi‑Fi", description: "Защищённое подключение в отелях, аэропортах и кафе." },
        { icon: "Briefcase", title: "Работа и банки", description: "Доступ к корпоративным ресурсам и сервисам из любой точки мира." },
        { icon: "Brain", title: "Учёба и AI‑сервисы", description: "Свободный доступ к обучающим платформам и инструментам ИИ." },
      ],
    },
    features: {
      kicker: "Особенности",
      title: "Простой доступ",
      sub: "Быстрая работа, защита приватности и никаких сложных настроек — на всех ваших устройствах.",
      items: [
        { icon: "Server", title: "Очень высокая скорость", description: "Видео, игры и загрузки без подтормаживаний." },
        { icon: "Clock", title: "Работает круглосуточно", description: "Постоянный доступ без сбоев." },
        { icon: "EyeOff", title: "Мы не собираем вашу историю", description: "Ваша приватность в безопасности." },
        { icon: "Lock", title: "Надёжная защита соединения", description: "Ваши данные защищены от перехвата." },
        { icon: "Laptop", title: "Работает на всех устройствах", description: "iPhone, Android, Windows, macOS и Smart TV — без сложной настройки." },
        { icon: "Infinity", title: "Без ограничений по трафику", description: "Используйте столько, сколько нужно." },
      ],
    },
    howItWorks: {
      kicker: "Как это работает",
      title: "Подключение за 1 минуту в 3 шага",
      steps: [
        { step: 1, title: "Откройте бота в Telegram", description: "Запустите бота — всё управление внутри." },
        { step: 2, title: "Создайте устройство", description: "Получите готовые настройки для вашего устройства." },
        { step: 3, title: "Установите приложение и примените настройки", description: "Поддержка iOS, Android, Windows, macOS и Smart TV." },
      ],
      cta: "Подключиться",
      aria: "Подключиться к Dzen VPS",
    },
    pricing: {
      kicker: "Тарифы",
      title: "Оплата",
      sub: "Платите только за подключённые устройства и дни использования — без скрытых условий.",
      currencySuffix: " / сутки",
      plans: [
        {
          title: "Один тариф",
          popular: 1,
          price: 7,
          description: "Единая цена — 7 ₽ в сутки за подключённое устройство.",
          buttonText: "Подключить",
          buttonAria: "Подключить Dzen VPS",
          benefitList: [
            "Очень высокая скорость",
            "Заморозка подписки в любой момент",
            "Удобные настройки подключения",
            "Много стран на выбор",
          ],
        },
      ],
    },
    faq: {
      kicker: "Вопросы и ответы",
      title: "Часто задаваемые вопросы",
      items: [
        { question: "Сколько устройств можно подключить?", answer: "Без ограничений по количеству устройств.", value: "item-2" },
        { question: "Какая скорость?", answer: "Инфраструктура до 10 Gbps. Реальная скорость зависит от вашего провайдера и выбранной локации.", value: "item-3" },
        { question: "Шифруется ли трафик?", answer: "Да, весь трафик шифруется.", value: "item-4" },
      ],
    },
  },
  privacy: {
    breadcrumbsHome: "Главная",
    pageTitle: "Политика конфиденциальности Telegram-бота «VPS Dzen»",
    updatedLabel: "Дата обновления",
    introParts: [
      "Администрация Telegram-бота ",
      " обязуется сохранять вашу конфиденциальность. Настоящая политика основана на требованиях GDPR и законодательства РФ и описывает, какие данные обрабатываются и с какой целью.",
    ],
    s1: "1. Сбор и использование персональных данных",
    s1_p1: "Мы обрабатываем данные только при вашем добровольном согласии и исключительно для работы сервиса:",
    s1_li1: "Telegram ID;",
    s1_li2: "username, имя и фамилия (если указаны в Telegram);",
    s1_li3: "адрес электронной почты (при обращении в поддержку или для уведомлений по услугам).",
    s1_p2: "Обработка ведётся в соответствии с действующим законодательством РФ и ЕС.",
    s2: "2. Хранение, изменение и удаление данных",
    s2_p1: "Данные хранятся на период предоставления услуг и удаляются по завершении основной деятельности бота либо по вашему запросу. Вы имеете право на изменение, удаление данных и отзыв согласия.",
    s2_p2_prefix: "Запросы на доступ, изменение или удаление данных направляйте через поддержку внутри бота",
    s3: "3. Технические данные при использовании бота",
    s3_p1: "Через Telegram API мы получаем техническую информацию, необходимую для работы сервиса (например, ваш Telegram ID и события взаимодействия внутри бота). Эти данные не позволяют идентифицировать вас вне экосистемы Telegram.",
    s4: "4. Передача данных третьим лицам",
    s4_p1: "Мы не передаём ваши данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом.",
    s5: "5. Дети",
    s5_p1: "Использование бота несовершеннолетними допускается только с согласия родителей или законных представителей. Если вы являетесь родителем/опекуном и считаете, что ребёнок предоставил данные без вашего согласия, свяжитесь с нами через поддержку — мы удалим информацию.",
    s6: "6. Cookie и сторонние сервисы",
    s6_p1: "Бот не использует cookie и сторонние аналитические сервисы (Google Analytics, Яндекс Метрика и т. п.).",
    s7: "7. Внешние ссылки",
    s7_p1: "Бот может содержать ссылки на внешние ресурсы (например, платёжные сервисы). Мы не контролируем их политику конфиденциальности. Рекомендуем знакомиться с условиями на соответствующих сайтах.",
    s8: "8. Обновления политики",
    s8_p1: "Мы можем обновлять данную политику. Актуальная версия публикуется в боте. Существенные изменения могут быть дополнительно анонсированы в уведомлениях.",
    s9: "9. Контакты",
    s9_p1_prefix: "По вопросам конфиденциальности свяжитесь с нами через поддержку в боте",
    s9_p1_suffix: "Если вы не согласны с данной политикой, не используйте услуги бота.",
    toc: [
      { id: "s1", label: "1. Сбор и использование" },
      { id: "s2", label: "2. Хранение и удаление" },
      { id: "s3", label: "3. Технические данные" },
      { id: "s4", label: "4. Передача третьим лицам" },
      { id: "s5", label: "5. Дети" },
      { id: "s6", label: "6. Cookie и сервисы" },
      { id: "s7", label: "7. Внешние ссылки" },
      { id: "s8", label: "8. Обновления политики" },
      { id: "s9", label: "9. Контакты" },
    ],
  },
  terms: {
    breadcrumbsHome: "Главная",
    pageTitle: "Правила пользования / Публичная оферта",
    updatedLabel: "Дата обновления",
    s1: "1. Общие положения",
    s1_p1_prefix: "Владелец сервиса (далее — «Продавец») публикует настоящую публичную оферту о предоставлении доступа к VPS-сервису через Telegram-бота",
    s1_p2: "В соответствии со статьёй 437 ГК РФ данный документ является публичной офертой. Оплата услуг является акцептом оферты (ст. 438 ГК РФ) и означает заключение Договора.",
    s1_p3: "Если вы не согласны с условиями, не используйте сервис и не производите оплату.",
    s1_list: [
      "Оферта — публичное предложение Продавца заключить Договор на указанных условиях.",
      "Покупатель / Пользователь — физическое лицо, принявшее условия Оферты и пополнившее баланс в боте.",
      "Товар (Доступ) — услуга предоставления VPS-соединения через программное обеспечение Продавца.",
      "Баланс — денежные средства Пользователя в сервисе, с которых ежедневно списывается плата за использование.",
      "Заказ — пополнение баланса на выбранную сумму.",
    ],
    s2: "2. Предмет договора",
    s2_p1: "Продавец предоставляет доступ к VPS-сервису при условии наличия положительного баланса на аккаунте Пользователя.",
    s2_p2_prefix: "Текущий тариф:",
    s2_p2_value: "7 рублей в день за 1 устройство",
    s2_p3: "Услуга активна до тех пор, пока на счёте есть достаточная сумма для списания.",
    s3: "3. Пополнение баланса",
    s3_p1_prefix: "Пополнение осуществляется в Telegram-боте",
    s3_p2: "Баланс увеличивается на внесённую сумму за вычетом комиссии платёжных систем (если применимо).",
    s3_p3: "Все расчёты ведутся в рублях РФ.",
    s4: "4. Списание средств",
    s4_list: [
      "Списание производится ежедневно из расчёта 7 ₽/день/1 устройство.",
      "Если на балансе недостаточно средств, доступ приостанавливается до следующего пополнения.",
      "При повторном пополнении доступ восстанавливается автоматически.",
      "Вы можете заморозить устройство — списания остановятся до разморозки.",
    ],
    s5: "5. Бесплатный пробный период",
    s5_p1_prefix: "Всем новым Пользователям предоставляется стартовый бонус —",
    s5_p1_value1: "49 ₽ на баланс",
    s5_p1_value2: "7 дням бесплатного использования",
    s5_p1_suffix: "на одно устройство.",
    s6: "6. Возвраты и ограничения",
    s6_list: [
      "Денежные средства, внесённые на баланс, возврату не подлежат.",
      "Продавец не несёт ответственности за проблемы со связью, оборудованием или провайдерами Пользователя.",
    ],
    s7: "7. Программа лояльности «Пригласите друга»",
    s7_list: [
      "Пользователь может пригласить новых участников по своей реферальной ссылке.",
      "Пригласивший получает 10% от каждого пополнения баланса приглашённого.",
      "Вознаграждение начисляется на баланс и может использоваться для оплаты услуг.",
    ],
    s8: "8. Права, обязанности и ответственность",
    s8_p1: "Пользователь обязан использовать сервис только в законных целях.",
    s8_p2: "Запрещается:",
    s8_list: [
      "использовать торренты;",
      "злоупотреблять реферальной системой;",
      "рассылать спам, заниматься мошенничеством, фишингом;",
      "проводить DDoS-атаки, взломы, сканирование портов;",
      "использовать сервис для противоправной деятельности;",
      "перегружать сервера массовыми автоматическими запросами;",
      "передавать или перепродавать доступ третьим лицам без согласия Продавца.",
    ],
    s8_p3: "Нарушение правил может привести к блокировке аккаунта и списанию средств без возврата.",
    s9: "9. Поддержка и претензии",
    s9_p1_prefix: "Обращения и претензии принимаются через поддержку в Telegram-боте",
    s9_p2: "Ответ предоставляется в разумный срок.",
    toc: [
      { id: "s1", label: "1. Общие положения" },
      { id: "s2", label: "2. Предмет договора" },
      { id: "s3", label: "3. Пополнение баланса" },
      { id: "s4", label: "4. Списание средств" },
      { id: "s5", label: "5. Бесплатный период" },
      { id: "s6", label: "6. Возвраты и ограничения" },
      { id: "s7", label: "7. Пригласите друга" },
      { id: "s8", label: "8. Права и ответственность" },
      { id: "s9", label: "9. Поддержка и претензии" },
    ],
  },
};

const EN: Dictionary = {
  nav: {
    home: "Home",
    sponsors: "Available countries",
    benefits: "Benefits",
    features: "Features",
    how: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
  },
  footer: {
    contacts: "Contacts",
    support: "Support on Telegram",
    sections: "Sections",
    countries: "Available countries",
    benefits: "Benefits",
    features: "Features",
    how: "How it works",
    pricing: "Pricing",
    help: "Help",
    faq: "FAQ",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    rights: "All rights reserved.",
  },
  home: {
    hero: {
      titleStart: "Your personal",
      titleMid: "VPS",
      titleEnd: "server\nwithout complicated setup",
      desc: "Connect in 1 minute via Telegram. Works on iPhone, Android, Windows, macOS and Smart TV.",
      cta: "Connect",
      aria: "Open Dzen VPS",
    },
    sponsors: {
      title: "Available countries",
      countries: [
        { emoji: "🇩🇪", name: "Germany" },
        { emoji: "🇮🇶", name: "Iraq" },
        { emoji: "🇫🇷", name: "France" },
        { emoji: "🇷🇺", name: "Russia" },
        { emoji: "🇳🇱", name: "Netherlands" },
        { emoji: "🇺🇸", name: "USA" },
      ],
    },
    benefits: {
      sectionKicker: "Benefits",
      sectionTitle: "Your path to comfort",
      sectionDesc: "A native experience inside Telegram — connect and manage in a couple of clicks.",
      items: [
        { icon: "Tv", title: "Streaming and Smart TV", description: "Watch movies and shows on phone, laptop and Smart TV with no complex setup." },
        { icon: "Wifi", title: "Travel and public Wi‑Fi", description: "Secure connection in hotels, airports and cafés." },
        { icon: "Briefcase", title: "Work and banking", description: "Access corporate resources and services from anywhere in the world." },
        { icon: "Brain", title: "Study and AI services", description: "Unrestricted access to learning platforms and AI tools." },
      ],
    },
    features: {
      kicker: "Features",
      title: "Simple access",
      sub: "Fast performance, privacy protection and no complicated setup — on all your devices.",
      items: [
        { icon: "Server", title: "Very high speed", description: "Watch, play and download without lag." },
        { icon: "Clock", title: "Works 24/7", description: "Constant access without interruptions." },
        { icon: "EyeOff", title: "We don’t collect your history", description: "Your privacy is safe." },
        { icon: "Lock", title: "Reliable connection protection", description: "Your data is protected from interception." },
        { icon: "Laptop", title: "Works on all devices", description: "iPhone, Android, Windows, macOS and Smart TV — no complex setup." },
        { icon: "Infinity", title: "No traffic limits", description: "Use as much as you need." },
      ],
    },
    howItWorks: {
      kicker: "How it works",
      title: "Connect in 1 minute in 3 steps",
      steps: [
        { step: 1, title: "Open the bot in Telegram", description: "Start the bot — everything is managed inside." },
        { step: 2, title: "Create a device", description: "Get ready‑to‑use settings for your device." },
        { step: 3, title: "Install the app and apply settings", description: "Supports iOS, Android, Windows, macOS and Smart TV." },
      ],
      cta: "Connect",
      aria: "Connect to Dzen VPS",
    },
    pricing: {
      kicker: "Pricing",
      title: "Payment",
      sub: "Pay only for connected devices and days of use — no hidden terms.",
      currencySuffix: " / day",
      plans: [
        {
          title: "One plan",
          popular: 1,
          price: 7,
          description: "Single price — 7 RUB per day per connected device.",
          buttonText: "Connect",
          buttonAria: "Connect to Dzen VPS",
          benefitList: [
            "Very high speed",
            "Freeze subscription anytime",
            "Easy connection settings",
            "Many countries to choose from",
          ],
        },
      ],
    },
    faq: {
      kicker: "Questions & answers",
      title: "Frequently asked questions",
      items: [
        { question: "How many devices can I connect?", answer: "No limits on the number of devices.", value: "item-2" },
        { question: "What speed should I expect?", answer: "Infrastructure up to 10 Gbps. Actual speed depends on your ISP and chosen location.", value: "item-3" },
        { question: "Is traffic encrypted?", answer: "Yes, all traffic is encrypted.", value: "item-4" },
      ],
    },
  },
  privacy: {
    breadcrumbsHome: "Home",
    pageTitle: "Privacy Policy of the Telegram bot ‘VPS Dzen’",
    updatedLabel: "Last updated",
    introParts: [
      "The administration of the ",
      " Telegram bot is committed to protecting your privacy. This policy is based on GDPR and Russian law and describes what data we process and for what purposes.",
    ],
    s1: "1. Collection and use of personal data",
    s1_p1: "We process data only with your voluntary consent and solely to operate the service:",
    s1_li1: "Telegram ID;",
    s1_li2: "username, first and last name (if provided in Telegram);",
    s1_li3: "email address (when contacting support or for service notifications).",
    s1_p2: "Processing is carried out in accordance with applicable laws of the Russian Federation and the EU.",
    s2: "2. Storage, modification and deletion of data",
    s2_p1: "Data is stored for the duration of service provision and deleted upon termination of the bot’s core activities or upon your request. You have the right to modify, delete data and withdraw consent.",
    s2_p2_prefix: "Send requests for access, modification or deletion via in-bot support",
    s3: "3. Technical data when using the bot",
    s3_p1: "Through the Telegram API, we receive technical information required for the service to work (e.g., your Telegram ID and interaction events within the bot). This data does not allow us to identify you outside of the Telegram ecosystem.",
    s4: "4. Transfer of data to third parties",
    s4_p1: "We do not transfer your data to third parties without your consent, except as required by law.",
    s5: "5. Children",
    s5_p1: "Use of the bot by minors is allowed only with the consent of parents or legal guardians. If you are a parent/guardian and believe a child provided data without your consent, contact us via support — we will delete the information.",
    s6: "6. Cookies and third‑party services",
    s6_p1: "The bot does not use cookies or third‑party analytics (Google Analytics, Yandex Metrica, etc.).",
    s7: "7. External links",
    s7_p1: "The bot may contain links to external resources (e.g., payment services). We do not control their privacy policies. Please review the terms on the respective sites.",
    s8: "8. Policy updates",
    s8_p1: "We may update this policy. The current version is published in the bot. Material changes may be additionally announced in notifications.",
    s9: "9. Contacts",
    s9_p1_prefix: "For privacy inquiries, contact us via support in the bot",
    s9_p1_suffix: "If you do not agree with this policy, do not use the bot’s services.",
    toc: [
      { id: "s1", label: "1. Collection and use" },
      { id: "s2", label: "2. Storage and deletion" },
      { id: "s3", label: "3. Technical data" },
      { id: "s4", label: "4. Third‑party transfer" },
      { id: "s5", label: "5. Children" },
      { id: "s6", label: "6. Cookies & services" },
      { id: "s7", label: "7. External links" },
      { id: "s8", label: "8. Policy updates" },
      { id: "s9", label: "9. Contacts" },
    ],
  },
  terms: {
    breadcrumbsHome: "Home",
    pageTitle: "Terms of Use / Public Offer",
    updatedLabel: "Last updated",
    s1: "1. General provisions",
    s1_p1_prefix: "The service owner (the “Seller”) publishes this public offer to provide access to the VPS service via the Telegram bot",
    s1_p2: "In accordance with Article 437 of the Civil Code of the Russian Federation, this document is a public offer. Payment for services constitutes acceptance (Art. 438 of the Civil Code) and means the conclusion of a Contract.",
    s1_p3: "If you do not agree with the terms, do not use the service and do not make payments.",
    s1_list: [
      "Offer — a public proposal by the Seller to conclude a Contract on the specified terms.",
      "Buyer / User — an individual who accepted the Offer terms and topped up the balance in the bot.",
      "Product (Access) — the service of providing a VPS connection through the Seller's software.",
      "Balance — the User's funds in the service from which the daily fee is charged.",
      "Order — topping up the balance for the selected amount.",
    ],
    s2: "2. Subject of the contract",
    s2_p1: "The Seller provides access to the VPS service subject to a positive account balance.",
    s2_p2_prefix: "Current rate:",
    s2_p2_value: "7 RUB per day per 1 device",
    s2_p3: "The service remains active as long as there are sufficient funds for charging.",
    s3: "3. Balance top-up",
    s3_p1_prefix: "Top-up is performed in the Telegram bot",
    s3_p2: "The balance increases by the deposited amount minus payment system fees (if applicable).",
    s3_p3: "All settlements are made in Russian rubles.",
    s4: "4. Charges",
    s4_list: [
      "Charges are made daily at a rate of 7 RUB/day/1 device.",
      "If there are insufficient funds, access is suspended until the next top-up.",
      "Upon recharging, access is restored automatically.",
      "You can freeze a device — charges will stop until it is unfrozen.",
    ],
    s5: "5. Free trial period",
    s5_p1_prefix: "All new Users are granted a starting bonus —",
    s5_p1_value1: "49 RUB to the balance",
    s5_p1_value2: "7 days of free use",
    s5_p1_suffix: "for one device.",
    s6: "6. Refunds and limitations",
    s6_list: [
      "Funds deposited to the balance are non-refundable.",
      "The Seller is not responsible for issues with the User’s connectivity, equipment or providers.",
    ],
    s7: "7. Loyalty program “Invite a friend”",
    s7_list: [
      "A User can invite new participants using their referral link.",
      "The inviter receives 10% of each top-up made by the invitee.",
      "Rewards are credited to the balance and can be used to pay for services.",
    ],
    s8: "8. Rights, obligations and liability",
    s8_p1: "The User must use the service only for lawful purposes.",
    s8_p2: "Prohibited:",
    s8_list: [
      "use torrents;",
      "abuse the referral system;",
      "send spam, engage in fraud or phishing;",
      "carry out DDoS attacks, hacking or port scanning;",
      "use the service for illegal activities;",
      "overload servers with massive automated requests;",
      "transfer or resell access to third parties without the Seller’s consent.",
    ],
    s8_p3: "Violation of the rules may result in account blocking and deduction of funds without refund.",
    s9: "9. Support and claims",
    s9_p1_prefix: "Inquiries and claims are accepted via support in the Telegram bot",
    s9_p2: "A response is provided within a reasonable time.",
    toc: [
      { id: "s1", label: "1. General provisions" },
      { id: "s2", label: "2. Subject of the contract" },
      { id: "s3", label: "3. Balance top-up" },
      { id: "s4", label: "4. Charges" },
      { id: "s5", label: "5. Free trial" },
      { id: "s6", label: "6. Refunds & limitations" },
      { id: "s7", label: "7. Invite a friend" },
      { id: "s8", label: "8. Rights & liability" },
      { id: "s9", label: "9. Support & claims" },
    ],
  },
};

export function getDictionary(lang: SupportedLang): Dictionary {
  return lang === "en" ? EN : RU;
}
