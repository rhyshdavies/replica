document.addEventListener('DOMContentLoaded', () => {

  // Announcement bar close
  const announcementBar = document.getElementById('announcementBar');
  const announcementClose = document.getElementById('announcementClose');
  if (announcementClose) {
    announcementClose.addEventListener('click', () => {
      announcementBar.classList.add('hidden');
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // Testimonials carousel
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('tnPrev');
  const nextBtn = document.getElementById('tnNext');
  let currentSlide = 0;

  function getVisibleCards() {
    const width = window.innerWidth;
    if (width <= 600) return 1;
    if (width <= 968) return 1.25;
    return 3;
  }

  function getMaxSlide() {
    const cards = track.children.length;
    const visible = getVisibleCards();
    return Math.max(0, Math.ceil(cards - visible));
  }

  function updateCarousel() {
    if (!track) return;
    const card = track.children[0];
    if (!card) return;
    const cardWidth = card.offsetWidth + 24; // gap
    track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = Math.max(0, currentSlide - 1);
      updateCarousel();
    });
    nextBtn.addEventListener('click', () => {
      currentSlide = Math.min(getMaxSlide(), currentSlide + 1);
      updateCarousel();
    });
  }

  window.addEventListener('resize', () => {
    currentSlide = Math.min(currentSlide, getMaxSlide());
    updateCarousel();
  });

  // Scroll-based fade-in animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedSections = [
    '.trust-bar',
    '.showcase',
    '.features',
    '.feature-icons',
    '.templates',
    '.testimonials',
    '.final-cta'
  ];

  animatedSections.forEach(selector => {
    const el = document.querySelector(selector);
    if (el) {
      el.classList.add('fade-in');
      observer.observe(el);
    }
  });

  // Individual feature cards animation
  document.querySelectorAll('.feature-card, .template-card, .feature-icon-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Hero tabs interactivity
  document.querySelectorAll('.hero-tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hero-tabs button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Showcase steps interactivity
  document.querySelectorAll('.showcase-step').forEach(step => {
    step.addEventListener('mouseenter', () => {
      document.querySelectorAll('.showcase-step').forEach(s => {
        s.classList.remove('active');
        s.classList.add('dim');
      });
      step.classList.remove('dim');
      step.classList.add('active');
    });
  });

  // Header shrink on scroll
  const header = document.getElementById('header');
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header.style.boxShadow = '0 1px 8px rgba(0,0,0,0.04)';
    } else {
      header.style.boxShadow = 'none';
    }
    lastScrollY = scrollY;
  }, { passive: true });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
        }
      }
    });
  });

  // Animate stat numbers on scroll
  const statNums = document.querySelectorAll('.stat-num');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => statsObserver.observe(el));

  // Chart bars animation on scroll
  const chartBars = document.querySelectorAll('.chart-bar');
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.chart-bar');
        bars.forEach((bar, i) => {
          const targetHeight = bar.style.height;
          bar.style.height = '0%';
          setTimeout(() => {
            bar.style.height = targetHeight;
          }, i * 150);
        });
        chartObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const fmChart = document.querySelector('.fm-chart');
  if (fmChart) chartObserver.observe(fmChart);
});
