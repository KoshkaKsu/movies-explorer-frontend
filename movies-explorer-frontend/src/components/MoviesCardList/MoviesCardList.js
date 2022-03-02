import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import src1 from '../../images/movie1.jpg';
import src2 from '../../images/movie2.jpg';

function MoviesCardList({ place }) {
  return (
    <section className='movies-card-lists'>
      <ul className="movies-card-list">
      <MoviesCard
        movie={{
          src: src1,
          title:
            '33 слова о дизайне',
          length: '1ч 42м',
        }}
        place={place}
        isSaved={true}
      />
      <MoviesCard
        movie={{
          src: src2,
          title: 'Киноальманах «100 лет дизайна»',
          length: '1ч 29м',
        }}
        place={place}
        isSaved={false}
       />
        <MoviesCard
        movie={{
          src: src2,
          title: 'Киноальманах «100 лет дизайна»',
          length: '1ч 29м',
        }}
        place={place}
        isSaved={false}
       />
        <MoviesCard
        movie={{
          src: src2,
          title: 'Киноальманах «100 лет дизайна»',
          length: '1ч 29м',
        }}
        place={place}
        isSaved={false}
       />
        <MoviesCard
        movie={{
          src: src2,
          title: 'Киноальманах «100 лет дизайна»',
          length: '1ч 29м',
        }}
        place={place}
        isSaved={false}
       />
        <MoviesCard
        movie={{
          src: src2,
          title: 'Киноальманах «100 лет дизайна»',
          length: '1ч 29м',
        }}
        place={place}
        isSaved={false}
       />
       </ul>
      <button className='movies-card-list__more'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;