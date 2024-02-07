import { Link } from "react-router-dom";
import { IChirps } from "../types";
import React, { useState } from "react";

interface AppProps {}

const NewChirpForm = () => {
  const [chirpBody, setChirpBody] = useState("");
  const [location, setLocation] = useState("");

  async function submitForm() {
    if (!location || !chirpBody) {
      return alert("you scallywag");
    }
    try {
      const res = await fetch("http://localhost:3000/api/chirps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: chirpBody,
          location: location,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        alert(`/chirp/details/$data.id}`);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("network error when making chirps");
    }
  }

  return (
    <div>
      <div className="form-group">
        <label>
          Body:
          <textarea
            className="form-control"
            value={chirpBody}
            onChange={(e) => {
              setChirpBody(e.target.value);
            }}
          ></textarea>
        </label>
      </div>
      <div className="form-group">
        <label>
          Location:
          <input
            className="form-control"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
          ></input>
        </label>
        <button className="btn btn-success" type="submit" onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewChirpForm;
