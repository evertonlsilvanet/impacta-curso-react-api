import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {

    public async getById(req: Request, res: Response){

        const response = await UserService.getById();
        
        return res.send({"msg": "get user data"});
    }
    
    public async create(req: Request, res: Response){

        const response = await UserService.create();

        return res.send({"msg": "create user"});
    }

    public async update(req: Request, res: Response){

        const response = await UserService.update();

        return res.send({"msg": "update user"});
    }

    public async delete(req: Request, res: Response){

        const response = await UserService.delete();

        return res.send({"msg": "delete user"});
    }
    
} export default new UserController;