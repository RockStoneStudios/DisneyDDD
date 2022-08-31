import express,{Application,Request,Response} from 'express';
import dotenv from 'dotenv';
import DB from './User/infrastructure/DB/connection';
import characterSql from './Character/infrastructure/DB/connection';
import movieRoutes from './Movies_Series/infrastructure/Routes/movieRouter';
import userRoutes from './User/infrastructure/Routes/userRouter';
import characterRoutes from './Character/infrastructure/Routes/characterRouter';

class Server {
    private app:Application ;
    private port:number;
    private apiPath = {
         user : '/api/user',
         character : '/api/character',
         movie : '/api/movies'
    }

    constructor() {
        dotenv.config();
        this.app= express();
        this.Middlewares();
        this.port = parseInt(<string>process.env.PORT) || 3000;
        this.Routes();
        this.Listen();
        this.DbInithialize();
    }

    public Middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}));
    }

    public Listen() {
        this.app.listen(this.port,()=>{
            console.log('Starting Server on Port --> '+this.port)
        })
    }
    public async  DbInithialize(){
        DB;
        await characterSql.sync({force : false}).then(()=>console.log('DB Character SQL Connected Successful'))
                                         .catch(error => console.log(error));
                                    
        
    }

    public Routes() {
        this.app.use(this.apiPath.user,userRoutes);
        this.app.use(this.apiPath.character,characterRoutes);
        this.app.use(this.apiPath.movie,movieRoutes);
    }



}


new Server();