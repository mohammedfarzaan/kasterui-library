import React from "react";
import styles from "./Button_swam.module.css";

const Button_swam = () => (
  <div>
    <button className={styles["btn"]}>
      See more
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="15px"
        width="15px"
        className="icon"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke-miterlimit="10"
          strokeWidth="1.5"
          stroke="#292D32"
          d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_swam;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_swam = () => (
         <div>
          <button className="btn">
  See more 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15px" width="15px" className="icon">
<path strokeLinejoin="round" strokeLinecap="round" stroke-miterlimit="10" strokeWidth="1.5" stroke="#292D32" d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"></path>
</svg>
</button>
        </div>
        );

        export default Button_swam;
        
        
         */
}
