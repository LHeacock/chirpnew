import express from 'express';
import chirpsRouter from './chirps';

const indexRouter = express.Router()

indexRouter.use("/api/chirps", chirpsRouter) //beginning of the url
//url - get all, singular use


export default indexRouter