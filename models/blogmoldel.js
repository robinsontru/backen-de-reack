//impor la db 
import  db from "../database/db.js";

import { DataTypes  } from "sequelize";
const blogsmodels = db.define('blogs',{
    title:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING},

})

export default blogsmodels