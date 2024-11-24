import React from "react";
import styles from "./Button_save.module.css";

const Button_save = () => (
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
          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <line
              y2="16"
              x2="4"
              y1="16"
              x1="26"
              stroke-miterlimit="10"
              stroke-width="2.848"
              stroke="#f3bff3"
              fill="none"
            ></line>
            <polyline
              points="18,7.5 26.5,16 18,24.5"
              stroke-miterlimit="10"
              stroke-width="2.848"
              stroke="#f3bff3"
              fill="none"
            ></polyline>
          </g>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_save;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_save = () => (
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
      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
      <g
        stroke-linejoin="round"
        stroke-linecap="round"
        id="SVGRepo_tracerCarrier"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <line
          y2="16"
          x2="4"
          y1="16"
          x1="26"
          stroke-miterlimit="10"
          stroke-width="2.848"
          stroke="#f3bff3"
          fill="none"
        ></line>
        <polyline
          points="18,7.5 26.5,16 18,24.5"
          stroke-miterlimit="10"
          stroke-width="2.848"
          stroke="#f3bff3"
          fill="none"
        ></polyline>
      </g>
    </svg>
  </span>
</button>
        </div>
        );

        export default Button_save;
        
        
         */
}
