import dotenv from "dotenv"
import { app } from "./app.js"
import connectDB from "./db/index.js"

dotenv.config({path: "./.env"})

const PORT = process.env.PORT || 3000

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Your Server is Runnig on PORT http://localhost:${PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection Failed", error);
    
})