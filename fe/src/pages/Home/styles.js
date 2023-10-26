import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  margin-left: 70px;
  position: relative;

  @media screen and (max-width: 1200px) {
    margin-left: 120px;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 100px;
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    padding: 0 16px;
    border-radius: 25px;
    border: none;
    height: 50px;
    outline: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    &::placeholder {
      color: #BCBCBC;
    }

  }
`;

export const ErrorContainer = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export const Card = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1300px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 50px;
    width: 100% !important;
    display: block;
  }

  & + & {
    border-top: 1px solid rgba(188, 188, 188, 0.2);
  }

  .info {
    .product-name {
      display: flex;
      align-items: center;

        .productsId {
          width: 25px;
          margin-right: 57px;
          margin-left: 5px;

          @media screen and (max-width: 1400px) {
            margin-right: 20px;
          }

          @media screen and (max-width: 750px) {
            margin-right: 10px;
            font-size: 60%;
          }

          @media screen and (max-width: 600px) {
            margin-right: 0px;
          }
        }

        .productsProduct {
          width: 220px;
          height: 20px;
          margin-right: 6px;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          text-overflow: ellipsis;
          overflow: hidden;

          @media screen and (max-width: 750px) {
            font-size: 70%;
            width: 180px;
            height: 15px;
          }

          @media screen and (max-width: 600px) {
            font-size: 60%;
            height: 10px;
            width: 130px;
          }
        }

        .productsQnt {
          width: 50px;
          margin-right: 45px;

          @media screen and (max-width: 750px) {
            width: 40px;
            font-size: 70%;
            margin-right: 5%;
          }

          @media screen and (max-width: 600px) {
            font-size: 60%;
          }
        }

        .productsCategory {
          width: 100px;

          @media screen and (max-width: 750px) {
            font-size: 70%;
            width: 80px;
          }

          @media screen and (max-width: 600px) {
            font-size: 60%;
          }
        }

        .categoriesCategory {
          width: 100px;
          margin-right: 21px;
          margin-left: 4px;

          @media screen and (max-width: 1200px) {
            margin-right: 80px;
          }

          @media screen and (max-width: 600px) {
            margin-right: 0px;
          }
        }

        .categoriesProduct {
          margin-right: 0px;
        }
    }

    span {
      display: block;
      color: #000;
      font-size: 12px;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    @media screen and (max-width: 600px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
    }

    img {
      width: 20px;

      @media screen and (max-width: 600px) {
        width: 15px;
      }

      @media screen and (max-width: 420px) {
        width: 13px;
      }
    }

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    margin-top: 8px;
    width: 500px;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 16px;
  align-items: flex-start;

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-word;
  }
`;

export const TopDiv = styled.div`
  width: 300px;
  max-width: 1100px;
  color: ${({ theme }) => theme.colors.color};

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 76px;
  width: 68.5em;

  @media screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 700px) {
    margin-left: -10px;
  }

`;
