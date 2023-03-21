import {Sequelize  } from "sequelize";

const db = new Sequelize('databse_app','root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db