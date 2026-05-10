
export const SERVER_CONFIG = {
    port: Number(process.env.PORT) || 3000,
    idleTimeout: 30,
    path: "/socket.io/",
}