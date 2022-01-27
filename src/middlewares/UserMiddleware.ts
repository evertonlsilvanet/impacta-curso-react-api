import {Request, Response, NextFunction} from 'express';
import { body, validationResult } from 'express-validator';

class UserMiddleware{

    public async getById(req: Request, res: Response, next: NextFunction){

        await body('id').exists().notEmpty().run(req);

        const errors = validationResult(req);

        if(!errors.isEmpty()) return res.status(400).send({"error": errors.array()});

        next();
    }

    public async create(req: Request, res: Response, next: NextFunction){

        await body('name').exists().notEmpty().run(req);
        await body('email').exists().notEmpty().isEmail().run(req);

        const errors = validationResult(req);

        if(!errors.isEmpty()) return res.status(400).send({"error": errors.array()});

        next();
    }

    public async updateById(req: Request, res: Response, next: NextFunction){

        await body('id').exists().notEmpty().run(req);
        await body('name').exists().notEmpty().run(req);
        await body('email').exists().notEmpty().isEmail().run(req);

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

} export default new UserMiddleware;