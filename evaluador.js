/*objetivo es evalaucar notas de un estudiantey decirle si paso o no*/
let nota = 50;
if (nota>= 90 && nota <=100){
    console.log('Excelente');
} else if ( nota >= 75 && nota <=89) {
    console.log("Bien")
} else if (nota >= 60 && nota <= 74){
    console.log("Suficiente");
} else if (nota >= 0 && nota < 60) {
    console.log("No aprobdo");
} else {
    console.log("Valor no valido");
}
/* notas importantes, en js el and es $$, || es or y ! es not*/