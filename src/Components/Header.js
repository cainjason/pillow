import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <ContainerHeader>
      <h2>Header</h2>
    </ContainerHeader>
  )
}

export default Header;

const ContainerHeader = styled.div`
    background-color: blue;
    color: wheat;
    height: 40px;

    > h2:hover {
        margin: none;
        padding: none;
        cursor: pointer;
    }
`;


