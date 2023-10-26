import { Container } from './styles';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';

export default function PageHeader(props) {
  const history = useHistory();
  return (
    <Container>
      <a onClick={() => history.goBack()}>
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </a>

      <h1>{props.title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}
