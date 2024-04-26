import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const PostModel = sequelize.define(
    'Post', 
    {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
}, 
  {
    paranoid: true
 } );
  
export default PostModel;