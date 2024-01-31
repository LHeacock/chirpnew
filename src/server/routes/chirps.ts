import express from "express";
import dbChirps from "../database/queries/chirps";

const chirpsRouter = express.Router();

chirpsRouter.get("/", async (req, res) => {
  try {
    let results = await dbChirps.getChirps();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No chirp4u" });
  }
});

chirpsRouter.get("/:puddle", async (req, res) => {
  try {
    let id = Number(req.params.puddle);
    let chirpDetails = await dbChirps.getChirpDetails(id);
    res.json(chirpDetails[0]); //sends purely that single chirp object, still an array
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No chirp4u" });
  } //do this for every error!!! no if statements
  //send singular
});

chirpsRouter.post("/", async (req, res) => {
  try {
    let body = req.body.body;
    let location = req.body.location;
    const results = await dbChirps.createChirp(body, location);
    res
      .status(200)
      .json({ message: "HELL YEAH BRUTHER", id: results.insertId }); //DOM kick the user back to the page
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No chirp4u" });
  }
});

chirpsRouter.put("/:bean", async (req, res) => {
  try {
    let id = Number(req.params.bean); //placeholder variable, convert it to a number
    let body = req.body.body;
    await dbChirps.updateChirp(id, body);
    res.status(200).json({ message: "HELL YEAH BRUTHER" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `${error}` });
  }
}); //bean=chirpId variable

chirpsRouter.delete("/:cello", async (req, res) => {
  try {
    let id = Number(req.params.cello);
    await dbChirps.deleteChirp(id);
    res.status(200).json({ message: "HELL YEAH BRUTHER" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "im sorry john, i cant do that" });
  }
});

//crud operations here
//three routes
//post/pull request

export default chirpsRouter;
