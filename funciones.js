/* funciones se componen por funcion, nombre,(constantes){body}. si son flecha no necesitan 
nombre se pueden poner directas a una vsriable seguido de un igual ej: 
const funcionFlecha = (parametro1, parametro2) => {
  return parametro1 - parametro2;
};

// Si es una sola línea, se pueden omitir las llaves y el 'return'
const sumarSimple = (a, b) => a + b;
 */
//array o lista 
let librosLeidos =[];
// funcion que agrega el libro 
function agregarLibro(titulo) {
    // este se agrega son la funcionalidad de agregar "rutas"
    librosLeidos.push(titulo)
    // Se agrega una linea para saber si si se agrego
    console.log(`Libro agregado: "${titulo}"`)
}
//funcion de libros leido
function mostrarLibrosLeidos() {
    // si no se ha leido ningun libro
    if (librosLeidos.length === 0) {
        console.log("No has leído ningún libro todavía.");
    } else {
        //imprime leyenda libros leido 
        console.log("Libros leídos:");
        //lospone en forma de lista con ayuda de un for, var, logica e incrmento
        for (let i = 0; i < librosLeidos.length; i++) {
            //aqui se imprime la lista por numero, se agrega 1 al i para que no empeice en cero
            //como es un array se llama por el i para que funcione el ciclo
            console.log(`${i + 1}. ${librosLeidos[i]}`);
        }
    }
}
 // Ejemplo de uso:
agregarLibro("Cien años de soledad");
agregarLibro("Tan poca vida");
agregarLibro("El principito");
agregarLibro("1984");

mostrarLibrosLeidos();
