import express from 'express';
import chirpsRouter from './chirps';

const indexRouter = express.Router()

indexRouter.use("/api/chirps", chirpsRouter)
indexRouter.use("/api/createChirp", chirpsRouter)

export default indexRouter