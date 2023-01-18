import Helicopter from "../aerial/Helicopter";
import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Motorcycle from "../land/Motorcycle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory {
    createTransportVehicle(): ILandVehicle {
        return new Motorcycle();
    }
    
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }
}