import Token from "../utils/Token";

export default interface IMercadoPagoPayment {
    authToken(): Token;

    sendMercadoPagoPayment(): void;

    receiveMercadoPagoPayment(): void;
}