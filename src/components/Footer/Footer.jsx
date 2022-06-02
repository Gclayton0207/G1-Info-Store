import React from 'react';
import styled from 'styled-components';
import { FaDiscord, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Footer = styled.footer`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.7fr;
  padding: 30px 50px;
  color: white;
  min-height: 3rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

const SecTitle = styled.h4`
  font-size: 1.3em;
`

const SecContent = styled.h6`
  font-size: 0.8em;
  font-weight: 300;

  &:hover {
    cursor: pointer;
  }
`

const Copyright = styled.p`
  font-weight: 300;
  padding-top: 10px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Icons = styled.div`
  display: flex;
  gap: 5px;
`

const Icon1 = styled(FaDiscord)`
  font-size: 1.3em;

  &:hover {
    cursor: pointer;
  }
`

const Icon2 = styled(FaFacebookSquare)`
  font-size: 1.3em;

  &:hover {
    cursor: pointer;
  }
`

const Icon3 = styled(FaInstagram)`
  font-size: 1.3em;

  &:hover {
    cursor: pointer;
  }
`

export default () => {
  return (
    <Footer>
      <Section>
        <SecTitle>Departamentos</SecTitle>
        <SecContent>Hardware</SecContent>
        <SecContent>Periféricos</SecContent>
        <SecContent>Eletroportáteis</SecContent>
      </Section>
      <Section>
        <SecTitle>Promoções</SecTitle>
        <SecContent>Black Friday</SecContent>
        <SecContent>PIX</SecContent>
        <SecContent>Seja Prime</SecContent>
      </Section>
      <Section>
        <SecTitle>Institucional</SecTitle>
        <SecContent>Sobre a G1</SecContent>
        <SecContent>Trabalhe conosco</SecContent>
        <SecContent>Politica de privacidade</SecContent>
      </Section>
      <Section>
        <Icons>
          <Icon1/>
          <Icon2/>
          <Icon3/>
        </Icons>
        <Copyright>G1 Info Store © 2022</Copyright>
      </Section>
    </Footer>
  )
}