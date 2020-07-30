import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 65px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 10px;
  background-color: hsl(0, 100%, 68%);
  color: hsl(207, 33%, 95%);
  height: 50px;
  width: 200px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Parag = styled.p`
  margin-left: 30px;
  color: hsl(231, 7%, 65%);
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: 2px;
  font-weight: 400;
  font-size: 18px;
`;