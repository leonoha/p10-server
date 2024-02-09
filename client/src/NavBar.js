import React from 'react';
import styled from 'styled-components';
import logo from './imgs/logo.png'
import menu from './imgs/menu.png'
import cross from './imgs/cross.png'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  display: flex;
  align-items: center;
`;

const MobileNavToggle = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  display: none;
  flex-direction: row;
  margin: 0;
  padding: 0;
  
  @media (max-width: 767px) {
    display: flex;
  }
`;




const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <Nav>
      <Logo style={{ display: isMobileNavOpen ? 'none' : 'flex'}}>
      <a href="/Predict">
        <img src={logo} style={{
          width:'100px',
          height: 'auto'
      }}/>
      </a>      
      </Logo>

      <DesktopNav>
        <NavItem><a href="/Predict">Predict</a></NavItem>
        <NavItem><a href="/ViewLeague">Results</a></NavItem>
        <NavItem><a href="/ViewPredHistory">History</a></NavItem>

      </DesktopNav>
      <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
        <NavItem><a href="/Predict">Predict</a></NavItem>
        <NavItem><a href="/ViewLeague">Results</a></NavItem>
        <NavItem><a href="/ViewPredHistory">History</a></NavItem>
      </MobileNav>

      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ?    
        <Logo>
            <img src={cross} style={{
                width:'30px',
                height: '30px'
            }}/>
        </Logo> : 
        <Logo>
          <img src={menu} style={{
                    width:'30px',
                    height: '30px'
                }}/>
        </Logo>
    }
      </MobileNavToggle>
    </Nav>
  );
};
export default NavBar;
