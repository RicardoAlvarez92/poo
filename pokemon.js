/* LA PRIMER LETRA DEL  nombre de la clase debe ir en mayuscula */
/* class Pokemon {

    name = "";
    type = "";
    evolutions= [];

    constructor(name, type, evolutions, attacks){
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
        this.attacks = attacks;

    }

   


attack() {
    return `${this.name}, ha usado: ${this.attacks}`;
}

evolve(evolution = 0) {
    //Valida que la opción exista
    const EVOLVE = this.evolutions[evolution] || "";
    let message = "No puede evolucionar"

    if(EVOLVE){
        message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
    }
    return message;
}

}

const Charmander = new Pokemon("Charmander", "Fire", ["Charmeleon","Charizard"]);
const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle","Blastoise"]);
const Gastly = new Pokemon("Gastly", "Fantasma", ["Haunter", "Gengar",], ["Pesadilla", "Bola sombra", "Doble equipo"]);

console.log(`${Charmander.name} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0));
console.log(`${Charmander.name} es de tipo ${Charmander.type}`);

console.log("----------------------------------------------------");

console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));
console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.evolve(1));

console.log("----------------------------------------------------");

console.log(Gastly.attack(1)); */





/* ------ENCAPSULAMIENTO---------------- */
/* class Pokemon {

    #name = "";
    #type = "";
    #evolutions= [];

    constructor(name, type, evolutions, attacks){
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }
    set name (name){
        this.#name = name;
    }
    set type (type ){
        this.#type = type; 
    }
    set evolutions (evolutions){
        this.#evolutions = evolutions;

    }
    get name(){
        return this.#name;
    }
    get type (){
        return this.#type;
    }
    get evolutions(){
        return this.#evolutions;
    }


attack() {
    return `${this.#name},esta atacando`;
}

evolve(evolution = 0) {
    //Valida que la opción exista
    const EVOLVE = this.#evolutions[evolution] || "";
    let message = "No puede evolucionar"

    if(EVOLVE){
        message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
    }
    return message;
}

}

const Charmander = new Pokemon("Charmander", "Fire", ["Charmeleon","Charizard"]);
const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle","Blastoise"]);


console.log(`${Charmander.name} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0));
console.log(`${Charmander.name} es de tipo ${Charmander.type}`);

console.log("----------------------------------------------------");

console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));
console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.evolve(1));

console.log("----------------------------------------------------");
 */


/* -----------HERENCIA--------- */

class Pokemon {

    #name = "";
    #type = "";
    #evolutions= [];

    constructor(name, type, evolutions, attacks){
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }
    set name (name){
        this.#name = name;
    }
    set type (type ){
        this.#type = type; 
    }
    set evolutions (evolutions){
        this.#evolutions = evolutions;

    }
    get name(){
        return this.#name;
    }
    get type (){
        return this.#type;
    }
    get evolutions(){
        return this.#evolutions;
    }


attack() {
    return `${this.#name},esta atacando`;
}

evolve(evolution = 0) {
    //Valida que la opción exista
    const EVOLVE = this.#evolutions[evolution] || "";
    let message = "No puede evolucionar"

    if(EVOLVE){
        message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
    }
    return message;

}

}
class TypeFire extends Pokemon {
    constructor(name, evolutions){
        super(name,"fire", evolutions);

    }
    message(){
        return`Hola soy ${this.name} y soy de tipo fuego`;
    
    }
}

const Charmander = new TypeFire("Charmander", ["Charmeleon", "Charizard"]);
  Charmander.name = "gato";
    console.log(Charmander.message());






