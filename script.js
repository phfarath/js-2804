// declarando a msg 
let msg = document.getElementById('msg')

// criar obj com array 
const usuarios =[
    {nome:"PEACH", idade:18},
    {nome:"BOWSER", idade:19},
    {nome:"MARIO", idade:20},
];

// criando uma instancia (aparecer nomes)
let users= usuarios.length;
for(let i=0; i<users; i++){
    msg.innerHTML += `<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

// criando slideshow 
// criando array de imagens 
var imagens=[
    'image/b534bfb7-2fb4-4474-8b5d-e91fb8368fdf.jpg',
    'image/3.webp',
    'image/mountains-190055_1280.jpg',
];

// declarando as variaveis 
let Index =0; //indica posicao 
let time=2000; // indica tempo das imagens 

// criando funcao 
function slideshow(){
    // pega o id e o caminho da imagens 
    document.getElementById('image').src=imagens[Index];
    Index++; // incrementa 
    if(Index == imagens.length){Index=0}
    setTimeout("slideshow()", time)
}
slideshow();