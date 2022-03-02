import './Header.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import ButtonsSign from '../ButtonsSign/ButtonsSign';
import Navigation from '../Navigation/Navigation';

function Header({ isNavigation }) {
  return (
    <header className='header'>
      <NavLink to='/' className='header__home'>
        <Logo className='header__logo' />
      </NavLink>
      {isNavigation && <Navigation />}
      {!isNavigation && <ButtonsSign />}
    </header>
  );
}

export default Header;