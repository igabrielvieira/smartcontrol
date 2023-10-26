import styled from 'styled-components';

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  background: ${({ theme }) => theme.colors.primary.main};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  display: flex;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 1400px) {
    width: ${({ type, width }) => type === 'product' ? 552 : 310 }px !important;
  }

  @media screen and (max-width: 1000px) {
    width: ${({ type, width }) => type === 'product' ? 770 : 770 }px !important;
    margin-left: -60px;
  }

  @media screen and (max-width: 900px) {
    width: ${({ type, width }) => type === 'product' ? 710 : 710 }px !important;
    margin-left: -100px;
  }

  @media screen and (max-width: 750px) {
    width: ${({ type, width }) => type === 'product' ? '100%' : '100%' } !important;
    margin-left: 10px;
    font-size: 14px;
  }

  @media screen and (max-width: 315px) {
    width: ${({ type, width }) => type === 'product' ? '100%' : '100%' } !important;
    margin-left: 10px;
    font-size: 12px;
  }

  a img {
    @media screen and (max-width: 280px) {
      display: none;
    }
  }

  span {
    color: #FFF;
  }

  .productsId {
    margin-right: 66px;

    @media screen and (max-width: 1400px) {
      margin-right: 30px;
    }

    @media screen and (max-width: 750px) {
      margin-right: 5%;
    }
  }

  .productsProduct {
    margin-right: 160px;

    @media screen and (max-width: 1400px) {
      margin-right: 158px;
    }

    @media screen and (max-width: 750px) {
      margin-right: 30%;
    }

    @media screen and (max-width: 600px) {
      margin-right: 18%;
    }

    @media screen and (max-width: 420px) {
      margin-right: 20%;
    }

    @media screen and (max-width: 400px) {
      margin-right: 10%;
    }
  }

  .productsQnt {
    margin-right: 60px;

    @media screen and (max-width: 750px) {
      margin-right: 10%;
    }

    @media screen and (max-width: 500px) {
      margin-right: 10%;
    }

    @media screen and (max-width: 420px) {
      margin-right: 5%;
    }
  }

  .productsCategory {
    margin-right: 120px;

    @media screen and (max-width: 1400px) {
      margin-right: 55px;
    }

    @media screen and (max-width: 1000px) {
      margin-right: 270px;
    }

    @media screen and (max-width: 900px) {
      margin-right: 220px;
    }

    @media screen and (max-width: 750px) {
      margin-right: 3%;
    }

    @media screen and (max-width: 600px) {
      margin-right: 0%;
    }

    @media screen and (max-width: 570px) {
      margin-right: 3%;
    }

    @media screen and (max-width: 430px) {
      margin-right: 5%;
    }

    @media screen and (max-width: 360px) {
      margin-right: 6%;
    }
  }

  .categoriesCategory {
    margin-right: 40px;

    @media screen and (max-width: 1000px) {
      margin-right: 100px;
    }

    @media screen and (max-width: 570px) {
      margin-right: 20%;
    }

    @media screen and (max-width: 415px) {
      margin-right: 10%;
    }

    @media screen and (max-width: 305px) {
      margin-right: 10%;
    }
  }

  .categoriesProduct {
    margin-right: 130px;

    @media screen and (max-width: 1400px) {
      margin-right: 70px;
    }

    @media screen and (max-width: 1000px) {
      margin-right: 460px;
    }

    @media screen and (max-width: 900px) {
      margin-right: 410px;
    }

    @media screen and (max-width: 750px) {
      margin-right: 44%;
    }

    @media screen and (max-width: 570px) {
      margin-right: 35%;
    }

    @media screen and (max-width: 440px) {
      margin-right: 32%;
    }

    @media screen and (max-width: 335px) {
      margin-right: 15%;
    }
  }
`;

export const Body = styled.div`
  background-color: #FFF;
  width: ${({ width }) => `${width}px`};
  height: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media screen and (max-width: 1400px) {
    width: ${({ type, width }) => type === 'product' ? `${34.5}em` : `${width - 60}px` };
  }

  @media screen and (max-width: 1000px) {
    width: ${({ type, width }) => type === 'product' ? `${770}px` : `${width + 400}px` };
    margin-left: -60px;
  }

  @media screen and (max-width: 900px) {
    width: ${({ type, width }) => type === 'product' ? `${710}px` : `${width + 340}px` };
    margin-left: -100px;
  }

  @media screen and (max-width: 750px) {
    width: ${({ type, width }) => type === 'product' ? `100%` : `100%` };
    margin-left: 10px;
  }

`;
