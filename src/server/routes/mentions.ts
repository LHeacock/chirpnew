import express from "express";
import dbMentions from "../database/queries/mentions";

const mentionRouter = express.Router();

mentionRouter.post("/", async (req, res) => {
  try {
    let user_id = req.body.user_id;
    let chirp_id = req.body.chirp_id;
    const results = await dbMentions.createMention(chirp_id, user_id);
    res.status(200).json({ message: "hell yeee buddy", id: results.insertId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "no mentions?" });
  }
});
mentionRouter.delete("/", async (req, res) => {
  try {
    let user_id = req.body.user_id;
    let chirp_id = req.body.chirp_id;
    await dbMentions.deleteMention(chirp_id, user_id);
    res.status(200).json({ message: "gone like tears in the rain" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "im sorry john, i cant do that" });
  }
});

mentionRouter.get("/:chillidog", async (req, res) => {
  try {
    let id = Number(req.params.chillidog);
    let results = await dbMentions.readMentions(id);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No mention4u" });
  }
});

mentionRouter.get("/", async (req, res) => {
  try {
    let user_id = req.body.user_id;
    let chirp_id = req.body.chirp_id;
    let chirpDetails = await dbMentions.getMention(chirp_id, user_id);
    res.json(chirpDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ain't here" });
  }
});

export default mentionRouter;
