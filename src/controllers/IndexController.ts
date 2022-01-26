import { Request, Response } from 'express';

class IndexController {
    
    public async ola(req: Request, res: Response){
        return res.send({"msg": "Olá Mundo!"});
    }
    
} export default new IndexController;