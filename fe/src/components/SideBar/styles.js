import styled from 'styled-components';

export const Container = styled.div`
  img.handleSidebar {
    width: 30px;
  }

  .open {
    z-index: 3;
    position: fixed;
    left: 0;
    top: 0;
    max-width: 320px;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary.main};
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 1400px) {
      max-width: 240px;
    }

    @media screen and (max-width: 1300px) {
      max-width: 190px;
    }
  }

  .closed {
    display: none;
  }

  .openButton {
    position: fixed;
    z-index: 3;
    left: 280px;
    top: 3px;
    transform: rotate(-180deg);
    border: none;
    background-color: transparent;
    outline: none;

    @media screen and (max-width: 1400px) {
      left: 200px;
    }

    @media screen and (max-width: 1300px) {
      left: 150px;
    }
  }

  .closedButton {
    position: fixed;
    z-index: 3;
    left: 10px;
    top: 10px;
    border: none;
    background-color: rgba(000, 000, 000, 0.4);
    border-radius: 10px;
  }
`;

