import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 41px;
  margin-bottom: 70px;
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 24px;
  width: 100%;
  max-width: 1100px;
  height: 180px;
  border-radius: 24px;
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1400px) {
    max-width: 950px;
  }

  @media screen and (max-width: 1300px) {
    max-width: 950px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 950px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 800px;
  }

  @media screen and (max-width: 900px) {
    max-width: 500px;
    height: 400px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-left: 80px;
  }

  @media screen and (max-width: 750px) {
    width: 500px;
    height: 400px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
  }

  @media screen and (max-width: 600px) {
    width: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 350px;
  }

  @media screen and (max-width: 350px) {
    width: 300px;
  }

  @media screen and (max-width: 305px) {
    width: 200px;
    height: 560px;
    display: block;
  }

  span.title {
    font-size: 20px;
    font-weight: bold;

    @media screen and (max-width: 305px) {
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

`;
