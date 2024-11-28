import React from "react";
import styles from "./Button_hot.module.css";

const Button_hot = () => (
  <div>
    <button className={styles["btn"]}>
      Share
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="20px"
        width="20px"
      >
        <path
          strokeLinecap="round"
          strokeWidth="2"
          stroke="#000000"
          d="M15.2141 7.39294L8.68387 10.6581M8.68387 10.6581C8.19134 9.67492 7.17449 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C7.17449 15 8.19134 14.3251 8.68387 13.3419M8.68387 10.6581C8.88616 11.0619 9 11.5176 9 12C9 12.4824 8.88616 12.9381 8.68387 13.3419M15.2141 16.6071L8.68387 13.3419M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
        ></path>
      </svg>
      <ul className={styles["socials"]}>
        <li>
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 -4 48 48"
            height="20px"
            width="20px"
          >
            <g
              fillRule="evenodd"
              fill="none"
              strokeWidth="1"
              stroke="none"
              id="Icons"
            >
              <g
                fill="#00AAEC"
                transform="translate(-300.000000, -164.000000)"
                id="Color-"
              >
                <path
                  id="Twitter"
                  d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                ></path>
              </g>
            </g>
          </svg>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
            height="20px"
            width="20px"
          >
            <rect
              fill="url(#paint0_radial_87_7153)"
              rx="6"
              height="28"
              width="28"
              y="2"
              x="2"
            ></rect>
            <rect
              fill="url(#paint1_radial_87_7153)"
              rx="6"
              height="28"
              width="28"
              y="2"
              x="2"
            ></rect>
            <rect
              fill="url(#paint2_radial_87_7153)"
              rx="6"
              height="28"
              width="28"
              y="2"
              x="2"
            ></rect>
            <path
              fill="white"
              d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
            ></path>
            <path
              fill="white"
              d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
            <path
              fill="white"
              d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
            <defs>
              <radialGradient
                gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                gradientUnits="userSpaceOnUse"
                r="1"
                cy="0"
                cx="0"
                id="paint0_radial_87_7153"
              >
                <stop stop-color="#B13589"></stop>
                <stop stop-color="#C62F94" offset="0.79309"></stop>
                <stop stop-color="#8A3AC8" offset="1"></stop>
              </radialGradient>
              <radialGradient
                gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                gradientUnits="userSpaceOnUse"
                r="1"
                cy="0"
                cx="0"
                id="paint1_radial_87_7153"
              >
                <stop stop-color="#E0E8B7"></stop>
                <stop stop-color="#FB8A2E" offset="0.444662"></stop>
                <stop stop-color="#E2425C" offset="0.71474"></stop>
                <stop stop-opacity="0" stop-color="#E2425C" offset="1"></stop>
              </radialGradient>
              <radialGradient
                gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                gradientUnits="userSpaceOnUse"
                r="1"
                cy="0"
                cx="0"
                id="paint2_radial_87_7153"
              >
                <stop stop-color="#406ADC" offset="0.156701"></stop>
                <stop stop-color="#6A45BE" offset="0.467799"></stop>
                <stop stop-opacity="0" stop-color="#6A45BE" offset="1"></stop>
              </radialGradient>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
            height="20px"
            width="20px"
          >
            <circle
              fill="url(#paint0_linear_87_7208)"
              r="14"
              cy="16"
              cx="16"
            ></circle>
            <path
              fill="white"
              d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
            ></path>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="29.917"
                x2="16"
                y1="2"
                x1="16"
                id="paint0_linear_87_7208"
              >
                <stop stop-color="#18ACFE"></stop>
                <stop stop-color="#0163E0" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>
        </li>
      </ul>
    </button>
  </div>
);

export default Button_hot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_hot = () => (
         <div>
          <button className="btn">
  Share 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20px" width="20px">
    <path strokeLinecap="round" strokeWidth="2" stroke="#000000" d="M15.2141 7.39294L8.68387 10.6581M8.68387 10.6581C8.19134 9.67492 7.17449 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C7.17449 15 8.19134 14.3251 8.68387 13.3419M8.68387 10.6581C8.88616 11.0619 9 11.5176 9 12C9 12.4824 8.88616 12.9381 8.68387 13.3419M15.2141 16.6071L8.68387 13.3419M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"></path>
  </svg>

  <ul className="socials">
    <li>
      <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 -4 48 48" height="20px" width="20px">
        <g fillRule="evenodd" fill="none" strokeWidth="1" stroke="none" id="Icons">
            <g fill="#00AAEC" transform="translate(-300.000000, -164.000000)" id="Color-">
                <path id="Twitter" d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283">
                </path>
            </g>
        </g>
    </svg>
    </li>

    <li>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" height="20px" width="20px">
        <rect fill="url(#paint0_radial_87_7153)" rx="6" height="28" width="28" y="2" x="2"></rect>
        <rect fill="url(#paint1_radial_87_7153)" rx="6" height="28" width="28" y="2" x="2"></rect>
        <rect fill="url(#paint2_radial_87_7153)" rx="6" height="28" width="28" y="2" x="2"></rect>
        <path fill="white" d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"></path>
        <path fill="white" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" clipRule="evenodd" fillRule="evenodd"></path>
        <path fill="white" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" clipRule="evenodd" fillRule="evenodd"></path>
        <defs>
        <radialGradient gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)" gradientUnits="userSpaceOnUse" r="1" cy="0" cx="0" id="paint0_radial_87_7153">
        <stop stop-color="#B13589"></stop>
        <stop stop-color="#C62F94" offset="0.79309"></stop>
        <stop stop-color="#8A3AC8" offset="1"></stop>
        </radialGradient>
        <radialGradient gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)" gradientUnits="userSpaceOnUse" r="1" cy="0" cx="0" id="paint1_radial_87_7153">
        <stop stop-color="#E0E8B7"></stop>
        <stop stop-color="#FB8A2E" offset="0.444662"></stop>
        <stop stop-color="#E2425C" offset="0.71474"></stop>
        <stop stop-opacity="0" stop-color="#E2425C" offset="1"></stop>
        </radialGradient>
        <radialGradient gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)" gradientUnits="userSpaceOnUse" r="1" cy="0" cx="0" id="paint2_radial_87_7153">
        <stop stop-color="#406ADC" offset="0.156701"></stop>
        <stop stop-color="#6A45BE" offset="0.467799"></stop>
        <stop stop-opacity="0" stop-color="#6A45BE" offset="1"></stop>
        </radialGradient>
        </defs>
      </svg>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" height="20px" width="20px">
      <circle fill="url(#paint0_linear_87_7208)" r="14" cy="16" cx="16"></circle>
      <path fill="white" d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"></path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" y2="29.917" x2="16" y1="2" x1="16" id="paint0_linear_87_7208">
      <stop stop-color="#18ACFE"></stop>
      <stop stop-color="#0163E0" offset="1"></stop>
      </linearGradient>
      </defs>
    </svg>
    </li>
  </ul>
</button>
        </div>
        );

        export default Button_hot;
        
        
         */
}
