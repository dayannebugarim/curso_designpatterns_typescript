import chalk from 'chalk';
import Middleware from "./Middleware";

export default class CheckPasswordStrength extends Middleware {
    public check(email: string, password: string): boolean {
        if(password === '123456') {
            console.log(chalk.yellow("Senha fraca. É recomendado trocar para uma senha mais segura."));
            return true;
        }

        return this.next.check(email, password);
    }
    
}