import { ReactComponent as Logo } from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import './LoginHeader.css';

function LoginHeader({ text }) {
  return (
    <header className='login-header'>
      <NavLink to='/' className='header__home'>
        <Logo className='login-header__logo' />
      </NavLink>
      <h1 className='login-header__caption'>{text}</h1>
    </header>
  );
}

export default LoginHeader;