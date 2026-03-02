class Pizza{
    constructor(masa, tamano, ingredientes) {
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes;
    }

    preparar(){
     console.log (`preparando una pizza de ${this.tamano} con masa ${this.masa} y los
     siguientes ingredientes: ${this.ingredientes}.` );
     return this;
    }


    hornear() {
        console.log("la pizza este en el horno...");
        return this;
    }


    empacar() {
        console.log("la pizza se este empacando");
        return this;
    }

};

const pizzaHawaiana = new Pizza ("delgada" , "grande","doble", ["jamon", "piña" , "queso"]);
console.log(pizzaHawaiana.preparar());
console.log(pizzaHawaiana.hornear());
console.log(pizzaHawaiana.empacar());

const pizzaPeperoniconjamon = new Pizza ("grande" , "mediana", ["pepperoni" , "jamon" , "queso"]);
console.log(pizzaPeperoniconjamon.preparar().hornear().empacar());

class Combos extends Pizza{
    constructor(combo, canidad, tamano, masa, ingredientes, bebida, postre ){
        
    }
}




