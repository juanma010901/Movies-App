import { useState, useEffect } from 'react';
import Movie from '../../components/Movie';
import Navbar from '../../components/Navbar';
import axios from 'axios'
import './styles.css'

const popularMovies = import.meta.env.VITE_Get_Popular_Movies;
const apiKey = import.meta.env.VITE_Api_Key;

function PopularMovies() {
    const [cardsData, setCardsData] = useState();

    useEffect(() => {
        axios.get(`${popularMovies}`, {
                params: {
                    api_key: apiKey,
                    language: 'es',
                    page: 1,
                }
            })
            .then(response => {
                setCardsData(response.data.results)
                // console.log(response.data.results)
            })
            .catch(error => {
                console.error(error)
            })
    }, [cardsData])

    return (
        <div>
            <Navbar />
            <div className="cards-view">
                {cardsData &&
                    cardsData.map(card => (
                        <Movie key={card.id}
                            movieData={{
                                name: card.title,
                                date: card.release_date,
                                imageUrl: card.poster_path,
                                vote : card.vote_average,
                            }}
                        />
                    ))}
            </div>
        </div>
    )
}

export default PopularMovies;