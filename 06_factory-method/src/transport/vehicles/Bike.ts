import IVehicle from "./interfaces/IVehicle";

// Produtos concretos com diferentes implementações da interface
export default class Bike implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando entrega com bike...");
    }
    getCargo(): void {
        console.log("Já pegamos a encomenda!");
    }
}