import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {

    public async getById(req: Request, res: Response){

        try {

            const response = await UserService.getById(req.body);

            return res.send(response);
            
        } catch (error) {
            return res.status(400).send({"error": error});
        }
    }
    
    public async create(req: Request, res: Response){

        try {

            const response = await UserService.create(req.body);

            return res.send(response);
            
        } catch (error) {
            return res.status(401).send({"error": error});
        }

    }

    public async updateById(req: Request, res: Response){

        try {

            const response = await UserService.updateById(req.body);

            return res.send(response);
            
        } catch (error) {
            return res.status(400).send({"error": error});
        }
    }

    public async deleteById(req: Request, res: Response){

        try {

            const response = await UserService.deleteById(req.body);

            return res.send(response);
            
        } catch (error) {
            return res.status(400).send({"error": error});
        }
    }
    
} export default new UserController;