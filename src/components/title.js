import styled from 'styled-components';

export const TitleBox = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Box = styled.p`
  background-color: hsl(230, 29%, 20%);
  width: min-content;
  padding: 5px 10px;
  border-radius: 50px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;

export const Parag = styled.p`
  margin-left: 30px;
  width: auto;
  padding: 5px 10px;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color:  hsl(231, 7%, 65%);
  letter-spacing: 2px;
`;

export const LetterBig = styled.div`
  color: hsl(230, 29%, 20%);
  width: 100%;
  height: 150px;
  font-weight: 700;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 54px;
`;