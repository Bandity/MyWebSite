declare global {
    namespace NodeJS {
        interface ProcessEnv {
            environments: "dev" | "prod " | "debug"
        }
    }
}
export{}