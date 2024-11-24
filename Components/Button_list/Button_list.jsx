import React from "react";
import styles from "./Button_list.module.css";

const Button_list = () => (
  <div>
    <button className={styles["btn"]}>
      See more
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="15px"
        width="15px"
        className={styles["icon"]}
      >
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
          stroke="#292D32"
          d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_list;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_list = () => (
         <div>
          <button className="btn">
  See more 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15px" width="15px" className="icon">
<path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" stroke="#292D32" d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"></path>
</svg>
</button>
        </div>
        );

        export default Button_list;
        
        
         */
}
