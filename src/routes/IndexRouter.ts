import express from 'express';
import IndexController from '../controllers/IndexController';
import UserController from '../controllers/UserController';
import VehicleController from '../controllers/VehicleController';

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
            UserController.getById
        );

        express
        .route('/user/create')
        .post(
            UserController.create
        );

        express
        .route('/user/update')
        .post(
            UserController.update
        );

        express
        .route('/user/delete')
        .post(
            UserController.delete
        );

        /* Vehicle */

        express
        .route('/vehicle/get')
        .get(
            VehicleController.getById
        );

        express
        .route('/vehicle/create')
        .post(
            VehicleController.create
        );

        express
        .route('/vehicle/update')
        .post(
            VehicleController.update
        );

        express
        .route('/vehicle/delete')
        .post(
            VehicleController.delete
        );

    }

} export default ViewRouter;