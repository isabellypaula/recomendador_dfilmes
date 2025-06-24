let campoIdade;
let campoFantasia;
let campoAventura;
let img;

function preload(){
  img= loadImage("img.png");
  
  }

 function setup () {
  createCanvas(900, 600);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("#C92F2F");
  image(img, 150, 20, 620, 520);
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  fill(color("#000"));
  textAlign(CENTER, CENTER);
  textSize(44);
  text(recomendacao, width / 2, height/ 1.05);
  }

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
if (idade >= 10) {
if (idade >= 14) {
return "Crepusculo";
} else {
if (idade >= 12) {
if(gostaDeFantasia || gostaDeAventura) {
return "Homem aranha: no aranhaverso";          
} else{
return "Harry Potter"; 
}
} else {
if (gostaDeFantasia) {
return "Gente Grande";
} else {
return "Divertidamente";
}
}
}
} else {
if (gostaDeFantasia) {
return "Rei Leao";
} else {
return "A Pequena Sereia"
}
}
}
