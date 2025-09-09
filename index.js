// script.js

// Exemplo simples: alerta de boas-vindas
window.onload = () => {
  console.log("Currículo carregado com sucesso 🚀");
};

// Exemplo: botão para baixar PDF
function baixarPDF() {
  alert("Aqui você poderia colocar o link do seu currículo em PDF.");
  // Exemplo real:
  // window.open("curriculo-lucas.pdf", "_blank");
}
// script.js
document.getElementById("btn-pdf").addEventListener("click", () => {
  const element = document.querySelector(".container");

  const opt = {
    margin:       [0, 0, 0, 0], // sem margens extras
    filename:     'Curriculo-Lucas-Mateus.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, scrollY: 0 }, // evita espaço vazio no topo
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
});