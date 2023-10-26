import PropTypes from 'prop-types';
import { Header, Body, ContainerStyle } from './styles';

import { Link } from 'react-router-dom';

import arrow from '../../../assets/images/icons/arrow.svg';

export default function Container({ type, width, height, children }) {
  return (
    <ContainerStyle>
      {type === "product" && (
        <Header type={type} width={width} height={height}>
          <span className="productsId">ID</span>
          <span className="productsProduct">Produto</span>
          <span className="productsQnt">Qnt.</span>
          <span className="productsCategory">Categoria</span>
          <Link to="/products">
            <img src={arrow} alt="" />
          </Link>
        </Header>
      )}

      {type === "category" && (
        <Header width={width} height={height}>
          <span className="categoriesCategory">Categoria</span>
          <span className="categoriesProduct">Produtos</span>
          <Link to="/categories">
            <img src={arrow} alt="" />
          </Link>
        </Header>
      )}

      <Body type={type} width={width} height={height}>
        {children}
      </Body>
    </ContainerStyle>
  );
}

Container.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}
