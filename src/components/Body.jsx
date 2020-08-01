import React from 'react';

import { Container, TitleBox, Description, H2, Actions } from './stylebody';

export default function Body() {
  return (
    <Container>

      <TitleBox>

      <div>NEW</div>

      <p>MONOGRAPH DASHBOARD</p>

      </TitleBox>
      <H2>
        POWERFUL INSIGHTS INTO YOUR TEAM
      </H2>


      <Description>
        Project planning and time tracking or agile teams
      </Description>

      <Actions>
      <button>SCHEDULE A DEMO</button>
      <p>TO SEE A PREVIEW</p>
    </Actions>

    </Container>
  )
}
