import type { Command } from "./types";

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: "Start a new conversation",
        value: "/new"
    },
    {
        name: "exit",
        description: "Exit the application",
        value: "/exit",
        action: (ctx) => {
            ctx.exit();
        }
    },
    {
        name: "usage",
        description: "Open billing portal in your browser",
        value: "/usage"
    },
    {
        name: "upgrade",
        description: "Buy more credits or upgrade your plan",
        value: "/upgrade"
    },
    {
        name: "logout",
        description: "Logout from the application",
        value: "/logout"
    },
    {
        name: "login",
        description: "Login to the application",
        value: "/login"
    },
    {
        name: "theme",
        description: "Change color theme",
        value: "/theme"
    },
    {
        name: "sessions",
        description: "Browse past sessions",
        value: "/sessions"
    },
    {
        name: "models",
        description: "Select AI model for generation",
        value: "/models"
    },
    {
        name: "agents",
        description: "Switch agents",
        value: "/agents"
    }
]