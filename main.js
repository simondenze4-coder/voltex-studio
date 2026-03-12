document.addEventListener("DOMContentLoaded", () => {
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
});

