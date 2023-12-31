import "express-async-errors";
import "reflect-metadata";
import "../../container";

import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerFile from '../../../swagger.json';

import { router } from './routes';
import { AppError } from '@shared/errors/AppError';
import { appDataSource } from "database/datasource";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve , swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) =>{

    console.log(err)
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}` 
    });
})

appDataSource.initialize().then( async ()=>{
    console.log("Connect to database");
})
app.listen(3333, () => console.log("Server is running! in port 3333"));