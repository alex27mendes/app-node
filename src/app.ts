import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

class App {
    public express: express.Application

    constructor(){
        this.express = express();
       // this.database();
        this.routes();
    }
    private middlewares(){
        this.express.use(express.json())
        this.express.use(cors())
    }
    private database(): void{
        mongoose.connect('mongoo', {useNewUrlParser: true})


    }
    public routes(): void{
        // this.express.get('/', (req, res)=>{
        //     return res.send('Hello world');
        // })
        this.express.use(routes);
    }
}
export default new App().express
