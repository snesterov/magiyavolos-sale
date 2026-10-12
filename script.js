(function() {
  // Проверка повторного запуска
  if (window.__mv_spa_initialized) return;
  window.__mv_spa_initialized = true;

  // 1. Подключение шрифтов (Playfair Display + Montserrat)
  if (!document.getElementById('mv-fonts')) {
    var f = document.createElement('link');
    f.id = 'mv-fonts';
    f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(f);
  }

  // 2. Внедрение стилей
  if (!document.getElementById('mv-styles')) {
    var s = document.createElement('style');
    s.id = 'mv-styles';
    s.textContent = `
      /* Скрываем стандартные блоки Tilda кроме формы и контейнера скрипта */
      #allrecords > .r:not(#rec4705804401):not(#rec4705785601),
      #allrecords > div.r:not(#rec4705804401):not(#rec4705785601),
      .t-records > .r:not(#rec4705804401):not(#rec4705785601) {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        height: 0 !important;
        min-height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      :root {
        --mv-bg: #0c0a09;
        --mv-bg-card: rgba(22, 18, 16, 0.82);
        --mv-bg-card-hover: rgba(32, 26, 23, 0.94);
        --mv-gold: #c59b6d;
        --mv-gold-light: #e5c59e;
        --mv-gold-dark: #967045;
        --mv-champagne: #edd8be;
        --mv-pearl: #faf6f0;
        --mv-text: #f7f4ee;
        --mv-text-muted: #aba196;
        --mv-border: rgba(197, 155, 109, 0.22);
        --mv-border-active: rgba(229, 197, 158, 0.65);
        --mv-grad-gold: linear-gradient(135deg, #dfc098 0%, #c59b6d 50%, #9e7343 100%);
        --mv-grad-card: linear-gradient(145deg, rgba(28, 22, 19, 0.9) 0%, rgba(16, 13, 11, 0.95) 100%);
        --mv-glow: 0 8px 32px rgba(197, 155, 109, 0.16);
      }

      * { box-sizing: border-box !important; }
      html { scroll-behavior: smooth !important; }
      body {
        margin: 0 !important;
        padding: 0 !important;
        background-color: var(--mv-bg) !important;
        color: var(--mv-text) !important;
        font-family: 'Montserrat', sans-serif !important;
        overflow-x: hidden !important;
        width: 100% !important;
        max-width: 100vw !important;
        -webkit-font-smoothing: antialiased;
      }

      #mv-app {
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
        background-color: var(--mv-bg);
        position: relative;
        z-index: 1;
      }

      .mv-container {
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
        padding: 0 20px;
      }

      /* Типографика */
      .mv-title-serif {
        font-family: 'Playfair Display', serif;
        font-weight: 600;
        letter-spacing: -0.01em;
      }
      .mv-gold-text {
        background: var(--mv-grad-gold);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* Кнопки */
      .mv-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 16px 32px;
        border-radius: 999px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        text-decoration: none;
        border: none;
        outline: none;
      }
      .mv-btn-primary {
        background: var(--mv-grad-gold);
        color: #0c0a09;
        box-shadow: 0 4px 20px rgba(197, 155, 109, 0.35);
      }
      .mv-btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(229, 197, 158, 0.5);
      }
      .mv-btn-outline {
        background: rgba(255, 255, 255, 0.03);
        color: var(--mv-text);
        border: 1px solid var(--mv-border);
        backdrop-filter: blur(10px);
      }
      .mv-btn-outline:hover {
        border-color: var(--mv-gold-light);
        background: rgba(197, 155, 109, 0.08);
        transform: translateY(-2px);
      }

      /* HEADER */
      .mv-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        background: rgba(12, 10, 9, 0.85);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--mv-border);
        transition: all 0.3s ease;
      }
      .mv-header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 74px;
      }
      .mv-logo {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: var(--mv-text);
      }
      .mv-logo-title {
        font-family: 'Playfair Display', serif;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        background: var(--mv-grad-gold);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .mv-logo-sub {
        font-size: 10px;
        color: var(--mv-text-muted);
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-top: -2px;
      }
      .mv-nav {
        display: flex;
        gap: 24px;
      }
      .mv-nav a {
        color: var(--mv-text-muted);
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        transition: color 0.2s ease;
      }
      .mv-nav a:hover {
        color: var(--mv-gold-light);
      }
      .mv-header-right {
        display: flex;
        align-items: center;
        gap: 18px;
      }
      .mv-header-phone {
        display: flex;
        flex-direction: column;
        text-align: right;
        text-decoration: none;
      }
      .mv-header-phone-val {
        font-size: 14px;
        font-weight: 600;
        color: var(--mv-text);
      }
      .mv-header-phone-sub {
        font-size: 10px;
        color: var(--mv-text-muted);
      }
      .mv-header-btn {
        padding: 10px 20px;
        font-size: 13px;
      }

      /* HERO */
      .mv-hero {
        padding: 150px 0 80px;
        position: relative;
        background: radial-gradient(circle at 50% 20%, rgba(197, 155, 109, 0.12) 0%, transparent 60%);
      }
      .mv-hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 16px;
        border-radius: 999px;
        background: rgba(197, 155, 109, 0.1);
        border: 1px solid var(--mv-border);
        color: var(--mv-gold-light);
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 24px;
      }
      .mv-hero-title {
        font-size: 52px;
        line-height: 1.15;
        margin: 0 0 24px;
        max-width: 900px;
      }
      .mv-hero-descr {
        font-size: 18px;
        line-height: 1.6;
        color: var(--mv-text-muted);
        max-width: 740px;
        margin: 0 0 40px;
        font-weight: 300;
      }
      .mv-hero-actions {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        margin-bottom: 60px;
      }
      .mv-hero-stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        border-top: 1px solid var(--mv-border);
        padding-top: 40px;
      }
      .mv-stat-item {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .mv-stat-val {
        font-size: 26px;
        font-weight: 700;
        color: var(--mv-gold-light);
      }
      .mv-stat-lbl {
        font-size: 13px;
        color: var(--mv-text-muted);
        line-height: 1.4;
      }

      /* ВИДЕО БЛОК */
      .mv-video-section {
        padding: 90px 0;
        background: rgba(16, 13, 11, 0.6);
        border-top: 1px solid var(--mv-border);
        border-bottom: 1px solid var(--mv-border);
      }
      .mv-sec-head {
        text-align: center;
        max-width: 720px;
        margin: 0 auto 50px;
      }
      .mv-sec-badge {
        display: inline-block;
        font-size: 11px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--mv-gold-light);
        margin-bottom: 12px;
        font-weight: 600;
      }
      .mv-sec-title {
        font-size: 38px;
        margin: 0 0 16px;
      }
      .mv-sec-sub {
        font-size: 15px;
        color: var(--mv-text-muted);
        line-height: 1.6;
        margin: 0;
      }

      .mv-video-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 28px;
        align-items: center;
      }
      .mv-main-video-card {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        background: var(--mv-grad-card);
        border: 1px solid var(--mv-border);
        box-shadow: var(--mv-glow);
        aspect-ratio: 16/9;
        cursor: pointer;
      }
      .mv-main-video-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }
      .mv-main-video-card:hover img {
        transform: scale(1.04);
      }
      .mv-play-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 68px;
        height: 68px;
        border-radius: 50%;
        background: rgba(197, 155, 109, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 25px rgba(0,0,0,0.5);
        transition: all 0.3s ease;
        z-index: 2;
      }
      .mv-main-video-card:hover .mv-play-btn {
        transform: translate(-50%, -50%) scale(1.12);
        background: var(--mv-gold-light);
      }
      .mv-video-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }
      .mv-video-mini {
        position: relative;
        border-radius: 14px;
        overflow: hidden;
        border: 1px solid var(--mv-border);
        background: var(--mv-bg-card);
        aspect-ratio: 9/12;
        cursor: pointer;
      }
      .mv-video-mini iframe, .mv-video-mini .mv-video-thumb {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .mv-video-mini-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 14px;
        background: linear-gradient(to top, rgba(12,10,9,0.9) 0%, transparent 100%);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .mv-video-mini-title {
        font-size: 12px;
        font-weight: 600;
        color: var(--mv-text);
      }

      /* КАТАЛОГ И ФИЛЬТРЫ */
      .mv-catalog-section {
        padding: 90px 0;
      }
      .mv-filters-box {
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: var(--mv-grad-card);
        border: 1px solid var(--mv-border);
        padding: 24px;
        border-radius: 20px;
        margin-bottom: 40px;
      }
      .mv-filter-row {
        display: flex;
        align-items: center;
        gap: 14px;
        flex-wrap: wrap;
      }
      .mv-filter-lbl {
        font-size: 13px;
        font-weight: 600;
        color: var(--mv-gold-light);
        min-width: 80px;
      }
      .mv-filter-pills {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .mv-pill {
        padding: 8px 16px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 500;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--mv-border);
        color: var(--mv-text-muted);
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .mv-pill:hover, .mv-pill.active {
        background: rgba(197, 155, 109, 0.16);
        border-color: var(--mv-gold-light);
        color: var(--mv-text);
      }

      .mv-catalog-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
      .mv-card {
        background: var(--mv-grad-card);
        border: 1px solid var(--mv-border);
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: all 0.3s ease;
      }
      .mv-card:hover {
        transform: translateY(-4px);
        border-color: var(--mv-border-active);
        box-shadow: var(--mv-glow);
      }
      .mv-card-img-wrap {
        position: relative;
        width: 100%;
        height: 280px;
        overflow: hidden;
      }
      .mv-card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      .mv-card:hover .mv-card-img {
        transform: scale(1.05);
      }
      .mv-card-tag {
        position: absolute;
        top: 14px;
        left: 14px;
        padding: 4px 12px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 600;
        background: rgba(12, 10, 9, 0.75);
        backdrop-filter: blur(8px);
        color: var(--mv-gold-light);
        border: 1px solid var(--mv-border);
      }
      .mv-card-body {
        padding: 22px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
      .mv-card-title {
        font-size: 18px;
        margin: 0 0 10px;
        font-family: 'Playfair Display', serif;
      }
      .mv-card-specs {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-bottom: 18px;
      }
      .mv-card-spec-row {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: var(--mv-text-muted);
        border-bottom: 1px dashed rgba(255,255,255,0.06);
        padding-bottom: 4px;
      }
      .mv-card-spec-val {
        color: var(--mv-text);
        font-weight: 500;
      }
      .mv-card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
        padding-top: 14px;
        border-top: 1px solid var(--mv-border);
      }
      .mv-card-price {
        font-size: 18px;
        font-weight: 700;
        color: var(--mv-gold-light);
      }
      .mv-card-btn {
        padding: 10px 18px;
        font-size: 12px;
      }

      /* КВИЗ */
      .mv-quiz-section {
        padding: 80px 0;
        background: radial-gradient(circle at 50% 50%, rgba(197, 155, 109, 0.08) 0%, transparent 70%);
      }
      .mv-quiz-box {
        max-width: 860px;
        margin: 0 auto;
        background: var(--mv-grad-card);
        border: 1px solid var(--mv-border);
        border-radius: 24px;
        padding: 40px;
        box-shadow: var(--mv-glow);
      }
      .mv-quiz-step {
        margin-bottom: 30px;
      }
      .mv-quiz-q {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 16px;
        color: var(--mv-gold-light);
      }
      .mv-quiz-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
      }
      .mv-quiz-card {
        padding: 16px;
        border-radius: 14px;
        background: rgba(255,255,255,0.03);
        border: 1px solid var(--mv-border);
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .mv-quiz-card:hover, .mv-quiz-card.selected {
        border-color: var(--mv-gold-light);
        background: rgba(197, 155, 109, 0.14);
      }
      .mv-quiz-card-val {
        font-size: 14px;
        font-weight: 600;
        color: var(--mv-text);
      }

      /* ПРЕИМУЩЕСТВА & ФАБРИКА */
      .mv-about-section {
        padding: 90px 0;
        border-top: 1px solid var(--mv-border);
      }
      .mv-about-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
      .mv-about-card {
        background: var(--mv-grad-card);
        border: 1px solid var(--mv-border);
        border-radius: 20px;
        padding: 32px;
      }
      .mv-about-num {
        font-size: 32px;
        font-family: 'Playfair Display', serif;
        color: var(--mv-gold-light);
        margin-bottom: 14px;
      }
      .mv-about-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 12px;
      }
      .mv-about-text {
        font-size: 14px;
        color: var(--mv-text-muted);
        line-height: 1.6;
      }

      /* FAQ АККОРДЕОН */
      .mv-faq-section {
        padding: 90px 0;
        background: rgba(16, 13, 11, 0.5);
        border-top: 1px solid var(--mv-border);
      }
      .mv-faq-list {
        max-width: 860px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .mv-faq-item {
        background: var(--mv-grad-card);
        border: 1px solid var(--mv-border);
        border-radius: 16px;
        overflow: hidden;
      }
      .mv-faq-head {
        padding: 22px 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        user-select: none;
      }
      .mv-faq-q {
        font-size: 16px;
        font-weight: 600;
        color: var(--mv-text);
      }
      .mv-faq-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(197, 155, 109, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--mv-gold-light);
        transition: transform 0.3s ease;
      }
      .mv-faq-item.open .mv-faq-icon {
        transform: rotate(45deg);
      }
      .mv-faq-body {
        padding: 0 28px 22px;
        font-size: 14px;
        color: var(--mv-text-muted);
        line-height: 1.7;
        display: none;
      }
      .mv-faq-item.open .mv-faq-body {
        display: block;
      }

      /* СЕКЦИЯ ФОРМЫ */
      .mv-lead-section {
        padding: 90px 0;
        position: relative;
        background: radial-gradient(circle at 50% 50%, rgba(197, 155, 109, 0.12) 0%, transparent 70%);
      }
      .mv-lead-card {
        max-width: 680px;
        margin: 0 auto;
        background: var(--mv-grad-card);
        border: 1px solid var(--mv-border);
        border-radius: 28px;
        padding: 44px;
        box-shadow: var(--mv-glow);
        text-align: center;
      }
      .mv-lead-badge {
        display: inline-block;
        padding: 6px 16px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
        background: rgba(197, 155, 109, 0.15);
        color: var(--mv-gold-light);
        border: 1px solid var(--mv-border);
        margin-bottom: 20px;
      }

      /* Стилизация формы Тильды внутри слота */
      #mv-tilda-form-slot {
        width: 100%;
        margin-top: 24px;
      }
      #rec4705785601 {
        padding: 0 !important;
        margin: 0 !important;
        background: transparent !important;
      }
      #rec4705785601 .t-popup,
      #rec4705785601 .t-popup__container {
        position: static !important;
        background: transparent !important;
        padding: 0 !important;
        margin: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        box-shadow: none !important;
      }
      #rec4705785601 .t-popup__close,
      #rec4705785601 .t702__text-wrapper {
        display: none !important;
      }
      #rec4705785601 .t-form__inputsbox {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      #rec4705785601 input.t-input {
        background: rgba(255, 255, 255, 0.05) !important;
        border: 1px solid var(--mv-border) !important;
        border-radius: 14px !important;
        color: var(--mv-text) !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 15px !important;
        padding: 16px 20px !important;
        height: 52px !important;
        outline: none !important;
        transition: all 0.2s ease !important;
      }
      #rec4705785601 input.t-input:focus {
        border-color: var(--mv-gold-light) !important;
        box-shadow: 0 0 15px rgba(197, 155, 109, 0.3) !important;
      }
      #rec4705785601 .t-input-group_tx {
        display: none !important;
      }
      #rec4705785601 .t-input-title {
        color: var(--mv-text) !important;
        font-size: 14px !important;
        margin-bottom: 10px !important;
        text-align: left !important;
      }

      /* 4 кнопки мессенджеров в одну строку */
      #rec4705785601 .t-contact-method__types-container {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 10px !important;
        margin-bottom: 12px !important;
      }
      #rec4705785601 .t-contact-method__type {
        margin: 0 !important;
        padding: 10px 6px !important;
        border-radius: 12px !important;
        border: 1px solid var(--mv-border) !important;
        background: rgba(255, 255, 255, 0.04) !important;
        cursor: pointer !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: all 0.2s ease !important;
      }
      #rec4705785601 .t-contact-method__type.mv-active {
        border-color: var(--mv-gold-light) !important;
        background: rgba(197, 155, 109, 0.2) !important;
      }
      #rec4705785601 .t-contact-method__type-label {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        gap: 6px !important;
        cursor: pointer !important;
      }
      #rec4705785601 .t-contact-method__title {
        font-size: 11px !important;
        font-weight: 600 !important;
        color: var(--mv-text) !important;
      }

      /* Кнопка отправки формы */
      #rec4705785601 .t-submit {
        background: var(--mv-grad-gold) !important;
        color: #0c0a09 !important;
        border: none !important;
        border-radius: 999px !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 15px !important;
        font-weight: 700 !important;
        height: 54px !important;
        width: 100% !important;
        cursor: pointer !important;
        box-shadow: 0 4px 20px rgba(197, 155, 109, 0.35) !important;
        transition: all 0.3s ease !important;
      }
      #rec4705785601 .t-submit:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 30px rgba(229, 197, 158, 0.5) !important;
      }

      /* Мягкая подсветка ошибок */
      .mv-input-err {
        border-color: #ef4444 !important;
        box-shadow: 0 0 16px rgba(239, 68, 68, 0.35) !important;
      }

      /* FOOTER */
      .mv-footer {
        padding: 60px 0 30px;
        background: #080605;
        border-top: 1px solid var(--mv-border);
      }
      .mv-footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 40px;
        margin-bottom: 40px;
      }
      .mv-footer-col h4 {
        font-size: 15px;
        font-weight: 600;
        color: var(--mv-gold-light);
        margin: 0 0 16px;
      }
      .mv-footer-links {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .mv-footer-links a {
        color: var(--mv-text-muted);
        text-decoration: none;
        font-size: 13px;
        transition: color 0.2s ease;
      }
      .mv-footer-links a:hover {
        color: var(--mv-gold-light);
      }
      .mv-footer-bottom {
        padding-top: 24px;
        border-top: 1px solid rgba(255,255,255,0.05);
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: var(--mv-text-muted);
      }

      /* Плавающий мобильный виджет */
      #mv-widget-lead {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 990;
        transition: opacity 0.3s ease;
      }
      .mv-widget-btn {
        background: var(--mv-grad-gold);
        color: #0c0a09;
        font-weight: 700;
        font-size: 14px;
        padding: 14px 24px;
        border-radius: 999px;
        box-shadow: 0 8px 30px rgba(197, 155, 109, 0.45);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        outline: none;
      }

      /* Кнопка наверх */
      #mv-btn-top {
        position: fixed;
        bottom: 24px;
        left: 24px;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: rgba(22, 18, 16, 0.85);
        border: 1px solid var(--mv-border);
        color: var(--mv-gold-light);
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 990;
        backdrop-filter: blur(10px);
        transition: all 0.2s ease;
      }
      #mv-btn-top:hover {
        border-color: var(--mv-gold-light);
        transform: translateY(-2px);
      }

      /* Модальное окно видео */
      #mv-video-modal {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.85);
        backdrop-filter: blur(12px);
        z-index: 10000;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      .mv-modal-content {
        position: relative;
        width: 100%;
        max-width: 900px;
        aspect-ratio: 16/9;
        background: #000;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid var(--mv-border);
      }
      .mv-modal-close {
        position: absolute;
        top: -44px;
        right: 0;
        background: transparent;
        border: none;
        color: #fff;
        font-size: 32px;
        cursor: pointer;
      }

      /* Адаптив под планшеты и мобильные */
      @media (max-width: 992px) {
        .mv-nav, .mv-header-phone { display: none !important; }
        .mv-hero-title { font-size: 38px; }
        .mv-hero-stats { grid-template-columns: repeat(2, 1fr); }
        .mv-video-layout { grid-template-columns: 1fr; }
        .mv-catalog-grid { grid-template-columns: repeat(2, 1fr); }
        .mv-about-grid { grid-template-columns: 1fr; }
        .mv-quiz-grid { grid-template-columns: repeat(2, 1fr); }
        .mv-footer-grid { grid-template-columns: 1fr; }
      }
      @media (max-width: 600px) {
        .mv-hero-title { font-size: 30px; }
        .mv-catalog-grid { grid-template-columns: 1fr; }
        .mv-hero-stats { grid-template-columns: 1fr; }
        .mv-lead-card { padding: 26px 18px; }
        #rec4705785601 .t-contact-method__types-container {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
    `;
    document.head.appendChild(s);
  }

  // Данные срезов для каталога
  var CATALOG_ITEMS = [
    {
      id: 1,
      title: 'Детский шелк • Золотистый русый',
      type: 'Детский шелк',
      len: '55-65 см',
      shade: 'Теплый русый',
      weight: '110 грамм',
      tag: 'Тончайший волос',
      price: 'от 18 500 ₽',
      img: 'https://static.tildacdn.com/tild3430-6438-4630-b435-663237353933/photo_2025-09-24_10-.jpg'
    },
    {
      id: 2,
      title: 'Славянский люкс • Платиновый блонд',
      type: 'Славянские люкс',
      len: '55-65 см',
      shade: 'Пепельный блонд',
      weight: '125 грамм',
      tag: 'Плотный срез',
      price: 'от 22 900 ₽',
      img: 'https://static.tildacdn.com/tild3131-3761-4165-b235-366537393336/img_8889-scaled.jpg'
    },
    {
      id: 3,
      title: 'Волнистые славянские • Шоколад',
      type: 'Волнистые',
      len: '60-70 см',
      shade: 'Шоколад',
      weight: '140 грамм',
      tag: 'Естественная волна',
      price: 'от 24 500 ₽',
      img: 'https://static.tildacdn.com/tild6635-3130-4331-b132-306531653965/kling_20260726_IMAGE.png'
    },
    {
      id: 4,
      title: 'Детский неокрашенный срез • Светло-русый',
      type: 'Детский шелк',
      len: '45-55 см',
      shade: 'Теплый русый',
      weight: '95 грамм',
      tag: 'Целинный срез',
      price: 'от 21 000 ₽',
      img: 'https://static.tildacdn.com/tild3430-6438-4630-b435-663237353933/photo_2025-09-24_10-.jpg'
    },
    {
      id: 5,
      title: 'Славянский экстра-длинный • Эспрессо',
      type: 'Славянские люкс',
      len: '70+ см',
      shade: 'Глубокий темный',
      weight: '160 грамм',
      tag: 'Длина 75 см',
      price: 'от 28 000 ₽',
      img: 'https://static.tildacdn.com/tild3131-3761-4165-b235-366537393336/img_8889-scaled.jpg'
    },
    {
      id: 6,
      title: 'Шелковистый прямой • Пшеничный блонд',
      type: 'Славянские люкс',
      len: '50-60 см',
      shade: 'Пепельный блонд',
      weight: '115 грамм',
      tag: 'Идеальные концы',
      price: 'от 20 500 ₽',
      img: 'https://static.tildacdn.com/tild6635-3130-4331-b132-306531653965/kling_20260726_IMAGE.png'
    }
  ];

  // 3. Рендер посадочной страницы SPA
  function renderApp() {
    if (document.getElementById('mv-app')) return;

    var app = document.createElement('div');
    app.id = 'mv-app';

    app.innerHTML = `
      <!-- ШАПКА -->
      <header class="mv-header">
        <div class="mv-container">
          <div class="mv-header-inner">
            <a href="#hero" class="mv-logo">
              <span class="mv-logo-title">Магия Волос</span>
              <span class="mv-logo-sub">Фабрика натуральных волос с 2009 г.</span>
            </a>
            <nav class="mv-nav">
              <a href="#catalog">Каталог</a>
              <a href="#videos">Видеообзоры</a>
              <a href="#quiz">Подбор среза</a>
              <a href="#about">О фабрике</a>
              <a href="#faq">Вопрос-ответ</a>
              <a href="#contacts">Контакты</a>
            </nav>
            <div class="mv-header-right">
              <a href="tel:+79255063750" class="mv-header-phone">
                <span class="mv-header-phone-val">+7 (925) 506-37-50</span>
                <span class="mv-header-phone-sub">Москва, ул. Машкова, 26с1</span>
              </a>
              <a href="#lead-box" class="mv-btn mv-btn-primary mv-header-btn">Подобрать срез</a>
            </div>
          </div>
        </div>
      </header>

      <!-- HERO ЭКРАН -->
      <section id="hero" class="mv-hero">
        <div class="mv-container">
          <div class="mv-hero-badge">
            <span>✦</span> Более 150 кг отборных срезов всегда в наличии в Москве
          </div>
          <h1 class="mv-hero-title mv-title-serif">
            Натуральные волосы премиум-класса <br>
            <span class="mv-gold-text">с собственной фабрики</span>
          </h1>
          <p class="mv-hero-descr">
            Только одноволосые донорские срезы из экологически чистых регионов России. Живая сохранённая кутикула без силикона и агрессивной химии. Доставка по РФ и миру.
          </p>
          <div class="mv-hero-actions">
            <a href="#quiz" class="mv-btn mv-btn-primary">Подобрать срез онлайн ✦</a>
            <a href="#videos" class="mv-btn mv-btn-outline">Смотреть видеообзоры ▶</a>
            <a href="#catalog" class="mv-btn mv-btn-outline">Каталог в наличии</a>
          </div>
          <div class="mv-hero-stats">
            <div class="mv-stat-item">
              <span class="mv-stat-val">>150 кг</span>
              <span class="mv-stat-lbl">волос всех оттенков и структур в шоуруме</span>
            </div>
            <div class="mv-stat-item">
              <span class="mv-stat-val">1 донор</span>
              <span class="mv-stat-lbl">строго один срез в пучке, без перевертышей</span>
            </div>
            <div class="mv-stat-item">
              <span class="mv-stat-val">с 2009 г.</span>
              <span class="mv-stat-lbl">собственное производство и щадящее осветление</span>
            </div>
            <div class="mv-stat-item">
              <span class="mv-stat-val">1–3 дня</span>
              <span class="mv-stat-lbl">экспресс-доставка в любой город РФ и мира</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ВИДЕО-СЕКЦИЯ (KINESCOPE) -->
      <section id="videos" class="mv-video-section">
        <div class="mv-container">
          <div class="mv-sec-head">
            <span class="mv-sec-badge">Видеоматериалы</span>
            <h2 class="mv-sec-title mv-title-serif">Живые обзоры срезов и наша фабрика</h2>
            <p class="mv-sec-sub">Оцените шелковистость, плотность кончиков и натуральный блеск волос на реальных видеосъемках перед покупкой.</p>
          </div>
          <div class="mv-video-layout">
            <!-- Главное видео о производстве -->
            <div class="mv-main-video-card" data-video-id="gJZV99n1gmgEXYKEDCXNj2">
              <img src="https://static.tildacdn.com/tild6664-3935-4431-a539-613836366139/___3.png" alt="Собственная фабрика волос">
              <div class="mv-play-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0c0a09"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <!-- Сетка 4 видео срезов -->
            <div class="mv-video-grid">
              <div class="mv-video-mini" data-video-id="9iFkqc7sAqedM6nr7QcMgj">
                <div class="mv-main-video-card" style="height:100%;">
                  <img src="https://static.tildacdn.com/tild3430-6438-4630-b435-663237353933/photo_2025-09-24_10-.jpg" alt="Обзор среза 1">
                  <div class="mv-play-btn" style="width:44px; height:44px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="#0c0a09"><path d="M8 5v14l11-7z"/></svg></div>
                </div>
                <div class="mv-video-mini-overlay">
                  <span class="mv-video-mini-title">Славянский блонд 60 см</span>
                </div>
              </div>
              <div class="mv-video-mini" data-video-id="oBK1RzCCNt8hJjRS4FeRVp">
                <div class="mv-main-video-card" style="height:100%;">
                  <img src="https://static.tildacdn.com/tild3131-3761-4165-b235-366537393336/img_8889-scaled.jpg" alt="Обзор среза 2">
                  <div class="mv-play-btn" style="width:44px; height:44px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="#0c0a09"><path d="M8 5v14l11-7z"/></svg></div>
                </div>
                <div class="mv-video-mini-overlay">
                  <span class="mv-video-mini-title">Детский шелк 55 см</span>
                </div>
              </div>
              <div class="mv-video-mini" data-video-id="qjuvNhMoWxiPGHiiMhMiig">
                <div class="mv-main-video-card" style="height:100%;">
                  <img src="https://static.tildacdn.com/tild6635-3130-4331-b132-306531653965/kling_20260726_IMAGE.png" alt="Обзор среза 3">
                  <div class="mv-play-btn" style="width:44px; height:44px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="#0c0a09"><path d="M8 5v14l11-7z"/></svg></div>
                </div>
                <div class="mv-video-mini-overlay">
                  <span class="mv-video-mini-title">Волнистый шоколад 65 см</span>
                </div>
              </div>
              <div class="mv-video-mini" data-video-id="42dwoJ2St7kS9wMxQkVHKd">
                <div class="mv-main-video-card" style="height:100%;">
                  <img src="https://static.tildacdn.com/tild3430-6438-4630-b435-663237353933/photo_2025-09-24_10-.jpg" alt="Обзор среза 4">
                  <div class="mv-play-btn" style="width:44px; height:44px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="#0c0a09"><path d="M8 5v14l11-7z"/></svg></div>
                </div>
                <div class="mv-video-mini-overlay">
                  <span class="mv-video-mini-title">Русый целинный 50 см</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- КАТАЛОГ -->
      <section id="catalog" class="mv-catalog-section">
        <div class="mv-container">
          <div class="mv-sec-head">
            <span class="mv-sec-badge">Каталог срезов</span>
            <h2 class="mv-sec-title mv-title-serif">Популярные срезы в наличии</h2>
            <p class="mv-sec-sub">Выберите категорию или воспользуйтесь быстрым фильтром по длине и оттенку</p>
          </div>

          <!-- Фильтры -->
          <div class="mv-filters-box">
            <div class="mv-filter-row" id="filter-type">
              <span class="mv-filter-lbl">Тип волос:</span>
              <div class="mv-filter-pills">
                <button class="mv-pill active" data-filter="all">Все категории</button>
                <button class="mv-pill" data-filter="Детский шелк">Детский шелк</button>
                <button class="mv-pill" data-filter="Славянские люкс">Славянские люкс</button>
                <button class="mv-pill" data-filter="Волнистые">Волнистые</button>
              </div>
            </div>
            <div class="mv-filter-row" id="filter-len">
              <span class="mv-filter-lbl">Длина:</span>
              <div class="mv-filter-pills">
                <button class="mv-pill active" data-len="all">Любая</button>
                <button class="mv-pill" data-len="45-55 см">45–55 см</button>
                <button class="mv-pill" data-len="55-65 см">55–65 см</button>
                <button class="mv-pill" data-len="70+ см">70+ см</button>
              </div>
            </div>
          </div>

          <!-- Сетка карточек -->
          <div class="mv-catalog-grid" id="mv-cards-container"></div>
        </div>
      </section>

      <!-- КВИЗ -->
      <section id="quiz" class="mv-quiz-section">
        <div class="mv-container">
          <div class="mv-sec-head">
            <span class="mv-sec-badge">Онлайн-подбор</span>
            <h2 class="mv-sec-title mv-title-serif">Подберите идеальный срез за 3 шага</h2>
            <p class="mv-sec-sub">Укажите параметры — эксперт фабрики подготовит видео подборки срезов под ваш тон</p>
          </div>
          <div class="mv-quiz-box">
            <div class="mv-quiz-step">
              <div class="mv-quiz-q">1. Желаемая длина волос:</div>
              <div class="mv-quiz-grid" id="quiz-len-grid">
                <div class="mv-quiz-card selected" data-val="45–50 см (до лопаток)"><div class="mv-quiz-card-val">45–50 см</div></div>
                <div class="mv-quiz-card" data-val="55–60 см (по талию)"><div class="mv-quiz-card-val">55–60 см</div></div>
                <div class="mv-quiz-card" data-val="65–70 см (ниже талии)"><div class="mv-quiz-card-val">65–70 см</div></div>
                <div class="mv-quiz-card" data-val="75+ см (максимальная)"><div class="mv-quiz-card-val">75+ см</div></div>
              </div>
            </div>
            <div class="mv-quiz-step">
              <div class="mv-quiz-q">2. Структура собственных волос:</div>
              <div class="mv-quiz-grid" id="quiz-type-grid">
                <div class="mv-quiz-card selected" data-val="Тонкие шелковистые"><div class="mv-quiz-card-val">Тонкие шелковые</div></div>
                <div class="mv-quiz-card" data-val="Плотные прямые"><div class="mv-quiz-card-val">Плотные прямые</div></div>
                <div class="mv-quiz-card" data-val="Легкая волна"><div class="mv-quiz-card-val">Легкая волна</div></div>
                <div class="mv-quiz-card" data-val="Пористые / кудрявые"><div class="mv-quiz-card-val">Пористые / кудри</div></div>
              </div>
            </div>
            <div style="text-align: center; margin-top: 30px;">
              <button type="button" class="mv-btn mv-btn-primary" id="mv-quiz-submit">Получить видеоподборку под мои параметры ✦</button>
            </div>
          </div>
        </div>
      </section>

      <!-- О ФАБРИКЕ -->
      <section id="about" class="mv-about-section">
        <div class="mv-container">
          <div class="mv-sec-head">
            <span class="mv-sec-badge">Стандарты качества</span>
            <h2 class="mv-sec-title mv-title-serif">Почему наши волосы не теряют блеск</h2>
            <p class="mv-sec-sub">Собственная фабрика полного цикла в России гарантирует 100% натуральность</p>
          </div>
          <div class="mv-about-grid">
            <div class="mv-about-card">
              <div class="mv-about-num">01</div>
              <div class="mv-about-title">Один донор — один срез</div>
              <div class="mv-about-text">Никогда не смешиваем волосы от разных людей. Чешуйки кутикулы направлены строго в одну сторону, поэтому волосы не путаются при мытье.</div>
            </div>
            <div class="mv-about-card">
              <div class="mv-about-num">02</div>
              <div class="mv-about-title">Без силикона и маскировки</div>
              <div class="mv-about-text">Мы не покрываем волосы силиконом. Их мягкость и шелковистость — естественные, они останутся такими же после 10 и 50 моек головы.</div>
            </div>
            <div class="mv-about-card">
              <div class="mv-about-num">03</div>
              <div class="mv-about-title">Щадящее осветление</div>
              <div class="mv-about-text">Авторская бережная технология бережного осветления на низких оксидах сохраняет белковые связи волоса. Краска не вымывается в желтизну.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ АККОРДЕОН -->
      <section id="faq" class="mv-faq-section">
        <div class="mv-container">
          <div class="mv-sec-head">
            <span class="mv-sec-badge">Вопросы и ответы</span>
            <h2 class="mv-sec-title mv-title-serif">Часто задаваемые вопросы</h2>
          </div>
          <div class="mv-faq-list">
            <div class="mv-faq-item open">
              <div class="mv-faq-head">
                <span class="mv-faq-q">Делаете ли вы доставку в другие города?</span>
                <span class="mv-faq-icon">+</span>
              </div>
              <div class="mv-faq-body">Да, доставка осуществляется по тарифам СДЭК и курьерских служб по всей России и миру. Перед отправкой мы снимаем подробное макро-видео среза при дневном свете и согласовываем его с вами.</div>
            </div>
            <div class="mv-faq-item">
              <div class="mv-faq-head">
                <span class="mv-faq-q">Можно ли приехать и выбрать срез лично?</span>
                <span class="mv-faq-icon">+</span>
              </div>
              <div class="mv-faq-body">Конечно! Наш шоурум и производство находятся в центре Москвы: ул. Машкова, дом 26, стр. 1. У нас более 150 кг волос в наличии, мастер приложит срезы к вашим волосам для точного совпадения оттенка и плотности.</div>
            </div>
            <div class="mv-faq-item">
              <div class="mv-faq-head">
                <span class="mv-faq-q">Как ухаживать за наращенными волосами?</span>
                <span class="mv-faq-icon">+</span>
              </div>
              <div class="mv-faq-body">Уход прост: домашний уход по вашему типу волос и профессиональная расческа для наращенных волос. Мойте голову вертикально, не запрокидывая вперед. Не наносите маски и масла на прикорневую зону капсул.</div>
            </div>
            <div class="mv-faq-item">
              <div class="mv-faq-head">
                <span class="mv-faq-q">Можно ли посещать бани, сауны и купаться?</span>
                <span class="mv-faq-icon">+</span>
              </div>
              <div class="mv-faq-body">Да, с нашими волосами можно посещать бани и термальные источники. В сауне рекомендуется надевать войлочную шапочку, а на море защищать волосы от палящего солнца уходовым спреем.</div>
            </div>
            <div class="mv-faq-item">
              <div class="mv-faq-head">
                <span class="mv-faq-q">Возможна ли оплата частями или рассрочка?</span>
                <span class="mv-faq-icon">+</span>
              </div>
              <div class="mv-faq-body">Да, мы подбираем удобные варианты оплаты для частных клиентов и специальные оптовые условия для мастеров и студий красоты.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- БЛОК ЗАЯВКИ С ФОРМОЙ TILDA -->
      <section id="lead-box" class="mv-lead-section">
        <div class="mv-container">
          <div class="mv-lead-card">
            <span class="mv-lead-badge" id="mv-lead-selected-badge">✦ Забронировать консультацию фабрики</span>
            <h2 class="mv-sec-title mv-title-serif" style="margin-bottom:12px;">Получите персональный подбор</h2>
            <p class="mv-sec-sub" style="margin-bottom:24px;">Оставьте номер — технолог фабрики пришлет макро-видео 2–3 подходящих срезов в удобный мессенджер в течение 15 минут.</p>

            <!-- СЛОТ ДЛЯ ПЕРЕНОСА ФОРМЫ ТИЛЬДЫ -->
            <div id="mv-tilda-form-slot"></div>
          </div>
        </div>
      </section>

      <!-- КОНТАКТЫ & ПОДВАЛ -->
      <footer id="contacts" class="mv-footer">
        <div class="mv-container">
          <div class="mv-footer-grid">
            <div class="mv-footer-col">
              <span class="mv-logo-title">Магия Волос</span>
              <p style="font-size:13px; color:var(--mv-text-muted); line-height:1.6; margin:14px 0 0; max-width:340px;">
                Производство и магазин натуральных волос высшей категории в Москве. Оптовые и розничные поставки по РФ и миру.
              </p>
            </div>
            <div class="mv-footer-col">
              <h4>Контакты</h4>
              <div class="mv-footer-links">
                <a href="tel:+79255063750">+7 (925) 506-37-50</a>
                <span>г. Москва, ул. Машкова, 26с1</span>
                <span>Ежедневно с 10:00 до 20:00</span>
              </div>
            </div>
            <div class="mv-footer-col">
              <h4>Мессенджеры и соцсети</h4>
              <div class="mv-footer-links">
                <a href="https://t.me/magiavolos_chanel" target="_blank">Telegram-канал срезов</a>
                <a href="#lead-box">Написать в MAX</a>
                <a href="#lead-box">Написать в WhatsApp</a>
              </div>
            </div>
          </div>
          <div class="mv-footer-bottom">
            <span>© 2009–2026 Магия Волос. Все права защищены.</span>
            <a href="https://xn--80aecuqbsb1a9k.xn--p1ai/politika_sale" target="_blank" style="color:var(--mv-text-muted); text-decoration:none;">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>

      <!-- МОДАЛКА ВИДЕО -->
      <div id="mv-video-modal">
        <div class="mv-modal-content">
          <button class="mv-modal-close">&times;</button>
          <iframe id="mv-modal-iframe" src="" style="width:100%; height:100%; border:none;" allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div>
      </div>
    `;

    // Вставляем #mv-app в начало body
    document.body.prepend(app);
  }

  // 4. Логика каталога и фильтров
  function initCatalog() {
    var container = document.getElementById('mv-cards-container');
    if (!container) return;

    var activeType = 'all';
    var activeLen = 'all';

    function renderCards() {
      container.innerHTML = '';
      var filtered = CATALOG_ITEMS.filter(function(item) {
        var matchType = (activeType === 'all' || item.type === activeType);
        var matchLen = (activeLen === 'all' || item.len === activeLen);
        return matchType && matchLen;
      });

      if (!filtered.length) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding:40px; color:var(--mv-text-muted);">В наличии более 150 кг срезов! Оставьте заявку, и мы снимем видео именно под ваш запрос.</div>';
        return;
      }

      filtered.forEach(function(item) {
        var card = document.createElement('div');
        card.className = 'mv-card';
        card.innerHTML = `
          <div class="mv-card-img-wrap">
            <img src="${item.img}" alt="${item.title}" class="mv-card-img">
            <span class="mv-card-tag">${item.tag}</span>
          </div>
          <div class="mv-card-body">
            <h3 class="mv-card-title">${item.title}</h3>
            <div class="mv-card-specs">
              <div class="mv-card-spec-row"><span>Категория:</span><span class="mv-card-spec-val">${item.type}</span></div>
              <div class="mv-card-spec-row"><span>Длина:</span><span class="mv-card-spec-val">${item.len}</span></div>
              <div class="mv-card-spec-row"><span>Вес пучка:</span><span class="mv-card-spec-val">${item.weight}</span></div>
            </div>
            <div class="mv-card-footer">
              <div class="mv-card-price">${item.price}</div>
              <button class="mv-btn mv-btn-primary mv-card-btn" data-item="${item.title}">Забронировать</button>
            </div>
          </div>
        `;

        var btn = card.querySelector('.mv-card-btn');
        btn.addEventListener('click', function() {
          var badge = document.getElementById('mv-lead-selected-badge');
          if (badge) badge.textContent = '✦ Выбран срез: ' + item.title;
          var leadBox = document.getElementById('lead-box');
          if (leadBox) leadBox.scrollIntoView({ behavior: 'smooth' });
        });

        container.appendChild(card);
      });
    }

    // Слушатели фильтров типов
    var typeBtns = document.querySelectorAll('#filter-type .mv-pill');
    typeBtns.forEach(function(b) {
      b.addEventListener('click', function() {
        typeBtns.forEach(function(x) { x.classList.remove('active'); });
        b.classList.add('active');
        activeType = b.getAttribute('data-filter');
        renderCards();
      });
    });

    // Слушатели фильтров длины
    var lenBtns = document.querySelectorAll('#filter-len .mv-pill');
    lenBtns.forEach(function(b) {
      b.addEventListener('click', function() {
        lenBtns.forEach(function(x) { x.classList.remove('active'); });
        b.classList.add('active');
        activeLen = b.getAttribute('data-len');
        renderCards();
      });
    });

    renderCards();
  }

  // 5. Логика Квиза
  function initQuiz() {
    function setupGrid(gridId) {
      var grid = document.getElementById(gridId);
      if (!grid) return;
      var cards = grid.querySelectorAll('.mv-quiz-card');
      cards.forEach(function(c) {
        c.addEventListener('click', function() {
          cards.forEach(function(x) { x.classList.remove('selected'); });
          c.classList.add('selected');
        });
      });
    }

    setupGrid('quiz-len-grid');
    setupGrid('quiz-type-grid');

    var submitBtn = document.getElementById('mv-quiz-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', function() {
        var selLen = document.querySelector('#quiz-len-grid .selected');
        var selType = document.querySelector('#quiz-type-grid .selected');
        var lenVal = selLen ? selLen.getAttribute('data-val') : '55-60 см';
        var typeVal = selType ? selType.getAttribute('data-val') : 'Тонкие шелковые';

        var badge = document.getElementById('mv-lead-selected-badge');
        if (badge) badge.textContent = '✦ Параметры подбора: ' + lenVal + ' • ' + typeVal;

        var leadBox = document.getElementById('lead-box');
        if (leadBox) leadBox.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // 6. Логика Видеоплеера (Kinescope)
  function initVideoModal() {
    var modal = document.getElementById('mv-video-modal');
    var iframe = document.getElementById('mv-modal-iframe');
    var closeBtn = modal ? modal.querySelector('.mv-modal-close') : null;

    if (!modal || !iframe) return;

    function openVideo(videoId) {
      iframe.src = 'https://kinescope.io/embed/' + videoId + '?autoplay=1';
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeVideo() {
      modal.style.display = 'none';
      iframe.src = '';
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeVideo);
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeVideo();
    });

    // Навешиваем клик на все карточки с data-video-id
    document.querySelectorAll('[data-video-id]').forEach(function(el) {
      el.addEventListener('click', function() {
        var id = el.getAttribute('data-video-id');
        if (id) openVideo(id);
      });
    });
  }

  // 7. Логика FAQ аккордеона
  function initFaq() {
    var items = document.querySelectorAll('.mv-faq-item');
    items.forEach(function(item) {
      var head = item.querySelector('.mv-faq-head');
      if (head) {
        head.addEventListener('click', function() {
          var isOpen = item.classList.contains('open');
          items.forEach(function(x) { x.classList.remove('open'); });
          if (!isOpen) item.classList.add('open');
        });
      }
    });
  }

  // 8. Перенос и интеграция нативной формы Tilda (rec4705785601)
  function mountTildaForm() {
    var slot = document.getElementById('mv-tilda-form-slot');
    if (!slot) return;

    var rec = document.getElementById('rec4705785601');
    if (!rec) return;

    if (rec.parentElement !== slot) {
      slot.appendChild(rec);
    }

    rec.style.setProperty('display', 'block', 'important');
    rec.style.setProperty('visibility', 'visible', 'important');
    rec.style.setProperty('opacity', '1', 'important');
    rec.style.setProperty('pointer-events', 'auto', 'important');
    rec.style.setProperty('position', 'static', 'important');

    var popup = rec.querySelector('.t-popup');
    if (popup) {
      popup.style.setProperty('display', 'block', 'important');
      popup.style.setProperty('visibility', 'visible', 'important');
      popup.style.setProperty('opacity', '1', 'important');
      popup.style.setProperty('position', 'static', 'important');
      popup.classList.add('t-popup_show');
    }

    var popupContainer = rec.querySelector('.t-popup__container');
    if (popupContainer) {
      popupContainer.style.setProperty('display', 'block', 'important');
      popupContainer.style.setProperty('position', 'static', 'important');
      popupContainer.style.setProperty('background', 'transparent', 'important');
    }

    var form = rec.querySelector('form#form4705785601') || rec.querySelector('form');
    if (!form) return;

    form.style.setProperty('display', 'block', 'important');
    form.style.setProperty('visibility', 'visible', 'important');
    form.style.setProperty('opacity', '1', 'important');
    form.style.setProperty('position', 'static', 'important');

    // Кнопки способов связи
    var methodContainer = form.querySelector('.t-contact-method__types-container');
    var valContainer = form.querySelector('.t-contact-method__value-container');

    if (methodContainer && valContainer) {
      var methodBtns = methodContainer.querySelectorAll('.t-contact-method__type');
      var phoneVal = valContainer.querySelector('.t-contact-method__phone-value');
      var tgVal = valContainer.querySelector('.t-contact-method__telegram-value');
      var waVal = valContainer.querySelector('.t-contact-method__whatsapp-value');
      var maxVal = valContainer.querySelector('.t-contact-method__max_messenger-value');

      var icons = {
        phone: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="12" fill="rgba(197,155,109,0.25)"/><path d="M7 9.8a12.5 12.5 0 005.2 5.2l1.8-1.8c.2-.2.5-.3.8-.2.9.3 1.9.5 2.9.5.4 0 .8.4.8.8v2.9c0 .4-.4.8-.8.8-7.5 0-13.7-6.2-13.7-13.7 0-.4.4-.8.8-.8H8c.4 0 .8.4.8.8 0 1 .2 2 .5 2.9.1.3 0 .6-.2.8L7 9.8z" fill="#c59b6d"/></svg>',
        telegram: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="12" fill="#2AABEE"/><path d="M5.5 11.8l3.2 1.2 1.3 4.1c.2.5.8.6 1.1.2l1.9-1.9 3.8 2.8c.4.3 1 .1 1.1-.4l2.2-10.4c.1-.6-.4-1.1-1-.9L5.5 10.7c-.6.2-.6 1 0 1.1zm4.2 1l6.8-4.3c.2-.1.3.1.2.2l-5.6 5.1-.2 2.3-.8-2.6-.4-.7z" fill="#ffffff"/></svg>',
        whatsapp: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="12" fill="#25D366"/><path d="M17.5 14.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9c0 1.7 1.3 3.4 1.4 3.6.2.2 2.5 3.9 6.2 5.4.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.2-.3-.3-.6-.5z" fill="#ffffff"/></svg>',
        max_messenger: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="12" fill="#0080FF"/><path d="M6.5 15.5V8.5h2.2l2.3 4.5 2.3-4.5h2.2v7h-1.8v-4.8l-2.1 4.2h-1.2L8.3 10.7v4.8H6.5z" fill="#ffffff"/></svg>'
      };

      var titles = {
        phone: 'Телефон',
        telegram: 'Telegram',
        whatsapp: 'WhatsApp',
        max_messenger: 'MAX'
      };

      methodBtns.forEach(function(btn) {
        var mType = btn.getAttribute('data-method-type');
        var label = btn.querySelector('.t-contact-method__type-label');
        if (label && mType && icons[mType]) {
          label.innerHTML = icons[mType] + '<span class="t-contact-method__title">' + (titles[mType] || mType) + '</span>';
        }
      });

      function selectMethod(methodType) {
        methodBtns.forEach(function(btn) {
          var bType = btn.getAttribute('data-method-type');
          var r = btn.querySelector('input[type="radio"]');
          if (bType === methodType) {
            btn.classList.add('mv-active');
            if (r) {
              r.checked = true;
              r.dispatchEvent(new Event('change', { bubbles: true }));
            }
          } else {
            btn.classList.remove('mv-active');
            if (r) r.checked = false;
          }
        });

        // Надежный единый телефонный инпут с маской (+7)
        if (phoneVal) {
          phoneVal.style.setProperty('display', 'block', 'important');
          phoneVal.classList.remove('t-contact-method__hidden');
          var phoneInputs = phoneVal.querySelectorAll('input');
          phoneInputs.forEach(function(inp) {
            inp.disabled = false;
            inp.classList.add('js-tilda-rule');
            var wrap = inp.closest('.t-input-block');
            if (wrap) wrap.style.setProperty('display', 'block', 'important');
          });
        }

        // Остальные скрываем
        [tgVal, waVal, maxVal].forEach(function(block) {
          if (!block) return;
          block.style.setProperty('display', 'none', 'important');
          block.classList.add('t-contact-method__hidden');
          var inps = block.querySelectorAll('input');
          inps.forEach(function(inp) {
            inp.disabled = true;
            inp.classList.remove('js-tilda-rule');
            var wrap = inp.closest('.t-input-block');
            if (wrap) wrap.style.setProperty('display', 'none', 'important');
          });
        });
      }

      methodBtns.forEach(function(btn) {
        if (btn.dataset.mvSwitchInit) return;
        btn.dataset.mvSwitchInit = 'true';
        btn.addEventListener('click', function() {
          var mType = btn.getAttribute('data-method-type');
          if (mType) selectMethod(mType);
        });
      });

      selectMethod('telegram');
    }

    // Тексты инпутов и кнопки
    var nameInp = form.querySelector('input[name="Name"]');
    if (nameInp) nameInp.placeholder = 'Ваше имя';

    var subBtn = form.querySelector('.t-btnflex__text, .t-submit');
    if (subBtn) subBtn.textContent = 'Получить видеоподборку срезов ✦';

    // Валидация при отправке
    var submitBtnEl = form.querySelector('button[type="submit"], .t-submit');
    if (submitBtnEl && !submitBtnEl.dataset.mvValidInit) {
      submitBtnEl.dataset.mvValidInit = 'true';
      submitBtnEl.addEventListener('click', function(e) {
        // Очистка предыдущих подсветок
        form.querySelectorAll('.mv-input-err').forEach(function(el) {
          el.classList.remove('mv-input-err');
        });

        var nVal = (nameInp ? nameInp.value : '').trim();
        if (!nVal) {
          e.preventDefault();
          e.stopImmediatePropagation();
          if (nameInp) {
            nameInp.classList.add('mv-input-err');
            nameInp.focus();
          }
          return false;
        }

        var telInp = form.querySelector('.t-contact-method__phone-value input[type="tel"]');
        var resInp = form.querySelector('.t-contact-method__phone-value .js-phonemask-result');
        var rawTel = (telInp ? telInp.value : '') || (resInp ? resInp.value : '');
        var digits = rawTel.replace(/\D/g, '');

        if (!digits || digits.length < 10) {
          e.preventDefault();
          e.stopImmediatePropagation();
          var targetWrap = telInp ? (telInp.closest('.t-input-phonemask__wrap') || telInp) : null;
          if (targetWrap) {
            targetWrap.classList.add('mv-input-err');
            if (telInp) telInp.focus();
          }
          return false;
        }

        // Вызов Яндекс Метрики в безопасной обертке
        if (typeof window.ym === 'function') {
          try {
            window.ym(window.yandexMetricId || 0, 'reachGoal', 'lead_submitted');
          } catch (err) {}
        }
      });
    }

    // Инициализация телефонных масок
    if (typeof window.t_contactMethod__init === 'function') {
      try {
        window.t_contactMethod__init('4705785601', '1770920801992');
      } catch (e) {}
    }
  }

  // 9. Виджеты: Плавающий мобильный CTA и кнопка Наверх
  function initWidgets() {
    // Кнопка Наверх
    if (!document.getElementById('mv-btn-top')) {
      var topBtn = document.createElement('button');
      topBtn.id = 'mv-btn-top';
      topBtn.title = 'Наверх';
      topBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>';
      document.body.appendChild(topBtn);

      window.addEventListener('scroll', function() {
        topBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
      });
      topBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Плавающий виджет заявки
    if (!document.getElementById('mv-widget-lead')) {
      var leadWidget = document.createElement('div');
      leadWidget.id = 'mv-widget-lead';
      leadWidget.innerHTML = '<button type="button" class="mv-widget-btn"><span>✦</span> Подобрать срез</button>';
      document.body.appendChild(leadWidget);

      leadWidget.querySelector('button').addEventListener('click', function() {
        var leadBox = document.getElementById('lead-box');
        if (leadBox) leadBox.scrollIntoView({ behavior: 'smooth' });
      });

      // Автоматическое скрытие виджета возле формы
      window.addEventListener('scroll', function() {
        var leadSec = document.getElementById('lead-box');
        if (leadSec && leadWidget) {
          var rect = leadSec.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 80) {
            leadWidget.style.opacity = '0';
            leadWidget.style.pointerEvents = 'none';
          } else {
            leadWidget.style.opacity = '1';
            leadWidget.style.pointerEvents = 'auto';
          }
        }
      });
    }
  }

  // 10. Запуск сборки
  function mount() {
    renderApp();
    initCatalog();
    initQuiz();
    initVideoModal();
    initFaq();
    initWidgets();

    mountTildaForm();
    setTimeout(mountTildaForm, 400);
    setTimeout(mountTildaForm, 1200);
    setTimeout(mountTildaForm, 2500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
