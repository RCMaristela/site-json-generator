document.addEventListener("DOMContentLoaded", () => {
  const campos = document.querySelectorAll("input, button");

  campos.forEach((el) => {
    // Hover: muda a cor ao passar o mouse
    el.addEventListener("mouseenter", () => {
      el.style.backgroundColor = "#e0f7fa";
    });

    el.addEventListener("mouseleave", () => {
      el.style.backgroundColor = "";
    });

    // Foco: borda luminosa em inputs e botão
    el.addEventListener("focus", () => {
      el.style.outline = "2px solid #4CAF50";
      el.style.boxShadow = "0 0 8px #4CAF50";
    });

    el.addEventListener("blur", () => {
      el.style.outline = "";
      el.style.boxShadow = "";
    });
  });

  // Geração do JSON
  const botao = document.querySelector("button");
  botao.addEventListener("click", () => {
    const nomeCampo = document.getElementById("campo").value;
    const valorCampo = document.getElementById("valor").value;

    const resultado = `[ ${nomeCampo}: ${valorCampo} ]`;

    document.getElementById("jsonOutput").textContent = resultado;
  });
});

