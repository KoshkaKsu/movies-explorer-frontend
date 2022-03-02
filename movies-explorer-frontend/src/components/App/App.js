import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import NoMatch from '../NoMatch/NoMatch';
import validate from '../../utils/formValidation';

function App() {

  const storedValues = {
    email: 'ksenia.kuzn@mail.ru',
    password: '12345678',
  };

  return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />  
          <Route exact path="/signin" initialValues={storedValues}  element={<Login />} />
          <Route exact path="/signup" validate={validate} element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/saved-movies" element={<SavedMovies />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
  );
}

export default App;
