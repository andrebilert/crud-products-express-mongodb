import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import cors from 'cors';

class app {
    public express: express.Application

    public constructor() {
        this.express = express();
        this.middleware();
        this.database();
        this.routes();
    }

    private middleware() {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private async database() {
        try{
            mongoose.set('strictQuery', true);
            await mongoose.connect('mongodb://0.0.0.0:27017/EstudoProva')
            console.log("Connect database sucess");             
        }catch(err){
            console.log("Connect database error");
        }
    }

    private routes(): void{
        this.express.use(routes)
    }
}

export default new app().express