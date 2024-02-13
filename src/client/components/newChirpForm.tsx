import { Link } from "react-router-dom";
import { IChirps, IUsers } from "../types";
import React, { useEffect, useState } from "react";

interface AppProps {}

const NewChirpForm = () => {
  const [chirpBody, setChirpBody] = useState("");
  const [location, setLocation] = useState("");
  const [userList, setUsersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState("1");

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
          user: selectedUser,
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
        <div className="form-group">
          <label>
            Select User
            <select
              onChange={(e) => {
                console.log(e.target.value);
                setSelectedUser(e.target.value);
              }}
              className="form-control"
            >
              {userList.map((user: IUsers) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.handle}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <button className="btn btn-success" type="submit" onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewChirpForm;
