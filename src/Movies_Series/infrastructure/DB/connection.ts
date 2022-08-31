import {Sequelize} from 'sequelize';

const db = new Sequelize('dddisneysql','root','3105060237',{
    host : 'localhost',
    dialect : 'mysql'
});


export default db;
