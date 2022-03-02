import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer'; 

function Movies() {
  return (
    <section>
      <Header isNavigation={true} />
      <SearchForm />
      <MoviesCardList place='all-movies' />
      <Footer />
    </section>
  );
}

export default Movies;