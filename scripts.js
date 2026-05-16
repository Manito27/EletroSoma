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
    const telefone = data.get("telefone") || "";
    const servico = data.get("servico") || "servico eletrotecnico";
    const mensagem = data.get("mensagem") || "Sem mensagem adicional.";
    const recipients = "geral.electrosoma@gmail.com,malave.esoma@gmail.com";
    const subject = `Pedido de servico - ${servico}`;
    const body = [
      "Novo pedido recebido pelo site da ElectroSoMa:",
      "",
      `Nome: ${nome}`,
      `Telefone/WhatsApp: ${telefone}`,
      `Tipo de servico: ${servico}`,
      "",
      "Mensagem:",
      mensagem,
    ].join("\n");

    formNote.textContent = `Obrigado, ${nome}. A abrir o email para enviar o pedido a ElectroSoMa.`;
    window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    contactForm.reset();
  });
}
