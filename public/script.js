document
  .getElementById("downloadButton")
  .addEventListener("click", async () => {
    const site = document.getElementById("site").value;
    if (
      site == "app.dwvapp.com.br/app/home" ||
      site == "https://app.dwvapp.com.br/app/home"
    ) {
      const erro = document.getElementById("erro");
      erro.innerText = ""; // Limpa o texto de erro
      const site = document.getElementById("site");
      site.value = "";
      try {
        const response = await fetch("https://moraes.vercel.app/download");
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = url;
        a.download = "moraes.json";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        const modal = document.getElementById("modal");
        modal.style = "bottom: 5%";
        // Aguarda 3 segundos antes de exibir a mensagem de sucesso
        setTimeout(() => {
          modal.style.bottom = ""; // Remove o estilo bottom
        }, 3000);
      } catch (error) {
        console.error(error);
        alert("Ocorreu um erro ao baixar o arquivo JSON.");
      }
    } else {
      const erro = document.getElementById("erro");
      erro.innerText = "A URL informada é inválida";
      const site = document.getElementById("site");
      site.value = "";
    }
  });

function saudacaoDeAcordoComHora() {
  var agora = new Date();
  var hora = agora.getHours();
  var saudacao = "Olá!";
  var saudacaoDiv = document.getElementById("saudacoes");

  if (hora >= 5 && hora < 12) {
    saudacao = "Bom dia,sr. Moraes!";
  } else if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde,sr. Moraes!";
  } else if (hora >= 18) {
    saudacao = "Boa noite,sr. Moraes!";
  } else {
    saudacao = "Boa madrugada,sr. Moraes!";
  }

  saudacaoDiv.textContent = saudacao;
}

saudacaoDeAcordoComHora();
