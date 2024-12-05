import { ThemeToggle } from './ThemeToggle';
import LogoImage from '../assets/images/logo.svg';
import { FontToggler } from './FontToggler';

const Logo = () => {
  return (
    <img
      src={LogoImage}
      alt='logo'
						className=' cursor-pointer z-30'
    />
  );
};

const MenuBar = () => {
  const wrapper = 'flex justify-between';

  return (
    <div className={wrapper}>
      <Logo />
      <FontToggler />
      <ThemeToggle />
    </div>
  );
};
export default MenuBar;
