// Quando o mouse passar por cima de um input ou botão, ele muda de cor
document.addEventListener("DOMContentLoaded", () => {
  const campos = document.querySelectorAll("input, button");

  campos.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.backgroundColor = "#e0f7fa"; // azul claro
    });

    el.addEventListener("mouseleave", () => {
      el.style.backgroundColor = ""; // volta ao normal
    });
  });
});

feat: adicionar efeito hover em inputs e botões
