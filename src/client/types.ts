export interface IChirps {
    id: number,
    user_id: number,
    body: string,
    location: string,
    created_at: string
}

export interface IUsers {
    id:  number,
    handle: string,
    email: string,
    created_at: Date,
}

export interface IMetions {
    user_id: number, 
    chirp_id: number,
}

export interface IChirpDetails{
    user_id: number,
    body: string,
    location: string,
    handle: string
}
