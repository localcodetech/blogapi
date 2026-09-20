import dotenv from "dotenv"
import app from "./src/app.js";
import sequelize from "./src/database/dbConfig.js";


dotenv.config();


const {PORT} = process.env;


const runServer =async ()=>{


    try {

            await sequelize.authenticate()
            console.log("\n DATABASE CONNECTED \n")
        app.listen(PORT, ()=>{
            console.log("EXPRESS SERVER RUNNING ")
        })
    }
    catch(error){
        console.error(error.message)
    }

};


runServer()