import './styles.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const [movieName, setMovieName] = useState()

    let navigate = useNavigate()

    const goToMovie = (e) => {
        e.preventDefault();
        navigate(`/Movies-App/buscar/${movieName}`)
    }

    return (
        <>
            <nav className='navbar'>
                <a href="/Movies-App"><img src="../../logo.svg" alt="Movie-App" id="icon"/></a>
                <h2 id="title">Movie App</h2>
                <div className="buscar">
                    <button className="boton-nav" id="cancelar" type="submit">
                        <span className="material-symbols-outlined close">&times;</span>
                    </button>
                    <input type="text" id="name" placeholder="Nombre de la Pelicula" onChange={(evento) => setMovieName(evento.target.value)}/>
                    <button className="boton-nav" type="submit" onClick={goToMovie}>Buscar</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
