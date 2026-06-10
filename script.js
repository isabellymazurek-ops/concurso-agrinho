function atualizarHora(){

let agora = new Date();

document.getElementById("hora").innerHTML =
agora.toLocaleTimeString();

document.getElementById("data").innerHTML =
agora.toLocaleDateString();

}

setInterval(atualizarHora,1000);

const perguntas = [

{
texto:"Drones ajudam no monitoramento agrícola.",
resposta:true
},

{
texto:"A agricultura sustentável prejudica o meio ambiente.",
resposta:false
}

];

let atual=0;
let pontos=0;

document.getElementById("pergunta").innerHTML =
perguntas[0].texto;

function responder(resp){

if(resp==perguntas[atual].resposta){

pontos++;

document.getElementById("resultado").innerHTML=
"Correto!";

}else{

document.getElementById("resultado").innerHTML=
"Errado!";

}

atual++;

if(atual<perguntas.length){

document.getElementById("pergunta").innerHTML=
perguntas[atual].texto;

}else{

document.getElementById("pergunta").innerHTML=
"Fim do Quiz";

}

}

let arvores=0;

function plantar(){

arvores++;

document.getElementById("pontuacao").innerHTML=
arvores+" Árvores Plantadas";

}

function perguntar(){

let pergunta =
document.getElementById("msg").value.toLowerCase();

let resposta="";

if(pergunta.includes("drone")){

resposta="Drones ajudam a monitorar plantações.";

}

else if(pergunta.includes("sustentabilidade")){

resposta="Produzir preservando recursos naturais.";

}

else{

resposta="Pergunte sobre agro, tecnologia ou natureza.";

}

document.getElementById("chat").innerHTML +=
"<p>"+resposta+"</p>";

}
