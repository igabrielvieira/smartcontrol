import { Container } from './styles';
import NavHeader from '../NavHeader';
import NavList from '../NavList';

import sidebar from '../../assets/images/icons/side-bar.svg';

export default function SideBar({ classSidebar, setClassSidebar, onToggleTheme, selectedtheme }) {
  let classButton = classSidebar + 'Button';

  function handleToggleSideBar() {
    classSidebar === 'open'
    ? setClassSidebar('closed')
    : setClassSidebar('open');
  }

  function closeSidebar() {
    setClassSidebar('closed');
  }
  return (
    <Container closeSidebar={closeSidebar}>
      <div className={classSidebar}>
        <NavHeader onToggleTheme={onToggleTheme} selectedtheme={selectedtheme} />
        <NavList />
      </div>
      <button className={classButton} onClick={handleToggleSideBar}>
        <img className="handleSidebar" src={sidebar} alt="" />
      </button>
    </Container>
  );
}
