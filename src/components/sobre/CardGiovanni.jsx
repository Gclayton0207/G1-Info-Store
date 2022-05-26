import React from "react";
import styled from "styled-components";
import { cor1, cor2, cor3 } from "../UI/variaveis";
import linkedin from "../../Assets/linkedin.png";
import github from "../../Assets/github.png";
import Giovanni from "../../Assets/Giovanni.png";
const Card = styled.div`
  width:280px ;
  height: 500px;
  display: block;
  padding: 16px 16px 16px 16px;
  background: ${cor1};
  box-shadow: -10px -10px ${cor2}, 15px 10px ${cor3};
  transition: box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out;
  color: ${cor3};
  &:hover {
    box-shadow: -10.275px -10.275px ${cor3}, 15.4px 10.275px ${cor2};
    transform: scale(1.025);
  }
`;
const IconeLinkedin = styled.img`
  background-image: url(${linkedin});
  
  width: 65px;
  height: 65px;
  margin-top: 15px;
  &:hover {
   transform: scale(1.1);
`;
const IconeGithub = styled.img`
  background-image: url(${github});
  width: 65px;
  height: 65px;
  margin-top: 15px;
  &:hover {
   transform: scale(1.1);
`;
const GiovanniClayton = styled.img`
  background-image: url(${Giovanni});
  width: 100%;
  height: 280px;
  background-size:cover;
  
`;
const CardGiovanni = () => {
  return (
    <div>
      <Card>
        <h5>Giovanni Clayton Dias Alves</h5>
        <GiovanniClayton />
        <p>
          Desenvolvedor Web Full Stack | Front-End | HTML | CSS | JavaScript
        </p>

        <a href="https://www.linkedin.com/in/giovanni-clayton/" target="_blank">
          <IconeLinkedin />
        </a>
        <a href="https://github.com/Gclayton0207" target="_blank">
          <IconeGithub />
        </a>
      </Card>
    </div>
  );
};

export default CardGiovanni;
