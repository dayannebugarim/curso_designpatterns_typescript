import IVehicle from "./vehicles/interfaces/IVehicle";

// Classe criadora declara o factory method que retorna novos objetos 
// (obs.: tipo do retorno do método de criação precisa corresponder a interface)

// Declarando como uma classe abstrata para forçar as subclasses a implementarem suas próprias versçoes do método
export default abstract class Transport {
    startTransport(): void {
        const vehicle = this.createTransport();

        vehicle.startRoute();
    }

    protected abstract createTransport(): IVehicle;
}