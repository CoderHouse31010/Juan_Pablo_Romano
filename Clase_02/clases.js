class Auto {
    constructor(color, fecha, marca, modelo, precio, patente, ruedas, traccion, motor, puertas) {
        this.color = color;
        this.fecha = fecha;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.patente = patente;
        this.ruedas = ruedas;
        this.traccion = traccion;
        this.motor = motor;
        this.puertas = puertas;        
    }
}

let miAuto1 = new Auto("negro", 2014, "Ford", "K", 1000000, "AZW123", 4, "delantera", "1.6", 2);
let miAuto2 = new Auto("Verde", 2014, "Ford", "K", 1500000, "AZW124", 4, "delantera", "1.6", 2);

console.log(miAuto1);
console.log(miAuto2);