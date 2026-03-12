document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("data-open") === "true";
      const nextState = !isOpen;
      navToggle.setAttribute("data-open", String(nextState));
      navToggle.setAttribute("aria-expanded", String(nextState));
      navLinks.style.display = nextState ? "flex" : "none";
    });

    navLinks.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.matches("a.nav-link")) {
        navToggle.setAttribute("data-open", "false");
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.style.display = "none";
      }
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const calculateBtn = document.getElementById("calculateBtn");
  if (calculateBtn) {
    calculateBtn.addEventListener("click", () => {
      const contactSection = document.querySelector("[data-contact-target]");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        window.location.href = "contact.html#contact";
      }
    });
  }

  const media = document.getElementById("heroMedia");
  const img = document.getElementById("heroImage");
  if (media && img) {
    const maxOffset = 14;
    media.addEventListener("mousemove", (e) => {
      const rect = media.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = `scale(1.05) translate3d(${-(x * maxOffset)}px, ${-(y * maxOffset)}px, 0)`;
    });

    media.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1.04) translate3d(0,0,0)";
    });
  }

  const contactForm = document.getElementById("contactForm");
  const contactStatus = document.getElementById("contactStatus");

  if (contactForm && contactStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const requiredFields = ["name", "email", "project-type", "budget"];
      for (const field of requiredFields) {
        if (!formData.get(field)) {
          contactStatus.textContent = "Please fill in all required fields before sending.";
          return;
        }
      }

      contactStatus.textContent = "Thank you — we’ll get back to you within one business day.";
      contactForm.reset();
    });
  }

  const statsGrid = document.querySelector("[data-stats-grid]");
  if (statsGrid) {
    const stats = [
      {
        label: "Experience",
        value: "22 years",
        body: "We create a rare atmosphere for a measured life — from villas to compact city apartments.",
      },
      {
        label: "Completed objects",
        value: "560+ projects",
        body: "Truly special objects with powerful energy, tactile materials, and exquisite interiors.",
      },
      {
        label: "Recognition",
        value: "Houzz 2024",
        body: "Best Customer Experience for high‑end residential design in Europe.",
      },
    ];

    statsGrid.innerHTML = stats
      .map(
        (stat) => `
      <div>
        <div class="stat-label">${stat.label}</div>
        <div class="stat-value">${stat.value}</div>
        <div>${stat.body}</div>
      </div>
    `
      )
      .join("");
  }

  const casesList = document.querySelector("[data-cases-list]");
  if (casesList) {
    const cases = [
      {
        label: "Residential · Warsaw",
        title: "Riverlight Loft Residence",
        body:
          "Double‑height loft reimagined with layered lighting, bespoke steel and oak staircase, and soft textiles that quiet the industrial shell.",
        tags: ["Full-scope design", "Art direction", "Custom furniture"],
      },
      {
        label: "Hospitality · Berlin",
        title: "Courtyard Micro Hotel",
        body:
          "18-key boutique hotel organised around an inner courtyard, with quiet rooms, atmospheric lobby bar, and a restrained, tactile material palette.",
        tags: ["Concept to handover", "Lighting strategy", "FF&E"],
      },
      {
        label: "Workspace · Copenhagen",
        title: "Nordic Studio Office",
        body:
          "Boutique office for a creative agency: shared table islands, acoustic zoning, and soft industrial lines that feel more home than office.",
        tags: ["Workspace strategy", "Bespoke joinery", "Styling"],
      },
      {
        label: "Residential · Paris",
        title: "Haussmannian Quiet Apartment",
        body:
          "Historic shell softened with tonal neutrals, minimal interventions, and carefully framed lighting that respects the architecture.",
        tags: ["Renovation", "Heritage", "On‑site art direction"],
      },
    ];

    casesList.innerHTML = cases
      .map(
        (item) => `
      <article class="case-card">
        <div class="case-label">${item.label}</div>
        <h2 class="case-title">${item.title}</h2>
        <p class="case-meta">
          ${item.body}
        </p>
        <div class="pill-row">
          ${item.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
        </div>
      </article>
    `
      )
      .join("");
  }
});

