"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server_1 = __importDefault(require("./libraries/server"));
// Add global unhandled error handlers to prevent crashes
process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);
    // Don't exit the process
});
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    // Don't exit the process
});
const serverInstance = (0, server_1.default)();
// Add error handler for the server itself
serverInstance.on("error", (error) => {
    console.error("Server error:", error);
    // Don't exit, let the server continue handling other requests
});
