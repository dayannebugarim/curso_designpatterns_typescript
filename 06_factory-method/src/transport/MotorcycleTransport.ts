import Transport from "./Transport";
import IVehicle from "./vehicles/interfaces/IVehicle";
import Motorcycle from "./vehicles/Motorcycle";

// Criadores concretos sobrescrevem o método fábrica base para retornar um tipo diferente de produto 
export default class MotorcycleTransport extends Transport {
    protected createTransport(): IVehicle {
        return new Motorcycle();
    }
}