function gravar() {
  var carta = {
    nomeArtistico: document.getElementById("txtnome").value,
    nacionalidade: document.getElementById("txtnascionalidade").value,
    genero: document.getElementById("cmbestilos").value,
  };

  var envelope = {
    method: "POST",
    body: JSON.stringify(carta),
    headers: {
      "content-type" : "application/json",
    },
  };

  console.log(envelope)
  fetch("http://localhost:8080/novoartista", envelope)
    .then(res => res.json())
    .then(res => {
        window.alert("O artista n°: " + res.id + "foi cadastrado com sucesso!");
        localStorage.setItem("gravar", JSON.stringify(res));
        window.localStorage = "gravarartista.html"
      
    })
    .catch(err => {
      window.alert("Não foi possivel gravar!");
    });
}
