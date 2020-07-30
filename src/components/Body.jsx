import React from 'react';

import { Container, BodyBox } from './stylebody';
import Bodytitle from './Bodytitle';
import Description from './Description';
import Actions from './Actions';

export default function Body() {
  return (
    <Container>
      <BodyBox>
        <Bodytitle />
        <Description />
        <Actions />
      </BodyBox>
    </Container>
  )
}
