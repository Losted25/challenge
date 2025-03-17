//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
 let amigos = [];

 function adicionarAmigo(){
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === ""){
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
 }

 function atualizarLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nome) => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
 }

 function sortearAmigo(){
    if(amigos.length ===0){
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random()*amigos.length)];
    document.getElementById("resultado").textContent = 'O amigo secreto é: ' + (sorteado);
 }