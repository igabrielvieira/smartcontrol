import styled from 'styled-components';

export const Container = styled.div`
  margin-left: ${({ sidebarMode }) => sidebarMode === 'open' ? '300px' : '0px'};
  ${({ sidebarMode }) => sidebarMode === 'closed' ? (
    'display: flex; align-itens: center; justify-content: center;'
  ) : sidebarMode}

  @media screen and (max-width: 1400px) {
    margin-left: 200px;
  }

  @media screen and (max-width: 1300px) {
    margin-left: 140px;
  }

  @media screen and (max-width: 1100px) {
    padding-left: 0px;
    margin-left: -50px !important;
  }

  @media screen and (max-width: 1100px) {
    margin-left: -40px;
  }

  @media screen and (max-width: 900px) {
    margin-left: -40px !important;
  }

  @media screen and (max-width: 750px) {
    margin-left: -100px !important;
  }
`;
