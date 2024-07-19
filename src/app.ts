import express from 'express';

class application{
    app: express.Application;
    
    constructor(){
        this.app = express();
    }

    start(){
        this.app.listen(3000, () => {
            console.log('server runnig');
        });
    }
}

export default application; 