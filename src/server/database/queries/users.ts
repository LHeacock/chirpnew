import { Query } from "../sequel";
import { IUsers } from "../../types";

const getAll = () => Query<IUsers[]>("SELECT * FROM users");

export default { getAll };
