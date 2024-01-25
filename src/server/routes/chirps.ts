import express from 'express'
import dbChirps from '../database/queries/chirps'


const chirpsRouter = express.Router()

chirpsRouter.get('/', async (req, res) => {
    try {
        let results = await dbChirps.getChirps()
        res.json(results)

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'No chirp4u' });

    }

})

chirpsRouter.get('/:puddle', async (req, res) => {
    try {
        let id = Number(req.params.puddle)
        let chirpDetails = await dbChirps.getChirpDetails(id);
        res.json(chirpDetails[0]) //sends purely that single chirp object, still an array 
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'No chirp4u' });
    }//do this for every error!!! no if statements
})

chirpsRouter.post('/createChirp', async (req, res) => {
    try {
        let body = req.body.body;
        let location = req.body.location;
        await dbChirps.createChirp(body, location);
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'No chirp4u' });
    }

}
)

chirpsRouter.post('/updateChirp', async (req, res) => {
    try {
        let id = req.body.chirpId;
        let body = req.body.body
        await dbChirps.updateChirp(id, body);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: `${error}` })
    }
})

chirpsRouter.post("/deletChirp/:id", async (req, res) => {
    try {
        let id = req.params.id;
        await dbChirps.deleteChirp(parseInt(id))
    } catch (error) {

    }
})



//crud operations here 
//three routes 
//post/pull request 


export default chirpsRouter
