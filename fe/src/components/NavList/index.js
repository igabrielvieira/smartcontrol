import { Container } from './styles';

import { Link } from 'react-router-dom';

export default function NavList() {
  return (
    <Container>
      <ul>
        <Link to="/">
          <li>Início</li>
          <div className='line' />
        </Link>


        <Link to="/newproduct">
          <li>Criar produto</li>
          <div className='line' />
        </Link>


        <Link to="/newcategory">
          <li>Criar categoria</li>
          <div className='line' />
        </Link>

        <div className='FooterNav'>
          <Link to="/products">
            <li>Produtos</li>
            <div className='line' />
          </Link>

          <Link to="/categories">
            <li>Categorias</li>
            <div className='line' />
          </Link>
        </div>

      </ul>
    </Container>
  );
}
