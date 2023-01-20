import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform {
    constructor() {
        this.configureRMTP();
        console.log("Facebook: Transmissão foi iniciada!");
    }
    
    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: Configurando o broadcasting");
    }

    authToken(): void {
        console.log("Facebook: Autorizando a aplicação!");
    }   
}