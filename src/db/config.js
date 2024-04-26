import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('express', 'postgres', '1234@Zain', {
    host: 'localhost',
    dialect:  'postgres'
  });

  const connectDB = async()=> {
    try 
    {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } 
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default sequelize;
export {connectDB};