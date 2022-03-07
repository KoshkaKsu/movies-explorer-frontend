import './ButtonsSign.css';
import { NavLink } from 'react-router-dom';

function ButtonsSign() {
  function handleSignIn() {
    console.log('click');
  }

  function handleSignUp() {
    console.log('click');
  }

  return (
    <div className='buttons-sign'>
      <NavLink
        className='buttons-sign__signup'
        to='/signup'
        onClick={handleSignUp}>
        Регистрация
      </NavLink>
      <NavLink
        className='buttons-sign__signin'
        to='/signin'
        onClick={handleSignIn}>
        Войти
      </NavLink>
    </div>
  );
}

export default ButtonsSign;