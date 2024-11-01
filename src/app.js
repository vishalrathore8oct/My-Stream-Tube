import express from "express";
import cors from "cors";

const app = express()

// CORS middleware to allow cross-origin requests
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)


// JSON middleware to parse JSON request bodies
app.use(express.json("limit", "16kb"))
// URL-encoded middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// Static middleware to serve static files
app.use(express.static("public"))


// Export the express app
export { app }