import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router';

function MoviesCard(props) {
  const location = useLocation();
  const [isSaved, setIsSaved] = React.useState(false);
  
  function handleSaveMovie() {
    if (isSaved) {
      setIsSaved(false);
    } else {
      setIsSaved(true);
    }
  };

  return (
    <figure className='movies-card'>
      <div className="movie__container">
        <img src={props.movie.src} alt={props.movie.title} className='movies-card__image' />
        {location.pathname === '/saved-movies' && (
              <button
              className='movies-card__btn movies-card__btn_type_close'
              />
            )}
        {location.pathname === '/movies' && (
          <button onClick={handleSaveMovie}
          className={`movies-card__btn movies-card__btn_type_${
            isSaved ? 'like' : 'save'
          }`}
          />
          )}
      </div>
      <figcaption className='movies-card__text-block'> 
            <p className='movies-card__title'>{props.movie.title}</p>
            <p className='movies-card__length'>{props.movie.length}</p>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;