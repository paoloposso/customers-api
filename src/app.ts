import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

export class App {
    
    public express: express.Application;
    
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
  
    private routes(): void { 

        let router = express.Router();

        router.get('/', (req, res, next) => {
            res.json({
                message: 'It´s Alive!'
            });
        });

        this.express.use('/', router);
    }
}

export default new App().express;