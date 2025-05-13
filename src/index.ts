import dotenv from "dotenv";
dotenv.config();

import server from "./libraries/server";

// Add global unhandled error handlers to prevent crashes
process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);
    // Don't exit the process
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    // Don't exit the process
});

const serverInstance = server();

// Add error handler for the server itself
serverInstance.on("error", (error) => {
    console.error("Server error:", error);
    // Don't exit, let the server continue handling other requests
});
