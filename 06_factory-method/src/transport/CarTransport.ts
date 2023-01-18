import Transport from "./Transport";
import Car from "./vehicles/Car";
import IVehicle from "./vehicles/interfaces/IVehicle";

// Criadores concretos sobrescrevem o método fábrica base para retornar um tipo diferente de produto 
export default class CarTransport extends Transport {
    protected createTransport(): IVehicle {
        return new Car()
    }
}