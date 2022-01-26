import { Request, Response } from 'express';

class VehicleController {

    public async getById(req: Request, res: Response){
        return res.send({"msg": "get vehicle"});
    }
    
    public async create(req: Request, res: Response){
        return res.send({"msg": "create vehicle"});
    }

    public async update(req: Request, res: Response){
        return res.send({"msg": "update vehicle"});
    }

    public async delete(req: Request, res: Response){
        return res.send({"msg": "delete vehicle"});
    }
    
} export default new VehicleController;