// require("dotenv").config()
// const app = require("./src/app")
// const connectToDB = require("./src/config/database")

// connectToDB()


// app.listen(3000, () => {
//     console.log("Server is running on port 3000")
// })



// require("dotenv").config()
// const app = require("./src/app")
// const connectToDB = require("./src/config/database")

// const dns = require("dns")

// dns.setServers(["1.1.1.1" , "8.8.8.8"]);

// const startServer = async () => {
//     try {
//         await connectToDB()

//         app.listen(3000, () => {
//             console.log("Server is running on port 3000")
//         })

//     } catch (err) {
//         console.log("DB connection failed:", err.message)
//         process.exit(1)
//     }
// }

// startServer()


// Q ki rener kudh internally port deta hai isliye humhe yaha nahi dena hai isliye hataya hai 




require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

const dns = require("dns")

dns.setServers(["1.1.1.1", "8.8.8.8"])

const PORT = process.env.PORT || 3000  // 👈 yeh add kar

const startServer = async () => {
    try {
        await connectToDB()

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })

    } catch (err) {
        console.log("DB connection failed:", err.message)
        process.exit(1)
    }
}

startServer()