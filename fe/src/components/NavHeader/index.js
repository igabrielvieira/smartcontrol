import { Container, ThemeDiv } from './styles';

import logo from '../../assets/images/logo.svg';
import darkTheme from '../../assets/images/icons/dark-theme.svg';
import lightTheme from '../../assets/images/icons/light-theme.svg';

import { Link } from 'react-router-dom';

export default function NavHeader({ onToggleTheme, selectedtheme }) {
  return (
    <Container>
      <div>
        <Link to="/">
          <img width="140" src={logo} alt="Logo" />
        </Link>

        <ThemeDiv selectedtheme={selectedtheme}>
          <button onClick={onToggleTheme}>
            {selectedtheme === 'light' ? (
              <img src={darkTheme} alt="" />
            ) : (
              <img src={lightTheme} alt="" />
            )}
          </button>
        </ThemeDiv>
      </div>
    </Container>
  );
}
