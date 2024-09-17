var a, b, c, d, e;
a=prompt("Digite uma 1° palavra:");
console.log(a);
b=prompt("Digite uma 2° palavra:");
console.log(b);
c=prompt("Digite uma 3° palavra:");
console.log(c);
d=prompt("Digite uma 4° palavra:");
console.log(d);
e=prompt("Digite uma 5° palavra:");
console.log(e);

const palavras = [a, b, c, d, e];
console.log(palavras);
const maiorPalavra = Math.max(...palavras.map(palavra => palavra.length));
console.log(maiorPalavra);
document.write("A maior palavra tem "+maiorPalavra+" letras.");
