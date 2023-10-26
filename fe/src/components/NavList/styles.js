import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;
  margin-left: 16px;

  li, a {
    margin-top: 24px;
    margin-bottom: 4px;
    text-decoration: none;
    list-style: none;
    font-size: 20px;
    color: white;
    transition: 0.3s ease-in;

    @media screen and (max-width: 1400px) {
      font-size: 16px;
    }

    @media screen and (max-width: 1300px) {
      font-size: 14px;
    }
  }


  .line {
    width: 0%;
    height: 0.5px;
    border: 1px solid rgb(230, 237, 230, 0.0);
    transition: 0.5s ease-in;
  }

  a:hover {
    li, a {
      color: rgb(230, 237, 230, 0.9);
    }

    div.line {
      border: 1px solid rgb(230, 237, 230, 0.9);
    }

    .line {
      width: 90%;
    }
  }

  .FooterNav {
    bottom: 24px;
    position: absolute;
    width: 95%;
  }
`;

