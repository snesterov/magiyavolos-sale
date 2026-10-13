(function() {
  // 1. Подключение премиальных шрифтов
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
      /* Полная нейтрализация стандартных блоков Tilda */
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

      body > #rec4705785601,
      #allrecords > #rec4705785601 {
        display: none !important;
      }

      :root {
        --mv-bg: #0c0a09;
        --mv-bg-card: rgba(22, 18, 16, 0.85);
        --mv-bg-card-hover: rgba(32, 26, 23, 0.96);
        --mv-gold: #c59b6d;
        --mv-gold-light: #e5c59e;
        --mv-gold-dark: #967045;
        --mv-champagne: #edd8be;
        --mv-text: #f7f4ee;
        --mv-text-muted: #a89f91;
        --mv-border: rgba(197, 155, 109, 0.22);
        --mv-border-active: rgba(229, 197, 158, 0.65);
        --mv-grad-gold: linear-gradient(135deg, #dfc098 0%, #c59b6d 50%, #9e7343 100%);
        --mv-grad-card: linear-gradient(145deg, rgba(28, 22, 19, 0.92) 0%, rgba(16, 13, 11, 0.96) 100%);
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
        top: 0; left: 0; right: 0;
        z-index: 999;
        background: rgba(12, 10, 9, 0.9);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--mv-border);
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
      }
      .mv-nav {
        display: flex;
        gap: 22px;
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
        gap: 14px;
      }
      .mv-header-socials {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .mv-header-social {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 7px 12px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.2s ease;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.06);
        color: var(--mv-text);
      }
      .mv-header-social--tg:hover {
        background: rgba(42, 171, 238, 0.2);
        border-color: #2AABEE;
        color: #fff;
        transform: translateY(-1px);
      }
      .mv-header-social--max:hover {
        background: rgba(156, 44, 254, 0.2);
        border-color: #9C2CFE;
      }
      .mv-header-phone {
        display: flex;
        flex-direction: column;
        text-align: right;
        text-decoration: none;
      }
      .mv-header-phone-val {
        font-size: 13.5px;
        font-weight: 600;
        color: var(--mv-text);
      }
      .mv-header-phone-sub {
        font-size: 10px;
        color: var(--mv-text-muted);
      }
      .mv-header-btn {
        padding: 10px 18px;
        font-size: 12.5px;
      }

      /* HERO С РОДНОЙ КАРТИНКОЙ С САЙТА */
      .mv-hero {
        padding: 140px 0 80px;
        position: relative;
        background: radial-gradient(circle at 30% 30%, rgba(197, 155, 109, 0.12) 0%, transparent 60%);
      }
      .mv-hero-layout {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 40px;
        align-items: center;
      }
      .mv-hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 16px;
        border-radius: 999px;
        background: rgba(197, 155, 109, 0.12);
        border: 1px solid var(--mv-border);
        color: var(--mv-gold-light);
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 20px;
      }
      .mv-hero-title {
        font-size: 48px;
        line-height: 1.15;
        margin: 0 0 20px;
      }
      .mv-hero-descr {
        font-size: 16.5px;
        line-height: 1.6;
        color: var(--mv-text-muted);
        margin: 0 0 32px;
        font-weight: 300;
      }
      .mv-hero-actions {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
        margin-bottom: 40px;
      }

      /* Родная картинка с первого экрана (kling_20260726_IMAGE.png) */
      .mv-hero-visual {
        position: relative;
        border-radius: 24px;
        overflow: hidden;
        border: 1px solid var(--mv-border);
        box-shadow: var(--mv-glow);
        background: var(--mv-grad-card);
      }
      .mv-hero-img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
        transition: transform 0.6s ease;
      }
      .mv-hero-visual:hover .mv-hero-img {
        transform: scale(1.03);
      }
      .mv-hero-float-badge {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background: rgba(12, 10, 9, 0.85);
        backdrop-filter: blur(12px);
        border: 1px solid var(--mv-border);
        border-radius: 16px;
        padding: 14px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .mv-hero-float-txt {
        font-size: 12.5px;
        font-weight: 600;
        color: var(--mv-text);
      }
      .mv-hero-float-sub {
        font-size: 11px;
        color: var(--mv-gold-light);
      }

      .mv-hero-stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        border-top: 1px solid var(--mv-border);
        padding-top: 36px;
        margin-top: 30px;
      }
      .mv-stat-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .mv-stat-val {
        font-size: 24px;
        font-weight: 700;
        color: var(--mv-gold-light);
      }
      .mv-stat-lbl {
        font-size: 12px;
        color: var(--mv-text-muted);
        line-height: 1.4;
      }

      /* ОБУЧАЮЩИЕ ВИДЕОУРОКИ (4 РЕАЛЬНЫХ УРОКА ИЗ КИНЕСКОПА) */
      .mv-video-section {
        padding: 90px 0;
        background: rgba(16, 13, 11, 0.7);
        border-top: 1px solid var(--mv-border);
        border-bottom: 1px solid var(--mv-border);
      }
      .mv-sec-head {
        text-align: center;
        max-width: 840px;
        margin: 0 auto 50px;
      }
      .mv-sec-badge {
        display: inline-block;
        font-size: 11px;
        letter-spacing: 0.12em;
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

      /* Сетка из 4 видеоуроков с родными постерами и названиями Kinescope */
      .mv-lessons-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
      .mv-lesson-card {
        background: var(--mv-grad-card);
        border: 1px solid var(--mv-border);
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .mv-lesson-card:hover {
        transform: translateY(-5px);
        border-color: var(--mv-gold-light);
        box-shadow: var(--mv-glow);
      }
      .mv-lesson-video-box {
        position: relative;
        width: 100%;
        aspect-ratio: 16/10;
        background: #000;
        overflow: hidden;
      }
      .mv-lesson-video-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      .mv-lesson-card:hover .mv-lesson-video-box img {
        transform: scale(1.05);
      }
      .mv-lesson-play-btn {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: 52px; height: 52px;
        border-radius: 50%;
        background: var(--mv-grad-gold);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 20px rgba(0,0,0,0.6);
        transition: all 0.25s ease;
      }
      .mv-lesson-card:hover .mv-lesson-play-btn {
        transform: translate(-50%, -50%) scale(1.15);
      }
      .mv-lesson-body {
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
      .mv-lesson-badge {
        font-size: 11px;
        font-weight: 600;
        color: var(--mv-gold-light);
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .mv-lesson-card-title {
        font-size: 16px;
        font-weight: 700;
        color: var(--mv-text);
        margin: 0 0 8px;
        line-height: 1.35;
      }
      .mv-lesson-card-descr {
        font-size: 12.5px;
        color: var(--mv-text-muted);
        line-height: 1.5;
        margin: 0 0 16px;
      }
      .mv-lesson-card-action {
        margin-top: auto;
        font-size: 12px;
        font-weight: 600;
        color: var(--mv-gold);
        display: flex;
        align-items: center;
        gap: 6px;
      }

      /* КАТАЛОГ С ХЭШТЕГАМИ TELEGRAM */
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
        gap: 12px;
        flex-wrap: wrap;
      }
      .mv-filter-lbl {
        font-size: 13px;
        font-weight: 600;
        color: var(--mv-gold-light);
        min-width: 90px;
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
        height: 270px;
        overflow: hidden;
      }
      .mv-card-img {
        width: 100%; height: 100%; object-fit: cover;
        transition: transform 0.5s ease;
      }
      .mv-card:hover .mv-card-img { transform: scale(1.05); }
      .mv-card-badge {
        position: absolute;
        top: 14px; left: 14px;
        padding: 4px 12px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 600;
        background: rgba(12, 10, 9, 0.8);
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
      .mv-card-hashtags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        margin-bottom: 10px;
      }
      .mv-hashtag {
        font-size: 11px;
        color: var(--mv-gold);
        background: rgba(197, 155, 109, 0.08);
        padding: 2px 8px;
        border-radius: 6px;
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
      .mv-card-spec-val { color: var(--mv-text); font-weight: 500; }
      .mv-card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
        padding-top: 14px;
        border-top: 1px solid var(--mv-border);
      }
      .mv-card-price {
        font-size: 17px;
        font-weight: 700;
        color: var(--mv-gold-light);
      }
      .mv-card-btn {
        padding: 9px 16px;
        font-size: 12px;
      }
      .mv-card-video-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: rgba(0,0,0,0.35);
        cursor: pointer;
        transition: background 0.2s ease, opacity 0.2s ease;
      }
      .mv-card-video-overlay:hover {
        background: rgba(0,0,0,0.15);
      }
      .mv-card-video-play {
        width: 46px; height: 46px;
        border-radius: 50%;
        background: var(--mv-grad-gold);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 6px 20px rgba(0,0,0,0.6);
        transition: transform 0.2s ease;
      }
      .mv-card-video-overlay:hover .mv-card-video-play {
        transform: scale(1.12);
      }
      .mv-card-video-label {
        font-size: 11px;
        font-weight: 600;
        color: #fff;
        background: rgba(12, 10, 9, 0.8);
        padding: 4px 10px;
        border-radius: 999px;
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255,255,255,0.15);
      }
      .mv-card-msg--video {
        background: rgba(42, 171, 238, 0.14) !important;
        border-color: #2AABEE !important;
        color: #fff !important;
        font-weight: 600 !important;
      }
      .mv-card-msg--video:hover {
        background: #2AABEE !important;
        color: #0c0a09 !important;
      }
      .mv-card-messengers {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin-top: 10px;
      }
      .mv-card-msg-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 8px 10px;
        border-radius: 10px;
        font-size: 11.5px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.2s ease;
        background: rgba(255,255,255,0.04);
        border: 1px solid var(--mv-border);
        color: var(--mv-text);
      }
      .mv-card-msg--tg:hover {
        background: rgba(42, 171, 238, 0.16);
        border-color: #2AABEE;
        color: #fff;
      }
      .mv-card-msg--max:hover {
        background: rgba(156, 44, 254, 0.16);
        border-color: #9C2CFE;
        color: #fff;
      }
      .mv-card-channel-link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px dashed rgba(197, 155, 109, 0.2);
        font-size: 11px;
        color: var(--mv-gold);
        text-decoration: none;
        transition: color 0.2s ease;
      }
      .mv-card-channel-link:hover {
        color: var(--mv-gold-light);
        text-decoration: underline;
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
      .mv-quiz-step { margin-bottom: 26px; }
      .mv-quiz-q {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 14px;
        color: var(--mv-gold-light);
      }
      .mv-quiz-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
      }
      .mv-quiz-card {
        padding: 14px;
        border-radius: 12px;
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
        font-size: 13.5px;
        font-weight: 600;
        color: var(--mv-text);
      }

      /* СЕКЦИЯ ЗАЯВКИ С ФОРМОЙ TILDA */
      .mv-lead-section {
        padding: 90px 0;
        position: relative;
        background: radial-gradient(circle at 50% 50%, rgba(197, 155, 109, 0.12) 0%, transparent 70%);
      }
      .mv-lead-card {
        max-width: 640px;
        margin: 0 auto;
        background: var(--mv-grad-card);
        border: 1px solid var(--mv-border);
        border-radius: 28px;
        padding: 44px;
        box-shadow: var(--mv-glow);
        text-align: center;
        position: relative;
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
        margin-bottom: 18px;
      }

      /* ЧИСТКА И ФИКС ФОРМЫ ТИЛЬДЫ */
      #mv-tilda-form-slot {
        width: 100% !important;
        margin-top: 20px !important;
        position: relative !important;
      }
      #mv-tilda-form-slot #rec4705785601 {
        display: block !important;
        padding: 0 !important;
        margin: 0 !important;
        background: transparent !important;
        position: static !important;
        width: 100% !important;
      }
      #mv-tilda-form-slot .t-popup,
      #mv-tilda-form-slot .t-popup__container,
      #mv-tilda-form-slot .t702__wrapper {
        position: static !important;
        background: transparent !important;
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
        box-shadow: none !important;
        border: none !important;
        transform: none !important;
      }
      #mv-tilda-form-slot .t-popup__close,
      #mv-tilda-form-slot .t702__text-wrapper,
      #mv-tilda-form-slot .t702__title,
      #mv-tilda-form-slot .t702__descr,
      #mv-tilda-form-slot .t-input-group_tx,
      #mv-tilda-form-slot .t-form__errorbox-middle,
      #mv-tilda-form-slot .t-form__errorbox-bottom {
        display: none !important;
      }

      #mv-tilda-form-slot form.t-form,
      #mv-tilda-form-slot #form4705785601 {
        display: block !important;
        position: static !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        border: none !important;
      }
      #mv-tilda-form-slot .t-form__inputsbox {
        display: flex !important;
        flex-direction: column !important;
        gap: 16px !important;
        width: 100% !important;
      }
      #mv-tilda-form-slot .t-input-group {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        text-align: left !important;
      }
      #mv-tilda-form-slot .t-input-title {
        color: var(--mv-gold-light) !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 13.5px !important;
        font-weight: 600 !important;
        margin-bottom: 10px !important;
        display: block !important;
      }

      /* 4 кнопки мессенджеров */
      #mv-tilda-form-slot .t-contact-method__types-container {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 10px !important;
        margin: 0 0 14px 0 !important;
        padding: 0 !important;
        width: 100% !important;
      }
      #mv-tilda-form-slot .t-contact-method__type {
        background: rgba(255, 255, 255, 0.05) !important;
        border: 1px solid var(--mv-border) !important;
        border-radius: 14px !important;
        padding: 0 !important;
        margin: 0 !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        height: 48px !important;
      }
      #mv-tilda-form-slot .t-contact-method__type:hover {
        border-color: var(--mv-gold-light) !important;
        background: rgba(197, 155, 109, 0.12) !important;
      }
      #mv-tilda-form-slot .t-contact-method__type.mv-active,
      #mv-tilda-form-slot .t-contact-method__type:has(>.t-radio:checked) {
        background: rgba(197, 155, 109, 0.24) !important;
        border-color: var(--mv-gold-light) !important;
        box-shadow: 0 0 16px rgba(197, 155, 109, 0.35) !important;
      }
      #mv-tilda-form-slot .t-contact-method__type input[type="radio"],
      #mv-tilda-form-slot .t-contact-method__type svg.t-sociallinks__svg {
        display: none !important;
      }
      #mv-tilda-form-slot .t-contact-method__type-label {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 8px !important;
        cursor: pointer !important;
        width: 100% !important;
        height: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
      #mv-tilda-form-slot .t-contact-method__type-label svg {
        width: 20px !important;
        height: 20px !important;
        flex-shrink: 0 !important;
      }
      #mv-tilda-form-slot .t-contact-method__title {
        color: #f7f4ee !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 13px !important;
        font-weight: 600 !important;
        line-height: 1 !important;
      }

      /* Контейнер телефонной маски Тильды */
      #mv-tilda-form-slot .t-contact-method__value-container {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      #mv-tilda-form-slot .t-input-phonemask__wrap {
        display: flex !important;
        align-items: center !important;
        width: 100% !important;
        background: rgba(14, 11, 10, 0.95) !important;
        border: 1px solid var(--mv-border) !important;
        border-radius: 14px !important;
        padding: 0 16px !important;
        height: 54px !important;
        box-sizing: border-box !important;
        transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
      }
      #mv-tilda-form-slot .t-input-phonemask__wrap:focus-within {
        border-color: var(--mv-gold-light) !important;
        box-shadow: 0 0 16px rgba(197, 155, 109, 0.35) !important;
      }
      #mv-tilda-form-slot .t-input-phonemask__select {
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        margin-right: 10px !important;
        padding-right: 10px !important;
        border-right: 1px solid rgba(255, 255, 255, 0.15) !important;
        color: #ffffff !important;
      }
      #mv-tilda-form-slot .t-input-phonemask__select-code {
        color: #ffffff !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 14.5px !important;
        font-weight: 600 !important;
      }
      #mv-tilda-form-slot input.t-input.t-input-phonemask {
        background: transparent !important;
        border: none !important;
        border-radius: 0 !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
        flex: 1 !important;
        color: #ffffff !important;
        font-size: 15px !important;
        font-family: 'Montserrat', sans-serif !important;
        outline: none !important;
        box-shadow: none !important;
      }

      /* Обычные инпуты (Имя) */
      #mv-tilda-form-slot input.t-input:not(.t-input-phonemask) {
        width: 100% !important;
        background: rgba(14, 11, 10, 0.95) !important;
        border: 1px solid var(--mv-border) !important;
        border-radius: 14px !important;
        padding: 16px 20px !important;
        color: #ffffff !important;
        font-size: 15px !important;
        font-family: 'Montserrat', sans-serif !important;
        outline: none !important;
        height: 54px !important;
        box-sizing: border-box !important;
        transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
      }
      #mv-tilda-form-slot input.t-input:not(.t-input-phonemask):focus {
        border-color: var(--mv-gold-light) !important;
        box-shadow: 0 0 16px rgba(197, 155, 109, 0.35) !important;
      }

      #mv-tilda-form-slot .t-checkbox__control {
        color: var(--mv-text-muted) !important;
        font-size: 12px !important;
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
        text-align: left !important;
        margin-top: 4px !important;
      }
      #mv-tilda-form-slot .t-checkbox__indicator {
        border-color: var(--mv-gold) !important;
      }

      #mv-tilda-form-slot .t-submit,
      #mv-tilda-form-slot button[type="submit"] {
        width: 100% !important;
        background: var(--mv-grad-gold) !important;
        color: #0c0a09 !important;
        border: none !important;
        border-radius: 999px !important;
        padding: 16px 26px !important;
        font-size: 15.5px !important;
        font-weight: 700 !important;
        font-family: 'Montserrat', sans-serif !important;
        cursor: pointer !important;
        box-shadow: 0 6px 25px rgba(197, 155, 109, 0.4) !important;
        transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        margin-top: 6px !important;
      }
      #mv-tilda-form-slot .t-submit:hover,
      #mv-tilda-form-slot button[type="submit"]:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 10px 32px rgba(229, 197, 158, 0.55) !important;
      }
      #mv-tilda-form-slot .t-btn_wrap-effects { display: none !important; }

      .mv-input-err {
        border-color: #ef4444 !important;
        box-shadow: 0 0 16px rgba(239, 68, 68, 0.4) !important;
      }

            /* МАСТЕРАМ & ОПТ (ПРЕМИУМ ДИЗАЙН 01 02 03) */
      .mv-masters-section {
        padding: 100px 0;
        background: radial-gradient(circle at 50% 30%, rgba(197, 155, 109, 0.09) 0%, transparent 70%);
        border-top: 1px solid var(--mv-border);
        position: relative;
      }
      .mv-masters-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
        align-items: stretch;
      }
      .mv-masters-card {
        background: linear-gradient(165deg, rgba(26, 21, 18, 0.92) 0%, rgba(14, 11, 9, 0.98) 100%);
        border: 1px solid var(--mv-border);
        border-radius: 24px;
        padding: 38px 30px 32px;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        backdrop-filter: blur(14px);
      }
      .mv-masters-card:hover {
        transform: translateY(-6px);
        border-color: var(--mv-border-active);
        box-shadow: 0 16px 45px rgba(0, 0, 0, 0.8), 0 0 30px rgba(197, 155, 109, 0.2);
      }
      .mv-masters-card--featured {
        border-color: rgba(229, 197, 158, 0.55);
        background: linear-gradient(165deg, rgba(34, 26, 21, 0.95) 0%, rgba(18, 14, 11, 0.98) 100%);
        box-shadow: 0 12px 38px rgba(0, 0, 0, 0.7), 0 0 25px rgba(197, 155, 109, 0.15);
      }
      .mv-masters-card--featured::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: var(--mv-grad-gold);
      }
      .mv-masters-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 22px;
      }
      .mv-masters-badge {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--mv-gold-light);
        background: rgba(197, 155, 109, 0.12);
        border: 1px solid rgba(197, 155, 109, 0.25);
        padding: 5px 12px;
        border-radius: 999px;
      }
      .mv-masters-badge--gold {
        background: var(--mv-grad-gold);
        color: #0c0a09;
        border: none;
      }
      .mv-masters-num {
        font-family: 'Playfair Display', serif;
        font-size: 48px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -0.02em;
        background: linear-gradient(135deg, rgba(229, 197, 158, 0.5) 0%, rgba(197, 155, 109, 0.18) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .mv-masters-card-title {
        font-family: 'Playfair Display', serif;
        font-size: 21px;
        font-weight: 700;
        color: var(--mv-text);
        margin: 0 0 12px;
        line-height: 1.3;
      }
      .mv-masters-card-descr {
        font-size: 13.5px;
        line-height: 1.6;
        color: var(--mv-text-muted);
        margin: 0 0 20px;
      }
      .mv-masters-features {
        list-style: none;
        padding: 0;
        margin: 0 0 28px;
        display: flex;
        flex-direction: column;
        gap: 11px;
      }
      .mv-masters-features li {
        font-size: 13px;
        color: #ddd4c8;
        line-height: 1.5;
        display: flex;
        align-items: flex-start;
        gap: 9px;
      }
      .mv-masters-features li span {
        color: var(--mv-gold);
        font-size: 12px;
        flex-shrink: 0;
        margin-top: 2px;
      }
      .mv-masters-action {
        margin-top: auto;
      }
      .mv-masters-btn {
        width: 100%;
        padding: 13px 20px;
        font-size: 13px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        box-sizing: border-box;
      }

      /* FAQ */
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
        font-size: 15.5px;
        font-weight: 600;
        color: var(--mv-text);
      }
      .mv-faq-icon {
        width: 24px; height: 24px;
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
      .mv-faq-item.open .mv-faq-body { display: block; }

      /* FOOTER */
            /* ПОДВАЛ И ЮРИДИЧЕСКИЙ БЛОК */
      .mv-footer {
        padding: 70px 0 35px;
        background: #080605;
        border-top: 1px solid var(--mv-border);
      }
      .mv-footer-grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1.2fr;
        gap: 40px;
        margin-bottom: 45px;
      }
      .mv-footer-col h4 {
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--mv-gold-light);
        margin: 0 0 18px;
      }
      .mv-footer-legal-box {
        margin-top: 18px;
        padding: 14px 16px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(197, 155, 109, 0.18);
        font-size: 12px;
        color: var(--mv-text-muted);
        line-height: 1.7;
      }
      .mv-footer-legal-title {
        color: var(--mv-gold-light);
        font-weight: 600;
        margin-bottom: 4px;
        font-size: 12px;
      }
      .mv-footer-links {
        display: flex;
        flex-direction: column;
        gap: 11px;
      }
      .mv-footer-links a, .mv-footer-links button.mv-footer-btn-link {
        color: var(--mv-text-muted);
        text-decoration: none;
        font-size: 13px;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        font-family: inherit;
        transition: color 0.2s ease;
      }
      .mv-footer-links a:hover, .mv-footer-links button.mv-footer-btn-link:hover {
        color: var(--mv-gold-light);
      }
      .mv-footer-ls-item {
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        color: var(--mv-text) !important;
        font-weight: 500 !important;
      }
      .mv-footer-ls-item:hover { color: var(--mv-gold-light) !important; }
      .mv-footer-bottom {
        padding-top: 26px;
        border-top: 1px solid rgba(255, 255, 255, 0.07);
        display: flex;
        flex-direction: column;
        gap: 14px;
        font-size: 12px;
        color: var(--mv-text-muted);
      }
      .mv-footer-bottom-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
      }
      .mv-footer-bottom-links {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
      }
      .mv-footer-bottom-links a, .mv-footer-bottom-links button {
        color: var(--mv-text-muted);
        text-decoration: underline;
        font-size: 12px;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font-family: inherit;
        transition: color 0.2s ease;
      }
      .mv-footer-bottom-links a:hover, .mv-footer-bottom-links button:hover {
        color: var(--mv-gold-light);
      }
      .mv-footer-disclaimer {
        font-size: 11px;
        line-height: 1.5;
        color: rgba(168, 159, 145, 0.65);
        border-top: 1px dashed rgba(255, 255, 255, 0.05);
        padding-top: 12px;
      }

      /* ДВУХЭТАПНЫЙ COOKIE-БАННЕР (GREYZZZZWOLF СТИЛЬ) */
      .mv-cookie-banner {
        position: fixed;
        bottom: 24px;
        left: 24px;
        max-width: 440px;
        width: calc(100% - 48px);
        background: #14100e;
        border: 1.5px solid var(--mv-gold);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(197, 155, 109, 0.25);
        border-radius: 20px;
        padding: 24px;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        gap: 14px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(25px);
        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
        box-sizing: border-box;
        color: var(--mv-text);
        backdrop-filter: blur(16px);
      }
      .mv-cookie-banner.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      .mv-cookie-close-corner {
        position: absolute;
        top: 14px; right: 14px;
        width: 28px; height: 28px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(197, 155, 109, 0.3);
        color: var(--mv-gold-light);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.2s;
        z-index: 10;
      }
      .mv-cookie-close-corner:hover {
        background: var(--mv-gold);
        color: #0c0a09;
      }
      .mv-cookie-view { display: flex; flex-direction: column; gap: 14px; }
      .mv-cookie-view.hidden { display: none !important; }
      .mv-cookie-top-nav { display: flex; align-items: center; gap: 12px; }
      .mv-cookie-back-btn {
        width: 32px; height: 32px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid var(--mv-border);
        color: var(--mv-gold-light);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
        transition: background 0.2s;
      }
      .mv-cookie-back-btn:hover { background: rgba(197, 155, 109, 0.2); }
      .mv-cookie-title {
        font-family: 'Playfair Display', serif;
        font-size: 19px;
        font-weight: 700;
        color: #fff;
        line-height: 1.25;
      }
      .mv-cookie-text {
        font-size: 13px;
        line-height: 1.6;
        color: var(--mv-text-muted);
      }
      .mv-cookie-text a {
        color: var(--mv-gold-light);
        text-decoration: underline;
        font-weight: 600;
        cursor: pointer;
      }
      .mv-cookie-btn-col {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 4px;
      }
      .mv-cookie-btn-primary {
        background: var(--mv-grad-gold);
        color: #0c0a09;
        font-size: 13.5px;
        font-weight: 700;
        padding: 12px 18px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        transition: transform 0.15s, box-shadow 0.2s;
        text-align: center;
      }
      .mv-cookie-btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 18px rgba(197, 155, 109, 0.45);
      }
      .mv-cookie-btn-secondary {
        background: rgba(197, 155, 109, 0.12);
        color: var(--mv-gold-light);
        border: 1px solid var(--mv-border);
        font-size: 13.5px;
        font-weight: 600;
        padding: 11px 18px;
        border-radius: 12px;
        cursor: pointer;
        transition: background 0.2s;
        text-align: center;
      }
      .mv-cookie-btn-secondary:hover {
        background: rgba(197, 155, 109, 0.22);
      }
      .mv-cookie-btn-dark {
        background: rgba(255, 255, 255, 0.04);
        color: var(--mv-text-muted);
        font-size: 13px;
        font-weight: 600;
        padding: 10px 18px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        cursor: pointer;
        text-align: center;
        transition: all 0.2s;
      }
      .mv-cookie-btn-dark:hover {
        color: #fff;
        border-color: var(--mv-gold);
      }
      .mv-cookie-toggles-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 6px 0;
      }
      .mv-cookie-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 14px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--mv-border);
        border-radius: 12px;
        gap: 10px;
      }
      .mv-cookie-item-label {
        font-size: 13px;
        color: #eee;
        font-weight: 600;
      }
      .mv-switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 24px;
        flex-shrink: 0;
      }
      .mv-switch input { opacity: 0; width: 0; height: 0; }
      .mv-slider {
        position: absolute;
        cursor: pointer;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: #2b221b;
        transition: 0.25s;
        border-radius: 24px;
      }
      .mv-slider:before {
        position: absolute;
        content: "";
        height: 18px; width: 18px;
        left: 3px; bottom: 3px;
        background-color: #ffffff;
        transition: 0.25s;
        border-radius: 50%;
      }
      .mv-switch input:checked + .mv-slider { background-color: var(--mv-gold); }
      .mv-switch input:checked + .mv-slider:before { transform: translateX(20px); }

      @media (max-width: 600px) {
        .mv-cookie-banner {
          bottom: 12px; left: 12px;
          width: calc(100% - 24px);
          padding: 18px;
        }
      }

      /* Виджеты */
      #mv-widget-lead {
        position: fixed;
        bottom: 20px; right: 20px;
        z-index: 990;
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(16, 13, 11, 0.92);
        padding: 6px 8px 6px 12px;
        border-radius: 999px;
        border: 1px solid var(--mv-border);
        box-shadow: 0 10px 35px rgba(0,0,0,0.65), 0 0 20px rgba(197, 155, 109, 0.15);
        backdrop-filter: blur(14px);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      .mv-float-icon-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 38px; height: 38px;
        border-radius: 50%;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        text-decoration: none;
      }
      .mv-float-icon-btn:hover {
        transform: translateY(-2px) scale(1.06);
      }
      .mv-widget-btn {
        background: var(--mv-grad-gold);
        color: #0c0a09;
        font-weight: 700;
        font-size: 13.5px;
        padding: 10px 20px;
        border-radius: 999px;
        box-shadow: 0 8px 24px rgba(197, 155, 109, 0.4);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      #mv-btn-top {
        position: fixed;
        bottom: 24px; left: 24px;
        width: 46px; height: 46px;
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
      }

      /* Модалка Kinescope */
      #mv-video-modal {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.88);
        backdrop-filter: blur(14px);
        z-index: 10000;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      .mv-modal-content {
        position: relative;
        width: 100%;
        max-width: 960px;
        aspect-ratio: 16/9;
        background: #000;
        border-radius: 20px;
        overflow: hidden;
        border: 1px solid var(--mv-border);
        box-shadow: 0 20px 60px rgba(0,0,0,0.9);
      }
      .mv-modal-close {
        position: absolute;
        top: -46px; right: 0;
        background: transparent;
        border: none;
        color: #fff;
        font-size: 34px;
        cursor: pointer;
      }

      @media (max-width: 1100px) {
        .mv-lessons-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 992px) {
        .mv-nav, .mv-header-phone { display: none !important; }
        .mv-header-social-label { display: none !important; }
        .mv-header-social { padding: 7px !important; }
        .mv-hero-layout { grid-template-columns: 1fr; }
        .mv-hero-title { font-size: 36px; }
        .mv-hero-stats { grid-template-columns: repeat(2, 1fr); }
        .mv-catalog-grid { grid-template-columns: repeat(2, 1fr); }
        .mv-quiz-grid { grid-template-columns: repeat(2, 1fr); }
        .mv-footer-grid { grid-template-columns: 1fr; }
        .mv-masters-grid { grid-template-columns: 1fr; }
      }
      @media (max-width: 768px) {
        /* На мобильных шапка не мотается по экрану, а скроллится вверху страницы */
        .mv-header {
          position: absolute !important;
          top: 0; left: 0; right: 0;
          background: rgba(12, 10, 9, 0.95);
        }
        .mv-hero {
          padding-top: 95px !important;
        }
      }
      @media (max-width: 600px) {
        .mv-lessons-grid { grid-template-columns: 1fr; }
        .mv-hero-title { font-size: 28px; }
        .mv-catalog-grid { grid-template-columns: 1fr; }
        .mv-hero-stats { grid-template-columns: 1fr; }
        .mv-lead-card { padding: 26px 18px; }
        #mv-tilda-form-slot .t-contact-method__types-container {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }

      /* ЮРИДИЧЕСКИЙ ПОПАП (LUXURY MODAL) */
      .mv-legal-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 99999999;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
      }
      .mv-legal-modal.active {
        display: flex !important;
      }
      .mv-legal-modal__backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(8, 6, 5, 0.88);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        animation: mvFadeIn 0.25s ease;
      }
      .mv-legal-modal__dialog {
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: 840px;
        max-height: 88vh;
        background: linear-gradient(165deg, #181310 0%, #0d0a08 100%);
        border: 1px solid var(--mv-border-active);
        border-radius: 24px;
        box-shadow: 0 25px 70px rgba(0, 0, 0, 0.95), 0 0 40px rgba(197, 155, 109, 0.2);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        animation: mvScaleUp 0.28s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes mvScaleUp {
        from { opacity: 0; transform: scale(0.95) translateY(12px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
      }
      .mv-legal-modal__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 22px 28px;
        border-bottom: 1px solid rgba(197, 155, 109, 0.2);
        background: rgba(255, 255, 255, 0.02);
      }
      .mv-legal-modal__badge {
        display: inline-block;
        font-size: 10.5px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--mv-gold);
        font-weight: 700;
        margin-bottom: 4px;
      }
      .mv-legal-modal__title {
        font-family: 'Cinzel', serif;
        font-size: 20px;
        color: #ffffff;
        margin: 0;
        font-weight: 600;
        line-height: 1.3;
      }
      .mv-legal-modal__close {
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(197, 155, 109, 0.3);
        color: #edd8be;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        font-size: 24px;
        line-height: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        flex-shrink: 0;
        margin-left: 16px;
      }
      .mv-legal-modal__close:hover {
        background: var(--mv-gold);
        color: #0c0a09;
        border-color: var(--mv-gold);
        transform: rotate(90deg);
      }
      .mv-legal-modal__body {
        padding: 28px;
        overflow-y: auto;
        color: #cfc5b8;
        font-size: 13.5px;
        line-height: 1.75;
      }
      .mv-legal-modal__body::-webkit-scrollbar {
        width: 6px;
      }
      .mv-legal-modal__body::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.03);
      }
      .mv-legal-modal__body::-webkit-scrollbar-thumb {
        background: var(--mv-gold);
        border-radius: 4px;
      }
      .mv-legal-modal__body h4 {
        color: var(--mv-gold-light);
        font-size: 14.5px;
        margin: 24px 0 10px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .mv-legal-modal__body h4:first-child {
        margin-top: 0;
      }
      .mv-legal-modal__body p {
        margin: 0 0 12px;
      }
      .mv-legal-modal__body ul {
        margin: 0 0 14px 20px;
        padding: 0;
      }
      .mv-legal-modal__body li {
        margin-bottom: 6px;
      }
      .mv-legal-modal__legal-card {
        margin-top: 24px;
        padding: 16px 20px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(197, 155, 109, 0.25);
        border-radius: 14px;
        font-size: 12.5px;
        line-height: 1.6;
      }
      .mv-legal-modal__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 28px;
        border-top: 1px solid rgba(197, 155, 109, 0.2);
        background: rgba(0, 0, 0, 0.4);
        gap: 16px;
      }
      .mv-legal-modal__note {
        font-size: 11.5px;
        color: var(--mv-text-muted);
      }
      .mv-legal-modal__btn {
        padding: 11px 26px !important;
        font-size: 13.5px !important;
        white-space: nowrap;
        border-radius: 999px !important;
      }
      .mv-footer-doc-btn {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        color: var(--mv-text-muted);
        font-family: inherit;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
        transition: color 0.2s ease;
      }
      .mv-footer-doc-btn:hover {
        color: var(--mv-gold-light);
      }
      #mv-tilda-form-slot .t-checkbox__control a,
      #mv-tilda-form-slot .mv-legal-link {
        color: var(--mv-gold) !important;
        text-decoration: underline !important;
        cursor: pointer !important;
        transition: color 0.2s ease !important;
        display: inline !important;
      }
      #mv-tilda-form-slot .t-checkbox__control a:hover,
      #mv-tilda-form-slot .mv-legal-link:hover {
        color: var(--mv-gold-light) !important;
      }
      @media (max-width: 600px) {
        .mv-legal-modal { padding: 12px; }
        .mv-legal-modal__header { padding: 16px 20px; }
        .mv-legal-modal__title { font-size: 17px; }
        .mv-legal-modal__body { padding: 20px; font-size: 13px; }
        .mv-legal-modal__footer { flex-direction: column; align-items: stretch; padding: 16px 20px; }
        .mv-legal-modal__btn { width: 100%; text-align: center; }
      }

    `;
    document.head.appendChild(s);
  }

  // 4 видеоурока напрямую из аккаунта Kinescope
  var LESSON_VIDEOS = [
    {
      id: '9iFkqc7sAqedM6nr7QcMgj',
      lessonNum: 'УРОК 1',
      duration: '46 СЕК',
      title: 'Есть ли на волосах силикон?',
      descr: 'Как выявить скрытую силиконовую обработку и убедиться в естественной мягкости волоса.',
      poster: 'https://kinescopecdn.net/be3501b7-76a0-44cc-b5a2-bf1ab144d162/posters/d3e93fec-773b-4f73-8b5c-29f7dda9271a/019e6d8b-f288-769c-b7f2-cfdd407a5bea.jpg'
    },
    {
      id: 'oBK1RzCCNt8hJjRS4FeRVp',
      lessonNum: 'УРОК 2',
      duration: '36 СЕК',
      title: 'Окрашенные или нет?',
      descr: 'Как отличить неокрашенный целинный срез от волос щадящего фабричного осветления.',
      poster: 'https://kinescopecdn.net/be3501b7-76a0-44cc-b5a2-bf1ab144d162/posters/07cce31e-405c-4a77-b037-4077c8f99991/019e6d94-1403-7e7f-a4af-2f5a10becb9c.jpg'
    },
    {
      id: 'qjuvNhMoWxiPGHiiMhMiig',
      lessonNum: 'УРОК 3',
      duration: '1 МИН 24 СЕК',
      title: 'Перевёртыш',
      descr: 'Почему кутикула должна быть направлена строго в одну сторону и как избежать спутывания.',
      poster: 'https://kinescopecdn.net/be3501b7-76a0-44cc-b5a2-bf1ab144d162/posters/fe0ad110-6154-4c49-868c-59666dbe3033/019e6d94-1587-73c1-bdcc-5285f60a5a2c.jpg'
    },
    {
      id: '42dwoJ2St7kS9wMxQkVHKd',
      lessonNum: 'ВИДЕО',
      duration: '12 СЕК',
      title: 'Команда',
      descr: 'Мастера и технологи фабрики «Магия Волос» за отбором и контролем донорских волос.',
      btnText: 'Смотреть видео',
      poster: 'https://kinescopecdn.net/be3501b7-76a0-44cc-b5a2-bf1ab144d162/posters/5cdb6dc7-7552-4d4f-8b1f-51b0003489b4/019e6de2-0bda-7a8d-b984-5519d76a7f17.jpg'
    }
  ];
  // Данные срезов (СИНХРОНИЗИРОВАНО С РЕАЛЬНЫМИ ВИДЕОПОСТАМИ ИЗ TELEGRAM @magiavolos_chanel)
  var CATALOG_ITEMS = [
    {
      id: 1,
      title: 'Детские срезы • Легкая и активная волна',
      category: 'детские_срезы',
      tags: ['#детские_срезы', '#легкая_волна', '#видеообзор'],
      is_video: true,
      tg_url: 'https://t.me/magiavolos_chanel/1219',
      len: '50-55 см',
      struct: 'Легкая волна',
      shade: 'Русый целинный',
      weight: '105 грамм',
      price: 'от 19 500 ₽',
      img: 'https://cdn.jsdelivr.net/gh/snesterov/magiyavolos-sale@main/images/cut_1.jpg'
    },
    {
      id: 2,
      title: 'Детские срезы • Активная волна и кудри',
      category: 'активная_волна',
      tags: ['#детские_срезы', '#активная_волна', '#кудри', '#видеообзор'],
      is_video: true,
      tg_url: 'https://t.me/magiavolos_chanel/1224',
      len: '55-60 см',
      struct: 'Активная волна',
      shade: 'Натуральный русый',
      weight: '115 грамм',
      price: 'от 22 000 ₽',
      img: 'https://cdn.jsdelivr.net/gh/snesterov/magiyavolos-sale@main/images/cut_2.jpg'
    },
    {
      id: 3,
      title: 'Детский целинный хвостик • Не окрашен',
      category: 'детские_срезы',
      tags: ['#детские_срезы', '#не_окрашен', '#одноголовый_срез', '#видеообзор'],
      is_video: true,
      tg_url: 'https://t.me/magiavolos_chanel/1231',
      len: '45-50 см',
      struct: 'Тонкий шелк',
      shade: 'Светло-русый',
      weight: '95 грамм',
      price: 'от 18 500 ₽',
      img: 'https://cdn.jsdelivr.net/gh/snesterov/magiyavolos-sale@main/images/cut_3.jpg'
    },
    {
      id: 4,
      title: 'Шелковистый хвостик • Шоколадный оттенок',
      category: 'славянский_люкс',
      tags: ['#славянский_люкс', '#шоколад', '#прямой_срез', '#видеообзор'],
      is_video: true,
      tg_url: 'https://t.me/magiavolos_chanel/1232',
      len: '60-65 см',
      struct: 'Прямой с легкой волной',
      shade: 'Шоколад',
      weight: '125 грамм',
      price: 'от 23 500 ₽',
      img: 'https://cdn.jsdelivr.net/gh/snesterov/magiyavolos-sale@main/images/cut_4.jpg'
    },
    {
      id: 5,
      title: 'Прямой одноголовый срез • Глубокий шоколад',
      category: 'глубокий_шоколад',
      tags: ['#глубокий_шоколад', '#не_окрашен', '#прямой_срез', '#видеообзор'],
      is_video: true,
      tg_url: 'https://t.me/magiavolos_chanel/1233',
      len: '65-70 см',
      struct: 'Плотный прямой',
      shade: 'Глубокий шоколад',
      weight: '140 грамм',
      price: 'от 25 000 ₽',
      img: 'https://cdn.jsdelivr.net/gh/snesterov/magiyavolos-sale@main/images/cut_5.jpg'
    },
    {
      id: 6,
      title: 'Волна с карамельным подтоном • Не окрашен',
      category: 'активная_волна',
      tags: ['#активная_волна', '#карамель', '#не_окрашен', '#видеообзор'],
      is_video: true,
      tg_url: 'https://t.me/magiavolos_chanel/1235',
      len: '60-65 см',
      struct: 'Мягкая волна',
      shade: 'Карамельный подтон',
      weight: '120 грамм',
      price: 'от 24 000 ₽',
      img: 'https://cdn.jsdelivr.net/gh/snesterov/magiyavolos-sale@main/images/cut_6.jpg'
    },
    {
      id: 7,
      title: 'Роскошные кудри • Отборный срез',
      category: 'активная_волна',
      tags: ['#роскошные_кудри', '#кудри', '#видеообзор'],
      is_video: true,
      tg_url: 'https://t.me/magiavolos_chanel/1236',
      len: '65-70 см',
      struct: 'Упругие кудри',
      shade: 'Темно-русый',
      weight: '135 грамм',
      price: 'от 26 000 ₽',
      img: 'https://cdn.jsdelivr.net/gh/snesterov/magiyavolos-sale@main/images/cut_7.jpg'
    },
    {
      id: 8,
      title: 'Красивая волна • Одноголовый срез',
      category: 'активная_волна',
      tags: ['#одноголовый_срез', '#не_окрашен', '#активная_волна', '#видеообзор'],
      is_video: true,
      tg_url: 'https://t.me/magiavolos_chanel/1237',
      len: '55-60 см',
      struct: 'Крупная волна',
      shade: 'Шоколад',
      weight: '110 грамм',
      price: 'от 21 000 ₽',
      img: 'https://cdn.jsdelivr.net/gh/snesterov/magiyavolos-sale@main/images/cut_8.jpg'
    }
  ];

  // 3. Рендер приложения SPA
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
              <a href="#education">Видеоуроки</a>
              <a href="#catalog">Каталог срезов</a>
              <a href="#quiz">Подбор среза</a>
              <a href="#masters">Мастерам & Опт</a>
              <a href="#faq">Вопрос-ответ</a>
              <a href="#contacts">Контакты</a>
            </nav>
            <div class="mv-header-right">
              <div class="mv-header-socials">
                <a href="https://t.me/Magiavolos" target="_blank" rel="noopener noreferrer" class="mv-header-social mv-header-social--tg" title="Написать в ЛС Telegram">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><circle cx="12" cy="12" r="12" fill="#2AABEE"/><path d="M5.5 11.8l3.2 1.2 1.3 4.1c.2.5.8.6 1.1.2l1.9-1.9 3.8 2.8c.4.3 1 .1 1.1-.4l2.2-10.4c.1-.6-.4-1.1-1-.9L5.5 10.7c-.6.2-.6 1 0 1.1zm4.2 1l6.8-4.3c.2-.1.3.1.2.2l-5.6 5.1-.2 2.3-.8-2.6-.4-.7z" fill="#ffffff"/></svg>
                  <span class="mv-header-social-label">ЛС Telegram</span>
                </a>
                <a href="https://max.ru/u/f9LHodD0cOKWrw5xtMdExj0FHPSJ6XMPPXtGG050Eaxzc1IZ2NirvJiMRCo" target="_blank" rel="noopener noreferrer" class="mv-header-social mv-header-social--max" title="Написать в ЛС MAX">
                  <svg viewBox="0 0 100 100" width="18" height="18" fill="none"><defs><linearGradient id="mv-max-grad-h" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#246BFD"/><stop offset="100%" stop-color="#9C2CFE"/></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#mv-max-grad-h)"/><g transform="translate(19, 19) scale(0.62)"><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M50.76 0c27.53 0 49.12 22.34 49.12 49.89S77.61 99.23 51.02 99.23c-9.43 0-14.01-1.33-21.37-6.54-.5-.36-1.2-.26-1.63.19-5.66 6.04-20.17 10.28-20.83 2.03C7.19 80.53 0 71.18 0 49.61 0 21.3 23.22 0 50.76 0m.77 24.55c-13.07-.68-23.26 8.39-25.51 22.58-1.86 11.75 1.44 26.07 4.26 26.8 1.2.3 4.08-1.9 6.18-3.88.4-.37.99-.44 1.45-.15 3.27 2 6.97 3.5 11.05 3.71 13.42.7 25.3-9.8 26-23.21.71-13.42-10.01-25.14-23.43-25.85"/></g></svg>
                  <span class="mv-header-social-label">ЛС MAX</span>
                </a>
              </div>
              <a href="tel:+79255063750" class="mv-header-phone">
                <span class="mv-header-phone-val">+7 (925) 506-37-50</span>
                <span class="mv-header-phone-sub">Москва, Шоурум</span>
              </a>
              <a href="#lead-box" class="mv-btn mv-btn-primary mv-header-btn">Подобрать срез</a>
            </div>
          </div>
        </div>
      </header>

      <!-- HERO С РОДНЫМ ФОТО -->
      <section id="hero" class="mv-hero">
        <div class="mv-container">
          <div class="mv-hero-layout">
            <div class="mv-hero-left">
              <div class="mv-hero-badge">
                <span>✦</span> Более 150 кг отборных донорских волос в наличии в Москве
              </div>
              <h1 class="mv-hero-title mv-title-serif">
                Натуральные донорские волосы <br>
                <span class="mv-gold-text">с собственной фабрики</span>
              </h1>
              <p class="mv-hero-descr">
                Только одноголовые донорские срезы из России: детские целинные хвостики и славянский люкс. Без силикона, живая кутикула. Доставка по РФ и миру.
              </p>
              <div class="mv-hero-actions">
                <a href="#education" class="mv-btn mv-btn-primary">Видеоуроки по выбору ▶</a>
                <a href="#catalog" class="mv-btn mv-btn-outline">Каталог в наличии</a>
                <a href="#quiz" class="mv-btn mv-btn-outline">Подбор за 30 сек ✦</a>
              </div>
            </div>

            <div class="mv-hero-visual">
              <img src="https://static.tildacdn.com/tild6635-3130-4331-b132-306531653965/kling_20260726_IMAGE.png" alt="Магия Волос — донорские срезы премиум качества" class="mv-hero-img">
              <div class="mv-hero-float-badge">
                <div>
                  <div class="mv-hero-float-txt">100% натуральные донорские срезы</div>
                  <div class="mv-hero-float-sub">Один донор — один срез. Не обработаны силиконом.</div>
                </div>
                <a href="#lead-box" class="mv-btn mv-btn-primary" style="padding:8px 16px; font-size:12px;">Выбрать</a>
              </div>
            </div>
          </div>

          <div class="mv-hero-stats">
            <div class="mv-stat-item">
              <span class="mv-stat-val">>150 кг</span>
              <span class="mv-stat-lbl">волос всех структур и длин всегда в шоуруме</span>
            </div>
            <div class="mv-stat-item">
              <span class="mv-stat-val">1 донор</span>
              <span class="mv-stat-lbl">строго один срез в пучке, направление кутикулы 100%</span>
            </div>
            <div class="mv-stat-item">
              <span class="mv-stat-val">с 2009 г.</span>
              <span class="mv-stat-lbl">собственное бережное производство и осветление</span>
            </div>
            <div class="mv-stat-item">
              <span class="mv-stat-val">Рассрочка</span>
              <span class="mv-stat-lbl">оплата долями и спецусловия для мастеров от 1 кг</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ОБУЧАЮЩИЕ ВИДЕОУРОКИ (4 РЕАЛЬНЫХ УРОКА ИЗ КИНЕСКОПА В СЕТКЕ) -->
      <section id="education" class="mv-video-section">
        <div class="mv-container">
          <div class="mv-sec-head">
            <span class="mv-sec-badge">Обучающие видео</span>
            <h2 class="mv-sec-title mv-title-serif">Как правильно выбрать волосы</h2>
            <p class="mv-sec-sub">Короткие экспертные видеоуроки от технологов «Магия Волос»: проверьте срез на силикон, кутикулу и фабричное осветление перед заказом.</p>
          </div>

          <!-- Сетка 4 уроков с точными именами из Kinescope -->
          <div class="mv-lessons-grid" id="mv-lessons-container">
            ${LESSON_VIDEOS.map(function(item) {
              return `
                <div class="mv-lesson-card" data-video-id="${item.id}">
                  <div class="mv-lesson-video-box">
                    <img src="${item.poster}" alt="${item.title}">
                    <div class="mv-lesson-play-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0c0a09"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div class="mv-lesson-body">
                    <div class="mv-lesson-badge">
                      <span>${item.lessonNum}</span>
                      <span>${item.duration}</span>
                    </div>
                    <h3 class="mv-lesson-card-title">${item.title}</h3>
                    <p class="mv-lesson-card-descr">${item.descr}</p>
                    <div class="mv-lesson-card-action">
                      <span>${item.btnText || 'Смотреть урок'}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- КАТАЛОГ С ХЭШТЕГАМИ TELEGRAM -->
      <section id="catalog" class="mv-catalog-section">
        <div class="mv-container">
          <div class="mv-sec-head">
            <span class="mv-sec-badge">Каталог в наличии</span>
            <h2 class="mv-sec-title mv-title-serif">Отборные срезы из нашего Telegram-канала</h2>
            <p class="mv-sec-sub">Свежие поступления с фабрики: выберите категорию или длину для мгновенного бронирования</p>
          </div>

          <!-- Фильтры Telegram -->
          <div class="mv-filters-box">
            <div class="mv-filter-row" id="filter-cat">
              <span class="mv-filter-lbl">Категория:</span>
              <div class="mv-filter-pills">
                <button class="mv-pill active" data-cat="all">Все срезы</button>
                <button class="mv-pill" data-cat="детские_срезы">#детские_срезы</button>
                <button class="mv-pill" data-cat="славянский_люкс">#славянский_люкс</button>
                <button class="mv-pill" data-cat="активная_волна">#активная_волна</button>
                <button class="mv-pill" data-cat="глубокий_шоколад">#глубокий_шоколад</button>
                <button class="mv-pill" data-cat="биоленты">#биоленты</button>
              </div>
            </div>
            <div class="mv-filter-row" id="filter-len">
              <span class="mv-filter-lbl">Длина:</span>
              <div class="mv-filter-pills">
                <button class="mv-pill active" data-len="all">Любая длина</button>
                <button class="mv-pill" data-len="40-50 см">40–50 см</button>
                <button class="mv-pill" data-len="55-60 см">55–60 см</button>
                <button class="mv-pill" data-len="65-70 см">65–70 см</button>
              </div>
            </div>
          </div>

          <div class="mv-catalog-grid" id="mv-cards-container"></div>
        </div>
      </section>

      <!-- КВИЗ -->
      <section id="quiz" class="mv-quiz-section">
        <div class="mv-container">
          <div class="mv-sec-head">
            <span class="mv-sec-badge">Онлайн-подбор за 30 сек</span>
            <h2 class="mv-sec-title mv-title-serif">Подберите идеальный срез под ваш тип волос</h2>
            <p class="mv-sec-sub">Укажите параметры — технолог снимет видео 2–3 подходящих срезов из наличия при дневном свете</p>
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
                <div class="mv-quiz-card selected" data-val="Детский шелк (тонкие)"><div class="mv-quiz-card-val">Тонкий шелк</div></div>
                <div class="mv-quiz-card" data-val="Плотные прямые"><div class="mv-quiz-card-val">Плотные прямые</div></div>
                <div class="mv-quiz-card" data-val="Легкая волна"><div class="mv-quiz-card-val">Легкая волна</div></div>
                <div class="mv-quiz-card" data-val="Активная волна / кудри"><div class="mv-quiz-card-val">Кудри / волна</div></div>
              </div>
            </div>
            <div style="text-align: center; margin-top: 24px;">
              <button type="button" class="mv-btn mv-btn-primary" id="mv-quiz-submit">Получить видеоподборку под мои параметры ✦</button>
            </div>
          </div>
        </div>
      </section>

            <!-- МАСТЕРАМ & ОПТ (ПРЕМИУМ ДИЗАЙН 01 02 03) -->
      <section id="masters" class="mv-masters-section">
        <div class="mv-container">
          <div class="mv-sec-head">
            <span class="mv-sec-badge">Сотрудничество & Опт</span>
            <h2 class="mv-sec-title mv-title-serif">Специальные условия для мастеров и студий</h2>
            <p class="mv-sec-sub">Оптовые цены от 1 кг напрямую от фабрики, обучение авторскому лентированию и гибкая рассрочка</p>
          </div>
          <div class="mv-masters-grid">
            <!-- КАРТОЧКА 01 -->
            <div class="mv-masters-card">
              <div class="mv-masters-top">
                <span class="mv-masters-badge">ОПТ ОТ 1 КГ</span>
                <span class="mv-masters-num">01</span>
              </div>
              <h3 class="mv-masters-card-title">Фабричный прайс без посредников</h3>
              <p class="mv-masters-card-descr">
                Специальные закрытые цены для практикующих мастеров, колористов и салонов красоты. Прямые поставки отборного донорского волоса с фабрики в Москве.
              </p>
              <ul class="mv-masters-features">
                <li><span>✦</span> Возможность делить срезы и формировать микс-заказы</li>
                <li><span>✦</span> Персональный макро-видео отбор каждого хвоста технологом</li>
                <li><span>✦</span> Быстрая доставка СДЭК по РФ и всему миру в день заказа</li>
              </ul>
              <div class="mv-masters-action">
                <a href="#lead-box" class="mv-btn mv-btn-primary mv-masters-btn">Запросить оптовый прайс</a>
              </div>
            </div>

            <!-- КАРТОЧКА 02 -->
            <div class="mv-masters-card mv-masters-card--featured">
              <div class="mv-masters-top">
                <span class="mv-masters-badge mv-masters-badge--gold">КУРС 2 ДНЯ</span>
                <span class="mv-masters-num">02</span>
              </div>
              <h3 class="mv-masters-card-title">Обучение лентированию (офлайн)</h3>
              <p class="mv-masters-card-descr">
                Интенсивный 2-дневный практический курс на производстве фабрики: изготовление классических лент и биолент, секреты проклейки и схемы раскладки.
              </p>
              <ul class="mv-masters-features">
                <li><span>✦</span> День 1: Инструменты, расчет веса и густоты, раскладка и клей</li>
                <li><span>✦</span> День 2: Биоленты, колористика и смешивание без колориста</li>
                <li><span>✦</span> Оборудование, волосы и материалы предоставляются на курс</li>
              </ul>
              <div class="mv-masters-action">
                <a href="https://t.me/Magiavolos?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BB%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8E" target="_blank" rel="noopener noreferrer" class="mv-btn mv-btn-primary mv-masters-btn">Записаться на курс в Telegram</a>
              </div>
            </div>

            <!-- КАРТОЧКА 03 -->
            <div class="mv-masters-card">
              <div class="mv-masters-top">
                <span class="mv-masters-badge">ФИНАНСЫ & ПАРТНЕРСТВО</span>
                <span class="mv-masters-num">03</span>
              </div>
              <h3 class="mv-masters-card-title">Рассрочка 0% и оплата долями</h3>
              <p class="mv-masters-card-descr">
                Комфортные финансовые инструменты для вас и ваших клиентов: возможность закупать партии волос в рассрочку без переплат и увеличивать средний чек.
              </p>
              <ul class="mv-masters-features">
                <li><span>✦</span> Оплата долями — разбивка платежа на 4 части без процентов</li>
                <li><span>✦</span> Беспроцентная рассрочка от банков-партнеров на крупные партии</li>
                <li><span>✦</span> Закрытый канал новинок и бронирование редких оттенков</li>
              </ul>
              <div class="mv-masters-action">
                <a href="#lead-box" class="mv-btn mv-btn-primary mv-masters-btn">Узнать условия рассрочки</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ АККОРДЕОН -->
      <section id="faq" class="mv-faq-section">
        <div class="mv-container">
          <div class="mv-sec-head">
            <span class="mv-sec-badge">Вопрос-ответ</span>
            <h2 class="mv-sec-title mv-title-serif">Часто задаваемые вопросы</h2>
          </div>
          <div class="mv-faq-list">
            <div class="mv-faq-item open">
              <div class="mv-faq-head">
                <span class="mv-faq-q">Делаете ли вы доставку в другие города?</span>
                <span class="mv-faq-icon">+</span>
              </div>
              <div class="mv-faq-body">Да, доставка осуществляется по тарифам СДЭК и экспресс-служб по всей России и миру. Перед отправкой мы снимаем подробное макро-видео среза при дневном свете и согласовываем его с вами.</div>
            </div>
            <div class="mv-faq-item">
              <div class="mv-faq-head">
                <span class="mv-faq-q">Могу ли я приехать в студию в Москве и выбрать срез лично?</span>
                <span class="mv-faq-icon">+</span>
              </div>
              <div class="mv-faq-body">Конечно! Ждем вас ежедневно с 10:00 до 20:00 по адресу: г. Москва, ул. Машкова, дом 26, стр. 1. У нас более 150 кг волос в наличии, мастер приложит срезы к вашим волосам для идеального совпадения.</div>
            </div>
            <div class="mv-faq-item">
              <div class="mv-faq-head">
                <span class="mv-faq-q">Как ухаживать за донорскими волосами?</span>
                <span class="mv-faq-icon">+</span>
              </div>
              <div class="mv-faq-body">Используйте бессульфатный уход и специальную расческу для нарощенных волос. Мойте голову вертикально по росту волос. Не наносите маски и масла на капсулы.</div>
            </div>
            <div class="mv-faq-item">
              <div class="mv-faq-head">
                <span class="mv-faq-q">Волосы действительно 100% натуральные и без силикона?</span>
                <span class="mv-faq-icon">+</span>
              </div>
              <div class="mv-faq-body">Да! Мы используем только отборные донорские волосы одноголового сбора, собранные в РФ. Без химикатов и силикона. Щадящее бережное осветление гарантирует, что краска не смывается в желтизну.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- БЛОК ЗАЯВКИ С ФОРМОЙ TILDA -->
      <section id="lead-box" class="mv-lead-section">
        <div class="mv-container">
          <div class="mv-lead-card">
            <span class="mv-lead-badge" id="mv-lead-selected-badge">✦ Забронировать подбор среза с фабрики</span>
            <h2 class="mv-sec-title mv-title-serif" style="margin-bottom:10px;">Получите персональную видеоподборку</h2>
            <p class="mv-sec-sub" style="margin-bottom:20px;">Оставьте номер — технолог пришлет макро-видео 2–3 срезов в выбранный мессенджер в течение 15 минут.</p>

            <!-- СЛОТ ФОРМЫ -->
            <div id="mv-tilda-form-slot"></div>
          </div>
        </div>
      </section>


      <!-- ЮРИДИЧЕСКИЙ ПОПАП (ДОГОВОР ОФЕРТЫ, ПОЛИТИКА, СОГЛАСИЕ, COOKIE) -->
      <div id="mv-legal-modal" class="mv-legal-modal" role="dialog" aria-modal="true" style="display:none;">
        <div class="mv-legal-modal__backdrop" onclick="mvCloseLegalModal()"></div>
        <div class="mv-legal-modal__dialog">
          <div class="mv-legal-modal__header">
            <div class="mv-legal-modal__title-box">
              <span class="mv-legal-modal__badge">ОФИЦИАЛЬНЫЙ ДОКУМЕНТ</span>
              <h3 class="mv-legal-modal__title" id="mv-legal-modal-title">Политика конфиденциальности</h3>
            </div>
            <button type="button" class="mv-legal-modal__close" onclick="mvCloseLegalModal()" title="Закрыть">&times;</button>
          </div>
          <div class="mv-legal-modal__body" id="mv-legal-modal-body"></div>
          <div class="mv-legal-modal__footer">
            <div class="mv-legal-modal__note">ИП Зарипов Д.А. • ОГРНИП 321508100565547 • ФЗ-152 РФ</div>
            <button type="button" class="mv-btn mv-btn-primary mv-legal-modal__btn" onclick="mvCloseLegalModal()">Понятно, закрыть</button>
          </div>
        </div>
      </div>

      <!-- ПОДВАЛ -->
            <!-- ЮРИДИЧЕСКИЙ ПОДВАЛ -->
      <footer id="contacts" class="mv-footer">
        <div class="mv-container">
          <div class="mv-footer-grid">
            <!-- КОЛОНКА 1: БРЕНД И ЮР. ДАННЫЕ -->
            <div class="mv-footer-col">
              <span class="mv-logo-title">Магия Волос</span>
              <p style="font-size:13px; color:var(--mv-text-muted); line-height:1.6; margin:14px 0 0; max-width:360px;">
                Собственное фабричное производство и шоурум отборных донорских волос одноголового сбора в Москве. Оптовые и розничные поставки по всей территории РФ и миру с 2009 года.
              </p>
              <div class="mv-footer-legal-box">
                <div class="mv-footer-legal-title">Юридическая информация:</div>
                <div>Индивидуальный предприниматель Зарипов Д.А.</div>
                <div>ИНН: 502918883974</div>
                <div>ОГРНИП: 321508100565547</div>
              </div>
            </div>

            <!-- КОЛОНКА 2: РАЗДЕЛЫ САЙТА -->
            <div class="mv-footer-col">
              <h4>Разделы каталога</h4>
              <div class="mv-footer-links">
                <a href="#education">Видеоуроки от технолога</a>
                <a href="#catalog">Каталог срезов в наличии</a>
                <a href="#quiz">Экспресс-подбор среза (Квиз)</a>
                <a href="#masters">Мастерам & Оптовые условия</a>
                <a href="#faq">Частые вопросы (FAQ)</a>
                <a href="#lead-box">Забронировать видеоподборку</a>
              </div>
            </div>

            <!-- КОЛОНКА 3: ЛС И ШОУРУМ -->
            <div class="mv-footer-col">
              <h4>Прямая связь & Шоурум</h4>
              <div class="mv-footer-links">
                <a href="https://t.me/Magiavolos" target="_blank" rel="noopener noreferrer" class="mv-footer-ls-item">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><circle cx="12" cy="12" r="12" fill="#2AABEE"/><path d="M5.5 11.8l3.2 1.2 1.3 4.1c.2.5.8.6 1.1.2l1.9-1.9 3.8 2.8c.4.3 1 .1 1.1-.4l2.2-10.4c.1-.6-.4-1.1-1-.9L5.5 10.7c-.6.2-.6 1 0 1.1zm4.2 1l6.8-4.3c.2-.1.3.1.2.2l-5.6 5.1-.2 2.3-.8-2.6-.4-.7z" fill="#ffffff"/></svg>
                  <span>Написать в ЛС Telegram (@Magiavolos)</span>
                </a>
                <a href="https://max.ru/u/f9LHodD0cOKWrw5xtMdExj0FHPSJ6XMPPXtGG050Eaxzc1IZ2NirvJiMRCo" target="_blank" rel="noopener noreferrer" class="mv-footer-ls-item">
                  <svg viewBox="0 0 100 100" width="18" height="18" fill="none"><defs><linearGradient id="mv-max-grad-f" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#246BFD"/><stop offset="100%" stop-color="#9C2CFE"/></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#mv-max-grad-f)"/><g transform="translate(19, 19) scale(0.62)"><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M50.76 0c27.53 0 49.12 22.34 49.12 49.89S77.61 99.23 51.02 99.23c-9.43 0-14.01-1.33-21.37-6.54-.5-.36-1.2-.26-1.63.19-5.66 6.04-20.17 10.28-20.83 2.03C7.19 80.53 0 71.18 0 49.61 0 21.3 23.22 0 50.76 0m.77 24.55c-13.07-.68-23.26 8.39-25.51 22.58-1.86 11.75 1.44 26.07 4.26 26.8 1.2.3 4.08-1.9 6.18-3.88.4-.37.99-.44 1.45-.15 3.27 2 6.97 3.5 11.05 3.71 13.42.7 25.3-9.8 26-23.21.71-13.42-10.01-25.14-23.43-25.85"/></g></svg>
                  <span>Написать в ЛС MAX (Мессенджер)</span>
                </a>
                <a href="https://t.me/magiavolos_chanel" target="_blank" rel="noopener noreferrer" class="mv-footer-ls-item">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><circle cx="12" cy="12" r="12" fill="rgba(197,155,109,0.3)"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#edd8be"/></svg>
                  <span>Канал со срезами (@magiavolos_chanel)</span>
                </a>
                <a href="tel:+79255063750" style="margin-top:6px;"><strong>+7 (925) 506-37-50</strong> (Консультация)</a>
                <a href="tel:+74951363244">+7 (495) 136-32-44 (Шоурум фабрики)</a>
                <span>г. Москва, ул. Машкова, 26с1</span>
                <span>Ежедневно с 10:00 до 20:00</span>
              </div>
            </div>
          </div>

          <!-- НИЖНЯЯ ПАНЕЛЬ С ДОКУМЕНТАМИ И ДИСКЛЕЙМЕРОМ -->
          <div class="mv-footer-bottom">
            <div class="mv-footer-bottom-row">
              <span>© 2009–2026 Фабрика натуральных волос «Магия Волос». Все права защищены.</span>
              <div class="mv-footer-bottom-links">
                <button type="button" class="mv-footer-doc-btn" onclick="mvOpenLegalModal('oferta')">Договор оферты</button>
                <button type="button" class="mv-footer-doc-btn" onclick="mvOpenLegalModal('privacy')">Политика конфиденциальности (ФЗ-152)</button>
                <button type="button" class="mv-footer-doc-btn" onclick="mvOpenLegalModal('cookie')">Положение о файлах Cookie</button>
                <button type="button" class="mv-footer-doc-btn" onclick="mvOpenCookieSettings()">Настройки Cookie</button>
              </div>
            </div>
            <div class="mv-footer-disclaimer">
              * Деятельность Meta Platforms Inc. (социальные сети Facebook и Instagram) признана экстремистской и запрещена на территории Российской Федерации.
            </div>
          </div>
        </div>
      </footer>

      <!-- ДВУХЭТАПНЫЙ БАННЕР COOKIE (GREYZZZZWOLF СТИЛЬ) -->
      <div id="mv-cookie-banner" class="mv-cookie-banner">
        <button type="button" class="mv-cookie-close-corner" onclick="mvCloseCookieBanner()" title="Закрыть">✕</button>

        <div id="mv-cookie-view-main" class="mv-cookie-view">
          <div class="mv-cookie-title">«Магия Волос» использует cookie</div>
          <div class="mv-cookie-text">
            Файлы cookie и технические данные необходимы для стабильной и безопасной работы сайта, сохранения ваших настроек и веб-аналитики. Подробнее — в <button type="button" class="mv-footer-doc-btn" onclick="mvOpenLegalModal('privacy')">Политике конфиденциальности</button> и <button type="button" class="mv-footer-doc-btn" onclick="mvOpenLegalModal('cookie')">Положении о Cookie</button>.
          </div>
          <div class="mv-cookie-btn-col">
            <button type="button" class="mv-cookie-btn-primary" onclick="mvAcceptAllCookies()">Разрешить все</button>
            <button type="button" class="mv-cookie-btn-secondary" onclick="mvAcceptEssentialCookies()">Разрешить обязательные</button>
            <button type="button" class="mv-cookie-btn-dark" onclick="mvShowCookieSettings()">Настроить</button>
          </div>
        </div>

        <div id="mv-cookie-view-settings" class="mv-cookie-view hidden">
          <div class="mv-cookie-top-nav">
            <button type="button" class="mv-cookie-back-btn" onclick="mvHideCookieSettings()" title="Назад">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="mv-cookie-title">Настройки файлов cookie</div>
          </div>
          <div class="mv-cookie-text">
            Вы можете выбрать, какие типы файлов cookie разрешить для работы с сайтом фабрики:
          </div>
          <div class="mv-cookie-toggles-list">
            <div class="mv-cookie-item">
              <div class="mv-cookie-item-label">Технические (обязательные)</div>
              <label class="mv-switch">
                <input type="checkbox" checked disabled>
                <span class="mv-slider"></span>
              </label>
            </div>
            <div class="mv-cookie-item">
              <div class="mv-cookie-item-label">Аналитические (Яндекс.Метрика)</div>
              <label class="mv-switch">
                <input type="checkbox" id="mv-cookie-toggle-analytics" checked>
                <span class="mv-slider"></span>
              </label>
            </div>
            <div class="mv-cookie-item">
              <div class="mv-cookie-item-label">Маркетинговые и видео</div>
              <label class="mv-switch">
                <input type="checkbox" id="mv-cookie-toggle-other" checked>
                <span class="mv-slider"></span>
              </label>
            </div>
          </div>
          <div class="mv-cookie-btn-col">
            <button type="button" class="mv-cookie-btn-primary" onclick="mvSaveCustomCookies()">Сохранить настройки</button>
          </div>
        </div>
      </div>

      <!-- МОДАЛКА ВИДЕО KINESCOPE -->
      <div id="mv-video-modal">
        <div class="mv-modal-content">
          <button class="mv-modal-close">&times;</button>
          <iframe id="mv-modal-iframe" src="" style="width:100%; height:100%; border:none;" allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div>
      </div>
    `;

    document.body.prepend(app);
  }

  // 4. Логика Каталога
  function initCatalog() {
    var container = document.getElementById('mv-cards-container');
    if (!container) return;

    var activeCat = 'all';
    var activeLen = 'all';

    function renderCards() {
      container.innerHTML = '';
      var filtered = CATALOG_ITEMS.filter(function(item) {
        var matchCat = (activeCat === 'all' || item.category === activeCat);
        var matchLen = (activeLen === 'all' || item.len === activeLen);
        return matchCat && matchLen;
      });

      if (!filtered.length) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding:40px; color:var(--mv-text-muted);">В наличии более 150 кг срезов! Оставьте заявку ниже, и мы пришлем видео среза под ваш персональный запрос.</div>';
        return;
      }

      filtered.forEach(function(item) {
        var card = document.createElement('div');
        card.className = 'mv-card';
        card.innerHTML = `
          <div class="mv-card-img-wrap">
            <img src="${item.img}" alt="${item.title}" class="mv-card-img" onerror="this.onerror=null; this.src='https://raw.githubusercontent.com/snesterov/magiyavolos-sale/main/images/cut_' + item.id + '.jpg';" loading="lazy">
            ${item.is_video ? `
              <div class="mv-card-video-overlay" data-tg-url="${item.tg_url}" title="Смотреть видеообзор в Telegram">
                <div class="mv-card-video-play">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0c0a09"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <span class="mv-card-video-label">Видео в Telegram</span>
              </div>
            ` : ''}
            <span class="mv-card-badge">${item.is_video ? '▶ Видеообзор' : 'В наличии'}</span>
          </div>
          <div class="mv-card-body">
            <div class="mv-card-hashtags">
              ${item.tags.map(function(t) { return '<span class="mv-hashtag">' + t + '</span>'; }).join('')}
            </div>
            <h3 class="mv-card-title">${item.title}</h3>
            <div class="mv-card-specs">
              <div class="mv-card-spec-row"><span>Структура:</span><span class="mv-card-spec-val">${item.struct}</span></div>
              <div class="mv-card-spec-row"><span>Длина:</span><span class="mv-card-spec-val">${item.len}</span></div>
              <div class="mv-card-spec-row"><span>Вес среза:</span><span class="mv-card-spec-val">${item.weight}</span></div>
            </div>
            <div class="mv-card-footer">
              <div class="mv-card-price">${item.price}</div>
              <button class="mv-btn mv-btn-primary mv-card-btn" data-title="${item.title}">Забронировать</button>
            </div>
            <div class="mv-card-messengers">
              <a href="https://t.me/Magiavolos?text=${encodeURIComponent('Здравствуйте! Хочу уточнить наличие среза: ' + item.title + (item.tg_url ? ' (' + item.tg_url + ')' : ''))}" target="_blank" rel="noopener noreferrer" class="mv-card-msg-btn mv-card-msg--tg" title="Написать в ЛС Telegram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none"><circle cx="12" cy="12" r="12" fill="#2AABEE"/><path d="M5.5 11.8l3.2 1.2 1.3 4.1c.2.5.8.6 1.1.2l1.9-1.9 3.8 2.8c.4.3 1 .1 1.1-.4l2.2-10.4c.1-.6-.4-1.1-1-.9L5.5 10.7c-.6.2-.6 1 0 1.1zm4.2 1l6.8-4.3c.2-.1.3.1.2.2l-5.6 5.1-.2 2.3-.8-2.6-.4-.7z" fill="#ffffff"/></svg>
                <span>В ЛС Telegram</span>
              </a>
              <a href="https://max.ru/u/f9LHodD0cOKWrw5xtMdExj0FHPSJ6XMPPXtGG050Eaxzc1IZ2NirvJiMRCo" target="_blank" rel="noopener noreferrer" class="mv-card-msg-btn mv-card-msg--max" title="Написать в ЛС MAX">
                <svg viewBox="0 0 100 100" width="16" height="16" fill="none"><defs><linearGradient id="mv-max-grad-c" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#246BFD"/><stop offset="100%" stop-color="#9C2CFE"/></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#mv-max-grad-c)"/><g transform="translate(19, 19) scale(0.62)"><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M50.76 0c27.53 0 49.12 22.34 49.12 49.89S77.61 99.23 51.02 99.23c-9.43 0-14.01-1.33-21.37-6.54-.5-.36-1.2-.26-1.63.19-5.66 6.04-20.17 10.28-20.83 2.03C7.19 80.53 0 71.18 0 49.61 0 21.3 23.22 0 50.76 0m.77 24.55c-13.07-.68-23.26 8.39-25.51 22.58-1.86 11.75 1.44 26.07 4.26 26.8 1.2.3 4.08-1.9 6.18-3.88.4-.37.99-.44 1.45-.15 3.27 2 6.97 3.5 11.05 3.71 13.42.7 25.3-9.8 26-23.21.71-13.42-10.01-25.14-23.43-25.85"/></g></svg>
                <span>В ЛС MAX</span>
              </a>
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

        var imgWrap = card.querySelector('.mv-card-img-wrap');
        if (imgWrap && item.tg_url) {
          imgWrap.style.cursor = 'pointer';
          imgWrap.addEventListener('click', function(e) {
            window.open(item.tg_url, '_blank');
          });
        }

        container.appendChild(card);
      });
    }

    var catBtns = document.querySelectorAll('#filter-cat .mv-pill');
    catBtns.forEach(function(b) {
      b.addEventListener('click', function() {
        catBtns.forEach(function(x) { x.classList.remove('active'); });
        b.classList.add('active');
        activeCat = b.getAttribute('data-cat');
        renderCards();
      });
    });

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
        var lenVal = selLen ? selLen.getAttribute('data-val') : '55–60 см';
        var typeVal = selType ? selType.getAttribute('data-val') : 'Детский шелк';

        var badge = document.getElementById('mv-lead-selected-badge');
        if (badge) badge.textContent = '✦ Параметры подбора: ' + lenVal + ' • ' + typeVal;

        var leadBox = document.getElementById('lead-box');
        if (leadBox) leadBox.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // 6. Логика Видеоплеера
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

    document.querySelectorAll('[data-video-id]').forEach(function(el) {
      el.addEventListener('click', function() {
        var id = el.getAttribute('data-video-id');
        if (id) openVideo(id);
      });
    });
  }

  // 7. Логика FAQ
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

  // ==========================================
  // ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ (ФЗ-152, ОФЕРТА, COOKIE, СОГЛАСИЕ)
  // ==========================================
  var LEGAL_DOCS = {
    privacy: {
      title: "Политика конфиденциальности (ФЗ-152 РФ)",
      body: `
        <h4>1. Общие положения</h4>
        <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации о физических лицах (далее — Пользователь), пользующихся услугами веб-ресурса Фабрики натуральных волос «Магия Волос» (магияволос.рф, magiavolos.shop, snesterov.github.io).</p>
        <p>Оператором персональных данных является <strong>Индивидуальный предприниматель Зарипов Дамир Анверович</strong> (ИНН: 502918883974, ОГРНИП: 321508100565547).</p>
        
        <h4>2. Состав обрабатываемых данных</h4>
        <p>Оператор обрабатывает следующие персональные данные Пользователя:</p>
        <ul>
          <li>Имя и фамилия;</li>
          <li>Контактный номер телефона;</li>
          <li>Идентификатор (username) в мессенджерах (Telegram, MAX, WhatsApp);</li>
          <li>Технические данные: IP-адрес, файлы cookie, данные браузера и устройства, параметры пользовательской сессии.</li>
        </ul>

        <h4>3. Цели обработки персональных данных</h4>
        <p>Сбор и обработка данных производятся исключительно в целях:</p>
        <ul>
          <li>Предоставления индивидуальных консультаций технолога и подбора срезов донорских волос;</li>
          <li>Отправки макро-видеозаписей срезов и демонстрации оттенков в мессенджеры Пользователя;</li>
          <li>Оформления бронирования, выставления счетов и организации курьерской доставки через СДЭК и экспресс-службы;</li>
          <li>Улучшения качества обслуживания и аналитики работы веб-сервиса.</li>
        </ul>

        <h4>4. Правовые основания и безопасность</h4>
        <p>Обработка данных осуществляется на основании согласия Пользователя, данного свободно, своей волей и в своем интересе (ст. 9 Федерального закона № 152-ФЗ «О персональных данных»).</p>
        <p>Оператор принимает необходимые организационные и технические меры для защиты персональной информации от неправомерного или случайного доступа, уничтожения, изменения, блокирования и распространения. Передача данных третьим лицам возможна исключительно логистическим партнерам (СДЭК) для вручения заказа.</p>

        <h4>5. Срок действия и отзыв согласия</h4>
        <p>Согласие действует до момента достижения целей обработки или до отзыва Пользователем. Пользователь вправе отозвать согласие в любой момент, направив официальное уведомление на адрес электронной почты: <strong>info@magiyavolos.ru</strong> с темой «Отзыв согласия на обработку ПДн».</p>

        <div class="mv-legal-modal__legal-card">
          <strong>Реквизиты оператора:</strong><br>
          ИП Зарипов Дамир Анверович<br>
          ИНН: 502918883974 | ОГРНИП: 321508100565547<br>
          Адрес шоурума: г. Москва, ул. Машкова, дом 26, стр. 1<br>
          Телефон: +7 (925) 506-37-50 | Email: info@magiyavolos.ru
        </div>
      `
    },
    consent: {
      title: "Согласие на обработку персональных данных",
      body: `
        <h4>Текст согласия субъекта персональных данных</h4>
        <p>Заполняя форму обратной связи, нажимая кнопку отправки заявки либо оформляя бронирование на сайте, я свободно, своей волей и в своем интересе выражаю свое безусловное согласие Индивидуальному предпринимателю Зарипову Дамиру Анверовичу (ИНН 502918883974, ОГРНИП 321508100565547) на обработку моих персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</p>

        <h4>Перечень персональных данных:</h4>
        <ul>
          <li>Имя;</li>
          <li>Номер телефона;</li>
          <li>Имя пользователя / номер в мессенджерах Telegram, MAX, WhatsApp;</li>
          <li>Данные о выбранных характеристиках среза (длина, вес, категория, оттенок).</li>
        </ul>

        <h4>Перечень разрешенных действий:</h4>
        <p>Сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача службам доставки (СДЭК), блокирование, удаление и уничтожение данных с использованием средств автоматизации и без них.</p>

        <h4>Цель предоставления данных:</h4>
        <p>Получение персональной видеоподборки срезов натуральных волос, консультация технолога фабрики, расчет стоимости, согласование доставки и подтверждение бронирования.</p>

        <p>Настоящее согласие действует бессрочно до момента его отзыва путем направления письменного заявления на email: <strong>info@magiyavolos.ru</strong>.</p>
      `
    },
    oferta: {
      title: "Договор публичной оферты купли-продажи",
      body: `
        <h4>1. Общие положения</h4>
        <p>Настоящий документ является публичной офертой Индивидуального предпринимателя Зарипова Дамира Анверовича (далее — Продавец) в соответствии со ст. 437 Гражданского кодекса Российской Федерации. Акцептом настоящей оферты признается оформление заказа или бронирования Покупателем через форму на сайте или через мессенджеры Продавца.</p>

        <h4>2. Предмет договора</h4>
        <p>Продавец обязуется передать в собственность Покупателя, а Покупатель обязуется принять и оплатить Товар — отборные срезы натуральных донорских волос одноголового сбора славянского и детского типа, а также сопутствующие материалы для наращивания.</p>

        <h4>3. Порядок заказа и фиксация характеристик</h4>
        <p>Ввиду уникальности каждого натурального среза (длина, вес, структура, оттенок) перед оформлением заказа технолог Продавца производит индивидуальную фото- и видеофиксацию среза на ювелирных/высокоточных весах и направляет подтверждение Покупателю в Telegram или MAX.</p>

        <h4>4. Оплата и доставка</h4>
        <p>Оплата производится безналичным расчетом по реквизитам либо через платежные сервисы. Доставка осуществляется силами СДЭК, курьерскими службами по РФ и миру либо самовывозом из шоурума фабрики по адресу: г. Москва, ул. Машкова, 26с1.</p>

        <h4>5. Возврат и гарантии</h4>
        <p>Натуральные донорские волосы фабричной обработки являются предметом личной гигиены и индивидуального потребления. Возврат и обмен осуществляются строго в соответствии с Законом РФ «О защите прав потребителей» и действующим законодательством РФ.</p>

        <div class="mv-legal-modal__legal-card">
          <strong>Реквизиты Продавца:</strong><br>
          ИП Зарипов Дамир Анверович<br>
          ИНН: 502918883974 | ОГРНИП: 321508100565547<br>
          Адрес: 105064, г. Москва, ул. Машкова, д. 26, стр. 1<br>
          Email: info@magiyavolos.ru | Тел: +7 (925) 506-37-50
        </div>
      `
    },
    cookie: {
      title: "Политика использования файлов Cookie",
      body: `
        <h4>1. Что такое файлы Cookie</h4>
        <p>Файлы cookie — это небольшие текстовые фрагменты данных, сохраняемые на вашем устройстве при посещении веб-сайта. Они обеспечивают корректную работу интерфейса, сохраняют выбранные предпочтения и помогают нам анализировать взаимодействие с сайтом.</p>

        <h4>2. Категории используемых файлов:</h4>
        <ul>
          <li><strong>Технические (Обязательные):</strong> необходимы для функционирования квиза, запоминания выбранного среза волос и передачи данных формы. Без них работа сайта невозможна.</li>
          <li><strong>Аналитические:</strong> используются сервисом Яндекс.Метрика для оценки посещаемости, источников трафика и улучшения удобства навигации (не содержат персональных идентификаторов).</li>
          <li><strong>Функциональные:</strong> сохраняют настройки интерфейса и статус согласия на уведомления.</li>
        </ul>

        <h4>3. Управление файлами Cookie</h4>
        <p>Вы можете в любой момент изменить настройки файлов cookie через кнопку «Настройки файлов Cookie» в подвале сайта либо отключить их в настройках вашего браузера (Chrome, Safari, Firefox, Яндекс.Браузер). Обратите внимание, что отключение технических cookie может повлиять на работоспособность формы подбора срезов.</p>
      `
    }
  };

  window.mvOpenLegalModal = function(docType) {
    var modal = document.getElementById('mv-legal-modal');
    var titleEl = document.getElementById('mv-legal-modal-title');
    var bodyEl = document.getElementById('mv-legal-modal-body');
    if (!modal || !titleEl || !bodyEl) return;

    var doc = LEGAL_DOCS[docType] || LEGAL_DOCS.privacy;
    titleEl.textContent = doc.title;
    bodyEl.innerHTML = doc.body;

    modal.style.display = 'flex';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.mvCloseLegalModal = function() {
    var modal = document.getElementById('mv-legal-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('active');
    }
    document.body.style.overflow = '';
  };

  // Закрытие по кнопке Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      window.mvCloseLegalModal();
    }
  });

  // Глобальный перехват любых юридических кликов (форма, чекбокс, ссылки)
  document.addEventListener('click', function(e) {
    var a = e.target.closest('a, button, span');
    if (!a) return;

    // Не перехватываем клики внутри самого открытого попапа закрытия
    if (a.closest('.mv-legal-modal__header, .mv-legal-modal__footer')) return;

    var href = (a.getAttribute('href') || '').toLowerCase();
    var txt = (a.textContent || '').toLowerCase();

    if (href.indexOf('politika') !== -1 || href.indexOf('privacy') !== -1) {
      e.preventDefault();
      e.stopPropagation();
      window.mvOpenLegalModal('privacy');
      return;
    }
    if (href.indexOf('oferta') !== -1) {
      e.preventDefault();
      e.stopPropagation();
      window.mvOpenLegalModal('oferta');
      return;
    }
    if (txt.indexOf('политикой конфиденциальности') !== -1 || txt.indexOf('политика конфиденциальности') !== -1) {
      if (a.closest('.mv-lead-section, #mv-tilda-form-slot, .mv-footer, .mv-cookie-banner, .t-checkbox')) {
        e.preventDefault();
        e.stopPropagation();
        window.mvOpenLegalModal('privacy');
        return;
      }
    }
    if (txt.indexOf('персональных данных') !== -1 || txt.indexOf('обработкой') !== -1) {
      if (a.closest('.mv-lead-section, #mv-tilda-form-slot, .t-checkbox')) {
        e.preventDefault();
        e.stopPropagation();
        window.mvOpenLegalModal('consent');
        return;
      }
    }
  }, true);

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
        max_messenger: '<svg viewBox="0 0 100 100" width="20" height="20" fill="none"><defs><linearGradient id="mv-max-grad-tab" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#246BFD"/><stop offset="100%" stop-color="#9C2CFE"/></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#mv-max-grad-tab)"/><g transform="translate(19, 19) scale(0.62)"><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M50.76 0c27.53 0 49.12 22.34 49.12 49.89S77.61 99.23 51.02 99.23c-9.43 0-14.01-1.33-21.37-6.54-.5-.36-1.2-.26-1.63.19-5.66 6.04-20.17 10.28-20.83 2.03C7.19 80.53 0 71.18 0 49.61 0 21.3 23.22 0 50.76 0m.77 24.55c-13.07-.68-23.26 8.39-25.51 22.58-1.86 11.75 1.44 26.07 4.26 26.8 1.2.3 4.08-1.9 6.18-3.88.4-.37.99-.44 1.45-.15 3.27 2 6.97 3.5 11.05 3.71 13.42.7 25.3-9.8 26-23.21.71-13.42-10.01-25.14-23.43-25.85"/></g></svg>'
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
        if (label && mType && icons[mType] && !btn.dataset.mvRendered) {
          btn.dataset.mvRendered = 'true';
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

    var nameInp = form.querySelector('input[name="Name"]');
    if (nameInp) nameInp.placeholder = 'Ваше имя';

    var subBtn = form.querySelector('.t-btnflex__text, .t-submit');
    if (subBtn) subBtn.textContent = 'Получить видеоподборку срезов ✦';

    var submitBtnEl = form.querySelector('button[type="submit"], .t-submit');
    if (submitBtnEl && !submitBtnEl.dataset.mvValidInit) {
      submitBtnEl.dataset.mvValidInit = 'true';
      submitBtnEl.addEventListener('click', function(e) {
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

        if (typeof window.ym === 'function') {
          try {
            window.ym(window.yandexMetricId || 0, 'reachGoal', 'lead_submitted');
          } catch (err) {}
        }
      });
    }

    // Обработка кликов по ссылкам политики и согласия в чекбоксе формы Тильды
    var cbControls = form.querySelectorAll('.t-checkbox__control');
    cbControls.forEach(function(ctrl) {
      if (ctrl.dataset.mvLegalInit) return;
      ctrl.dataset.mvLegalInit = 'true';

      var existingLinks = ctrl.querySelectorAll('a');
      if (existingLinks.length > 0) {
        existingLinks.forEach(function(link) {
          link.setAttribute('href', 'javascript:void(0)');
          link.removeAttribute('target');
          link.classList.add('mv-legal-link');
          link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var lt = (link.textContent || '').toLowerCase();
            if (lt.indexOf('персональн') !== -1 || lt.indexOf('обработк') !== -1) {
              window.mvOpenLegalModal('consent');
            } else {
              window.mvOpenLegalModal('privacy');
            }
          });
        });
      } else {
        var lblText = ctrl.querySelector('.t-checkbox__labeltext') || ctrl;
        var h = lblText.innerHTML;
        if (h.indexOf('mv-legal-link') === -1) {
          h = h.replace(
            /политикой\s+конфиденциальности/gi,
            '<span class="mv-legal-link" data-doc="privacy">политикой конфиденциальности</span>'
          );
          h = h.replace(
            /обработкой\s+(своих\s+)?персональных\s+данных/gi,
            '<span class="mv-legal-link" data-doc="consent">обработкой персональных данных</span>'
          );
          lblText.innerHTML = h;

          lblText.querySelectorAll('.mv-legal-link').forEach(function(sp) {
            sp.addEventListener('click', function(e) {
              e.preventDefault();
              e.stopPropagation();
              var doc = sp.getAttribute('data-doc');
              window.mvOpenLegalModal(doc || 'privacy');
            });
          });
        }
      }
    });

    if (typeof window.t_contactMethod__init === 'function') {
      try {
        window.t_contactMethod__init('4705785601', '1770920801992');
      } catch (e) {}
    }
  }

  // 9. Виджеты
  function initWidgets() {
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

    if (!document.getElementById('mv-widget-lead')) {
      var leadWidget = document.createElement('div');
      leadWidget.id = 'mv-widget-lead';
      leadWidget.innerHTML = `
        <a href="https://t.me/Magiavolos" target="_blank" rel="noopener noreferrer" class="mv-float-icon-btn mv-float--tg" title="Написать в ЛС Telegram">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><circle cx="12" cy="12" r="12" fill="#2AABEE"/><path d="M5.5 11.8l3.2 1.2 1.3 4.1c.2.5.8.6 1.1.2l1.9-1.9 3.8 2.8c.4.3 1 .1 1.1-.4l2.2-10.4c.1-.6-.4-1.1-1-.9L5.5 10.7c-.6.2-.6 1 0 1.1zm4.2 1l6.8-4.3c.2-.1.3.1.2.2l-5.6 5.1-.2 2.3-.8-2.6-.4-.7z" fill="#ffffff"/></svg>
        </a>
        <a href="https://max.ru/u/f9LHodD0cOKWrw5xtMdExj0FHPSJ6XMPPXtGG050Eaxzc1IZ2NirvJiMRCo" target="_blank" rel="noopener noreferrer" class="mv-float-icon-btn mv-float--max" title="Написать в ЛС MAX">
          <svg viewBox="0 0 100 100" width="22" height="22" fill="none"><defs><linearGradient id="mv-max-grad-w" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#246BFD"/><stop offset="100%" stop-color="#9C2CFE"/></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#mv-max-grad-w)"/><g transform="translate(19, 19) scale(0.62)"><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M50.76 0c27.53 0 49.12 22.34 49.12 49.89S77.61 99.23 51.02 99.23c-9.43 0-14.01-1.33-21.37-6.54-.5-.36-1.2-.26-1.63.19-5.66 6.04-20.17 10.28-20.83 2.03C7.19 80.53 0 71.18 0 49.61 0 21.3 23.22 0 50.76 0m.77 24.55c-13.07-.68-23.26 8.39-25.51 22.58-1.86 11.75 1.44 26.07 4.26 26.8 1.2.3 4.08-1.9 6.18-3.88.4-.37.99-.44 1.45-.15 3.27 2 6.97 3.5 11.05 3.71 13.42.7 25.3-9.8 26-23.21.71-13.42-10.01-25.14-23.43-25.85"/></g></svg>
        </a>
        <a href="tel:+79255063750" class="mv-float-icon-btn mv-float--phone" title="Позвонить в шоурум">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><circle cx="12" cy="12" r="12" fill="rgba(197,155,109,0.35)"/><path d="M7 9.8a12.5 12.5 0 005.2 5.2l1.8-1.8c.2-.2.5-.3.8-.2.9.3 1.9.5 2.9.5.4 0 .8.4.8.8v2.9c0 .4-.4.8-.8.8-7.5 0-13.7-6.2-13.7-13.7 0-.4.4-.8.8-.8H8c.4 0 .8.4.8.8 0 1 .2 2 .5 2.9.1.3 0 .6-.2.8L7 9.8z" fill="#edd8be"/></svg>
        </a>
        <button type="button" class="mv-widget-btn" id="mv-float-btn-form">
          <span>✦</span> Подобрать срез
        </button>
      `;
      document.body.appendChild(leadWidget);

      var floatBtn = leadWidget.querySelector('#mv-float-btn-form');
      if (floatBtn) {
        floatBtn.addEventListener('click', function() {
          var leadBox = document.getElementById('lead-box');
          if (leadBox) leadBox.scrollIntoView({ behavior: 'smooth' });
        });
      }

      function updateLeadWidgetVisibility() {
        if (!leadWidget) return;
        var isMobile = window.innerWidth <= 768;
        var leadSec = document.getElementById('lead-box');

        // На мобильных: если в начале экрана (видна шапка, scrollY < 120) — плавающий виджет скрыт, чтобы не двоились контакты
        if (isMobile && window.scrollY < 120) {
          leadWidget.style.opacity = '0';
          leadWidget.style.pointerEvents = 'none';
          leadWidget.style.transform = 'translateY(30px)';
          return;
        }

        // Если доскроллили до формы заявки — скрываем, чтобы не перекрывать кнопки и инпуты
        if (leadSec) {
          var rect = leadSec.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 80) {
            leadWidget.style.opacity = '0';
            leadWidget.style.pointerEvents = 'none';
            leadWidget.style.transform = 'translateY(30px)';
            return;
          }
        }

        // Иначе показываем зафиксированный снизу виджет
        leadWidget.style.opacity = '1';
        leadWidget.style.pointerEvents = 'auto';
        leadWidget.style.transform = 'translateY(0)';
      }

      window.addEventListener('scroll', updateLeadWidgetVisibility);
      window.addEventListener('resize', updateLeadWidgetVisibility);
      updateLeadWidgetVisibility();
    }
  }

    // 10. Управление Cookie-баннером (GreyzzzzWolf стандарт)
  window.mvAcceptAllCookies = function() {
    localStorage.setItem('mv_cookie_consent', JSON.stringify({ status: 'all', time: Date.now() }));
    localStorage.setItem('mv_cookie_accepted', 'true');
    mvCloseCookieBanner();
  };

  window.mvAcceptEssentialCookies = function() {
    localStorage.setItem('mv_cookie_consent', JSON.stringify({ status: 'essential', time: Date.now() }));
    localStorage.setItem('mv_cookie_accepted', 'true');
    mvCloseCookieBanner();
  };

  window.mvShowCookieSettings = function() {
    var mainView = document.getElementById('mv-cookie-view-main');
    var setView = document.getElementById('mv-cookie-view-settings');
    if (mainView && setView) {
      mainView.classList.add('hidden');
      setView.classList.remove('hidden');
    }
  };

  window.mvHideCookieSettings = function() {
    var mainView = document.getElementById('mv-cookie-view-main');
    var setView = document.getElementById('mv-cookie-view-settings');
    if (mainView && setView) {
      setView.classList.add('hidden');
      mainView.classList.remove('hidden');
    }
  };

  window.mvCloseCookieBanner = function() {
    var banner = document.getElementById('mv-cookie-banner');
    if (banner) banner.classList.remove('visible');
  };

  window.mvSaveCustomCookies = function() {
    var a = document.getElementById('mv-cookie-toggle-analytics');
    var o = document.getElementById('mv-cookie-toggle-other');
    localStorage.setItem('mv_cookie_consent', JSON.stringify({
      status: 'custom',
      analytics: a ? a.checked : true,
      other: o ? o.checked : false,
      time: Date.now()
    }));
    localStorage.setItem('mv_cookie_accepted', 'true');
    mvCloseCookieBanner();
  };

  window.mvOpenCookieSettings = function() {
    var banner = document.getElementById('mv-cookie-banner');
    if (banner) {
      mvShowCookieSettings();
      banner.classList.add('visible');
    }
  };

  function initCookieBanner() {
    if (!localStorage.getItem('mv_cookie_accepted')) {
      setTimeout(function() {
        var banner = document.getElementById('mv-cookie-banner');
        if (banner) banner.classList.add('visible');
      }, 800);
    }
  }

  function mount() {
    renderApp();
    initCatalog();
    initQuiz();
    initVideoModal();
    initFaq();
    initWidgets();
    initCookieBanner();

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
