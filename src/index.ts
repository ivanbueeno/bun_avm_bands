import { creareServer } from "./server";

const configServer = creareServer();

console.log(`Servidor iniciado en el puerto ${ configServer.port }`);