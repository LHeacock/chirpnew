import { Link } from "react-router-dom";
import { IChirps } from "../../server/types";
import React, { useState } from 'react';


interface AppProps { }



const NewChirpForm = () => {
    const [chirpBody, setChirpBody] = useState('');
    const [location, setLocation] = useState('')

    function submitForm() {
        fetch('http://localhost:3000/api/createChirp', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                body: chirpBody,
                location: location
            })
        })
    }

    return (
        <div>
            <div className="form-group">
                <label>
                    Body:
                    <textarea className="form-control" value={chirpBody} onChange={(e) => { setChirpBody(e.target.value) }}>

                    </textarea>
                </label>
            </div>
            <div className="form-group">
                <label>
                    Location:
                    <input className="form-control" value={location} onChange={(e) => { setLocation(e.target.value) }} type="text"></input>
                </label>
                <button className="btn btn-success" type="submit" onClick={submitForm}>Submit</button>
            </div>
        </div>
    )
}

export default NewChirpForm


