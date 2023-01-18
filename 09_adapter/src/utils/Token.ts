export default class Token {
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGNvZGUgVHJlaW5hbWVudG9zIiwiaWF0IjoxNTE2MjM5MDIyfQ.Lidj-78uWk6cnp-rQFiIB7hOKAhMoYQxyp4s_Ut9IW0";

    getToken(): string {
        return this.token;
    }
}