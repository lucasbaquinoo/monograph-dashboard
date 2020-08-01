import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  padding-left: 30px;
  top: 20%;
  left: 10%;
  width: 40%;
  height: 500px;
`;

export const TitleBox = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -30px;

  div {
    background-color: hsl(230, 29%, 20%);
    width: min-content;
    padding: 5px 10px;
    border-radius: 50px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    }

  p {
    margin-left: 30px;
    width: auto;
    padding: 5px 10px;
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color:  hsl(231, 7%, 65%);
    letter-spacing: 2px;
  }
`;

export const H2 = styled.h2`
  color: hsl(230, 29%, 20%);
  width: 80%;
  height: 150px;
  font-weight: 700;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 2.5rem;
`;

export const Description = styled.div`
  margin-top: -30px;
  width: 50%;
  height: auto;
  color: hsl(231, 7%, 65%);
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

export const Actions = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
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
  }

  p {
    margin-left: 30px;
    color: hsl(231, 7%, 65%);
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 18px;
    }
`;
