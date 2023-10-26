import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    @media screen and (max-width: 1400px) {
      width: 100px;
    }
  }
`;

export const ThemeDiv = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 2;
  background-color: ${({ selectedtheme }) => selectedtheme === 'light' ? '#3F3F3F' : '#C9BFBF'};
  border-radius: 10px;
  transition: 0.3s;

  @media screen and (max-width: 1400px) {
    width: 20%;
  }

  img {
    @media screen and (max-width: 1400px) {
      width: 100%;
    }
  }

  button {
    background-color: transparent;
    border: none;
    padding: 10px;
  }
`;
