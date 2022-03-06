import React from "react";
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
      <section className='profile'>
        <Header isNavigation={true} />
        <main>
          <div className='profile__info' onSubmit={handleSubmit}>
            <h1 className='profile__heading'>Привет, Ксюша!</h1>
            <div className='profile__unit'>
              <p className='profile__key'>Имя</p>
              <input className='profile__value' name='name' id='profile-name' type='text' value={name || "Ксюша"}  onChange={handleChangeName} />
            </div>
            <hr className='profile__line' />
            <div className='profile__unit'>
              <p className='profile__key'>Почта</p>
              <input className='profile__value' name='email' id='profile-email' type='email' value={email || "ksenia.kuzn@mail.ru"} onChange={handleChangeEmail} />
            </div>
          </div>
          <div className='profile__buttons'>
            <button className='profile__button'>Редактировать</button>
            <button className='profile__button profile__button_quit'>
              Выйти из аккаунта
            </button>
          </div>
        </main>
      </section>
    );
  }

export default Profile;