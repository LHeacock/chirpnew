import React, { useState, useEffect } from "react";

import { IChirps } from "../types";
import Chirp from "./chirp";
import Navbar from "./navbar";

let initialChirps: IChirps[];

const Home = () => {
  const [data, setData] = useState(initialChirps);

  function generateChirps() {
    if (data) {
      let chirps = data.map((x) => {
        return <Chirp key={x.id} chrips={x} isAdmin={false}></Chirp>;
      });

      return chirps;
    }
  }

  useEffect(() => {
    fetch("http://localhost:3000/api/chirps")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.log("[fetch erorr]", e));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">{generateChirps()}</div>
    </div>
  );
};

export default Home;
