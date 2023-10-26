import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 8px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 15%;
    margin-bottom: 4px;

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.color};
    }

    img {
      transform: rotate(-180deg);
      margin-right: 8px;
    }
  }

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.color};
  }
`;
