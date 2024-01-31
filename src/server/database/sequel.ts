import mysql, { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import config from "../config";

const pool = mysql.createPool(config.dbmysql); //hide credz

export const Query = async <T = ResultSetHeader>(
  sql: string,
  values?: unknown[]
) => {
  const [rows] = await pool.query(sql, values);
  return rows as T;
};
