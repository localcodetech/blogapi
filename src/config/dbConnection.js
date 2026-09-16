import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

const {NEON_DATABASE_URL} = process.env

export const sequelize = new Sequelize(NEON_DATABASE_URL, {
    dialect: "postgres"
})