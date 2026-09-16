import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection.js";



const User = sequelize.define("User", {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },

    uuid : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    username : {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        allowNull: false
    },

    password : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.sync();
export default User;