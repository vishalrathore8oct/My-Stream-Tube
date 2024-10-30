import 'dotenv/config'
import express from "express";

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.status(200).send(`<h1>Hello This is our Home Page of MyStreamTube App</h1>`)
})

app.listen(port, () => {
    console.log(`Your Server is Runnig on Port http://localhost:${port}`);
})