import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import themes from '../../assets/styles/themes';

import { Container } from './styles';

import Routes from '../../Routes';
import ToastContainer from '../Toast/ToastContainer';
import SideBar from '../SideBar';
import { useState, useMemo, useEffect } from 'react';

function App() {
  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme || 'light');
  const selectedTheme = themes[theme];

  const savedSidebar = localStorage.getItem('sidebar');
  const [classSidebar, setClassSidebar] = useState(savedSidebar || 'closed');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('sidebar', classSidebar);
  }, [theme, classSidebar]);

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <ToastContainer />
        <Container sidebarMode={classSidebar}>
          <SideBar classSidebar={classSidebar} setClassSidebar={setClassSidebar} onToggleTheme={handleToggleTheme} selectedtheme={theme} />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
