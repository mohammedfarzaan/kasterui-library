import React from "react";
import styles from "./Button_supply.module.css";

const Button_supply = () => (
  <div>
    <button className={styles["btn"]}>
      <div>GET STARTED</div>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        height="25px"
        width="25px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
          stroke="white"
          d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"
        ></path>
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
          stroke="white"
          d="M4 12.0601H14.17"
        ></path>
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
          stroke="white"
          d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_supply;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_supply = () => (
         <div>
          <button className="btn">
  <div>GET STARTED</div>
  <svg fill="none" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
<path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="white" d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"></path>
<path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="white" d="M4 12.0601H14.17"></path>
<path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="white" d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"></path>
</svg>
</button>
        </div>
        );

        export default Button_supply;
        
        
         */
}
