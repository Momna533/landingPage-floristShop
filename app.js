// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Simple form validation
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const phone = this.querySelector('input[type="tel"]').value.trim();
    const date = this.querySelector('input[type="date"]').value.trim();
    const message = this.querySelector("textarea").value.trim();

    if (!name || !phone || !date || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Example success action
    alert("Thank you! Your inquiry has been sent.");
    this.reset();
  });
}

// Gallery lightbox effect (optional)
const galleryItems = document.querySelectorAll(".gallery-item img");
galleryItems.forEach((img) => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.style.position = "fixed";
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0,0,0,0.8)";
    lightbox.style.display = "flex";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.zIndex = 9999;

    const imgClone = document.createElement("img");
    imgClone.src = img.src;
    imgClone.style.maxWidth = "90%";
    imgClone.style.maxHeight = "90%";
    imgClone.style.borderRadius = "12px";
    imgClone.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5)";

    lightbox.appendChild(imgClone);
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", () => {
      document.body.removeChild(lightbox);
    });
  });
});
