import IVehicle from "./interfaces/IVehicle";

// Produtos concretos com diferentes implementações da interface
export default class Car implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando o trajeto...");
    }
    getCargo(): void {
        console.log("Pegamos os passageiros, estamos prontos!")
    }
}