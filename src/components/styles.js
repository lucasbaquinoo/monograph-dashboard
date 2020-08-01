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
  @media(max-width: 375px) {
    display: none;
  }

  img {
    position: relative;
    margin-top: 90px;
    margin-left: 14%;
  }

  div {
    margin-left: 35%;
    padding-top: 90px;
    padding-left: 120px;
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* @media(max-width: 375px) {
      display: none;
    } */
  }

  a {
    color: hsl(230, 29%, 20%);
    font-family: 'Barlow Condensed', sans-serif;
    cursor: pointer;
    font-weight: 700;
    font-size: 18px;
    margin-right: 60px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
