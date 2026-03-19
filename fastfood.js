(() => {
  "use strict";

  const STORAGE_KEY = "ff_cart_v1";

  const MENU_ITEMS = [
    {
      id: "classic-beef-burger",
      name: "Classic Beef Burger",
      category: "Burgers",
      price: 12.99,
      keyword: "gourmet burger",
      description: "Char-grilled beef, cheddar melt, crisp lettuce, and a smoky house sauce.",
      healthSnapshot: {
        calories: 540,
        nutrients: [
          { label: "Protein", value: "28g" },
          { label: "Fiber", value: "4g" },
          { label: "Vitamins", value: "B12 + Vitamin A" },
          { label: "Iron", value: "Supportive levels" }
        ],
        claim:
          "Our char-grilled, grass-fed style patty brings protein and key micronutrients that support energy metabolism.",
        tags: ["🌾 High Protein", "🫀 Heart-Healthy", "💪 Energy Boost", "🥦 Antioxidant-Rich"]
      }
    },
    {
      id: "double-smash-burger",
      name: "Double Smash Burger",
      category: "Burgers",
      price: 15.49,
      keyword: "smash burger",
      description: "Two crispy-edged patties, caramelized onions, pickles, and golden garlic mayo.",
      healthSnapshot: {
        calories: 690,
        nutrients: [
          { label: "Protein", value: "42g" },
          { label: "Fiber", value: "5g" },
          { label: "Potassium", value: "Onion & greens contribution" }
        ],
        claim:
          "A hearty smash with satisfying protein and fiber—built to keep you full longer after the first bite.",
        tags: ["🌾 High Protein", "🥬 Fiber-Friendly", "⚡ Satisfying Crunch"]
      }
    },
    {
      id: "spicy-chicken-burger",
      name: "Spicy Chicken Burger",
      category: "Burgers",
      price: 13.75,
      keyword: "spicy chicken burger",
      description: "Crispy chicken, pepper relish, cooling slaw, and a fiery but balanced kick.",
      healthSnapshot: {
        calories: 610,
        nutrients: [
          { label: "Protein", value: "36g" },
          { label: "Fiber", value: "3g" },
          { label: "Vitamins", value: "A + C (from slaw)" }
        ],
        claim:
          "Leaner chicken-style protein plus colorful veggies provide key vitamins that support immune function.",
        tags: ["💪 Energy Boost", "🍊 Vitamin-Rich", "🔥 Flavor Heat Balance"]
      }
    },
    {
      id: "charcoal-wings",
      name: "Charcoal Wings (10pc)",
      category: "Chicken",
      price: 18.5,
      keyword: "crispy fried chicken wings",
      description: "Smoky charcoal glaze with a crispy bite. Choose mild or extra hot.",
      healthSnapshot: {
        calories: 740,
        nutrients: [
          { label: "Protein", value: "52g" },
          { label: "Sodium", value: "Seasoned (balanced portions)" },
          { label: "B Vitamins", value: "Energy support" }
        ],
        claim:
          "Protein-forward wings to fuel your day. Pair with sides for better fiber balance.",
        tags: ["🌾 High Protein", "💪 Energy Boost", "🫀 Moderation Ready"]
      }
    },
    {
      id: "crispy-chicken-tenders",
      name: "Crispy Chicken Tenders",
      category: "Chicken",
      price: 14.25,
      keyword: "crispy chicken tenders",
      description: "Golden tenders with a crunchy coating and a tangy dipping sauce.",
      healthSnapshot: {
        calories: 560,
        nutrients: [
          { label: "Protein", value: "34g" },
          { label: "Fiber", value: "2g" },
          { label: "Vitamins", value: "B complex" }
        ],
        claim:
          "A protein hit with a satisfying crunch—ideal when you pair with fiber-rich sides like loaded salad fries.",
        tags: ["🌾 High Protein", "💪 Energy Boost"]
      }
    },
    {
      id: "grilled-chicken-sandwich",
      name: "Grilled Chicken Sandwich",
      category: "Chicken",
      price: 12.95,
      keyword: "grilled chicken sandwich",
      description: "Grilled chicken, yogurt-herb sauce, tomato, and crunchy greens.",
      healthSnapshot: {
        calories: 480,
        nutrients: [
          { label: "Protein", value: "33g" },
          { label: "Fiber", value: "4g" },
          { label: "Vitamins", value: "K + C (greens & tomato)" }
        ],
        claim:
          "A balanced chicken option with protein and produce—supporting overall wellness without sacrificing satisfaction.",
        tags: ["🫀 Heart-Healthy", "🥦 Antioxidant-Rich", "🥬 Fiber-Friendly"]
      }
    },
    {
      id: "loaded-fries",
      name: "Loaded Fries (Cheese + Bacon)",
      category: "Sides",
      price: 7.95,
      keyword: "loaded fries",
      description: "Crispy fries topped with rich cheese, smoky bacon bits, and chives.",
      healthSnapshot: {
        calories: 520,
        nutrients: [
          { label: "Protein", value: "18g" },
          { label: "Fiber", value: "3g" },
          { label: "Calcium", value: "From cheese" }
        ],
        claim:
          "Cheesy comfort with protein contribution. Keep it balanced by adding a fresh side salad when available.",
        tags: ["💪 Energy Boost", "🥦 Antioxidant-Rich"]
      }
    },
    {
      id: "garlic-parm-fries",
      name: "Garlic Parm Fries",
      category: "Sides",
      price: 6.75,
      keyword: "garlic parmesan fries",
      description: "Garlic butter aroma, parmesan dust, and a squeeze of lemon zest.",
      healthSnapshot: {
        calories: 430,
        nutrients: [
          { label: "Protein", value: "12g" },
          { label: "Fiber", value: "3g" },
          { label: "Vitamin C", value: "Lemon zest boost" }
        ],
        claim:
          "A flavorful side that pairs well with lean mains. Lemon zest adds a small vitamin C lift for freshness.",
        tags: ["🥦 Antioxidant-Rich", "⚡ Zesty Boost"]
      }
    },
    {
      id: "fresh-slaw-cup",
      name: "Crispy Slaw Cup",
      category: "Sides",
      price: 5.25,
      keyword: "fresh coleslaw",
      description: "Crunchy slaw with a tangy dressing for balance between bites.",
      healthSnapshot: {
        calories: 170,
        nutrients: [
          { label: "Fiber", value: "5g" },
          { label: "Vitamins", value: "K + C" },
          { label: "Hydration", value: "Veggie moisture" }
        ],
        claim:
          "A crisp, fiber-friendly side that supports digestion and makes richer meals feel lighter.",
        tags: ["🥬 Fiber-Friendly", "🍊 Vitamin-Rich", "🌿 Light Choice"]
      }
    },
    {
      id: "sparkling-lemonade",
      name: "Sparkling Lemonade",
      category: "Drinks",
      price: 4.75,
      keyword: "sparkling lemonade",
      description: "Bright lemon, crisp fizz, and a cold finish.",
      healthSnapshot: {
        calories: 120,
        nutrients: [
          { label: "Vitamin C", value: "Lemon contribution" },
          { label: "Hydration", value: "Refreshing hydration" }
        ],
        claim:
          "A refreshing, lighter drink option that helps cut through salty flavors while delivering a touch of vitamin C.",
        tags: ["🍋 Vitamin-Rich", "🌿 Light Choice", "💧 Hydration"]
      }
    },
    {
      id: "cola-classic",
      name: "Cola Classic",
      category: "Drinks",
      price: 3.95,
      keyword: "cola soda",
      description: "Classic cola with an ice-cold bite.",
      healthSnapshot: {
        calories: 160,
        nutrients: [{ label: "Energy", value: "Quick boost" }],
        claim:
          "A classic treat for cravings. Pair with water when you want to keep hydration in check.",
        tags: ["⚡ Energy Boost", "💛 Classic Crave"]
      }
    },
    {
      id: "iced-tea-peach",
      name: "Iced Tea · Peach",
      category: "Drinks",
      price: 4.25,
      keyword: "iced tea peach",
      description: "Smooth iced tea with peach aroma and a clean finish.",
      healthSnapshot: {
        calories: 110,
        nutrients: [
          { label: "Antioxidants", value: "Tea polyphenols" },
          { label: "Hydration", value: "Cold & refreshing" }
        ],
        claim:
          "Tea-forward refresh with antioxidant compounds that support balanced everyday wellness.",
        tags: ["🥦 Antioxidant-Rich", "💧 Hydration", "🌿 Light Choice"]
      }
    },
    {
      id: "cheesy-pepperoni-pizza-combo",
      name: "Cheesy Pepperoni Pizza Combo",
      category: "Combos",
      price: 16.99,
      keyword: "pepperoni pizza",
      description: "A cheesy pepperoni slice + fries + sparkling drink combo.",
      healthSnapshot: {
        calories: 980,
        nutrients: [
          { label: "Protein", value: "38g" },
          { label: "Fiber", value: "5g" },
          { label: "Calcium", value: "Cheese contribution" }
        ],
        claim:
          "A satisfying combo with protein and fiber support—ideal for sharing or powering through game night.",
        tags: ["🌾 High Protein", "💪 Energy Boost", "🫀 Balanced Combo"]
      }
    },
    {
      id: "margherita-pizza-combo",
      name: "Margherita Pizza Combo",
      category: "Combos",
      price: 15.75,
      keyword: "margherita pizza",
      description: "Stone-baked margherita slice + slaw cup + lemonade.",
      healthSnapshot: {
        calories: 820,
        nutrients: [
          { label: "Fiber", value: "6g" },
          { label: "Vitamins", value: "Tomato antioxidants + C" },
          { label: "Protein", value: "26g" }
        ],
        claim:
          "A classic pizza option paired with veggies for a more balanced feel and antioxidant support.",
        tags: ["🥦 Antioxidant-Rich", "🥬 Fiber-Friendly", "🍅 Tomato Power"]
      }
    }
  ];

  const HERO_SLIDES = [
    { keyword: "gourmet burger" },
    { keyword: "pepperoni pizza" },
    { keyword: "crispy fried chicken" }
  ];

  const TESTIMONIALS = [
    {
      quote:
        "That first bite felt like the opening scene of a movie. Crispy, juicy, and somehow still super fresh.",
      name: "Amina R.",
      meta: "Verified pickup customer"
    },
    {
      quote:
        "The pizza is unreal. It arrives hot, the crust has that perfect crunch, and the sauces taste homemade.",
      name: "Jordan K.",
      meta: "Weekly repeat order"
    },
    {
      quote:
        "Fast delivery without the greasy aftermath. The loaded fries are dangerously good.",
      name: "Sofia M.",
      meta: "Delivery fan"
    }
  ];

  const currency = new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" });

  // Pixabay requires an API key for search. If you leave this blank, the site will
  // gracefully fall back to Unsplash so the UI keeps working.
  // Put your key here (e.g. from https://pixabay.com/api/docs/ ).
  const PIXABAY_API_KEY = "";

  const PIXABAY_API_URL = "https://pixabay.com/api/";
  const PLACEHOLDER_IMG =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="520"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#0d0d0d"/></linearGradient></defs><rect width="800" height="520" fill="url(#g)"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#bdb6a7" font-family="Poppins,Arial" font-size="18">Loading food image...</text></svg>`
    );

  function unsplashUrl(keyword, w = 800, h = 600) {
    const q = String(keyword)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "+");
    return `https://source.unsplash.com/${w}x${h}/?${encodeURIComponent(q).replace(/%2B/g, "+")}`;
  }

  function formatPrice(value) {
    return currency.format(Number(value));
  }

  const imageUrlCache = new Map(); // key: `${keyword}|${w}x${h}`

  async function pixabayUrlForKeyword(keyword, w, h) {
    const k = `${keyword}|${w}x${h}`;
    if (imageUrlCache.has(k)) return imageUrlCache.get(k);

    const res = await fetch(
      `${PIXABAY_API_URL}?key=${encodeURIComponent(PIXABAY_API_KEY)}&q=${encodeURIComponent(
        keyword
      )}&image_type=photo&safesearch=true&per_page=3&orientation=horizontal`
    );
    if (!res.ok) throw new Error(`Pixabay request failed (${res.status})`);
    const data = await res.json();
    const hit = data?.hits?.[0];
    const url = hit?.largeImageURL || hit?.webformatURL;
    if (!url) throw new Error("No Pixabay image found");
    imageUrlCache.set(k, url);
    return url;
  }

  async function imageUrlForKeyword(keyword, w, h) {
    if (!PIXABAY_API_KEY) return unsplashUrl(keyword, w, h);
    try {
      return await pixabayUrlForKeyword(keyword, w, h);
    } catch {
      // Keep things working even if Pixabay rate-limits or has no results.
      return unsplashUrl(keyword, w, h);
    }
  }

  function readCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return {};
      return parsed;
    } catch {
      return {};
    }
  }

  function writeCart(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }

  let cart = readCart();

  function cartCount() {
    return Object.values(cart).reduce((sum, qty) => sum + (Number(qty) || 0), 0);
  }

  function cartSubtotal() {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const item = MENU_ITEMS.find((m) => m.id === id);
      if (!item) return sum;
      return sum + (Number(qty) || 0) * Number(item.price);
    }, 0);
  }

  function addToCart(id, qty = 1) {
    const item = MENU_ITEMS.find((m) => m.id === id);
    if (!item) return;
    cart[id] = (Number(cart[id]) || 0) + qty;
    writeCart(cart);
    renderCartDrawer();
    renderOrderPageIfActive();
    renderCartBadge();
  }

  function setCartQty(id, nextQty) {
    if (nextQty <= 0) delete cart[id];
    else cart[id] = nextQty;
    writeCart(cart);
    renderCartDrawer();
    renderOrderPageIfActive();
    renderCartBadge();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // ---------- Routing ----------
  const routeSections = Array.from(document.querySelectorAll("[data-route]"));
  const routeLinks = Array.from(document.querySelectorAll("[data-route-link]"));

  function setActiveNav(route) {
    routeLinks.forEach((a) => {
      const isActive = a.getAttribute("href") === `#${route}`;
      a.classList.toggle("is-active", isActive);
    });
  }

  function showRoute(route) {
    const normalized = String(route || "").replace("#", "");
    const target = routeSections.find((s) => s.dataset.route === normalized);
    if (!target) return;

    routeSections.forEach((s) => {
      if (s === target) s.classList.remove("ff-route--hidden");
      else s.classList.add("ff-route--hidden");
    });

    setActiveNav(normalized);
    triggerRevealIn(target);

    if (normalized === "menu") {
      // Ensure filters visually match current UI state.
      renderMenuGrid();
    }
    if (normalized === "order") {
      renderOrderPage();
    }

    // Smoothly bring the selected route into view.
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function getRouteFromHash() {
    const hash = window.location.hash || "#home";
    return hash.replace("#", "") || "home";
  }

  // ---------- Reveal Animations ----------
  let revealObserver = null;
  function observeReveal() {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!els.length) return;

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12 }
      );
    }

    els.forEach((el) => {
      if (el.classList.contains("is-visible")) return;
      revealObserver.observe(el);
    });
  }

  function triggerRevealIn(root) {
    // For route changes: make sure reveal items still animate.
    const els = Array.from(root.querySelectorAll(".reveal"));
    els.forEach((el) => {
      if (el.classList.contains("is-visible")) return;
      // If it is already in view, mark it as visible.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) el.classList.add("is-visible");
    });
  }

  // ---------- Header ----------
  const headerEl = document.querySelector("[data-ff-header]");
  const navToggle = document.getElementById("navToggle");
  const navLinksEl = document.querySelector("[data-ff-navlinks]");

  function openNav() {
    if (!navToggle || !navLinksEl) return;
    navToggle.setAttribute("aria-expanded", "true");
    navLinksEl.style.display = "flex";
  }

  function closeNav() {
    if (!navToggle || !navLinksEl) return;
    navToggle.setAttribute("aria-expanded", "false");
    navLinksEl.style.display = "none";
  }

  function wireHeader() {
    if (navToggle && navLinksEl) {
      closeNav();
      navToggle.addEventListener("click", () => {
        const expanded = navToggle.getAttribute("aria-expanded") === "true";
        if (expanded) closeNav();
        else openNav();
      });

      navLinksEl.addEventListener("click", (e) => {
        const t = e.target;
        if (!(t instanceof HTMLElement)) return;
        if (!t.matches('a.ff-navlink')) return;
        closeNav();
      });
    }

    window.addEventListener("scroll", () => {
      if (!headerEl) return;
      headerEl.classList.toggle("is-scrolled", window.scrollY > 8);
    });
  }

  function animateNavLinksIn() {
    const isMobile = window.matchMedia("(max-width: 899px)").matches;
    const links = routeLinks;
    links.forEach((a, idx) => {
      a.style.transitionDelay = isMobile ? `${idx * 90}ms` : "0ms";
      a.classList.add("animated-in");
    });
  }

  // ---------- Hero Slideshow + Parallax ----------
  const heroImageEl = document.getElementById("heroImage");
  const heroMediaEl = document.querySelector("[data-ff-hero-media]");
  const heroDots = Array.from(document.querySelectorAll("[data-hero-dot]"));
  let heroIndex = 0;
  let heroSlideReqId = 0;

  async function setHeroSlide(index) {
    heroIndex = Math.max(0, Math.min(index, HERO_SLIDES.length - 1));
    const slide = HERO_SLIDES[heroIndex];
    if (!heroImageEl || !slide) return;

    const reqId = ++heroSlideReqId;
    heroImageEl.src = PLACEHOLDER_IMG;
    try {
      const url = await imageUrlForKeyword(slide.keyword, 1200, 800);
      if (reqId !== heroSlideReqId) return; // stale request
      heroImageEl.src = url;
    } catch {
      // If something goes wrong, keep a placeholder.
    }

    heroDots.forEach((dot) => {
      const dotIdx = Number(dot.getAttribute("data-hero-dot"));
      const active = dotIdx === heroIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", String(active));
    });
  }

  function wireHero() {
    setHeroSlide(0);

    heroDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = Number(dot.getAttribute("data-hero-dot"));
        setHeroSlide(idx);
      });
    });

    let timer = window.setInterval(() => {
      setHeroSlide(heroIndex + 1);
    }, 5200);

    // Pause when user interacts.
    heroMediaEl?.addEventListener("mouseenter", () => window.clearInterval(timer));
    heroMediaEl?.addEventListener("mouseleave", () => {
      timer = window.setInterval(() => setHeroSlide(heroIndex + 1), 5200);
    });

    if (heroMediaEl) {
      let raf = 0;
      heroMediaEl.addEventListener("mousemove", (e) => {
        const rect = heroMediaEl.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const frame = heroMediaEl.querySelector(".ff-hero-media-frame");
          if (!frame) return;
          frame.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
        });
      });

      heroMediaEl.addEventListener("mouseleave", () => {
        const frame = heroMediaEl.querySelector(".ff-hero-media-frame");
        if (!frame) return;
        frame.style.transform = "translate3d(0,0,0)";
      });

      // Scroll parallax (subtle).
      window.addEventListener("scroll", () => {
        const frame = heroMediaEl.querySelector(".ff-hero-media-frame");
        if (!frame) return;
        const rect = heroMediaEl.getBoundingClientRect();
        const t = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
        frame.style.transform = `translate3d(0, ${t * -8}px, 0)`;
      });
    }
  }

  // ---------- Testimonials ----------
  const testimonialCardEl = document.getElementById("testimonialCard");
  const testimonialDotsEl = document.getElementById("testimonialDots");
  let testimonialIndex = 0;

  function renderTestimonial() {
    const t = TESTIMONIALS[testimonialIndex];
    if (!t || !testimonialCardEl) return;

    testimonialCardEl.innerHTML = `
      <p class="ff-quote">
        <span class="ff-quote-mark" aria-hidden="true">“</span>
        ${escapeHtml(t.quote)}
      </p>
      <div class="ff-testimonial-name">${escapeHtml(t.name)} <span class="ff-muted">· ${escapeHtml(t.meta)}</span></div>
    `;

    if (testimonialDotsEl) {
      testimonialDotsEl.innerHTML = "";
      TESTIMONIALS.forEach((_, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.setAttribute("aria-label", `Testimonial ${idx + 1}`);
        btn.className = idx === testimonialIndex ? "is-active" : "";
        btn.addEventListener("click", () => {
          testimonialIndex = idx;
          renderTestimonial();
        });
        testimonialDotsEl.appendChild(btn);
      });
    }
  }

  function wireTestimonials() {
    renderTestimonial();
    window.setInterval(() => {
      testimonialIndex = (testimonialIndex + 1) % TESTIMONIALS.length;
      renderTestimonial();
    }, 5400);
  }

  // ---------- Menu Rendering ----------
  const menuGridEl = document.getElementById("menuGrid");
  const featuredGridEl = document.getElementById("featuredGrid");
  const searchInputEl = document.getElementById("menuSearch");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const categoryTabsEl = document.getElementById("categoryTabs");

  const state = {
    category: "Burgers",
    search: ""
  };

  function matchSearch(item, query) {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    const hay = `${item.name} ${item.description} ${item.keyword}`.toLowerCase();
    return hay.includes(q);
  }

  function buildMealCard(item, { showAddToCart = true } = {}) {
    const health = item.healthSnapshot;
    const healthId = `health-${item.id}`;
    const price = formatPrice(item.price);

    const nutrientLis = Array.isArray(health.nutrients)
      ? health.nutrients.map((n) => `<li>${escapeHtml(n.label)}: <strong style="color:var(--text);font-weight:600;">${escapeHtml(n.value)}</strong></li>`).join("")
      : "";

    const tags = Array.isArray(health.tags)
      ? health.tags.map((t) => `<span class="ff-pill">${escapeHtml(t)}</span>`).join("")
      : "";

    return `
      <article class="ff-meal-card reveal">
        <div class="ff-meal-media">
          <button
            class="ff-health-badge"
            type="button"
            data-health-toggle="${escapeHtml(item.id)}"
            aria-expanded="false"
            aria-controls="${healthId}"
            title="Health Snapshot"
          >
            🌿
          </button>
          <img
            class="ff-meal-img ff-img--loading"
            src="${PLACEHOLDER_IMG}"
            data-ff-img-keyword="${escapeHtml(item.keyword)}"
            data-ff-img-w="800"
            data-ff-img-h="520"
            alt="${escapeHtml(item.name)}"
            loading="lazy"
          />
        </div>

        <div class="ff-meal-body">
          <div class="ff-meal-top">
            <h3 class="ff-meal-name">${escapeHtml(item.name)}</h3>
            <div class="ff-meal-price">${escapeHtml(price)}</div>
          </div>

          <p class="ff-meal-desc">${escapeHtml(item.description)}</p>

          <div class="ff-meal-actions">
            ${showAddToCart ? `<button type="button" class="ff-btn ff-btn-gold" data-add-to-cart="${escapeHtml(item.id)}">Add to Cart</button>` : ""}
          </div>

          <div class="ff-health-panel" id="${healthId}" data-health-panel hidden>
            <div class="ff-health-title">
              <span class="leaf ff-leaf" aria-hidden="true">🌿</span>
              <strong style="letter-spacing:0.02em;">Health Snapshot</strong>
              <span class="ff-muted" style="font-size:0.86rem;">~${escapeHtml(health.calories)} kcal</span>
            </div>

            <div class="ff-health-grid">
              <div class="ff-health-kpi">
                <span class="ff-pill">Calories: ~${escapeHtml(health.calories)} kcal</span>
              </div>

              <ul class="ff-nutrient-list">
                ${nutrientLis}
              </ul>

              <p class="ff-health-claim">${escapeHtml(health.claim)}</p>

              <div style="display:flex;flex-wrap:wrap;gap:0.55rem;margin-top:0.4rem;">
                ${tags}
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  async function hydrateImages(root = document) {
    const imgs = Array.from(root.querySelectorAll("img[data-ff-img-keyword]"));
    if (!imgs.length) return;

    const jobs = imgs.map(async (imgEl) => {
      if (imgEl.dataset.ffImgLoaded === "1") return;
      imgEl.dataset.ffImgLoaded = "1";

      const keyword = imgEl.getAttribute("data-ff-img-keyword") || "";
      const w = Number(imgEl.getAttribute("data-ff-img-w") || "800");
      const h = Number(imgEl.getAttribute("data-ff-img-h") || "520");

      try {
        const url = await imageUrlForKeyword(keyword, w, h);
        imgEl.src = url;
      } catch {
        // Fallback handled by imageUrlForKeyword (or placeholder remains).
      } finally {
        imgEl.classList.remove("ff-img--loading");
      }
    });

    await Promise.allSettled(jobs);
  }

  function renderFeatured() {
    if (!featuredGridEl) return;
    const featuredIds = ["classic-beef-burger", "cheesy-pepperoni-pizza-combo", "loaded-fries", "charcoal-wings"];
    const items = featuredIds.map((id) => MENU_ITEMS.find((m) => m.id === id)).filter(Boolean);
    featuredGridEl.innerHTML = items.map((item) => buildMealCard(item)).join("");
    triggerRevealIn(featuredGridEl);
    observeReveal();
    hydrateImages(featuredGridEl);
  }

  function filteredMenuItems() {
    return MENU_ITEMS.filter((item) => {
      if (item.category !== state.category) return false;
      if (!matchSearch(item, state.search)) return false;
      return true;
    });
  }

  function renderMenuGrid() {
    if (!menuGridEl) return;
    const items = filteredMenuItems();

    menuGridEl.classList.add("ff-fade-swap");
    requestAnimationFrame(() => {
      menuGridEl.innerHTML = "";
      if (!items.length) {
        menuGridEl.innerHTML = `<div style="grid-column:1/-1;color:var(--muted);padding:1rem;">No meals match your filter. Try a different category or search.</div>`;
      } else {
        menuGridEl.innerHTML = items.map((item) => buildMealCard(item)).join("");
      }
      menuGridEl.classList.add("in");
      window.setTimeout(() => {
        menuGridEl.classList.remove("ff-fade-swap");
        menuGridEl.classList.remove("in");
      }, 320);
      triggerRevealIn(menuGridEl);
      observeReveal();
      hydrateImages(menuGridEl);
    });
  }

  function wireMenuControls() {
    if (categoryTabsEl) {
      categoryTabsEl.addEventListener("click", (e) => {
        const t = e.target;
        if (!(t instanceof HTMLElement)) return;
        if (!t.matches(".ff-tab")) return;

        const nextCategory = t.getAttribute("data-category");
        if (!nextCategory) return;
        state.category = nextCategory;

        Array.from(categoryTabsEl.querySelectorAll(".ff-tab")).forEach((btn) => {
          const isActive = btn === t;
          btn.classList.toggle("is-active", isActive);
          btn.setAttribute("aria-selected", String(isActive));
        });

        renderMenuGrid();
      });
    }

    if (searchInputEl) {
      searchInputEl.addEventListener("input", () => {
        state.search = searchInputEl.value || "";
        renderMenuGrid();
      });
    }

    if (searchClearBtn && searchInputEl) {
      searchClearBtn.addEventListener("click", () => {
        searchInputEl.value = "";
        state.search = "";
        renderMenuGrid();
        searchInputEl.focus();
      });
    }
  }

  // Health panel toggle + Add to cart (event delegation)
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;

    if (t.matches("[data-add-to-cart]")) {
      const id = t.getAttribute("data-add-to-cart");
      addToCart(id, 1);
      showToast(`Added ${MENU_ITEMS.find((m) => m.id === id)?.name ?? "item"} to cart`);
    }

    if (t.matches("[data-health-toggle]")) {
      const id = t.getAttribute("data-health-toggle");
      if (!id) return;
      const healthBtn = t;
      const healthId = `health-${id}`;
      const panel = document.getElementById(healthId);
      if (!panel) return;

      // Close all other panels first.
      const allPanels = Array.from(document.querySelectorAll("[data-health-panel]"));
      allPanels.forEach((p) => {
        if (p === panel) return;
        p.hidden = true;
        const toggleValue = p.id.replace("health-", "");
        const badge = document.querySelector(`[data-health-toggle="${toggleValue}"]`);
        if (badge) badge.setAttribute("aria-expanded", "false");
      });

      const willOpen = panel.hidden;
      panel.hidden = !willOpen;
      healthBtn.setAttribute("aria-expanded", String(willOpen));
    }
  });

  // ---------- Cart Drawer ----------
  const cartDrawerEl = document.getElementById("cartDrawer");
  const cartOverlayEl = document.getElementById("cartOverlay");
  const cartOpenBtn = document.getElementById("cartOpenBtn");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const cartDrawerBodyEl = document.getElementById("cartDrawerBody");
  const cartCountBadgeEl = document.getElementById("cartCountBadge");
  const cartSubtotalEl = document.getElementById("cartSubtotal");
  const drawerItemCountEl = document.getElementById("drawerItemCount");
  const checkoutDrawerBtn = document.getElementById("checkoutDrawerBtn");
  const goOrderBtn = document.getElementById("goOrderBtn");
  const orderItemsEl = document.getElementById("orderItems");
  const orderSummaryEl = document.getElementById("orderSummary");
  const checkoutBtn = document.getElementById("checkoutBtn");

  function renderCartBadge() {
    if (!cartCountBadgeEl) return;
    cartCountBadgeEl.textContent = String(cartCount());
  }

  function openCart() {
    if (!cartDrawerEl || !cartOverlayEl) return;
    cartDrawerEl.classList.add("is-open");
    cartOverlayEl.hidden = false;
    cartOverlayEl.style.display = "block";
    cartOverlayEl.setAttribute("aria-hidden", "false");
  }

  function closeCart() {
    if (!cartDrawerEl || !cartOverlayEl) return;
    cartDrawerEl.classList.remove("is-open");
    cartOverlayEl.hidden = true;
    cartOverlayEl.style.display = "";
    cartOverlayEl.setAttribute("aria-hidden", "true");
  }

  function renderCartDrawer() {
    if (!cartDrawerBodyEl) return;
    if (drawerItemCountEl) drawerItemCountEl.textContent = `${cartCount()} items`;
    const subtotal = cartSubtotal();
    const subtotalEl = document.getElementById("cartSubtotal");
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);

    const entries = Object.entries(cart);
    if (!entries.length) {
      cartDrawerBodyEl.innerHTML = `<div style="color:var(--muted);padding:0.6rem 0;">Your cart is empty. Add something delicious from the menu.</div>`;
      return;
    }

    cartDrawerBodyEl.innerHTML = entries
      .map(([id, qty]) => {
        const item = MENU_ITEMS.find((m) => m.id === id);
        if (!item) return "";
        const count = Number(qty) || 0;
        return `
          <div class="ff-cart-row">
            <div class="ff-cart-thumb">
              <img
                class="ff-meal-img ff-img--loading"
                src="${PLACEHOLDER_IMG}"
                data-ff-img-keyword="${escapeHtml(item.keyword)}"
                data-ff-img-w="240"
                data-ff-img-h="180"
                alt="${escapeHtml(item.name)} thumbnail"
                loading="lazy"
              />
            </div>
            <div class="ff-cart-info">
              <div class="ff-cart-name">${escapeHtml(item.name)}</div>
              <div class="ff-cart-meta">
                <div class="ff-qty" aria-label="Quantity">
                  <button type="button" data-cart-qty-minus="${escapeHtml(id)}" aria-label="Decrease quantity">-</button>
                  <span>${escapeHtml(count)}</span>
                  <button type="button" data-cart-qty-plus="${escapeHtml(id)}" aria-label="Increase quantity">+</button>
                </div>
                <div><strong style="color:var(--text);">${escapeHtml(formatPrice(item.price * count))}</strong></div>
              </div>
              <button type="button" class="ff-remove-btn" data-cart-remove="${escapeHtml(id)}">Remove</button>
            </div>
          </div>
        `;
      })
      .join("");

    hydrateImages(cartDrawerBodyEl);
  }

  // Cart control delegation
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;

    if (t.matches("[data-cart-qty-plus]")) {
      const id = t.getAttribute("data-cart-qty-plus");
      if (!id) return;
      const current = Number(cart[id] || 0);
      setCartQty(id, current + 1);
      return;
    }

    if (t.matches("[data-cart-qty-minus]")) {
      const id = t.getAttribute("data-cart-qty-minus");
      if (!id) return;
      const current = Number(cart[id] || 0);
      setCartQty(id, current - 1);
      return;
    }

    if (t.matches("[data-cart-remove]")) {
      const id = t.getAttribute("data-cart-remove");
      if (!id) return;
      setCartQty(id, 0);
      return;
    }
  });

  function renderOrderPageIfActive() {
    if (getRouteFromHash() === "order") renderOrderPage();
  }

  function renderOrderPage() {
    if (!orderItemsEl || !orderSummaryEl) return;
    const entries = Object.entries(cart);

    if (!entries.length) {
      orderItemsEl.innerHTML = `<div style="color:var(--muted);">Your cart is empty.</div>`;
      orderSummaryEl.innerHTML = `
        <div style="color:var(--muted);">Add items from <a href="#menu" style="color:var(--accent2);text-decoration:underline;">Menu</a>.</div>
        <div style="margin-top:1rem;color:var(--muted2);">Subtotal: ${formatPrice(0)}</div>
      `;
      return;
    }

    orderItemsEl.innerHTML = entries
      .map(([id, qty]) => {
        const item = MENU_ITEMS.find((m) => m.id === id);
        if (!item) return "";
        const count = Number(qty) || 0;
        return `
          <div style="display:grid;grid-template-columns:64px 1fr;gap:0.85rem;padding:0.9rem 0;border-bottom:1px solid rgba(255,255,255,0.06);">
            <div style="width:64px;height:64px;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
              <img
                class="ff-meal-img ff-img--loading"
                src="${PLACEHOLDER_IMG}"
                data-ff-img-keyword="${escapeHtml(item.keyword)}"
                data-ff-img-w="240"
                data-ff-img-h="180"
                alt="${escapeHtml(item.name)}"
                style="width:100%;height:100%;object-fit:cover;"
                loading="lazy"
              />
            </div>
            <div>
              <div style="font-weight:600;">${escapeHtml(item.name)}</div>
              <div style="color:var(--muted);margin-top:0.25rem;display:flex;justify-content:space-between;gap:0.8rem;align-items:center;">
                <div class="ff-qty" aria-label="Quantity">
                  <button type="button" data-cart-qty-minus="${escapeHtml(id)}" aria-label="Decrease quantity">-</button>
                  <span>${escapeHtml(count)}</span>
                  <button type="button" data-cart-qty-plus="${escapeHtml(id)}" aria-label="Increase quantity">+</button>
                </div>
                <strong style="color:var(--text)">${escapeHtml(formatPrice(item.price * count))}</strong>
              </div>
              <button type="button" class="ff-remove-btn" data-cart-remove="${escapeHtml(id)}" style="margin-top:0.35rem;">Remove</button>
            </div>
          </div>
        `;
      })
      .join("");

    hydrateImages(orderItemsEl);
    const subtotal = cartSubtotal();
    orderSummaryEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span class="ff-muted">Subtotal</span>
        <strong style="color:var(--text);font-size:1.1rem;">${escapeHtml(formatPrice(subtotal))}</strong>
      </div>
      <p class="ff-helper">No payment backend needed — this is a UI mock.</p>
    `;
  }

  function wireCart() {
    if (cartOpenBtn) cartOpenBtn.addEventListener("click", () => openCart());
    if (cartCloseBtn) cartCloseBtn.addEventListener("click", () => closeCart());
    if (cartOverlayEl) cartOverlayEl.addEventListener("click", () => closeCart());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeCart();
    });

    checkoutDrawerBtn?.addEventListener("click", () => {
      showToast("Checkout started (mock). Thanks for ordering!");
    });

    goOrderBtn?.addEventListener("click", () => {
      closeCart();
      window.location.hash = "#order";
    });
  }

  // ---------- Toast ----------
  const toastEl = document.getElementById("ffToast");
  let toastTimer = 0;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toastEl.hidden = true;
    }, 3200);
  }

  // ---------- Booking ----------
  const reservationFormEl = document.getElementById("reservationForm");
  const slotPickerEl = document.getElementById("timeSlotPicker");
  const resDateEl = document.getElementById("resDate");
  const resTimeEl = document.getElementById("resTime");
  const slotHelpEl = document.getElementById("slotHelp");

  function dateToYmd(d) {
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  function seededRandom(seedStr) {
    // Deterministic pseudo-random: returns 0..1
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) hash = (hash * 31 + seedStr.charCodeAt(i)) >>> 0;
    return () => {
      // xorshift
      hash ^= hash << 13;
      hash ^= hash >>> 17;
      hash ^= hash << 5;
      return (hash >>> 0) / 4294967296;
    };
  }

  function generateTimeSlots() {
    const slots = [];
    // From 12:00 to 22:00 in 30 min steps
    const start = 12 * 60;
    const end = 22 * 60;
    for (let mins = start; mins <= end; mins += 30) {
      const hh = Math.floor(mins / 60);
      const mm = mins % 60;
      const h12 = hh % 12 === 0 ? 12 : hh % 12;
      const ampm = hh < 12 ? "PM" : "PM"; // cinematic + simple labels
      const label = `${h12}:${String(mm).padStart(2, "0")} ${ampm}`;
      slots.push(label);
    }
    return slots;
  }

  function renderTimeSlotsForDate(dateStr) {
    if (!slotPickerEl) return;
    const rnd = seededRandom(`ff-${dateStr}`);
    const slots = generateTimeSlots();

    slotPickerEl.innerHTML = "";
    slots.forEach((label) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ff-slot";
      btn.textContent = label;
      const disable = rnd() < 0.22;
      if (disable) btn.classList.add("is-disabled");
      btn.disabled = disable;

      btn.addEventListener("click", () => {
        const currentlySelected = slotPickerEl.querySelector(".ff-slot.is-selected");
        if (currentlySelected) currentlySelected.classList.remove("is-selected");
        btn.classList.add("is-selected");
        resTimeEl.value = label;
        if (slotHelpEl) slotHelpEl.textContent = `Selected ${label}.`;
      });

      slotPickerEl.appendChild(btn);
    });
  }

  function wireBooking() {
    const today = new Date();
    if (resDateEl) {
      resDateEl.min = dateToYmd(today);
      resDateEl.value = dateToYmd(today);
    }

    renderTimeSlotsForDate(resDateEl?.value || dateToYmd(today));

    resDateEl?.addEventListener("change", () => {
      if (slotHelpEl) slotHelpEl.textContent = "Select a slot to continue.";
      if (resTimeEl) resTimeEl.value = "";
      renderTimeSlotsForDate(resDateEl.value);
    });

    reservationFormEl?.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameEl = document.getElementById("resName");
      const partyEl = document.getElementById("resParty");
      const confirmEl = document.getElementById("reservationConfirm");

      const name = nameEl?.value?.trim();
      const date = resDateEl?.value;
      const time = resTimeEl?.value;

      if (!name || !date || !time) {
        showToast("Please fill name, date, and select a time slot.");
        return;
      }
      // For demo: we just show UI confirmation.
      if (confirmEl) {
        confirmEl.hidden = false;
        window.setTimeout(() => {
          confirmEl.hidden = true;
        }, 3800);
      }
      showToast(`Reservation confirmed for ${name} · ${date} · ${time} (mock).`);

      reservationFormEl.reset();
      // Re-init date value and slots.
      if (resDateEl) {
        resDateEl.value = date;
        renderTimeSlotsForDate(date);
      }
      if (resTimeEl) resTimeEl.value = "";
    });
  }

  // ---------- Stats counter ----------
  function wireStatsCounter() {
    const statEls = Array.from(document.querySelectorAll(".ff-stat-value[data-count]"));
    if (!statEls.length) return;

    const statsWrap = statEls[0]?.closest(".ff-about-aside") || document.body;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((e) => e.isIntersecting);
        if (!entry) return;

        observer.disconnect();
        statEls.forEach((el) => {
          const target = Number(el.getAttribute("data-count") || 0);
          const suffix = target === 500 || target >= 10000 ? "+" : "";
          const duration = 900 + Math.min(700, target * 12);
          const start = 0;
          const t0 = performance.now();

          const tick = (t) => {
            const p = Math.min(1, (t - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = Math.round(start + (target - start) * eased);
            el.textContent = `${val}${suffix}`;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(statsWrap);
  }

  // ---------- Initialize ----------
  function hydrateFeaturedAndMenu() {
    renderFeatured();
    renderMenuGrid();
  }

  function setYear() {
    const yearEl = document.getElementById("ffYear");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  function wireRouting() {
    const initial = getRouteFromHash();
    showRoute(initial);

    window.addEventListener("hashchange", () => {
      const route = getRouteFromHash();
      showRoute(route);
    });
  }

  function wireSearchTabState() {
    // Keep category state aligned if user lands directly on #menu.
    state.category = "Burgers";
    state.search = "";
    if (categoryTabsEl) {
      const activeBtn = Array.from(categoryTabsEl.querySelectorAll(".ff-tab")).find((b) => b.getAttribute("data-category") === state.category);
      Array.from(categoryTabsEl.querySelectorAll(".ff-tab")).forEach((b) => {
        const isActive = b === activeBtn;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-selected", String(isActive));
      });
    }
    if (searchInputEl) searchInputEl.value = "";
  }

  // Ensure correct initialization order.
  function init() {
    wireHeader();
    wireHero();
    wireTestimonials();
    observeReveal();
    animateNavLinksIn();

    renderCartBadge();
    renderCartDrawer();
    wireCart();

    setYear();
    wireMenuControls();
    wireRouting();

    hydrateFeaturedAndMenu();
    wireBooking();
    wireStatsCounter();

    // Restore cart render for order route if user navigates directly.
    renderOrderPageIfActive();

    checkoutBtn?.addEventListener("click", () => {
      if (!Object.keys(cart).length) {
        showToast("Your cart is empty.");
        return;
      }
      showToast("Checkout started (mock). Thanks for ordering!");
    });
  }

  // Fix showRoute scroll behavior: "instant" might not work in some browsers.
  // We'll override with a safe helper.
  const _origShowRoute = showRoute;
  showRoute = (route) => {
    const normalized = String(route || "").replace("#", "");
    _origShowRoute(normalized);
  };

  // Boot
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

