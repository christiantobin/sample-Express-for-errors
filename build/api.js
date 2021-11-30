"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express in typescript file
const express_1 = __importDefault(require("express"));
// Initialize the express engine
const app = express_1.default();
// Take a port 3000 for running server.
const port = 3000;
// Handling '/' Request
app.get("/", (_req, _res) => {
    _res.send("Change method to post");
});
app.post("/", (_req, _res) => {
    console.log("Received event: ");
    _res.status(400).send(JSON.stringify({
        statusCode: 400,
        code: "UserNotFoundException",
        Message: "User Does Not Exist",
    }));
});
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
		http://localhost:${port}/`);
});
