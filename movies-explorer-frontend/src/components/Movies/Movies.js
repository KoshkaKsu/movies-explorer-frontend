import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCardListButton from '../MoviesCardListButton/MoviesCardListButton';
import Footer from '../Footer/Footer'; 

function Movies() {
  return (
    <section>
      <Header isNavigation={true} />
      <main>
        <SearchForm />
        <MoviesCardList place='all-movies' />
        <MoviesCardListButton />
      </main>
      <Footer />
    </section>
  );
}

export default Movies;