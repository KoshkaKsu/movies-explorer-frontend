import './Navigation.css';
import { ReactComponent as NavigationIcon } from '../../images/menu.svg';
import { ReactComponent as CrossIcon } from '../../images/close.svg';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [isDataOpen, setIsDataOpen] = useState(false);

  function openPopup() {
      setIsDataOpen(true)
  }

  function closePopup() {
      setIsDataOpen(false)
  }

  function updateScreenType() {
    setIsMobile(window.innerWidth <= 800);
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      updateScreenType();
    });
    return () => {
      window.removeEventListener('resize', () => {
        updateScreenType();
      });
    };
  }, []);

  return (
    <>
      {isMobile && (
        <section className='navigation'>
          <NavigationIcon className='navigation__icon' onClick={openPopup} />
          {isDataOpen && (
            <>
              <div className='navigation__overlay' onClick={closePopup} />
              <div className='navigation__popup'>
                <CrossIcon className='navigation__cross' onClick={closePopup} />
                <div className='navigation__main-nav'>
                  <NavLink
                    to='/'
                    className={isDataOpen ? 'navigation__link' : 'navigation__link_current'}
                    onClick={closePopup}>
                    Главная
                  </NavLink>
                  <NavLink
                    to='/movies'
                    className={isDataOpen ? 'navigation__link' : 'navigation__link_current'}
                    onClick={closePopup}>
                    Фильмы
                  </NavLink>
                  <NavLink
                    to='/saved-movies'
                    className={isDataOpen ? 'navigation__link' : 'navigation__link_current'}
                    onClick={closePopup}>
                    Сохранённые фильмы
                  </NavLink>
                </div>
                <NavLink
                  to='/profile'
                  className='navigation__user-icon'
                  onClick={closePopup}>
                </NavLink>
              </div>
            </>
          )}
        </section>
      )}

      {!isMobile && (
        <section className='navigation'>
          <div className='navigation__main-nav'>
            <NavLink
              to='/movies'
              className={isDataOpen ? 'navigation__link_current' : 'navigation__link'}>
              Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className={isDataOpen ? 'navigation__link_current' : 'navigation__link'}>
              Сохранённые фильмы
            </NavLink>
          </div>
          <NavLink to='/profile' className='navigation__user-icon'>
          </NavLink>
        </section>
      )}
    </>
  );
}

export default Navigation;