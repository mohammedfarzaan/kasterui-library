import React from "react";
import styles from "./Button_weigh.module.css";

const Button_weigh = () => (
  <div>
    <button className={styles["join-button"]}>
      Join Today
      <span className={styles["arrow"]}>
        <svg
          fill="#000000"
          xml:space="preserve"
          viewBox="0 0 32.00 32.00"
          id="Layer_1"
          version="1.1"
        >
          <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <line
              y2="16"
              x2="4"
              y1="16"
              x1="26"
              stroke-miterlimit="10"
              strokeWidth="2.848"
              stroke="#f3bff3"
              fill="none"
            ></line>
            <polyline
              points="18,7.5 26.5,16 18,24.5"
              stroke-miterlimit="10"
              strokeWidth="2.848"
              stroke="#f3bff3"
              fill="none"
            ></polyline>
          </g>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_weigh;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_weigh = () => (
         <div>
          <button className="join-button">
  Join Today
  <span className="arrow">
    <svg
      fill="#000000"
      xml:space="preserve"
      viewBox="0 0 32.00 32.00"
      id="Layer_1"
      version="1.1"
    >
      <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        id="SVGRepo_tracerCarrier"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <line
          y2="16"
          x2="4"
          y1="16"
          x1="26"
          stroke-miterlimit="10"
          strokeWidth="2.848"
          stroke="#f3bff3"
          fill="none"
        ></line>
        <polyline
          points="18,7.5 26.5,16 18,24.5"
          stroke-miterlimit="10"
          strokeWidth="2.848"
          stroke="#f3bff3"
          fill="none"
        ></polyline>
      </g>
    </svg>
  </span>
</button>
        </div>
        );

        export default Button_weigh;
        
        
         */
}
