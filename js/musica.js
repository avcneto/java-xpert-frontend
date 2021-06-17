function filtrar() {
  fetch(
    "http://localhost:8080/artista/" +
      document.getElementById("cmbartistas").value
  )
    .then(res => res.json())
    .then(res => { var tabela =
        "<table class = 'table' border ='1' aling='center' windth='80%'>" +
        "<tr>" +
        "<th>Musica</th> <th>Cadastro</th> <th>Lancamento</th>" +
        "</tr>";

        for (contador=0;contador <res.musicas.length;contador++) {

         var status = "NÃO";
         if (res.musicas[contador].lancamento ==1){
           status="SIM";
         }
        
          tabela += 
            "<tr>" +
            "<td>" + res.musicas[contador].titulo + "</td>" +
            "<td>" + res.musicas[contador].cadastro + "</td>" +
            "<td>" + status + "</td>" +
            "</tr";
        }

      tabela += "</table>";
      document.getElementById("tabela").innerHTML = tabela;
    })
    .catch(err => {
      window.alert("não existem musicas");
    });
}

function preencherartistas() {
  fetch("http://localhost:8080/artistas")
    .then((res) => res.json())
    .then((res) => {
      for (contador = 0; contador < res.length; contador++) {
        document.getElementById("cmbartistas").innerHTML +=
          "<option value='" +
          res[contador].id +
          "'>" +
          res[contador].nomeArtistico +
          "</option>";
      }
    })
    .catch((err) => {
      window.alert("Não existem artistas");
      window.location = "gravarartista.html";
    });
}


function gravarmusica() {
  var carta = { 
    titulo: document.getElementById("txtitulo").value,
    cadastro: document.getElementById("txtcadastro").value,
    lancamento: parseInt(document.getElementById("cmbestilos").value),
    artista: {
      id : parseInt(document.getElementById("txtartista").value),
    }
  };

    var envelope = {
      method: "POST",
      body: JSON.stringify(carta),
      headers: {
        "content-type" : "application/json",
      },
    };

    
  fetch("http://localhost:8080/novamusica", envelope)
  .then(res => res.json())
  .then(res => {
    localStorage.setItem("gravar", JSON.stringify(res));
    window.localStorage = "gravarmusica.html"
    window.alert("Musica gravada com sucesso!")

  })
  .catch( err => {
    window.alert("Não foi possivel gravar")
  })

}








