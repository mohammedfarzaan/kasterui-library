import React from "react";
import styles from "./Button_stood.module.css";

const Button_stood = () => (
  <div>
    <button>
      <span>Next</span>
      <svg
        width="15"
        height="15"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_stood;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_stood = () => (
         <div>
          <button>
  <span>Next</span>
  <svg width="15" height="15" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" stroke-linejoin="round" stroke-linecap="round"></path>
</svg>
</button>
        </div>
        );

        export default Button_stood;
        
        
         */
}
