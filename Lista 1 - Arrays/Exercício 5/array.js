var comida1=prompt("Diga uma comida:");
var comida2=prompt("Diga outra comida:");
var comida3=prompt("Diga mais uma comida:");

var objeto1=prompt("Diga uma objeto:");
var objeto2=prompt("Diga outra objeto:");
var objeto3=prompt("Diga mais uma objeto:");

var esporte1=prompt("Diga uma esporte:");
var esporte2=prompt("Diga outra esporte:");
var esporte3=prompt("Diga mais uma esporte:");

const comidas = [comida1,comida2,comida3];
const objetos = [objeto1,objeto2,objeto3];
const esportes = [esporte1,esporte2,esporte3];

const poinpoinpoin = comidas.concat("<br>",objetos,"<br>",esportes);


document.write(poinpoinpoin);
