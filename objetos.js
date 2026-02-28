// se define el objeto libro
let libro = {
    // propiedas: valor, puede ser texto, numero etc. puede tener tambien un array vacio
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible", // puede ser 'disponible' o 'prestado'
    capitulos: [],
    //se puede poner tambien funciones dentro de un objeto

    // se crea una funcion para describir el libro se pone la propiedas: l funcion arrow o corta
    describirLibro: function() {
        //this sirve para aceder a las propias porpiedades del objeto
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    //agregar un capítulo se crea funcion 
    agregarCapitulo: function(nombreCapitulo) {
        //this es para las propiedades del objeto.que propuedad. que quieres hacer  
        this.capitulos.push(nombreCapitulo);
        console.log(`Capítulo agregado: "${nombreCapitulo}"`);
    },

    // Método para eliminar un capítulo
    eliminarCapitulo: function(nombreCapitulo) {
        let index = this.capitulos.indexOf(nombreCapitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capítulo eliminado: "${nombreCapitulo}"`);
        } else {
            console.log(`El capítulo "${nombreCapitulo}" no existe en la lista.`);
        }
    },

    // Método para mostrar capítulos
    mostrarCapitulos: function() {
        if (this.capitulos.length === 0) {
            console.log("Este libro no tiene capítulos registrados.");
        } else {
            console.log("Capítulos del libro:");
            this.capitulos.forEach((cap, i) => {
                console.log(`${i + 1}. ${cap}`);
            });
        }
    }
};

// Ejemplo de uso:
libro.describirLibro();
libro.agregarCapitulo("Capítulo 1: La familia Buendía");
libro.agregarCapitulo("Capítulo 2: Macondo");
libro.mostrarCapitulos();
libro.eliminarCapitulo("Capítulo 1: La familia Buendía");
libro.mostrarCapitulos();