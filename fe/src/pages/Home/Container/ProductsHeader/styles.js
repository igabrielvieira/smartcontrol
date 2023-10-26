import styled from 'styled-components';

export const ProductsContainer = styled.div`
  background-color: transparent;
  width: 80%;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground[100]};
  border-radius: 10px;
  margin-bottom: 26px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  display: flex;
  justify-content: flex-start;
  gap: 22px;
  align-items: center;
  color: ${({theme}) => theme.colors.cardColor};

  @media screen and (max-width: 1400px) {
    width: ${({ type, width }) => type === 'category' ? width - 58 : width - 96 }px;
  }

  @media screen and (max-width: 1000px) {
    width: ${({ type, width }) => type === 'category' ? width + 400 : width + 120 }px;
    margin-left: -60px;
  }

  @media screen and (max-width: 900px) {
    width: ${({ type, width }) => type === 'category' ? width + 340 : width + 60 }px;
    margin-left: -100px;
  }

  @media screen and (max-width: 750px) {
    width: ${({ type, width }) => type === 'category' ? '100%' : '100%' };
    margin-left: 10px;
  }

  img {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.cardBackground[200]};
    border-radius: 10px;
  }

`;
