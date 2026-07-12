import { ThemeDialogContent } from "../dialogs/theme-dialog";
import type { Command } from "./types";

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: "Start a new conversation",
        value: "/new",
        action: (ctx) => {
            ctx.toast.show({
                message: "Starting a new conversation...",
            });
        }
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
        value: "/usage",
        action: (ctx) => {
            ctx.toast.show({
                message: "Opening billing portal...",
            });
        }
    },
    {
        name: "upgrade",
        description: "Buy more credits or upgrade your plan",
        value: "/upgrade",
        action: (ctx) => {
            ctx.toast.show({
                message: "Opening credits checkout...",
            });
        }
    },
    {
        name: "logout",
        description: "Logout from the application",
        value: "/logout",
        action: (ctx) => {
            ctx.toast.show({
                message: "Logging out...",
            });
        }
    },
    {
        name: "login",
        description: "Login to the application",
        value: "/login",
        action: (ctx) => {
            ctx.toast.show({
                message: "Opening browser to login...",
            });
        }
    },
    {
        name: "theme",
        description: "Change color theme",
        value: "/theme",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Select Theme",
                children: <ThemeDialogContent />
            })
        }
    },
    {
        name: "sessions",
        description: "Browse past sessions",
        value: "/sessions",
        action: (ctx) => {
            ctx.toast.show({
                message: "Opening past sessions...",
            });
        }
    },
    {
        name: "models",
        description: "Select AI model for generation",
        value: "/models",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Select AI Model",
                children: <text>Model selection coming soon.</text>
            });
        }
    },
    {
        name: "agents",
        description: "Switch agents",
        value: "/agents",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Switch Agents",
                children: <text>Agent selection coming soon.</text>
            });
        }
    }
]