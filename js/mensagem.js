function enviarmensagem() {
    var carta = {
        nome: document.getElementById("txtnome").value,
        email: document.getElementById("txtemail").value,
        mensagem: document.getElementById("txtmensagem").value
    }
    console.log(carta)

    var envelope = {
        headers: {
            "content-type": "application/json"
        },
        method: "post",
        body: JSON.stringify(carta)
    };

    fetch("http://localhost:8080/novasugestao", envelope)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("ulogado", JSON.stringify(res));
            window.location = "index.html";
            window.alert("Mensagem enviada com sucesso!")
        })
        .catch(err => {
            window.alert("Formulario nao enviado, tente novamente!")
        });


}