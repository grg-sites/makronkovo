import React, { useState } from 'react';

import NavLink from '../../atoms/NavLink';
import Logo from '../../atoms/Logo';
import SocialButton from '../../atoms/SocialButton';
import MenuToggle from '../../atoms/MenuToggle';
import NavBarWrapper from './NavBarWrapper';
import NavItems from './NavItems';
import SocialButtonGroup from './SocialButtonGroup';

const NavBar = () => {
  const [showMenu, toggleMenu] = useState(false);

  return (
    <NavBarWrapper id="NavBarWrapper" showMenu={showMenu}>
      <MenuToggle opened={showMenu} onClick={() => toggleMenu(!showMenu)} />
      <Logo />
      <NavItems showMenu={showMenu} id="NavItems">
        <SocialButtonGroup>
          <SocialButton marginRight="15px" icon={['fab', 'instagram']} />
          <SocialButton icon={['fab', 'facebook']} />
        </SocialButtonGroup>
        <NavLink to="/">TORTY NA MIERU</NavLink>
        <NavLink to="/">DEZERTY</NavLink>
        <NavLink marginBottom="50px" to="/">
          CANDY BAR
        </NavLink>
        <Logo show />
        <NavLink marginTop="50px" to="/">
          O NÁS
        </NavLink>
        <NavLink to="/">GALÉRIA</NavLink>
        <NavLink to="/">KONTAKT</NavLink>
        <NavLink to="/caste-otazky">ČASTÉ OTÁZKY</NavLink>
      </NavItems>
    </NavBarWrapper>
  );
};

export default NavBar;