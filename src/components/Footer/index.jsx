import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  padding: 15px;
`

const Text = styled.p`
  color: white;
  padding: 5px;
`

export default () => {
  return (
    <Footer>
      <Text>G1 Info Store © 2022</Text>
      <Text>Projeto Final –  Módulo V</Text>
    </Footer>
  )
}