import { ReactComponent as Logo } from '../../images/logo.svg';
import './LoginHeader.css';

function LoginHeader({ text }) {
  return (
    <header className='login-header'>
      <Logo className='login-header__logo' />
      <h1 className='login-header__caption'>{text}</h1>
    </header>
  );
}

export default LoginHeader;