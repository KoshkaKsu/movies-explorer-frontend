import Heading from '../Heading/Heading';
import './AboutMe.css';
import photo from '../../images/photostudent.jpg';

function AboutMe() {
  return (
    <article className='about-me' id='about-me'>
      <Heading text='Студентка' />
      <section className='about-me__container'>
        <img className='about-me__photo' src={photo} alt='Ksenia, student.' />
        <div className='about-me__texts'>
          <h1 className='about-me__heading'>Ксения</h1>
          <p className='about-me__caption'>
            Фронтенд&#8209;разработчица, 26 лет
          </p>
          <p className='about-me__paragraph'>
            Я родилась Кирове, живу в Москве. Люблю гулять на природе,
            рисовать, занимаюсь pole-sport и люблю кошек. Закончила факультет
            информационных технологий НИУ МГСУ. С 2018 работаю BIM-координатором. Прошла курс по
            веб&#8209;разработке от Яндекс.Практикум.
          </p>
          <div className='about-me__social'>
            <a
              className='about-me__link'
              target='_blank'
              rel='noreferrer'
              href='https://www.facebook.com/ksenia.kuzn'>
              Facebook
            </a>
            <a
              className='about-me__link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/KoshkaKsu'>
              Github
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}

export default AboutMe;