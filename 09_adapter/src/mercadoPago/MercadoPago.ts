import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment {
    private token: Token;

    authToken(): Token {
        return new Token();
    }

    sendMercadoPagoPayment(): void {
        this.token = this.authToken();
        console.log(`TOKEN: ${this.token.getToken()}`)
        console.log("Enviando pagamentos via Mercado Pago.")
    }

    receiveMercadoPagoPayment(): void {
        console.log("Recebendo pagamentos via Mercado Pago.")
    }
    
}