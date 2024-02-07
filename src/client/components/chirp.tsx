import { Link } from "react-router-dom";
import { IChirps } from "../types";
import React from "react";

interface AppProps {}

const Chirp = (props: { chrips: IChirps; isAdmin: boolean }) => {
  let chirp = props.chrips;
  let linkPath = `/chirps/details/${chirp.id}`;

  async function deleteChirp(e: any) {
    let chirpId = e.target.parentNode.id;

    try {
      const res = await fetch("http://localhost:3000/api/chirps", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: chirpId,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        location.reload();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("network error when making chirps");
    }
  }

  function makeChirp() {
    return (
      <div id={chirp.id.toString()} className="border col-md-3">
        <Link style={{ textDecoration: "none" }} to={linkPath}>
          <div>
            <p>{chirp.body}</p>
            <div>
              <p>
                {chirp.location} at {chirp.created_at}
              </p>
            </div>
          </div>
        </Link>
        {props.isAdmin && (
          <div>
            {" "}
            <button
              type="button"
              disabled={!props.isAdmin}
              className="btn btn-info"
            >
              Edit
            </button>
            <button
              type="button"
              disabled={!props.isAdmin}
              className="btn btn-danger"
              onClick={(e) => deleteChirp(e)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }

  return makeChirp();
};

export default Chirp;
