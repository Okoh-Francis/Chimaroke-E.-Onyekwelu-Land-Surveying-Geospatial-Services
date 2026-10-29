const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

const enquiryForm = document.querySelector("#enquiry-form");
const formResponse = document.querySelector("#form-response");

enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(enquiryForm);
  const name = String(formData.get("name") || "").trim();
  const service = String(formData.get("service") || "").trim();

  formResponse.textContent =
    `Thanks, ${name}. This is a demo preview: your enquiry about "${service}" has not been sent. Once the owner approves the website, this form can be connected to his email or WhatsApp.`;

  formResponse.classList.add("visible");
  formResponse.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
