// criação de eventos a serem ativado ao clique nos botões para simular efeito do site original.

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

function evento1(){
    button1.onclick = alert("Este é apenas um exemplo");
}

function evento2(){
    button2.onclick = alert("Este é apenas mais um exemplo");
}