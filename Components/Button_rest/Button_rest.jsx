import React from "react";
import styles from "./Button_rest.module.css";

const Button_rest = () => (
  <div>
    <button className={styles["button_01"]}>
      <a>Click Me</a>
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 1024 1024"
        className="tree"
      >
        <path
          fill="#593B39"
          d="M592 267.2h-126.4c-9.28 0-16.64 7.36-16.64 16.64v546.56c0 9.28 7.36 16.64 16.64 16.64h126.4c9.28 0 16.64-7.36 16.64-16.64V284.16c0-9.28-7.36-16.96-16.64-16.96z"
        ></path>
        <path
          fill="#FF944C"
          d="M921.408 896H140.352a466.4 466.4 0 0 1 390.528-210.88c163.392 0 307.136 83.84 390.528 210.88z"
        ></path>
        <path
          fill="#96C34A"
          d="M509.44 271.68H193.6c-17.28 0-31.36-15.68-27.84-32.32 15.36-81.28 87.36-143.68 172.8-143.68 86.496 0 159.136 63.552 173.44 146.144 14.336-82.592 86.976-146.144 173.44-146.144 85.44 0 157.44 62.4 172.8 143.68 3.2 16.96-10.56 32.32-27.84 32.32H509.44z"
        ></path>
        <path
          fill="#608842"
          d="M504 291.2l-98.24 98.24-98.24 98.24c-11.84 11.52-31.68 10.56-40.96-3.2-44.8-65.28-38.08-156.48 19.84-214.4 57.92-57.92 148.8-64.64 214.4-19.84 6.72 4.544 10.432 11.712 11.04 19.2a24.48 24.48 0 0 1 10.4-17.28c63.68-43.52 152-36.8 208.32 19.2 56.32 56.32 62.72 144.64 19.2 208.32-8.96 13.12-28.48 14.4-39.68 2.88l-95.36-95.36-95.36-95.36a26.656 26.656 0 0 1-7.648-16.576 27.296 27.296 0 0 1-7.712 15.936z"
        ></path>
        <path
          fill="#8B5C56"
          d="M528 351.68a63.68 63.68 0 1 1-127.36 0 63.68 63.68 0 0 1 127.36 0zM655.68 416a64 64 0 1 1-128 0 64 64 0 0 1 128 0z"
        ></path>
        <path
          fill="#00A6ED"
          d="M960.64 884.16c-0.32-16.32-16.32-33.92-32.64-34.24-32.64-0.32-46.4-17.92-84.16-17.92-55.04 0-55.04 32-110.08 32s-55.04-32-110.4-32c-55.04 0-55.04 32-110.4 32-55.04 0-55.04-32-110.4-32-55.04 0-55.04 32-110.08 32s-55.04-32-110.4-32c-44.16 0-62.08 20.16-92.48 28.16-15.04 4.16-25.6 17.92-25.6 33.28 0 19.2 15.36 34.56 34.56 34.56H931.2c16 0 29.12-12.8 29.44-28.8 0.32-5.12 0.32-10.24 0-15.04z"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 690"
        className="wave"
      >
        <defs>
          <linearGradient y2="50%" x2="100%" y1="50%" x1="0%" id="gradient">
            <stop stop-color="#8ed1fc" offset="5%"></stop>
            <stop stop-color="#0693e3" offset="95%"></stop>
          </linearGradient>
        </defs>
        <path
          transform="rotate(-180 720 350)"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          fill-opacity="0.53"
          fill="url(#gradient)"
          strokeWidth="0"
          stroke="none"
          d="M 0,700 C 0,700 0,233 0,233 C 59.66609412572997,227.46856750257643 119.33218825145994,221.93713500515287 180,209 C 240.66781174854006,196.06286499484713 302.33734111989014,175.720027481965 378,194 C 453.66265888010986,212.279972518035 543.3184472689796,269.1827550669872 620,288 C 696.6815527310204,306.8172449330128 760.388869804191,287.54895225008585 837,272 C 913.611130195809,256.45104774991415 1003.1260735142562,244.62143593266921 1061,257 C 1118.8739264857438,269.3785640673308 1145.106836138784,305.96530401923735 1203,306 C 1260.893163861216,306.03469598076265 1350.4465819306079,269.5173479903813 1440,233 C 1440,233 1440,700 1440,700 Z"
        ></path>
        <defs>
          <linearGradient y2="50%" x2="100%" y1="50%" x1="0%" id="gradient">
            <stop stop-color="#8ed1fc" offset="5%"></stop>
            <stop stop-color="#0693e3" offset="95%"></stop>
          </linearGradient>
        </defs>
        <path
          transform="rotate(-180 720 350)"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
          fill-opacity="1"
          fill="url(#gradient)"
          strokeWidth="0"
          stroke="none"
          d="M 0,700 C 0,700 0,466 0,466 C 85.70594297492269,460.8663689453796 171.41188594984538,455.7327378907591 229,478 C 286.5881140501546,500.2672621092409 316.0583991755411,549.935417382343 387,551 C 457.9416008244589,552.064582617657 570.3545173479904,504.52559257986945 655,479 C 739.6454826520096,453.47440742013055 796.5235314324974,449.9622122981794 858,449 C 919.4764685675026,448.0377877018206 985.55135692202,449.62555822741325 1045,437 C 1104.44864307798,424.37444177258675 1157.271040879423,397.5355547921676 1222,400 C 1286.728959120577,402.4644452078324 1363.3644795602886,434.23222260391617 1440,466 C 1440,466 1440,700 1440,700 Z"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_rest;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_rest = () => (
         <div>
          <button className="button_01">
			<a>Click Me</a>
			<svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className="tree">
				<path fill="#593B39" d="M592 267.2h-126.4c-9.28 0-16.64 7.36-16.64 16.64v546.56c0 9.28 7.36 16.64 16.64 16.64h126.4c9.28 0 16.64-7.36 16.64-16.64V284.16c0-9.28-7.36-16.96-16.64-16.96z"></path>
				<path fill="#FF944C" d="M921.408 896H140.352a466.4 466.4 0 0 1 390.528-210.88c163.392 0 307.136 83.84 390.528 210.88z"></path>
				<path fill="#96C34A" d="M509.44 271.68H193.6c-17.28 0-31.36-15.68-27.84-32.32 15.36-81.28 87.36-143.68 172.8-143.68 86.496 0 159.136 63.552 173.44 146.144 14.336-82.592 86.976-146.144 173.44-146.144 85.44 0 157.44 62.4 172.8 143.68 3.2 16.96-10.56 32.32-27.84 32.32H509.44z"></path>
				<path fill="#608842" d="M504 291.2l-98.24 98.24-98.24 98.24c-11.84 11.52-31.68 10.56-40.96-3.2-44.8-65.28-38.08-156.48 19.84-214.4 57.92-57.92 148.8-64.64 214.4-19.84 6.72 4.544 10.432 11.712 11.04 19.2a24.48 24.48 0 0 1 10.4-17.28c63.68-43.52 152-36.8 208.32 19.2 56.32 56.32 62.72 144.64 19.2 208.32-8.96 13.12-28.48 14.4-39.68 2.88l-95.36-95.36-95.36-95.36a26.656 26.656 0 0 1-7.648-16.576 27.296 27.296 0 0 1-7.712 15.936z"></path>
				<path fill="#8B5C56" d="M528 351.68a63.68 63.68 0 1 1-127.36 0 63.68 63.68 0 0 1 127.36 0zM655.68 416a64 64 0 1 1-128 0 64 64 0 0 1 128 0z"></path>
				<path fill="#00A6ED" d="M960.64 884.16c-0.32-16.32-16.32-33.92-32.64-34.24-32.64-0.32-46.4-17.92-84.16-17.92-55.04 0-55.04 32-110.08 32s-55.04-32-110.4-32c-55.04 0-55.04 32-110.4 32-55.04 0-55.04-32-110.4-32-55.04 0-55.04 32-110.08 32s-55.04-32-110.4-32c-44.16 0-62.08 20.16-92.48 28.16-15.04 4.16-25.6 17.92-25.6 33.28 0 19.2 15.36 34.56 34.56 34.56H931.2c16 0 29.12-12.8 29.44-28.8 0.32-5.12 0.32-10.24 0-15.04z"></path>
			</svg>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 690" className="wave">
				<defs>
					<linearGradient y2="50%" x2="100%" y1="50%" x1="0%" id="gradient">
						<stop stop-color="#8ed1fc" offset="5%"></stop>
						<stop stop-color="#0693e3" offset="95%"></stop>
					</linearGradient>
				</defs>
				<path transform="rotate(-180 720 350)" className="transition-all duration-300 ease-in-out delay-150 path-0" fill-opacity="0.53" fill="url(#gradient)" strokeWidth="0" stroke="none" d="M 0,700 C 0,700 0,233 0,233 C 59.66609412572997,227.46856750257643 119.33218825145994,221.93713500515287 180,209 C 240.66781174854006,196.06286499484713 302.33734111989014,175.720027481965 378,194 C 453.66265888010986,212.279972518035 543.3184472689796,269.1827550669872 620,288 C 696.6815527310204,306.8172449330128 760.388869804191,287.54895225008585 837,272 C 913.611130195809,256.45104774991415 1003.1260735142562,244.62143593266921 1061,257 C 1118.8739264857438,269.3785640673308 1145.106836138784,305.96530401923735 1203,306 C 1260.893163861216,306.03469598076265 1350.4465819306079,269.5173479903813 1440,233 C 1440,233 1440,700 1440,700 Z">
				</path>
				<defs>
					<linearGradient y2="50%" x2="100%" y1="50%" x1="0%" id="gradient">
						<stop stop-color="#8ed1fc" offset="5%"></stop>
						<stop stop-color="#0693e3" offset="95%"></stop>
					</linearGradient>
				</defs>
				<path transform="rotate(-180 720 350)" className="transition-all duration-300 ease-in-out delay-150 path-1" fill-opacity="1" fill="url(#gradient)" strokeWidth="0" stroke="none" d="M 0,700 C 0,700 0,466 0,466 C 85.70594297492269,460.8663689453796 171.41188594984538,455.7327378907591 229,478 C 286.5881140501546,500.2672621092409 316.0583991755411,549.935417382343 387,551 C 457.9416008244589,552.064582617657 570.3545173479904,504.52559257986945 655,479 C 739.6454826520096,453.47440742013055 796.5235314324974,449.9622122981794 858,449 C 919.4764685675026,448.0377877018206 985.55135692202,449.62555822741325 1045,437 C 1104.44864307798,424.37444177258675 1157.271040879423,397.5355547921676 1222,400 C 1286.728959120577,402.4644452078324 1363.3644795602886,434.23222260391617 1440,466 C 1440,466 1440,700 1440,700 Z">
				</path>
			</svg>
		</button>
        </div>
        );

        export default Button_rest;
        
        
         */
}
