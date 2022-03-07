import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer'; 

function SavedMovies() {
  return (
    <section>
      <Header isNavigation={true} />
      <main>
        <SearchForm />
        <MoviesCardList place='saved-movies' />
      </main>
      <Footer />
    </section>
  );
}

export default SavedMovies;