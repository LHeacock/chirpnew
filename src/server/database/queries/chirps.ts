import { Query } from "../sequel";
import { IChirpDetails, IChirps } from "../../types";



//leave user_id as 1 for create
const createChirp = (body: string, location: string) => Query("INSERT INTO chirps (user_id,body, location) VALUES (?,?,?)", [1, body, location]);
const getChirps = () => Query<IChirps[]>("SELECT * from chirps");
const getChirpsForUser = (user_id: number) => Query<IChirps[]>("SELECT * from chirps where user_id = ?", [user_id]); //CLIENT SIDE
const updateChirp = (id: number, body: string) => Query("UPDATE chirps SET body = ? where id = ?", [body, id])
const deleteChirp = (id: number) => Query("DELETE from chirps where id = ?", [id]);

const getChirpDetails = (chirp_id: number) => Query<IChirpDetails[]>(`select user_id, body, location, c.created_at, u.handle from chirps as c
join users as u on u.id = user_id
where c.id = ?`, [chirp_id])


export default { createChirp, getChirps, getChirpsForUser, updateChirp, deleteChirp, getChirpDetails }

//thumbs up
//query file, 