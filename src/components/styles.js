import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  padding-top: 90px;
  padding-left: 180px;
  width: 50%;
`;

export const Link = styled.a`
  color: hsl(230, 29%, 20%);
  font-family: 'Barlow Condensed', sans-serif;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  margin: 0 25px;
  &:hover {
    text-decoration: underline;
  }
`;
