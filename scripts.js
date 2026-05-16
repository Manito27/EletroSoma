const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const nome = data.get("nome") || "Cliente";
    const servico = data.get("servico") || "servico eletrico";

    formNote.textContent = `Obrigado, ${nome}. O seu pedido de ${servico} foi registado para contacto.`;
    contactForm.reset();
  });
}
