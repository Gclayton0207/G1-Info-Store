import React from 'react';
import styled from 'styled-components';

const Header = styled.nav`
    font-weight: 100;
    background-color: #F900D9;
    width: 150px;
    height: 100%;
    padding-left: 50px;
    position: fixed;
    z-index: 100;
    -webkit-box-shadow: -3px 0px 5px 0px rgba(249, 0, 217, 0.2);
    box-shadow: -3px 0px 5px 0px rgba(249, 0, 217, 0.2);
    right: -150px;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    &:hover, &:focus {
    transform: translate3d(-150px, 0, 0);
    animation-timing-function: 1s ease-in;
  }
`
const Title = styled.div`
    top: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    transform: rotate(270deg);
    left: 15px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    color: #000;
`

const Navbar = styled.ul`
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-weight: 100;
`

const NavItem = styled.li`
    padding-bottom: 30px;
    list-style-type: none;
`

const NavLink = styled.a`
    display: block;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    color: #fff;
    &:hover {
        color: #aaa;
    }
`

export default () => {
  return (
    <Header>
        <Title>G1</Title>
        <Navbar>
            <NavItem><NavLink href="#">Home</NavLink></NavItem>
            <NavItem><NavLink href="#">About</NavLink></NavItem>
            <NavItem><NavLink href="#">Work</NavLink></NavItem>
            <NavItem><NavLink href="#">Resources</NavLink></NavItem>
            <NavItem><NavLink href="#">Contact</NavLink></NavItem>
        </Navbar>
    </Header>
  )
}