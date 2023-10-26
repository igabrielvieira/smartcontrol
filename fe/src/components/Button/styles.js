import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 0 16px;
  height: 52px;
  border: none;
  background: #33ea42;
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: linear-gradient(120deg, #29DA37 0%, #3CEF4A 100%);
  }

  &:active {
    background: linear-gradient(120deg, #16D326 0%, #2BD138 100%);
  }

  &[disabled] {
    background: #ccc !important;
    cursor: default !important;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
    background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}
`;
