//Array de frutas, o arreglo
let frutas = ["🍎", "🍐", "🍎", "🍌", "🍐", "🍇", "🍎", "🍌"]
// objeto tiene {} y se separa por una coma. ej nombre: valor, 
let conteoFrutas ={}
//ciclo for  let-/const declaro variable, logica y aumento, separado por un punto y coma  
for (let i =0; i< frutas.length; i++) {
    // aqui es donde se guarda la fruta  que esta en el ciclo, una por una
    let fruta = frutas[i]
    //aqui lo que se hace es ver si la firta existe en el objeto contep frutas
    if (conteoFrutas[fruta]){
        //aqui lo que se hace es que si la fruta existe entonces le agrega uno. 
        conteoFrutas[fruta]++;
    } else {  
        //si no existe la fruta entonces lo que hace es que le agrega 1 l objeto 
        conteoFrutas[fruta]=1;
    }
}
// Imprimir resultados
console.log("Conteo de frutas (for):");
// este ciclo for imprime en lista, por cada fruta en conteo frutas 
for (let fruta in conteoFrutas) {
    //aqyui pone el nombre y pone el conteo
    console.log(`${fruta}: ${conteoFrutas[fruta]}`);
}


// Reiniciamos el objeto
conteosFrutas = {};
// primero se pone el contador
let i = 0;
// while solose pone la logica 
while (i < frutas.length) {
    // aqui se guarda la fruta en turno 
    let fruta = frutas[i];
    //se repite al logica 
    if (conteosFrutas[fruta]) {
        conteosFrutas[fruta]++;
    } else {
        conteosFrutas[fruta] = 1;
    }
    //aqui se pone el aumento 
    i++;
}

// Imprimir resultados
console.log("Conteo de frutas (while):");
for (let fruta in conteosFrutas) {
    console.log(`${fruta}: ${conteosFrutas[fruta]}`);
}