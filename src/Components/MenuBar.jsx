import { ThemeToggle } from './ThemeToggle';
import LogoImage from '../assets/images/logo.svg';

const Logo = () => {
	return <img src={LogoImage} alt='logo' />;
};

const MenuBar = () => {
	const wrapper = 'flex justify-between';

	return (
		<div className={wrapper}>
			<Logo />
			<ThemeToggle />
		</div>
	);
};
export default MenuBar;
