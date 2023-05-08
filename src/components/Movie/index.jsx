import { useState, useEffect } from 'react';
import axios from 'axios'
import './styles.css'


const movieImage = import.meta.env.VITE_Movie_Image;

function Movie( {movieData} ) {

    return (
        <div className='card'>
            {
                movieData.imageUrl === null ? (
                    <img src="../../no_image.png" alt="No image available" />
                ) : (
                    <img src={`${movieImage}${movieData.imageUrl}`} alt={movieData.name} />
                )
            }
            <div className='info'>
                <h3>{movieData.name}</h3>
                <p>{movieData.date}</p>
                <p>{movieData.vote}</p>
            </div>
        </div>
    )
}

export default Movie