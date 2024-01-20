import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <ContainerNavbar>
      <h2>Navbar</h2>
    </ContainerNavbar>
  )
}

export default Navbar;

const ContainerNavbar = styled.div`
    background-color: lightblue;
    height: 70vh;
    width: 240px;
    color: wheat;
`;
