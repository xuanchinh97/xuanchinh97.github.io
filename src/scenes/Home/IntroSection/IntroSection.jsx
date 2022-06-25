import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
// import { AiFillGithub } from 'react-icons/ai';
import {
  FaGithub,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I fell in love with programming and I have at least
              learnt something, I think… 🤷‍♂️
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}>
                  {' '}
                  Web Technologies and Products
                </b>
              </i>
            </p>

            <p>
              A passionate Front End Developer 🚀 <br />I
              have an experience of building{' '}
              <i>
                <b className={s.purple}>Web</b>
              </i>{' '}
              applications with
              <br />
              <i>
                <b className={s.purple}>
                  JavaScript, Reactjs, Nodejs
                </b>
              </i>{' '}
              and some other cool libraries
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/xuanchinh97"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/chih.97"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaFacebook />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="mailto:trinhxuanchinh97@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <IoMdMail />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/xuanchinh97/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
