import LoginHeader from '../LoginHeader/LoginHeader';
import Form from '../Form/Form';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import SignNav from '../SignNav/SignNav';
import React from 'react';
import './Register.css';

function Register(props) {
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

  function changeUserName(e) {
		setUserName(e.target.value);
	}

  function changeEmail(e) {
		setEmail(e.target.value);
	}

	function changePassword(e) {
		setPassword(e.target.value);
	}

	function handleRegistrationSubmit(e) {
		e.preventDefault();
		props.onRegister(userName, email, password);
	}   

  return (
    <section className='register'>
      <LoginHeader text='Добро пожаловать!' />
      <main>
        <Form onSubmit={handleRegistrationSubmit} > 
          <div>
            <Input
              name='name'
              label='Имя'
              type='text'
              value={userName || ''}
              onChange={changeUserName}
              placeholder='Введите имя'
            />
            <Input
              name='email'
              label='E-mail'
              type='email'
              value={email || ''}
              onChange={changeEmail}
              placeholder='pochta@yandex.ru'
            />
            <Input
              name='password'
              label='Пароль'
              type='password'
              value={password || ''}
              onChange={changePassword}
              placeholder='Введите пароль > 8 символов'
            />
          </div>
          <SubmitButton
            label='Зарегистрироваться'
          />
        </Form>
        <SignNav label='Уже зарегистрированы?' link='Войти' to='/signin' />
      </main>
    </section>
  );
}

export default Register;