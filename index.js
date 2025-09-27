// script.js

// Exemplo simples: alerta de boas-vindas
window.onload = () => {
  console.log("Currículo carregado com sucesso 🚀");
};

// Função para mostrar notificações
function showToast(message, isError = false) {
  const toast = document.createElement("div"); // cria uma caixinha
  toast.className = "toast"; // dá a classe "toast" pra ela
  if (isError) toast.classList.add("error"); // se for erro → adiciona "error"
  toast.textContent = message; // escreve o texto dentro da caixinha

  document.body.appendChild(toast); // coloca a caixinha no body (na tela)

  // cria um delay para realizar a função
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // depois de 3 segundos → some
  setTimeout(() => {
    toast.classList.remove("show"); // esconde
    setTimeout(() => toast.remove(), 300); // tira do HTML de vez
  }, 3000);
}

// Botão para baixar PDF
document.getElementById("btn-pdf").addEventListener("click", () => {
  const element = document.querySelector(".container");

  const opt = {
    margin:       [0, 0, 0, 0],
    filename:     'Curriculo-Lucas-Mateus.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, scrollY: 0 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save()
    .then(() => {
      showToast("✅ Currículo baixado com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao gerar o PDF:", err);
      showToast("❌ Ocorreu um erro ao baixar o currículo.", true);
    });
});
//html2pdf()          // cria a "impressora de PDF"
//.set(opt)         // define as configurações do PDF
//.from(element)    // pega o currículo como conteúdo (.container)
//.save()          // salva o arquivo no computador
