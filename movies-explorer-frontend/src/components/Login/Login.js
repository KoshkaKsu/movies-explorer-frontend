import LoginHeader from '../LoginHeader/LoginHeader';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import Form from '../Form/Form';
import SignNav from '../SignNav/SignNav';
import React from 'react';
import './Login.css';

function Login(props) {
  const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

  function changeEmail(e) {
		setEmail(e.target.value);
	}

	function changePassword(e) {
		setPassword(e.target.value);
	}

	function handleLoginSubmit(e) {
		e.preventDefault();
		props.onLogin(email, password);
	}

  return (
    <section className='login'>
      <LoginHeader text='Рады видеть!' />
      <Form onSubmit={handleLoginSubmit}>
        <div>
          <Input
            name='email'
            label='E-mail'
            type="email"
            autoComplete="email"
            value={email || ''}
            onChange={changeEmail}
					  placeholder="Email"
					  required
          />
          <Input
            name='password'
            label='Пароль'
            type='password'
            value={password || ''}
            onChange={changePassword}
            placeholder="Пароль должен содержать не меньше 8 символов"
            required
          />
        </div>
        <SubmitButton label='Войти' />
      </Form>
      <SignNav
        label='Ещё&nbsp;не&nbsp;зарегистрированы?'
        link='Регистрация'
        to='/signup'
      />
    </section>
  );
}

export default Login;