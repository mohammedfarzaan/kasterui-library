import React from "react";
import styles from "./Input_return.module.css";

const Input_return = () => (
  <div>
    <div className={styles["circle-left"]}></div>
    <div className={styles["card"]}>
      <div className={styles["search-icon"]}>
        <svg
          strokeWidth="24.9084"
          stroke="#ffffff"
          xml:space="preserve"
          viewBox="-48.84 -48.84 586.08 586.08"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          version="1.1"
          width="20px"
          height="20px"
          fill="#d0d0d0"
        >
          <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <input
        autocomplete="off"
        className={styles["input"]}
        placeholder="Search..."
        name="text"
        type="text"
      />
      <div className={styles["filter-icon"]}>
        <a href="https://freecodez.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1.5 -1.5 28.00 28.00"
            fill="#d0d0d0"
            width="30px"
            height="30px"
          >
            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              id="SVGRepo_tracerCarrier"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="0.17500000000000002"
                stroke="#ffffff"
                d="M22 3.58002H2C1.99912 5.28492 2.43416 6.96173 3.26376 8.45117C4.09337 9.94062 5.29 11.1932 6.73999 12.09C7.44033 12.5379 8.01525 13.1565 8.41062 13.8877C8.80598 14.6189 9.00879 15.4388 9 16.27V21.54L15 20.54V16.25C14.9912 15.4188 15.194 14.599 15.5894 13.8677C15.9847 13.1365 16.5597 12.5178 17.26 12.07C18.7071 11.175 19.9019 9.92554 20.7314 8.43988C21.5608 6.95422 21.9975 5.28153 22 3.58002Z"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div className={styles["circle-right"]}></div>
  </div>
);

export default Input_return;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_return = () => (
         <div>
          <div className="circle-left"></div>
<div className="card">
  <div className="search-icon">
    <svg
      strokeWidth="24.9084"
      stroke="#ffffff"
      xml:space="preserve"
      viewBox="-48.84 -48.84 586.08 586.08"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      version="1.1"
      width="20px"
      height="20px"
      fill="#d0d0d0"
    >
      <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        id="SVGRepo_tracerCarrier"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path
              d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
  <input
    autocomplete="off"
    className="input"
    placeholder="Search..."
    name="text"
    type="text"
  />
  <div className="filter-icon">
    <a href="https://freecodez.com">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-1.5 -1.5 28.00 28.00"
        fill="#d0d0d0"
        width="30px"
        height="30px"
      >
        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          id="SVGRepo_tracerCarrier"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="0.17500000000000002"
            stroke="#ffffff"
            d="M22 3.58002H2C1.99912 5.28492 2.43416 6.96173 3.26376 8.45117C4.09337 9.94062 5.29 11.1932 6.73999 12.09C7.44033 12.5379 8.01525 13.1565 8.41062 13.8877C8.80598 14.6189 9.00879 15.4388 9 16.27V21.54L15 20.54V16.25C14.9912 15.4188 15.194 14.599 15.5894 13.8677C15.9847 13.1365 16.5597 12.5178 17.26 12.07C18.7071 11.175 19.9019 9.92554 20.7314 8.43988C21.5608 6.95422 21.9975 5.28153 22 3.58002Z"
          ></path>
        </g>
      </svg>
    </a>
  </div>
</div>
<div className="circle-right"></div>
        </div>
        );

        export default Input_return;
        
        
         */
}
