import { Sequelize } from "sequelize";
import { config } from "dotenv";
import redis from "redis"
config();

const {NEON_DATABASE_URL, REDIS_IP} = process.env

export const sequelize = new Sequelize(NEON_DATABASE_URL, {
    dialect: "postgres"
})


export const redisConnection = async()=>{

    const redisConnect = redis.createClient({url:REDIS_IP});
    

    return redisConnect

}
