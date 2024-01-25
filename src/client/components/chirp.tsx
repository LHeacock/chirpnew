import { Link } from "react-router-dom";
import { IChirps } from "../../server/types";
import React from 'react';


interface AppProps { }

const Chirp = (props: { chrips: IChirps }) => {
    let chirp = props.chrips;
    let linkPath = `/chirps/details/${chirp.id}`

    return (
        <Link style={{ textDecoration: "none" }} className="border col-md-3" to={linkPath}>
            <div>
                <p>{chirp.body}</p>
                <div>
                    <p>{chirp.location} at {chirp.created_at}</p>
                </div>
            </div>
        </Link>
    )
}

export default Chirp