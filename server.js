import app from "./src/app.js";
import { config } from "dotenv";
import { sequelize } from "./src/config/dbConnection.js";
config()
const {PORT} = process.env



const main = async () =>{

    try{
        await sequelize.authenticate();
        console.log("\n DATABASE CONNECTED \n")

        app.listen(PORT,"127.0.0.1",1, ()=>{
            console.log(`SERVER RUNNING on 127.0.0.1:${PORT}`)
        })
    }
    catch(err){
            console.error(err.message)
    }
}

main()




