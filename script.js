// ============ Mr. Tarek Amer Portfolio — vanilla JS ============
(() => {
  // Footer year
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // ---------- i18n ----------
  const translations = {
    en: {
      brand_mr: "Mr.",
      nav_about: "About", nav_services: "Services", nav_certificates: "Certificates",
      nav_experience: "Experience", nav_contact: "Contact", nav_book: "Book Now",
      hero_eyebrow: "Mathematics Educator",
      hero_l1: "Teaching the", hero_l2: "beauty", hero_l3: "of mathematics,", hero_l4: "one student at a time.",
      hero_sub: "Over a decade helping students master Algebra, Geometry, Calculus, Statistics and Microeconomics — with clarity, structure, and confidence.",
      hero_cta1: "Get in touch →", hero_cta2: "View certificates",
      tag_ministerial: "Ministerial", tag_american: "American", tag_british: "British", tag_sat: "Digital SAT",
      stat_years: "Years teaching", stat_students: "Students mentored", stat_curricula: "Curricula taught", stat_success: "Exam success rate",
      about_eyebrow: "About", about_title: "A passion for teaching mathematics",
      about_p1: "I'm Tarek Amer — a math educator who believes every student can love math when it's taught with patience, precision, and the right method. I teach the Ministerial, American, and British curricula in English, with modern online tools and proven strategies.",
      about_p2: "From foundational reviews for grades 8–12 to full Digital SAT preparation and university-level Calculus, Statistics, and Microeconomics — every session is designed around clarity and confidence.",
      services_eyebrow: "What I teach", services_title: "Curricula & Courses",
      srv1_t: "School Curricula", srv1_d: "Ministerial, American, and British math — grades 8 to 12. Lessons in English, reinforced with worked examples.",
      srv2_t: "Digital SAT", srv2_d: "Complete preparation for the Digital SAT Math section with timed drills and strategy.",
      srv3_t: "Calculus", srv3_d: "University Calculus I & II — limits, derivatives, integrals, series.",
      srv4_t: "Statistics", srv4_d: "Descriptive & inferential statistics for SAT and university courses.",
      srv5_t: "Microeconomics", srv5_d: "Clear, math-first explanations of microeconomic theory and graphs.",
      srv6_t: "Group Discounts", srv6_d: "Reduced rates for small study groups — same quality, shared cost.",
      cert_eyebrow: "Credentials", cert_title: "Certificates",
      cert1: "Columbia Southern University — T.O.T (2009)",
      cert2: "INLPTA — NLP Diploma (2008)",
      cert3: "Arabian Global Academy — Personal Adviser (2010)",
      cert_hint: "Click any certificate to enlarge.",
      exp_eyebrow: "Experience", exp_title: "A journey in teaching",
      exp1_t: "University Lecturer", exp1_d: "Teaching Calculus, Statistics, and Microeconomics to undergraduates across multiple universities.",
      exp2_t: "SAT & International Curricula Specialist", exp2_d: "Preparing students for the Digital SAT and supporting American & British math curricula.",
      exp3_t: "Certified Trainer (T.O.T)", exp3_d: "Columbia Southern University — Training of Trainers, plus INLPTA NLP Diploma.",
      exp4_t: "Online Teaching Innovator", exp4_d: "Pioneering modern online teaching strategies with the best tools and methods.",
      test_eyebrow: "Student voices", test_title: "What students say",
      contact_eyebrow: "Contact", contact_title: "Let's start your journey",
      contact_sub: "Reach out for inquiries or to book your first session.",
      contact_wa: "WhatsApp: 0505864080", contact_or: "— or send a quick message —",
      form_name: "Your name", form_email: "Email or phone", form_msg: "Message", form_send: "Send message",
      footer_tag: "Mathematics Educator"
    },
    ar: {
      brand_mr: "الأستاذ",
      nav_about: "نبذة", nav_services: "الكورسات", nav_certificates: "الشهادات",
      nav_experience: "الخبرة", nav_contact: "تواصل", nav_book: "احجز الآن",
      hero_eyebrow: "مُدرّس رياضيات",
      hero_l1: "تدريس", hero_l2: "جمال", hero_l3: "الرياضيات،", hero_l4: "طالباً تلو الآخر.",
      hero_sub: "أكثر من عشر سنوات في تدريس الجبر والهندسة والتفاضل والإحصاء والاقتصاد الجزئي — بوضوح وثقة.",
      hero_cta1: "تواصل معي ←", hero_cta2: "عرض الشهادات",
      tag_ministerial: "الوزاري", tag_american: "الأمريكي", tag_british: "البريطاني", tag_sat: "Digital SAT",
      stat_years: "سنوات الخبرة", stat_students: "طالب وطالبة", stat_curricula: "مناهج", stat_success: "نسبة النجاح",
      about_eyebrow: "نبذة", about_title: "شغف بتدريس الرياضيات",
      about_p1: "أنا طارق عامر — مُدرّس رياضيات أؤمن أن كل طالب يستطيع حب الرياضيات حين تُدرَّس بصبر ودقة وبالطريقة الصحيحة. أُدرّس المناهج الوزارية والأمريكية والبريطانية باللغة الإنجليزية، باستخدام أحدث الأدوات والاستراتيجيات.",
      about_p2: "من المراجعات النهائية والتأسيس للصفوف 8 إلى 12، إلى التحضير الكامل لاختبار Digital SAT وكورسات الجامعة في التفاضل والإحصاء والاقتصاد الجزئي — كل جلسة مصممة للوضوح والثقة.",
      services_eyebrow: "ما أُدرّسه", services_title: "الكورسات والمناهج",
      srv1_t: "المناهج المدرسية", srv1_d: "شرح كورسات الرياضيات باللغة الإنجليزية للمناهج الوزارية والأمريكية والبريطانية من الصف 8 إلى 12.",
      srv2_t: "Digital SAT", srv2_d: "تأهيل كامل لاختبار Digital SAT مع تمارين زمنية واستراتيجيات.",
      srv3_t: "Calculus", srv3_d: "كورسات Calculus الجامعية: نهايات، مشتقات، تكاملات، متسلسلات.",
      srv4_t: "SAT Statistics", srv4_d: "شرح وافٍ ومتميز لكورسات الإحصاء للجامعات.",
      srv5_t: "Microeconomics", srv5_d: "شرح مبسط ودقيق لنظريات ورسومات الاقتصاد الجزئي.",
      srv6_t: "أسعار المجموعات", srv6_d: "أسعار مخفضة للمجموعات الدراسية بنفس الجودة.",
      cert_eyebrow: "المؤهلات", cert_title: "الشهادات",
      cert1: "جامعة كولومبيا الجنوبية — تدريب المدربين (2009)",
      cert2: "INLPTA — دبلوم البرمجة اللغوية العصبية (2008)",
      cert3: "الأكاديمية العربية العالمية — مستشار شخصي معتمد (2010)",
      cert_hint: "اضغط على أي شهادة لتكبيرها.",
      exp_eyebrow: "الخبرة", exp_title: "رحلة في التدريس",
      exp1_t: "محاضر جامعي", exp1_d: "تدريس Calculus والإحصاء والاقتصاد الجزئي للطلاب الجامعيين في عدة جامعات.",
      exp2_t: "متخصص SAT والمناهج الدولية", exp2_d: "تأهيل الطلاب لاختبار Digital SAT ودعم المناهج الأمريكية والبريطانية.",
      exp3_t: "مدرب معتمد (T.O.T)", exp3_d: "شهادة تدريب المدربين من جامعة كولومبيا الجنوبية، إضافة إلى دبلوم INLPTA.",
      exp4_t: "رائد التدريس الأونلاين", exp4_d: "استخدام أحدث طرق التعلم والبرامج والاستراتيجيات الحديثة.",
      test_eyebrow: "آراء الطلاب", test_title: "ماذا يقول الطلاب",
      contact_eyebrow: "تواصل", contact_title: "ابدأ رحلتك الآن",
      contact_sub: "تواصل معي للاستفسار أو لحجز أول جلسة.",
      contact_wa: "واتساب: 0505864080", contact_or: "— أو أرسل رسالة سريعة —",
      form_name: "الاسم", form_email: "البريد أو الهاتف", form_msg: "الرسالة", form_send: "إرسال",
      footer_tag: "مُدرّس رياضيات"
    }
  };

  function applyLang(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    try { localStorage.setItem('lang', lang); } catch(e){}
  }
  const savedLang = (() => { try { return localStorage.getItem('lang'); } catch(e){ return null; } })() || 'en';
  applyLang(savedLang);
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    const next = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    applyLang(next);
  });

  // ---------- Mobile nav ----------
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  const closeNav = () => {
    document.body.classList.remove('nav-open');
    navToggle?.classList.remove('active');
    navToggle?.setAttribute('aria-expanded', 'false');
    navLinks?.setAttribute('aria-hidden', 'true');
  };

  const openNav = () => {
    document.body.classList.add('nav-open');
    navToggle?.classList.add('active');
    navToggle?.setAttribute('aria-expanded', 'true');
    navLinks?.setAttribute('aria-hidden', 'false');
  };

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', e => {
      e.stopPropagation();
      document.body.classList.contains('nav-open') ? closeNav() : openNav();
    });

    navLinks.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        if (window.innerWidth <= 900) closeNav();
      });
    });

    document.addEventListener('click', e => {
      if (document.body.classList.contains('nav-open') && !e.target.closest('.nav-inner')) {
        closeNav();
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeNav();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeNav();
  });

  // ---------- Active nav on scroll ----------
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll', () => {
    const y = window.scrollY + 140;
    sections.forEach(sec => {
      if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
        navAnchors.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
        if (a && !a.classList.contains('btn')) a.classList.add('active');
      }
    });
  }, { passive: true });

  // ---------- Reveal on scroll ----------
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ---------- Count up stats ----------
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      const dur = 1600;
      const start = performance.now();
      const step = now => {
        const p = Math.min(1, (now - start) / dur);
        el.textContent = Math.round(target * easeOut(p)).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.num[data-target]').forEach(el => countObserver.observe(el));

  // ---------- Card tilt ----------
  const isTouch = matchMedia('(hover: none)').matches;
  if (!isTouch) {
    document.querySelectorAll('.tilt').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  // ---------- Lightbox ----------
  const lb = document.getElementById('lightbox');
  const lbImg = lb?.querySelector('img');
  const open = src => { if(!lb||!lbImg) return; lbImg.src = src; lb.classList.add('open'); lb.setAttribute('aria-hidden','false'); };
  const close = () => { if(!lb) return; lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); };
  document.querySelectorAll('.gallery figure img').forEach(img => {
    img.parentElement.addEventListener('click', () => open(img.src));
  });
  lb?.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // ---------- Math equation background ----------
  const canvas = document.getElementById('math-bg');
  if (canvas && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = canvas.getContext('2d');
    const equations = [
      '∫ f(x) dx', '∑ aₙ', 'π', 'e^{iπ}+1=0', '√2', 'f(x)=ax²+bx+c',
      'lim x→∞', '∂y/∂x', 'sin²θ+cos²θ=1', 'a²+b²=c²', '∇·E=ρ/ε₀',
      'P(A|B)', 'σ²', 'log(xy)=log x+log y', 'd/dx eˣ=eˣ',
      'n! = n·(n−1)!', 'F=ma', 'E=mc²', '∮ E·dℓ', 'ℝ', 'ℕ', '∞',
      'Δx', 'θ', '∏ᵢ xᵢ', '|x|', '∈', '⊂', 'Φ', 'Σ x/n'
    ];
    let particles = [];
    let w = 0, h = 0;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    function resize() {
      w = canvas.clientWidth = window.innerWidth;
      h = canvas.clientHeight = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    function spawn(initial) {
      particles = [];
      const n = Math.min(34, Math.floor(w/50));
      for (let i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * w,
          y: initial ? Math.random() * h : h + Math.random() * 100,
          text: equations[Math.floor(Math.random()*equations.length)],
          size: 14 + Math.random() * 28,
          speed: .15 + Math.random() * .45,
          drift: (Math.random() - .5) * .2,
          alpha: .08 + Math.random() * .22,
          rot: (Math.random() - .5) * .3
        });
      }
    }
    function tick() {
      ctx.clearRect(0,0,w,h);
      ctx.font = '500 1rem "Cormorant Garamond", serif';
      particles.forEach(p => {
        p.y -= p.speed; p.x += p.drift;
        if (p.y < -40) { p.y = h + 30; p.x = Math.random() * w; }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.font = `italic 500 ${p.size}px "Cormorant Garamond", serif`;
        ctx.fillText(p.text, 0, 0);
        ctx.restore();
      });
      raf = requestAnimationFrame(tick);
    }
    let raf;
    resize(); spawn(true); tick();
    window.addEventListener('resize', () => { resize(); spawn(true); });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(tick);
    });
  }
})();
