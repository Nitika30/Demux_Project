import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {
    const params = useParams();

    // useEffect(() => {
    //     axios.get(uri, axiosHeaders)
    //     .then(response => setDetails(response.data))
    //     .catch(err => console.group(err))
    // }, []);
    /**
     * Call server with imdbID
     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
     * const imdbID = params.imdbID;
     */
    return (
       <p> Details page : Imdb ID {params.imdbID}</p>
    )
}