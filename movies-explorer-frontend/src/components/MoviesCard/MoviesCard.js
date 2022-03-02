import './MoviesCard.css';

function MoviesCard({ movie, place, isSaved }) {
  return (
    <figure className='movies-card'>
      <img src={movie.src} alt={movie.title} className='movies-card__image' />
      <figcaption className='movies-card__caption'>
        <div className='movies-card__text-block'>
            <p className='movies-card__title'>{movie.title}</p>
          
            {place === 'saved-movies' && (
              <button className='movies-card__btn movies-card__btn_type_close' />
            )}

            {place === 'all-movies' && (
              <button
                className={`movies-card__btn movies-card__btn_type_${
                  isSaved ? 'full-heart' : 'empty-heart'
                }`}
              />
            )}
        </div>
          <hr className='movies-card__line' />
          <p className='movies-card__length'>{movie.length}</p>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;