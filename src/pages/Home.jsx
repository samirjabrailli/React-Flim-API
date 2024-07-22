const API_KEY ='9e0709d6'
import React, { useState, useEffect } from 'react';
import './home.css'

const Home = () => {
  const [query, setQuery] = useState('Film');
    const [films, setFilms] = useState([]);
  
  
    useEffect(()=> {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
        .then(res=>res.json())
        .then(data=>setFilms(data))
    }, [query])
  
    function getFilm() {
     console.log("Click");
    }
    console.log(films);
  
  
    if(films.length===0) {
      return <div>Loading...</div>
    }

    return (
      <div className='container-2'>
        <h1 className="text-center">Film API</h1>
        <h1 className="film">Search Film</h1>
        <div className="move">
          <input
            type="text"
            id="FilmApi"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            defaultValue={"Film"}
          />
  
  
      <div className="list">
        {
          films.Search?.map((film,i)=>(
            <div onClick={getFilm} className='searchFilmContainer' key={i}>
               {
                film.Poster !== "N/A" ? <img className='searchPoster' src={film.Poster}  /> : <img src="https://media.istockphoto.com/id/1332138455/photo/cool-photo-placeholder-real-macro-photo-of-35mm-film-strip-fixed-by-tape-or-sellotape-all.webp?b=1&s=170667a&w=0&k=20&c=cbDRBUOadmX9AzzkkHTmvdr4dNeJ8Y8MqR_Mmuum6qY=" alt="" />
               }
                <span>{film.Title}</span>
             </div>
          ))
        }
        </div>
  
        </div>
      
      </div>
    )
};

export default Home