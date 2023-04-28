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