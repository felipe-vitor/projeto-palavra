let palavra;

function setup() {
  createCanvas(400, 400);
  let palavras= ["Respeito", "Obediência","Educação"];
  palavra= random(palavras)
}




function inicializaCores(){
   background("white");
  textSize(64)
 fill("black");

  textAlign (CENTER,CENTER)
  
  
} 

function draw() {
 inicializaCores();
  
  
  let maximo = width; 
  let minimo=0;
  let quantidade= map(mouseX, 0,width,1,palavra.length);
  
  let parcial=palavra.substring(0,quantidade);
  text(parcial,200,200);
  
}