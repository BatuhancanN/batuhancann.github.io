const siteData = {
  hero: {
    badge: "Software Developer",
    name: "Batuhan",
    surname: "CAN",
    greeting: "Merhaba, ben",
    typedStrings: [
      "Full-Stack Developer",
      "React Native & .NET",
      "Oracle & MSSQL & PostgreSQL",
      "Mobil & Masaüstü Çözümler",
    ],
    description:
      "Kurumsal yazılım çözümleri geliştiren, farklı sektörlere hızla adapte olabilen, modern teknolojilere hakim bir yazılım geliştiricisi.",
    githubUrl: "https://github.com/BatuhancanN",
    cvUrl:
      "https://drive.google.com/file/d/1FU7GeALEgkYrebNIHewMttMyPwolYAuA/view?usp=sharing",
    socialLinks: [
      {
        id: "linkedin",
        url: "https://www.linkedin.com/in/bymotorist/",
        icon: "bxl-linkedin-square",
        label: "LinkedIn",
      },
      {
        id: "instagram",
        url: "https://instagram.com/batymeister/",
        icon: "bxl-instagram-alt",
        label: "Instagram",
      },
      {
        id: "telegram",
        url: "https://ByMoToRisT.t.me",
        icon: "bxl-telegram",
        label: "Telegram",
      },
    ],
    profileImage: "/img/profile.jpeg",
  },

  about: {
    title: "Hakkımda",
    paragraphs: [
      '2002 yılında Ankara\'da doğdum. Yazılım geliştirmeye 2018\'de ilgi duymaya başladım; üniversite eğitimimle birlikte bu ilgiyi profesyonel düzeye taşıdım. <strong>Mersin Üniversitesi</strong> Bilişim Sistemleri ve Teknolojileri lisans programını <strong>3.70 ortalama</strong> ile başarıyla tamamladım.',
      "Şu anda <strong>MedData</strong>'da Oracle SQL ve React Native geliştirici olarak görev yapıyorum. Burada bir yandan React Native, Node.js ve Oracle DB kullanarak hastane bilgi sistemleri geliştirirken, bir yandan da veri tabanı yönetimi konusunda müşterilere uzaktan teknik destek sağlıyorum.",
      "C# dilinde WPF ve .NET MVC teknolojileriyle masaüstü ve web tabanlı projeler geliştirdim. Stajımda; Kotlin ve PHP ile hastanelere yönelik CRM uygulamaları geliştirdim. Ek olarak .NET ile entegre çalışan mobil çözümler ürettim.",
      "Veri tabanı tarafında ise Oracle, MSSQL, MySQL, PostgreSQL ve SQLite sistemleri üzerinde uzmanlaştım; bu sistemlerde hem uygulama geliştirme hem de destek süreçlerinde aktif rol aldım. 6 şubeli <strong>Antalya Yaşam Hastaneler Grubu</strong>'nun tek merkezi veri tabanına geçiş sürecinde; farklı sistemlerden gelen verilerin aktarımı, eşleştirilmesi ve birleştirilmesi konusunda kritik rol üstlendim.",
      "Temiz kod yazımı, nesne yönelimli programlama (OOP) ve veri tabanı normalizasyonu gibi yazılımın temel prensiplerine hâkimim. Yeni teknolojilere hızlı adapte olabilme yeteneğimle, projelerde hem teknik hem analitik açıdan etkin bir şekilde yer almaktayım.",
    ],
    stats: [
      {
        id: "work",
        icon: "bx-briefcase",
        title: "MedData",
        subtitle: "Yazılım Geliştirici",
      },
      {
        id: "education",
        icon: "bx-book-open",
        title: "3.70 GPA",
        subtitle: "Mersin Üniversitesi",
      },
      {
        id: "location",
        icon: "bx-map-pin",
        title: "Ankara",
        subtitle: "Türkiye",
      },
    ],
  },

  skills: {
    title: "Yetenekler",
    categories: [
      {
        id: "mobile",
        title: "Mobil Geliştirme",
        icon: "bx-mobile-alt",
        items: [
          { name: "React Native", icon: "bxl-react" },
          { name: "Kotlin", icon: "bxl-kotlin" },
        ],
      },
      {
        id: "desktop-web",
        title: "Masaüstü & Web",
        icon: "bx-desktop",
        items: [
          { name: "WPF", icon: "bxl-windows" },
          { name: ".NET MVC", icon: "bx-globe" },
          { name: "Windows Forms", icon: "bxs-window-alt" },
          { name: "Delphi VCL", icon: "bxs-window-alt" },
        ],
      },
      {
        id: "backend",
        title: "Backend",
        icon: "bx-server",
        items: [
          { name: "PHP", icon: "bxl-php" },
          { name: "Node.js", icon: "bxl-nodejs" },
          { name: "Delphi", icon: "bxs-window-alt" },
          { name: ".NET", icon: "bxl-microsoft" },
        ],
      },
      {
        id: "database",
        title: "Veritabanı",
        icon: "bx-data",
        items: [
          { name: "OracleDB", icon: "bxs-data" },
          { name: "MSSQL", icon: "bx-data" },
          { name: "MySQL", icon: "bxs-data" },
          { name: "PostgreSQL", icon: "bxs-data" },
        ],
      },
      {
        id: "other",
        title: "Diğer",
        icon: "bx-palette",
        items: [
          { name: "Adobe PS & AI", icon: "bxl-adobe" },
          { name: "İHA-1 Pilot Lisansı", icon: "bxs-plane-alt" },
        ],
      },
    ],
  },

  projects: {
    title: "Projeler",
    items: [
      {
        id: "ecare",
        title: "MedData e-Care",
        tag: "React Native",
        icon: "bx-plus-medical",
        description:
          "MedData bünyesinde, React Native ve Expo teknolojileri kullanılarak tamamen sıfırdan geliştirilmiş bir mobil uygulama projesini tek başıma hayata geçirdim. Uygulama, TypeScript ile modern yazılım standartlarına uygun, güvenilir ve ölçeklenebilir bir mimariyle geliştirildi. Hastaların laboratuvar ve radyoloji sonuçlarını görüntüleyebildiği, hastane hakkında detaylı bilgilere erişebildiği ve randevu oluşturabildiği entegre bir mobil sistem sunmaktadır.",
        link: "https://www.linkedin.com/posts/bymotorist_reactnative-mobiledevelopment-healthtech-ugcPost-7430527527011422208-FUot?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcnJgYBv0_iQ2NIXrwm9G7f8MCpAoQKgqc",
        linkText: "Detayları Gör",
        linkIcon: "bx-link-external",
        featured: true,
      },
      {
        id: "personel",
        title: "Personel Takip ve Yönetim Sistemi",
        tag: ".NET MVC / PHP / Kotlin",
        icon: "bx-id-card",
        description:
          ".NET MVC, PHP ve Kotlin teknolojilerini kullanarak geliştirdiğim bu projede, mobil QR kod tarayıcı ve web tabanlı yönetim paneliyle personel takibi için tam çözüm sunuyorum.",
        link: "https://github.com/BatuhancanN/Personel_Takip_Yonetim_Sistemi",
        linkText: "GitHub",
        linkIcon: "bxl-github",
        featured: false,
      },
      {
        id: "crm",
        title: "MedData CRM Mobil",
        tag: "Kotlin",
        icon: "bx-plus-medical",
        description:
          "MedData şirketindeki staj sürecimde Kotlin dili ile geliştirdiğim MedData HBYS ile entegre çalışabilen, modern tasarımlara sahip hasta takip yazılımıdır. API tarafında PHP, veri tabanı tarafında Oracle teknolojilerini kullandım.",
        link: "https://github.com/BatuhancanN/MedData_CRM_Kotlin",
        linkText: "GitHub",
        linkIcon: "bxl-github",
        featured: false,
      },
      {
        id: "stok",
        title: "Stok Yönetim Sistemi",
        tag: "C# WPF",
        icon: "bxs-package",
        description:
          "Üniversite 3. sınıfta ödev olarak yaptığım bu projede, C# WPF ve MsSQL Server teknolojilerini kullandım. Oldukça kullanışlı olan bu proje sayesinde tüm mal alımı, satımı, tedarikçi ve müşteri yönetimi işlerinizi yönetebilirsiniz.",
        link: "https://github.com/BatuhancanN/StockManagementApplication-WPF",
        linkText: "GitHub",
        linkIcon: "bxl-github",
        featured: false,
      },
      {
        id: "rentacar",
        title: "Oto Kiralama Acente Otomasyonu",
        tag: "C# WPF",
        icon: "bxs-car-garage",
        description:
          "Üniversite 2. sınıfta ödev olarak yaptığım bu projede, C# WPF ve MsSQL Server teknolojilerini kullandım. Bu uygulama, rentacar firmalarının tüm ihtiyaçlarını karşılayabilecek yetkinliktedir ve oldukça basit bir arayüze sahiptir.",
        link: "https://github.com/BatuhancanN/RentACar-WPFApplication",
        linkText: "GitHub",
        linkIcon: "bxl-github",
        featured: false,
      },
    ],
  },

  footer: {
    copyright: "© 2026 Batuhan CAN. Tüm hakları saklıdır.",
  },
};

export default siteData;
