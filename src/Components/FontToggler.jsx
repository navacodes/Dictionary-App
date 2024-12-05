import { useState, useEffect } from 'react';
import IconArrowDown from '../assets/images/icon-arrow-down.svg';

export const FontToggler = () => {
  const [font, setFont] = useState('sans-serif');
  const fonts = ['sans-serif', 'serif', 'monospace'];

  useEffect(() => {
    document.body.style.fontFamily = font;
  }, [font]);

  return (
    <div className='dropdown ml-auto mr-8'>
      <div
        tabIndex={0}
        role='button'
        className='btn m-1'
      >
        Font
        <img
          src={IconArrowDown}
          alt='Arrow down icon'
        />
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
      >
        {fonts.map((fontOption) => (
          <li key={fontOption}>
            <a onClick={() => setFont(fontOption)}>
              {fontOption.charAt(0).toUpperCase() + fontOption.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
