import { NavLink } from 'react-router-dom';
import './NoMatch.css';

function NoMatch() {
  return (
    <section className='no-match'>
      <div className='no-match__heading'>
        <h1 className='no-match__number'>404</h1>
        <p className='no-match__caption'>Страница не найдена</p>
      </div>
      <NavLink to='/'>
      <button className='no-match__go-back'>
        Назад
      </button>
      </NavLink>
    </section>
  );
}

export default NoMatch;