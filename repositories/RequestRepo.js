import connect from './db.js';
import Request from '../models/RequestModel.js';
import buildPipeline from '../files/Pipline.js';
<<<<<<< HEAD
 import { byParams, byId } from '../files/Filters.js';
=======
// import { byParams, byId } from '../files/Filters.js';
>>>>>>> ac625ac90f4f11b2e7a6a68fa41b78a422f0b0aa

class RequestRepo {
    constructor(model) {
        this.model = model;
        connect();
    }

<<<<<<< HEAD
    async getAll(params) {
        let id = byParams(params);
        const pipeline = buildPipeline(id);
=======
    async getAll() {
        const pipeline = buildPipeline();
>>>>>>> ac625ac90f4f11b2e7a6a68fa41b78a422f0b0aa
        const aggregationResult = await this.model.aggregate(pipeline).exec();
        return aggregationResult;
    }

    // async getById(id) {
    //     try {
    //         let a = byId(id );
    //         let request = await this.model.aggregate(a).exec();
    //         if (!request) {
    //             let error = new Error('request is not found');
    //             error.statusCode = 404;
    //             throw error;
    //         }
    //         return request;
    //     }
    //     catch (errors) {
    //         console.log(errors.message);
    //         throw new Error('Something wrong happened');
    //     }
    // }
    async getById(id) {
        try {
            for (const i in pipline) {
                pipline.slice(0, pipline.length, i);
            }
            // const sPipe = byId(id);
            const pipline = buildPipeline();
            let req = await this.model.aggregate(pipline).byId().exec();
            // req = req.byId(id);
            if (!req) {
                let error = new Error('req is not found');
                error.statusCode = 404;
                throw error;
            }

            return req;
        }
        catch (errors) {
            console.log(errors.message);
            throw new Error('An error occurred while retrieving the request. Please try again later');
        }
    }
    // async getById(id) {
    //     try {
    //         const sPipe = byId(id);
    //         const pipline = buildPipeline(sPipe);
    //         let req = await this.model.aggregate(pipline).exec();
    //         if (!req) {
    //             let error = new Error('req is not found');
    //             error.statusCode = 404;
    //             throw error;
    //         }

    //         return req;
    //     }
    //     catch (errors) {
    //         console.log(errors.message);
    //         throw new Error('An error occurred while retrieving the request. Please try again later');
    //     }
    // }

    async update(id, data) {
        try {
            let req = await this.model.findByIdAndUpdate( { _id: id }, 
                { 
                    statusCode: 2, 
                    volenteerCode: data.id 
                } );
            return req;
        }
        catch (errors) {
            console.log(errors.message);
            throw new Error("An error occurred while trying to update the request's status. Please try again later.");
        }
    }

 }
export default new RequestRepo(Request);