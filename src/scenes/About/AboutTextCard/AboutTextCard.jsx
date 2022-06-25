import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}> Xuan Chinh </span>
        from <span className={s.purple}> Ninh Binh, Vietnam.</span>
        <br />
        Skilled Front End Developer.
        <br /> Engineer in Software technology from
        <br />
        Ha Noi University of Business and Technology.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Photography
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Listening To Music
        </li>
      </ul>

      <p
        style={{
          color: '#35734c',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "The only constant in the technology industry is change."{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
