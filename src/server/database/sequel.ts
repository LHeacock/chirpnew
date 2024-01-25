import mysql, { ResultSetHeader, RowDataPacket } from 'mysql2/promise'

const pool = mysql.createPool({
    host: "localhost",
    user: "lizlaughlove",
    password: "puddles42!",
    database: "toadstool",
});


export const Query = async <T = ResultSetHeader> (sql: string, values?: unknown[]) => {
    const [rows] = await pool.query(sql, values);
    return rows as T; 
    }

//