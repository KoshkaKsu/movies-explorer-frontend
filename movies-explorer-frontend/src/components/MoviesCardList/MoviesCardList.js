import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import src1 from '../../images/movie1.jpg';
import src2 from '../../images/movie2.jpg';

function MoviesCardList(props) {
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
        place={props.place}
        isSaved={true}
      />
      <MoviesCard
        movie={{
          src: src2,
          title: 'Киноальманах «100 лет дизайна»',
          length: '1ч 29м',
        }}
        place={props.place}
        isSaved={false}
       />
        <MoviesCard
        movie={{
          src: src2,
          title: 'Киноальманах «100 лет дизайна»',
          length: '1ч 29м',
        }}
        place={props.place}
        isSaved={false}
       />
        <MoviesCard
        movie={{
          src: src2,
          title: 'Киноальманах «100 лет дизайна»',
          length: '1ч 29м',
        }}
        place={props.place}
        isSaved={false}
       />
        <MoviesCard
        movie={{
          src: src2,
          title: 'Киноальманах «100 лет дизайна»',
          length: '1ч 29м',
        }}
        place={props.place}
        isSaved={false}
       />
        <MoviesCard
        movie={{
          src: src2,
          title: 'Киноальманах «100 лет дизайна»',
          length: '1ч 29м',
        }}
        place={props.place}
        isSaved={false}
       />
       </ul>
    </section>
  );
}

export default MoviesCardList;