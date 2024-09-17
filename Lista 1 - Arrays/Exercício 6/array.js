var numero1=parseInt(prompt("Diga um primeiro número:"));
var numero2=parseInt(prompt("Diga um segundo número:"));
var numero3=parseInt(prompt("Diga um terceiro número:"));

const teitei = [numero1, numero2, numero3];
const poupou = numero1+numero2+numero3;

var thankunext = teitei.sort();
document.write(thankunext+"<br>");
document.write(numero1+"+"+numero2+"+"+numero3+"="+poupou+"<br>"+"<br>");

 if (poupou<100) {
    document.write("O menor valor é "+thankunext[0]);
 } else {
    document.write("O maior valor é "+thankunext[2]);
 }

 //modal
