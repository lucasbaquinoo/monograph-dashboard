import React from 'react';

import Logo from '../images/logo.svg';

import { Container } from './styles';
import { Responsive } from './styleResponsive';

export default function Header() {
  return (
    <>
      <Container>
          <img src={Logo} alt="Logo"/>


        <div>
          <a href="foo"> PRODUCT </a>
          <a href="foo"> FEATURES </a>
          <a href="foo"> PRICING </a>
          <a href="foo" style={{cursor: "default", color: "hsl(231, 7%, 65%)", textDecoration: "none"}}> ● </a>
          <a href="foo" style={{color: "hsl(231, 7%, 65%)"}}> LOGIN </a>
        </div>
      </Container>

        <Responsive>
        <div className="dropdown">
          
        </div>
        </Responsive>
      </>

  )
}