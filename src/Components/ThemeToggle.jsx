import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

export const ThemeToggle = () => {
	const [theme, setTheme] = useState('cupcake');

	useEffect(() => {
		themeChange(false, theme);
	}, [theme]);

	const handleThemeChange = (e) => {
		setTheme(e.target.checked ? 'cupcake' : 'night');
	};

	const labelClass = 'flex cursor-pointer gap-2';
	const inputClass = 'toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2';
	const wrapper = 'flex justify-end gap-2';

	const sunSVG = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='20'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<circle cx='12' cy='12' r='5' />
			<path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
		</svg>
	);

	const moonSVG = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='20'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
		</svg>
	);

	return (
		<div className={wrapper}>
			<label className={labelClass}>
				{sunSVG}
				<input
					data-toggle-theme={theme}
					data-act-class='ACTIVECLASS'
					type='checkbox'
					checked={theme === 'cupcake'}
					onChange={handleThemeChange}
					className={inputClass}
				/>
				{moonSVG}
			</label>
		</div>
	);
};
