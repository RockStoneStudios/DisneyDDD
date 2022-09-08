import {Sequelize} from 'sequelize';

const db = new Sequelize('disneysql','root','',{
    host : 'localhost',
    dialect : 'mysql'
});


export default db;
