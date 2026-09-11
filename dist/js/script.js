// Scroll Up
const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  if (!scrollUp) return;

  scrollUp.classList.toggle("scroll-active", window.scrollY > 500);
});

// Geser Sertifikat
const sertifikatBox = document.querySelector(".sertifikat-box");
const nextBtn = document.querySelector(".next-btn");

if (sertifikatBox && nextBtn) {
  nextBtn.addEventListener("click", () => {
    sertifikatBox.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  });
}

// EmailJS
const form = document.getElementById("contact-form");

if (form) {
  emailjs.init("0WmBNWbSwkPmrU1ku");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_jmdoi0g", "template_5e0wohe", this)
      .then(() => {
        alert("Pesan berhasil dikirim!");
        form.reset();
      })
      .catch((error) => {
        alert("Pesan gagal dikirim!");
        console.error(error);
      });
  });
}

// Ganti Bahasa Indonesia / English
const langToggle = document.getElementById("lang-toggle");

let currentLanguage = "id";

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "id" ? "en" : "id";

    document.querySelectorAll("[data-id][data-en]").forEach((element) => {
      element.textContent = element.dataset[currentLanguage];
    });

    document
      .querySelectorAll("[data-placeholder-id][data-placeholder-en]")
      .forEach((element) => {
        element.placeholder =
          currentLanguage === "id"
            ? element.dataset.placeholderId
            : element.dataset.placeholderEn;
      });

    langToggle.textContent = currentLanguage === "id" ? "EN" : "ID";

    document.documentElement.lang = currentLanguage;
  });
}
