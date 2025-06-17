import 'dotenv/config'
import connectDB from './db/index.js';
import app from './app.js';

const PORT = process.env.PORT || 4000

connectDB()
.then(() =>{
    app.on("error", (error) =>{
        console.log("ERR:", error)
        throw error
    })
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}
)
.catch((err) => {
    console.log("MongoDB connection failed", err)
    process.exit(1)
})

