import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <ContainerFooter>
      <h3>Footer</h3>
    </ContainerFooter>
  )
}

export default Footer;

const ContainerFooter = styled.div`
    background-color: beige;
    height: 135px;
    width: 100vw;
`;
