import Transport from "./Transport";
import Bike from "./vehicles/Bike";
import IVehicle from "./vehicles/interfaces/IVehicle";

// Criadores concretos sobrescrevem o método fábrica base para retornar um tipo diferente de produto 
export default class BikeTransport extends Transport {
    protected createTransport(): IVehicle {
        return new Bike();
    }
    
}