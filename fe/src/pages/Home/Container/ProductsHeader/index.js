import PropTypes from 'prop-types';
import { Container, ProductsContainer } from './styles';
import productsIcon from '../../../../assets/images/icons/icon-products.svg';
import categoriesIcon from '../../../../assets/images/icons/icon-categories.svg';

export default function ProductsHeader({ type, width, height, children, title, imgName }) {
  return (
    <ProductsContainer>
      <Container type={type} width={width} height={height}>
        <img src={imgName === 'productsIcon' ? productsIcon : categoriesIcon} alt="Container icon" />

        <span>{title}</span>
      </Container>

      {children}
    </ProductsContainer>
  );
}

ProductsHeader.propTypes = {
  title: PropTypes.string.isRequired,
  imgName: PropTypes.string,
}

ProductsHeader.defaultProps = {
  imgName: "categoriesIcon",
}
