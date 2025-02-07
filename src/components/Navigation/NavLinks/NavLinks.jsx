import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} activeClassName={s.active} exact>
          <AiOutlineHome />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUT} activeClassName={s.active}>
          <AiOutlineUser />
          About
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PROJECTS} activeClassName={s.active}>
          <AiOutlineFundProjectionScreen />
          Projects
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.RESUME} activeClassName={s.active}>
          <CgFileDocument />
          CV
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
