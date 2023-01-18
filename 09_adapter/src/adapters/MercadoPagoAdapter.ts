import MercadoPago from "../mercadoPago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment {
    private token: Token;

    constructor (private mercadoPago: MercadoPago) {
        console.log("Adaptando o Mercado Pago utilizando os métodos e padrões do PayPal.")
    }
    
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.mercadoPago.sendMercadoPagoPayment();
    }
    paypalReceive(): void {
        return this.mercadoPago.receiveMercadoPagoPayment();
    }
    
}