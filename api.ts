// Import the express in typescript file
import express from "express";

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: number = 3000;

// Handling '/' Request
app.get("/", (_req, _res) => {
    _res.send("Change method to post");
});

app.post("/", (_req, _res) => {
    console.log("Received event: ");
    _res.status(400).send(
        JSON.stringify({
            statusCode: 400,
            code: "UserNotFoundException",
            Message: "User Does Not Exist",
        })
    );
});

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
		http://localhost:${port}/`);
});
