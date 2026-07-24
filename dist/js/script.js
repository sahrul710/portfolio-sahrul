const scrollup = document.querySelector(".scroll-up");
window.onscroll = () => {
  if (window.scrollY > 500) {
    scrollup.classList.add("scroll-active");
  } else {
    scrollup.classList.remove("scroll-active");
  }
};

// Tombol Geser Sertifikat

const sertifikatBox = document.querySelector(".sertifikat-box");
const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", () => {
  sertifikatBox.scrollBy({
    left: 320,
    behavior: "smooth",
  });
});

emailjs.init("0WmBNWbSwkPmrU1ku");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_jmdoi0g",

      "template_5e0wohe",

      this,
    )

    .then(() => {
      alert("Pesan berhasil dikirim!");

      form.reset();
    })

    .catch((error) => {
      alert("Pesan gagal dikirim!");

      console.log(error);
    });
});
