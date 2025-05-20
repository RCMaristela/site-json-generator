// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  const campos = document.querySelectorAll("input, button");

  // Hover: mudar cor ao passar o mouse
  campos.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.backgroundColor = "#e0f7fa";
    });

    el.addEventListener("mouseleave", () => {
      el.style.backgroundColor = "";
    });

    // Foco: borda luminosa ao clicar no campo
    if (el.tagName === "INPUT") {
      el.addEventListener("focus", () => {
        el.style.outline = "2px solid #4CAF50";
        el.style.boxShadow = "0 0 8px #4CAF50";
      });

      el.addEventListener("blur", () => {
        el.style.outline = "";
        el.style.boxShadow = "";
      });
    }
  });
});

feat: adicionar borda luminosa ao focar nos campos

