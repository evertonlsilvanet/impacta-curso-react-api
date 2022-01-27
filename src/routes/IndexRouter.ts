import express from 'express';
import IndexController from '../controllers/IndexController';
import UserController from '../controllers/UserController';
import VehicleController from '../controllers/VehicleController';
import UserMiddleware from '../middlewares/UserMiddleware';
import VehicleMiddleware from '../middlewares/VehicleMiddleware';

class ViewRouter{

    constructor(express: express.Application){
        this.routes(express);
    }

    private routes(express: express.Application){

        /* General */

        express
        .route('/ola')
        .get(
            IndexController.ola
        );

        /* User */
        
        express
        .route('/user/get')
        .get(
            UserMiddleware.updateById,
            UserController.getById
        );

        express
        .route('/user/create')
        .post(
            UserMiddleware.create,
            UserController.create
        );

        express
        .route('/user/update')
        .post(
            UserMiddleware.updateById,
            UserController.updateById
        );

        express
        .route('/user/delete')
        .post(
            UserMiddleware.deleteById,
            UserController.deleteById
        );

        /* Vehicle */

        express
        .route('/vehicle/get')
        .get(
            VehicleMiddleware.getById,
            VehicleController.getById
        );

        express
        .route('/vehicle/getAllByUser')
        .get(
            VehicleMiddleware.getAllByUser,
            VehicleController.getAllByUser
        );

        express
        .route('/vehicle/create')
        .post(
            VehicleMiddleware.create,
            VehicleController.create
        );

        express
        .route('/vehicle/update')
        .post(
            VehicleMiddleware.updateById,
            VehicleController.updateById
        );

        express
        .route('/vehicle/delete')
        .post(
            VehicleMiddleware.deleteById,
            VehicleController.deleteById
        );

    }

} export default ViewRouter;