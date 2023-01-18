import IVehicle from "./interfaces/IVehicle";

// Produtos concretos com diferentes implementações da interface
export default class Motorcycle implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando a entrega...");
    }
    getCargo(): void {
        console.log("Já pegamos a encomenda!");
    }
}