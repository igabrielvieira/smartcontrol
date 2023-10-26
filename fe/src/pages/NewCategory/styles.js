import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: 20% auto;

  @media screen and (max-width: 750px) {
    width: 80%;
    margin-left: 120px;
  }

  @media screen and (max-width: 550px) {
    width: 80%;
    margin-left: 19%;
  }

  @media screen and (max-width: 450px) {
    width: 60%;
    margin-left: 30%;
  }

  @media screen and (max-width: 350px) {
    width: 60%;
    margin-left: 33%;
  }
`;
