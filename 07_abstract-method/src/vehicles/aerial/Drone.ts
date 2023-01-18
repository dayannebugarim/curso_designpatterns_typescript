import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a decolagem...");
    }

    getCargo(): void {
        console.log("Pegamos a encomenda...");
    }
    
    checkWind(): void {
        console.log("Ventos a 25km, ventos ok!");
    } 
}