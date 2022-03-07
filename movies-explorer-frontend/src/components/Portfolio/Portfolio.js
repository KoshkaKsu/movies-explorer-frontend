import './Portfolio.css';

function Portfolio() {
  return (
    <article className='portfolio'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <a
        className='portfolio__link'
        target='_blank'
        rel='noreferrer'
        href='https://koshkaksu.github.io/how-to-learn/index.html'>
        Статичный сайт <span className='portfolio__arrow'> &#8599; </span>
      </a>
      <hr className='portfolio__line' />
      <a
        className='portfolio__link'
        target='_blank'
        rel='noreferrer'
        href='https://koshkaksu.github.io/russian-travel/index.html'>
        Адаптивный сайт <span className='portfolio__arrow'> &#8599; </span>
      </a>
      <hr className='portfolio__line' />
      <a
        className='portfolio__link'
        target='_blank'
        rel='noreferrer'
        href='https://github.com/KoshkaKsu/react-mesto-api-full'>
        Одностраничное приложение{' '}
        <span className='portfolio__arrow'> &#8599; </span>
      </a>
    </article>
  );
}

export default Portfolio;