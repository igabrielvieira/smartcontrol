import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;

export const InputSearchContainer = styled.div`
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    padding: 0 16px;
    border-radius: 25px;
    border: none;
    height: 50px;
    outline: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    @media screen and (max-width: 800px) {
      width: 80%;
      margin-left: 10%;
    }

    @media screen and (max-width: 650px) {
      width: 50%;
      margin-left: 10%;
    }

    @media screen and (max-width: 500px) {
      width: 40%;
      margin-left: 10%;
    }

    @media screen and (max-width: 350px) {
      width: 30%;
      margin-left: 13%;
    }

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

export const ContainerBody = styled.div`
  width: 100%;
  max-width: 77em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 105%;
    padding: 10px;
    font-size: 24px;
    border-bottom: 1px solid rgba(188, 188, 188, 0.2);
    color: ${({ theme }) => theme.colors.color};

    @media screen and (max-width: 750px) {
      margin-left: 10%;
    }

    @media screen and (max-width: 480px) {
      margin-left: 110px;
    }
  }

  span.message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    word-break: break-word;
    width: 100%;
  }

  .titleTable {
    width: 100%;
    max-width: 77em;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .productsId {
      margin-left: -20em;
      cursor: pointer;

      @media screen and (max-width: 1600px) {
        margin-left: 20px;
      }

      @media screen and (max-width: 800px) {
        margin-left: 60px;
      }

      @media screen and (max-width: 500px) {
        margin-left: 80px;
      }

      @media screen and (max-width: 470px) {
        margin-left: 100px;
      }
    }

    .productsProduct {
      margin-left: 5em;

      @media screen and (max-width: 1600px) {
        margin-left: 20px;
      }

      @media screen and (max-width: 340px) {
        margin-left: 5px;
      }
    }

    .productsQnt {
      margin-left: 24.5em;

      @media screen and (max-width: 1600px) {
        margin-left: 20px;
      }

      @media screen and (max-width: 340px) {
        margin-left: 5px;
      }
    }

    .productsCategory {
      margin-left: 10em;

      @media screen and (max-width: 1600px) {
        margin-left: 20px;
      }

      @media screen and (max-width: 340px) {
        margin-left: 5px;
      }
    }

    span {
      font-size: 16px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.color};
    }
  }
`;

export const Card = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: #FFF;
  width: 100%;
  max-width: 77em;
  height: 42px;
  border-radius: 4px;
  margin-bottom: 8px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

  @media screen and (max-width: 1600px) {
    width: 60%;
  }

  @media screen and (max-width: 1400px) {
    width: 60%;
    margin-left: -3%;
  }

  @media screen and (max-width: 1100px) {
    width: 60%;
    margin-left: 5%;
  }

  @media screen and (max-width: 865px) {
    width: 60%;
    height: 100px;
    display: block;
    margin-left: 5%;
  }

  @media screen and (max-width: 750px) {
    margin-left: 12%;
  }

  @media screen and (max-width: 470px) {
    margin-left: 100px;
  }

  .info {
    .product-name {
      display: flex;
      width: 100%;

        .productsId {
          margin-left: 10px;
          width: 25px;

          @media screen and (max-width: 1600px) {
            margin-left: 1%;
          }
        }

        .productsProduct {
          width: 400px;
          height: 20px;
          margin-left: 5em;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          text-overflow: ellipsis;
          overflow: hidden;

          @media screen and (max-width: 1600px) {
            margin-left: 1%;
            width: 300px;
          }

          @media screen and (max-width: 860px) {
            margin-left: 1%;
            width: 200px;
            height: 40px;
            margin-bottom: 10px;
          }
        }

        .productsQnt {
          width: 50px;
          margin-left: 80px;

          @media screen and (max-width: 1600px) {
            margin-left: 1%;
          }

          @media screen and (max-width: 860px) {
            margin-left: 5%;
          }
        }

        .productsCategory {
          width: 100px;
          margin-left: 10.8em;
          margin-right: 10em;

          @media screen and (max-width: 1600px) {
            margin-right: 3%;
          }

          @media screen and (max-width: 1350px) {
            margin-right: 3%;
            margin-left: 7em;
          }

          @media screen and (max-width: 1180px) {
            margin-right: 3%;
            margin-left: 3em;
          }

          @media screen and (max-width: 1100px) {
            margin-left: 2.5em;
          }

          @media screen and (max-width: 915px) {
            margin-left: 0px;
          }

          @media screen and (max-width: 860px) {
            margin-left: 0%;
          }

          @media screen and (max-width: 460px) {
            margin-left: 3%;
          }
        }
    }

    span {
      display: block;
      color: #000;
      font-size: 14px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    margin-left: 8em;

    @media screen and (max-width: 1600px) {
      margin-left: 0px;
    }

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
