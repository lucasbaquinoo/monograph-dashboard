import React from 'react';

import Logo from '../images/logo.svg';
import { Container, Box, Link } from './styles';

export default function Header() {
  return (
      <Container>
        <Box>
          <img src={Logo} alt="Logo"/>
        </Box>
        <Box>
          <Link> Product </Link>
          <Link> Features </Link>
          <Link> Pricing </Link>
          <Link style={{cursor: "default", color: "hsl(231, 7%, 65%)", textDecoration: "none"}}> ● </Link>
          <Link style={{color: "hsl(231, 7%, 65%)"}}> Login </Link>
        </Box>
      </Container>

  )
}