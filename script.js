document.addEventListener("DOMContentLoaded", function() {
    anime({
        targets: '.section',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(300, {start: 500}),
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.team-card',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(300, {start: 800}),
        easing: 'easeOutExpo'
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    const translations = {
        "tr": {
            "about": "Proje Hakkında",
            "features": "Özellikler",
            "team": "Ekibimiz",
            "language-button": "Dil",
            "about-title": "Proje Hakkında",
            "about-text": "Ekobis, ön muhasebe sorunlarına çözüm odaklı, açık kaynak kodlu ve kar amacı gütmeyen bir gönüllülük projesidir. Bu proje, KOBİ'lere ve bireysel kullanıcılara basit formüller kullanarak gelir, gider ve denge hesaplamalarını doğru bir şekilde yapmalarına yardımcı olmayı amaçlar.",
            "features-title": "Özellikler",
            "feature-1": "Gelir-Gider Yönetimi ve Takibi",
            "feature-2": "Müşteri ve Tedarikçi Yönetimi ve Takibi",
            "feature-3": "Aylık Analiz ve Raporlama",
            "feature-4": "Ürün Takibi",
            "team-title": "Ekibimiz",
            "role-1": "Backend Developer & Proje Yöneticisi",
            "role-2": "Backend Developer",
            "role-3": "Backend Developer",
            "role-4": "Frontend Developer",
            "role-5": "Backend Developer",
            "role-6": "Backend Developer",
            "footer": "Ekobis © 2024"
        },
        "en": {
            "about": "About the Project",
            "features": "Features",
            "team": "Our Team",
            "language-button": "Language",
            "about-title": "About the Project",
            "about-text": "Ekobis is an open-source, non-profit volunteer project focused on solving accounting issues. This project aims to help SMEs and individual users accurately calculate income, expenses, and balance using simple formulas.",
            "features-title": "Features",
            "feature-1": "Income and Expense Management and Tracking",
            "feature-2": "Customer and Supplier Management and Tracking",
            "feature-3": "Monthly Analysis and Reporting",
            "feature-4": "Product Tracking",
            "team-title": "Our Team",
            "role-1": "Backend Developer & Project Manager",
            "role-2": "Backend Developer",
            "role-3": "Backend Developer",
            "role-4": "Frontend Developer",
            "role-5": "Backend Developer",
            "role-6": "Backend Developer",
            "footer": "Ekobis © 2024"
        },
        "de": {
            "about": "Über das Projekt",
            "features": "Eigenschaften",
            "team": "Unser Team",
            "language-button": "Sprache",
            "about-title": "Über das Projekt",
            "about-text": "Ekobis ist ein Open-Source-Non-Profit-Freiwilligenprojekt, das sich auf die Lösung von Buchhaltungsproblemen konzentriert. Dieses Projekt zielt darauf ab, KMUs und einzelnen Nutzern zu helfen, Einkommen, Ausgaben und Salden mit einfachen Formeln genau zu berechnen.",
            "features-title": "Eigenschaften",
            "feature-1": "Einnahmen- und Ausgabenverwaltung und -verfolgung",
            "feature-2": "Kunden- und Lieferantenverwaltung und -verfolgung",
            "feature-3": "Monatliche Analyse und Berichterstattung",
            "feature-4": "Produktverfolgung",
            "team-title": "Unser Team",
            "role-1": "Backend-Entwickler & Projektmanager",
            "role-2": "Backend-Entwickler",
            "role-3": "Backend-Entwickler",
            "role-4": "Frontend-Entwickler",
            "role-5": "Backend-Entwickler",
            "role-6": "Backend-Entwickler",
            "footer": "Ekobis © 2024"
        },
        "ar": {
            "about": "عن المشروع",
            "features": "الميزات",
            "team": "فريقنا",
            "language-button": "اللغة",
            "about-title": "عن المشروع",
            "about-text": "إكوبس هو مشروع مفتوح المصدر وغير ربحي يركز على حل مشاكل المحاسبة. يهدف هذا المشروع إلى مساعدة الشركات الصغيرة والمتوسطة والمستخدمين الفرديين على حساب الدخل والمصروفات والتوازن بدقة باستخدام صيغ بسيطة.",
            "features-title": "الميزات",
            "feature-1": "إدارة وتتبع الدخل والمصروفات",
            "feature-2": "إدارة وتتبع العملاء والموردين",
            "feature-3": "التحليل والتقارير الشهرية",
            "feature-4": "تتبع المنتجات",
            "team-title": "فريقنا",
            "role-1": "مطور خلفي ومدير المشروع",
            "role-2": "مطور خلفي",
            "role-3": "مطور خلفي",
            "role-4": "مطور واجهة أمامية",
            "role-5": "مطور خلفي",
            "role-6": "مطور خلفي",
            "footer": "إكوبس © 2024"
        }
    };

    document.querySelectorAll('.lang').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            document.querySelectorAll('[data-key]').forEach(el => {
                el.textContent = translations[lang][el.getAttribute('data-key')];
            });
        });
    });

    const darkModeToggle = document.getElementById('toggle-dark-mode');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        darkModeToggle.innerHTML = body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
});
