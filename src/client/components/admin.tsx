import React, { useEffect, useState } from "react";
import { IChirps } from "../types";
import Chirp from "./chirp";

let initialChirps: IChirps[];

const Admin = () => {
  const [data, setData] = useState(initialChirps);

  useEffect(() => {
    fetch("http://localhost:3000/api/chirps")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.log("[fetch erorr]", e));
  }, []);

  function generateChirps() {
    if (data) {
      let chirps = data.map((x) => {
        return <Chirp key={x.id} chrips={x} isAdmin={true}></Chirp>;
      });

      return chirps;
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">{generateChirps()}</div>
    </div>
  );
};

export default Admin;
