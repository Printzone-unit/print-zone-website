/* Print Zone Interactive Application Engine */

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioFilter();
  initLanguageToggle();
  initModalEngine();
  initFormHandler();
  initMobileMenu();
  initCompareSliders();
  initQuoteCalculator();
  initScrollProgressBar();
  /* ── NEW FEATURE PACK ── */
  initPageLoader();
  initBackToTop();
  initScrollReveal();
  initCounterAnimation();
  initActiveNavHighlight();
  initFaqAccordion();
});

/* 1. Portfolio Filter Engine */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* 2. Language Switcher Engine */
const i18n = {
  mr: {
    slogan: 'Think it, we print it! 🖨️',
    heroTitle: 'PRINT ZONE',
    heroSubtitle: 'कॉर्पोरेट ब्रँडिंग | फ्लेक्स प्रिंटिंग | राजकीय प्रचार | इव्हेंट ब्रँडिंग | फॅब्रिकेशन | इन्स्टॉलेशन',
    heroTagline: '"Think it, we print it!"',
    getQuote: 'कोट मिळवा →',
    viewServices: 'सेवा पहा',
    ourServices: 'आमच्या सेवा',
    whyChoose: 'प्रिंट झोन का निवडावा?',
    portfolioTitle: 'आमचे काम (पोर्टफोलिओ)',
    processTitle: 'आमची कार्य पद्धती',
    testimonialsTitle: 'ग्राहक अभिप्राय',
    contactTitle: 'संपर्क साधा',
    visitUs: 'आमचा पत्ता',
    submitBtn: 'सबमिट करा →'
  },
  hi: {
    slogan: 'Think it, we print it! 🖨️',
    heroTitle: 'PRINT ZONE',
    heroSubtitle: 'कॉर्पोरेट ब्रांडिंग | फ्लेक्स प्रिंटिंग | राजनीतिक अभियान | इवेंट ब्रांडिंग | फैब्रिकेशन | इंस्टॉलेशन',
    heroTagline: '"Think it, we print it!"',
    getQuote: 'कोट प्राप्त करें →',
    viewServices: 'सेवाएं देखें',
    ourServices: 'हमारी सेवाएं',
    whyChoose: 'प्रिंट ज़ोन क्यों चुनें?',
    portfolioTitle: 'हमारा पोर्टफोलियो',
    processTitle: 'हमारी कार्य प्रक्रिया',
    testimonialsTitle: 'ग्राहकों की राय',
    contactTitle: 'संपर्क करें',
    visitUs: 'हमारा पता',
    submitBtn: 'सबमिट करें →'
  },
  en: {
    slogan: 'Think it, we print it! 🖨️',
    heroTitle: 'PRINT ZONE',
    heroSubtitle: 'Corporate Branding | Flex Printing | Political Campaigns | Event Branding | Fabrication | Installation',
    heroTagline: '"Think it, we print it!"',
    getQuote: 'Get A Quote →',
    viewServices: 'View Services',
    ourServices: 'OUR SERVICES',
    whyChoose: 'WHY CHOOSE PRINT ZONE?',
    portfolioTitle: 'OUR PORTFOLIO',
    processTitle: 'OUR WORK PROCESS',
    testimonialsTitle: 'WHAT OUR CLIENTS SAY',
    contactTitle: 'GET IN TOUCH',
    visitUs: 'VISIT US',
    submitBtn: 'Submit Now →'
  }
};

function initLanguageToggle() {
  const langBtns = document.querySelectorAll('.lang-btn');
  
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const lang = btn.getAttribute('data-lang');
      const textMap = i18n[lang] || i18n.en;

      // Update text nodes across the UI
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (textMap[key]) {
          el.textContent = textMap[key];
        }
      });
    });
  });
}

/* 3. Modal Popup Engine */
function initModalEngine() {
  const modal = document.getElementById('quoteModal');
  const openBtns = document.querySelectorAll('.trigger-quote-modal');
  const closeBtn = document.querySelector('.modal-close');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
}

/* 4. Contact Form Handler */
function initFormHandler() {
  const forms = document.querySelectorAll('.inquiry-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Extract form values
      const formData = {
        name: form.querySelector('[name="name"]').value,
        phone: form.querySelector('[name="phone"]').value,
        service: form.querySelector('[name="service"]').value,
        message: form.querySelector('[name="message"]').value
      };

      fetch('https://formsubmit.co/ajax/printzone0501@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        alert('Thank you! Your quote request has been sent successfully. Print Zone Jalgaon team will contact you shortly.');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        const modal = document.getElementById('quoteModal');
        if (modal) modal.classList.remove('active');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('Oops! Something went wrong while sending your request. Please call us directly or try again.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
    });
  });
}

/* 5. Mobile Menu Toggle */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navbar  = document.querySelector('.navbar');
  const overlay = document.querySelector('.mobile-overlay');

  function openMenu() {
    navbar.classList.add('mobile-open');
    if (overlay) overlay.classList.add('active');
    menuBtn.querySelector('i').className = 'fa-solid fa-xmark';
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    navbar.classList.remove('mobile-open');
    if (overlay) overlay.classList.remove('active');
    menuBtn.querySelector('i').className = 'fa-solid fa-bars';
    document.body.style.overflow = '';
  }

  if (menuBtn && navbar) {
    menuBtn.addEventListener('click', () => {
      navbar.classList.contains('mobile-open') ? closeMenu() : openMenu();
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    if (overlay) overlay.addEventListener('click', closeMenu);
  }
}

/* 6. Navbar Scroll Shrink Effect */
(function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
})();

/* 7. Testimonial Auto-Scroll Carousel */
(function initTestimonialCarousel() {
  const track = document.querySelector('.testimonials-track');
  if (!track) return;

  let pos = 0;
  let paused = false;
  const speed = 0.4; // px per frame

  function getFullWidth() {
    return track.scrollWidth / 2;
  }

  track.addEventListener('mouseenter', () => paused = true);
  track.addEventListener('mouseleave', () => paused = false);

  function tick() {
    if (!paused) {
      pos += speed;
      if (pos >= getFullWidth()) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

/* 8. Before/After Compare Sliders */
function initCompareSliders() {
  // Initialize slider for ACP storefront
  setupSlider('acp-compare-wrapper', 'acp-after-wrapper', 'acp-slider-bar');
  
  // Initialize slider for Vehicle branding
  setupSlider('vehicle-compare-wrapper', 'vehicle-after-wrapper', 'vehicle-slider-bar');

  function setupSlider(containerId, afterWrapperId, sliderBarId) {
    const container = document.getElementById(containerId);
    const afterWrapper = document.getElementById(afterWrapperId);
    const sliderBar = document.getElementById(sliderBarId);

    if (!container || !afterWrapper || !sliderBar) return;

    const afterImg = afterWrapper.querySelector('img');
    
    function updateImageSize() {
      if (afterImg) {
        afterImg.style.width = `${container.offsetWidth}px`;
      }
    }

    // Set initial image width and update on resize
    updateImageSize();
    window.addEventListener('resize', updateImageSize);

    let active = false;

    function setSliderPosition(clientX) {
      const rect = container.getBoundingClientRect();
      let position = ((clientX - rect.left) / rect.width) * 100;
      
      // Bounds check
      if (position < 0) position = 0;
      if (position > 100) position = 100;

      afterWrapper.style.width = `${position}%`;
      sliderBar.style.left = `${position}%`;
    }

    // Mouse events
    container.addEventListener('mousedown', (e) => {
      active = true;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      active = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!active) return;
      setSliderPosition(e.clientX);
    });

    // Touch events for mobile responsiveness
    container.addEventListener('touchstart', (e) => {
      active = true;
      setSliderPosition(e.touches[0].clientX);
    });

    window.addEventListener('touchend', () => {
      active = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!active) return;
      setSliderPosition(e.touches[0].clientX);
    });
  }
}

/* 9. Interactive Scroll Progress Bar */
function initScrollProgressBar() {
  const scrollBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    if (scrollBar) scrollBar.style.width = p + '%';
  });
}

/* 10. Real-time Quote Estimator Calculator */
function initQuoteCalculator() {
  const productSelect = document.getElementById('calc-product');
  const widthInput = document.getElementById('calc-width');
  const heightInput = document.getElementById('calc-height');
  const qtyInput = document.getElementById('calc-qty');
  const installSelect = document.getElementById('calc-install');
  const urgencySelect = document.getElementById('calc-urgency');
  const priceOutput = document.getElementById('calc-result-price');

  if (!productSelect || !widthInput || !heightInput || !qtyInput || !installSelect || !urgencySelect || !priceOutput) return;

  function calculate() {
    const rate = parseFloat(productSelect.value);
    const w = parseFloat(widthInput.value) || 0;
    const h = parseFloat(heightInput.value) || 0;
    const qty = parseFloat(qtyInput.value) || 1;
    const install = parseFloat(installSelect.value) || 0;
    const urgency = parseFloat(urgencySelect.value) || 1;

    let basePrice = 0;
    if (rate === 8) { // Visiting Cards (per pc)
      basePrice = rate * qty;
    } else if (rate === 120) { // Rollup Standee (per pc)
      basePrice = rate * qty;
    } else { // Flex / ACP / 3D Letters (per sqft)
      basePrice = w * h * rate * qty;
    }

    const finalPrice = Math.round((basePrice + install) * urgency);
    priceOutput.textContent = finalPrice.toLocaleString('en-IN');
  }

  // Bind inputs
  [productSelect, widthInput, heightInput, qtyInput, installSelect, urgencySelect].forEach(el => {
    el.addEventListener('input', calculate);
  });

  // Run initial calculation
  calculate();
}

/* ── FEATURE PACK: New Functions ── */

/* F1. Page Loader */
function initPageLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hide'), 1500);
  });
  setTimeout(() => loader && loader.classList.add('hide'), 2500);
}

/* F2. Back to Top Button */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* F3. Scroll Reveal */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
}

/* F4. Counter Animation */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-num');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      if (!target) return;
      const steps = 50;
      const duration = 1600;
      let current = 0;
      const increment = target / steps;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) { current = target; clearInterval(interval); }
        el.textContent = Math.floor(current).toLocaleString('en-IN') + suffix;
      }, duration / steps);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* F5. Active Nav Highlight on Scroll */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('scroll-active');
          if (link.getAttribute('href') && link.getAttribute('href').includes('#' + id)) {
            link.classList.add('scroll-active');
          }
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(s => observer.observe(s));
}

/* F6. FAQ Accordion */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;
  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}
