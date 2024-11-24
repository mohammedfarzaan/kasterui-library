import React from "react";
import styles from "./Button_city.module.css";

const Button_city = () => (
  <div>
    <button>
      <p>Subscribe</p>
      <svg
        stroke-width="4"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className={styles["h-6"] + styles["w-6"]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_city;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_city = () => (
         <div>
          <button>
    <p>Subscribe</p>
    <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
</button>
        </div>
        );

        export default Button_city;
        
        
         */
}
