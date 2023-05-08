import { useState, useEffect } from 'react';
import Movie from '../../components/Movie';
import Navbar from '../../components/Navbar';
import axios from 'axios'
import { useParams } from "react-router-dom"
import './styles.css'

const searchMovies = import.meta.env.VITE_Get_Movies_By_Name;
const apiKey = import.meta.env.VITE_Api_Key;

function SearchMovies() {
    const [cardsData, setCardsData] = useState();
    let {name} = useParams()

    useEffect(() => {
        axios.get(`${searchMovies}`, {
                params: {
                    query: name,
                    api_key: apiKey,
                    language: 'es',
                    page: 1,
                    include_adult: false,
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

export default SearchMovies;