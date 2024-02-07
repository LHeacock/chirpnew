import { Query } from "../sequel";

const createMention = (chirp_id: number, user_id: number) =>
  Query("INSERT INTO mentions (user_id, chirp_id) VALUES (?,?)", [
    user_id,
    chirp_id,
  ]);

const readMentions = (chirp_id: number) =>
  Query("SELECT * FROM MENTIONS where chirp_id = ?"[chirp_id]);

const getMention = (chirp_id: number, user_id: number) =>
  Query("SELECT * FROM MENTIONS where chirp_id = ? and user_id =? ", [
    chirp_id,
    user_id,
  ]);

const deleteMention = (chirp_id: number, user_id: number) =>
  Query("DELETE from mentions * where user_id = ? and chirp_id = ?", [
    user_id,
    chirp_id,
  ]);

export default { createMention, deleteMention, getMention, readMentions };
