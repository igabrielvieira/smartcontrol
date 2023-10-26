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

    @media screen and (max-width: 450px) {
      width: 40%;
      margin-left: 13%;
    }

    @media screen and (max-width: 400px) {
      width: 40%;
      margin-left: 15%;
    }

    @media screen and (max-width: 350px) {
      width: 30%;
      margin-left: 16%;
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

  @media screen and (max-width: 1600px) {
    width: 80%;
  }

  @media screen and (max-width: 1400px) {
    width: 70%;
    margin-left: -20%;
  }

  @media screen and (max-width: 1300px) {
    width: 70%;
    margin-left: -10%;
  }

  @media screen and (max-width: 1100px) {
    width: 70%;
    margin-left: 5%;
  }

  @media screen and (max-width: 750px) {
    width: 70%;
    margin-left: 10%;
  }

  @media screen and (max-width: 630px) {
    width: 70%;
    margin-left: 90px;
  }

  @media screen and (max-width: 400px) {
    width: 70%;
    margin-left: 100px;
  }

  strong {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 105%;
    padding: 10px;
    font-size: 24px;
    border-bottom: 1px solid rgba(188, 188, 188, 0.2);
    color: ${({ theme }) => theme.colors.color};
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
    align-items: center;

    .productsQnt {
      margin-left: 0em;
    }

    .productsCategory {
      margin-right: 15em;
      cursor: pointer;

      @media screen and (max-width: 930px) {
        margin-right: 15%;
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

  .info {
    .product-name {
      display: flex;
    }

    .productsCategory {
      width: 100px;
      margin-left: 5px;
    }

    .productsQnt {
      width: 50px;
      margin-left: 17em;
      margin-right: 45em;

      @media screen and (max-width: 1600px) {
        margin-right: 600px;
      }

      @media screen and (max-width: 1500px) {
        margin-right: 500px;
      }

      @media screen and (max-width: 1400px) {
        margin-right: 200px;
      }

      @media screen and (max-width: 1260px) {
        margin-right: 150px;
      }

      @media screen and (max-width: 1190px) {
        margin-right: 120px;
      }

      @media screen and (max-width: 1150px) {
        margin-right: 100px;
      }

      @media screen and (max-width: 930px) {
        margin-right: 210px;
        margin-left: 100px;
      }

      @media screen and (max-width: 900px) {
        margin-right: 150px;
      }

      @media screen and (max-width: 820px) {
        margin-right: 120px;
      }

      @media screen and (max-width: 774px) {
        margin-right: 90px;
      }

      @media screen and (max-width: 680px) {
        margin-right: 0px;
      }

      @media screen and (max-width: 660px) {
        margin-left: 60px;
      }

      @media screen and (max-width: 320px) {
        margin-left: 30px;
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

    @media screen and (max-width: 490px) {
      margin-left: 10%;
    }

    @media screen and (max-width: 350px) {
      margin-left: 6%;
    }

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
