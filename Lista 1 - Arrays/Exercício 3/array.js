var numero1, numero2, numero3, numero4, nt, organizado;

numero1=parseInt(prompt("Digite uma 1° número:"));
numero2=parseInt(prompt("Digite uma 2° número:"));
numero3=parseInt(prompt("Digite uma 3° número:"));
numero4=parseInt(prompt("Digite uma 4° número:"));
console.log(numero2);

nt=[numero1, numero2, numero3 ,numero4];
console.log(nt);

organizado= nt.sort((a, b) => b - a);
console.log(organizado);

document.write(organizado);
console.log(nt);

