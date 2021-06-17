function gravar() {
    var carta = {
        nacionalidade : document.getElementById("txtnacionalidade").value,
        genero : document.getElementById("cmbestilos").value,
        nomeArtistico : document.getElementById("txtnome").value
    }

    var envelope = {
        method : "POST",
        body : JSON.stringify(carta),
        headers : {
            "content-type" : "application/json"
        }
    };

    console.log(envelope)
    fetch("http://localhost:8080/novoartista", envelope)
        .then(res => res.json())
        .then(res => {
            window.alert("O artista n°: " + res.id + " foi cadastrado com sucesso!"); 
                window.location = 'gravarartista.html'
        })
        .catch(err => {
            window.alert("Não foi possível realizar o cadastro.");
        });
}