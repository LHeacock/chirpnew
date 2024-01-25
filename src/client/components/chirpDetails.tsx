import { useParams } from "react-router-dom";
import { IChirpDetails } from "../types"
import React, { useState, useEffect } from 'react';

let chirpDetails: IChirpDetails

const ChirpDetails = () => {
    const [details, setDetails] = useState(chirpDetails)

    const { chirp_id } = useParams();

    function generateChirpDetails() {
        if (details) {
            return (
                <div>
                    <h4>{details.handle}</h4>
                    <p>{details.body}</p>
                    <p>{details.location}</p>
                </div>
            )
        }
    }

    useEffect(() => {
        fetch(`http://localhost:3000/api/chirps/${chirp_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
            })
            .catch(e => console.log('[fetch erorr]', e));
    }, []);//parsing needs to be consistent rather server side or react side!

    return (
        generateChirpDetails()
    )
}

export default ChirpDetails