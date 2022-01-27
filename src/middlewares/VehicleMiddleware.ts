import {Request, Response, NextFunction} from 'express';
import { body, validationResult } from 'express-validator';

class VehicleMiddleware{

    public async getById(req: Request, res: Response, next: NextFunction){

        await body('id').exists().notEmpty().run(req);

        const errors = validationResult(req);

        if(!errors.isEmpty()) return res.status(400).send({"error": errors.array()});

        next();
    }

    public async getAllByUser(req: Request, res: Response, next: NextFunction){

        await body('user').exists().notEmpty().run(req);

        const errors = validationResult(req);

        if(!errors.isEmpty()) return res.status(400).send({"error": errors.array()});

        next();
    }

    public async create(req: Request, res: Response, next: NextFunction){

        await body('user').exists().notEmpty().run(req);
        await body('model').exists().notEmpty().run(req);
        await body('type').exists().notEmpty().run(req);
        await body('color').exists().notEmpty().run(req);

        const errors = validationResult(req);

        if(!errors.isEmpty()) return res.status(400).send({"error": errors.array()});

        next();
    }

    public async updateById(req: Request, res: Response, next: NextFunction){

        await body('id').exists().notEmpty().run(req);
        await body('user').exists().notEmpty().run(req);
        await body('model').exists().notEmpty().run(req);
        await body('type').exists().notEmpty().run(req);
        await body('color').exists().notEmpty().run(req);

        const errors = validationResult(req);

        if(!errors.isEmpty()) return res.status(400).send({"error": errors.array()});

        next();
    }

    public async deleteById(req: Request, res: Response, next: NextFunction){

        await body('id').exists().notEmpty().run(req);

        const errors = validationResult(req);

        if(!errors.isEmpty()) return res.status(400).send({"error": errors.array()});

        next();
    }

} export default new VehicleMiddleware;