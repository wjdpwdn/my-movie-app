import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  z-index: 1;
  position: fixed;
  top: 50px;
  left: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media (max-width: 1090px) {
    left: initial;
    top: initial;
    bottom: 0px;
    width: 100%;
  
`;

function Navigation() {
  return (
    <Nav>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/about">
        <p>about</p>
      </Link>
    </Nav>
  );
}

export default Navigation;
