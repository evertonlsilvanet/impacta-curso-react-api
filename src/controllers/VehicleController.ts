import { Request, Response } from 'express';
import VehicleService from '../services/VehicleService';

class VehicleController {

    public async getById(req: Request, res: Response){
        
        try {

            const response = await VehicleService.getById(req.body);

            return res.send(response);
            
        } catch (error) {
            return res.status(400).send({"error": error});
        }
    }

    public async getAllByUser(req: Request, res: Response){
        
        try {

            const response = await VehicleService.getAllByUser(req.body);

            return res.send(response);
            
        } catch (error) {
            return res.status(400).send({"error": error});
        }
    }
    
    public async create(req: Request, res: Response){
        
        try {

            const response = await VehicleService.create(req.body);

            return res.send(response);
            
        } catch (error) {
            return res.status(400).send({"error": error});
        }
    }

    public async updateById(req: Request, res: Response){
        
        try {

            const response = await VehicleService.updateById(req.body);

            return res.send(response);
            
        } catch (error) {
            return res.status(400).send({"error": error});
        }
    }

    public async deleteById(req: Request, res: Response){
        
        try {

            const response = await VehicleService.deleteById(req.body);

            return res.send(response);
            
        } catch (error) {
            return res.status(400).send({"error": error});
        }
    }
    
} export default new VehicleController;