import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const CommentModel = sequelize.define(
    'Comment', 
    {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false
    },
}, 

  {
    paranoid: true
 } );
  
  export default CommentModel;