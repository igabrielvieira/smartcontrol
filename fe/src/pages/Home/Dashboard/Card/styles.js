import styled from 'styled-components';

export const CardItem = styled.div`
  display: flex;
  justify-content: center;
  width: 180px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  font-size: 14px;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }

  @media screen and (max-width: 900px) {
    font-size: 10px;
    padding: 10px;
  }

  @media screen and (max-width: 900px) {
    font-size: 10px;
    padding: 10px;
  }

  @media screen and (max-width: 650px) {
    font-size: 10px;
    width: 130px;
  }

  @media screen and (max-width: 350px) {
    font-size: 10px;
    width: 110px;
  }

  .rightCard {
    display: flex;
    flex-direction: column;
    margin-top: 3px;

    .numberRightCard {
      font-size: 22px;
      font-weight: bold;

      @media screen and (max-width: 1200px) {
        font-size: 16px;
      }

      @media screen and (max-width: 1000px) {
        font-size: 14px;
      }
    }

    .itemSpan {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      font-size: 12px;
      font-weight: bold;
      max-width: 110px;
      height: 28px;
      text-overflow: ellipsis;
      overflow: hidden;

      @media screen and (max-width: 1200px) {
        font-size: 14px;
      }

      @media screen and (max-width: 1100px) {
        height: 25px;
        font-size: 10px;
      }
    }

    .categorySpan {
      font-size: 16px;
      font-weight: bold;
      max-width: 110px;
      height: 23px;
      white-space: nowrap; /* Impede que o texto quebre em várias linhas */
      overflow: hidden; /* Oculta qualquer conteúdo excedente */
      text-overflow: ellipsis; /* Adiciona reticências ao final do texto cortado */

      @media screen and (max-width: 1200px) {
        font-size: 14px;
      }
    }

    .estatisticSide {
      display: flex;
      align-items: center;
      gap: 8px;

      .estatistic {
        text-align: center;
        font-size: 10px;
        font-weight: bolder;
        background-color: rgba(53, 209, 28, 0.3);
        border-radius: 10px;
        padding: 3px;

        @media screen and (max-width: 1200px) {
          font-size: 8px;
        }
      }
    }
  }

  img {
    width: 22px;
    height: 25px;
  }

  img.down {
    width: 22px;
    height: 25px;
    transform: rotate(180deg);
  }

  span {
    display: block;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 16px;

  @media screen and (max-width: 900px) {
    width: 500px !important;
    height: 300px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 650px) {
    width: 300px !important;
    height: 300px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto !important;
  }

  @media screen and (max-width: 305px) {
    width: 100px !important;
  }
`;
