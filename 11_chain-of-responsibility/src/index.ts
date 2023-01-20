import * as readline from "readline";
import CheckPasswordStrength from "./middlewares/CheckPasswordStrength";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";

declare var process;

const server = new Server();

function setPromptQuestions() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite o seu e-mail: ", email => {
        rl.question("Digite a sua senha: ", password => {
            server.login(email, password);

            rl.close();
        })
    });

    rl.on("close", setPromptQuestions);
}

const middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());

middleware.linkWith(new CheckPasswordStrength());

server.setMiddleWare(middleware);

setPromptQuestions();