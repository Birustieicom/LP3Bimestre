var cosmo;
let timmy=0;
let puff=0;

function somarValores (num1) {
    puff = puff + num1;
}

for (let wanda=0; wanda<5; wanda++) {
    timmy++;
    cosmo=parseInt(prompt("Digite um "+timmy+"° número:"));
    somarValores(cosmo);
}

document.write("O resultado da soma dos 5 valores é "+puff);
