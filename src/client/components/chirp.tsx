import { Link } from "react-router-dom";
import { IChirps, IUsers } from "../types";
import React, { useEffect, useState } from "react";

interface AppProps {}

let intialList: IUsers[];

const Chirp = (props: { chrips: IChirps; isAdmin: boolean }) => {
  let chirp = props.chrips;
  let linkPath = `/chirps/details/${chirp.id}`;
  const [userList, setUsersList] = useState(intialList);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        let handles = data.map((x: IUsers) => {
          return x;
        });
        setUsersList(handles);
      })
      .catch((e) => console.log("[fetch erorr]", e));
  }, []);

  async function deleteChirp(chirpIdToDelete: number) {
    let chirpId = chirpIdToDelete;
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
    console.log(userList);
    return (
      <div id={chirp.id.toString()} className="border col-md-3">
        <Link style={{ textDecoration: "none" }} to={linkPath}>
          {userList && (
            <h4>{userList.find((x) => x.id == chirp.user_id).handle}</h4>
          )}
          <div>
            <p>{chirp.body}</p>
            <div>
              <p>
                {chirp.location} at{" "}
                {new Date(chirp.created_at).toLocaleString()}
              </p>
            </div>
          </div>
        </Link>
        {props.isAdmin && (
          <div>
            {" "}
            <button type="button" className="btn btn-info">
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteChirp(chirp.id)}
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
