import React from "react";
import Logo from "../../assets/images/logo.png";

export const Header = () => {
  return (
    <div className="m-0 p-8 h-[140px] shadow-lg app-header flex items-center justify-between">
      <div className="flex gap-x-4 h-full items-center">
        <img
          className="h-full"
          src={Logo}
          alt="expanded-logo"
        />
        <h3 className="sm:hidden md:block text-white text-[30px]">PUZZLE MAKER DAO</h3>
      </div>
      <a
        href="http://t.me/puzzlegamesDAO"
        target="_blank"
        rel="noreferrer"
        className="app-header-action text-white font-bold flex items-center gap-x-4 px-4 py-2 rounded-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <g transform="translate(40 40) rotate(180)">
            <g transform="translate(36.811 31.832) rotate(180)">
              <path
                class="b"
                d="M1.755,10.307,18.8,3.282c1.683-.732,7.39-3.073,7.39-3.073s2.634-1.024,2.415,1.463c-.073,1.024-.659,4.61-1.244,8.488L25.536,21.648s-.146,1.683-1.39,1.976-3.293-1.024-3.659-1.317c-.293-.22-5.488-3.512-7.39-5.122a1.386,1.386,0,0,1,.073-2.342c2.634-2.415,5.781-5.415,7.683-7.317.878-.878,1.756-2.927-1.9-.439L8.633,14.038a4.3,4.3,0,0,1-3.366.073c-2.2-.659-4.756-1.537-4.756-1.537s-1.756-1.1,1.244-2.268Z"
              />
            </g>
          </g>
        </svg>
        JOIN TELEGRAM
      </a>
    </div>
  );
};
