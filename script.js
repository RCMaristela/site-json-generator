document.addEventListener("DOMContentLoaded", () => {
  const campos = document.querySelectorAll("input, button");

  // Hover: muda cor ao passar o mouse
  campos.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.backgroundColor = "#e0f7fa";
    });

    el.addEventListener("mouseleave", () => {
      el.style.backgroundColor = "";
    });

    // Foco: borda luminosa
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

  // Gerar JSON
  const botao = document.querySelector("button");
  botao.addEventListener("click", () => {
    const nomeCampo = document.getElementById("campo").value;
    const valorCampo = document.getElementById("valor").value;

    const resultado = `[ ${nomeCampo}: ${valorCampo} ]`;

    document.getElementById("jsonOutput").textContent = resultado;
  });
});

feat: gerar JSON simples com os dados do formulário
