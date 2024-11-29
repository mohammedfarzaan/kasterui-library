import React from "react";
import styles from "./Button_bite.module.css";

const Button_bite = () => (
  <div>
    <div tabindex="0" className={styles["plusButton"]}>
      <svg
        className={styles["plusIcon"]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
      >
        <g mask="url(#mask0_21_345)">
          <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
        </g>
      </svg>
    </div>
  </div>
);

export default Button_bite;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_bite = () => (
         <div>
          <div tabindex="0" className="plusButton">
  <svg className="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
    <g mask="url(#mask0_21_345)">
      <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
    </g>
  </svg>
</div>
        </div>
        );

        export default Button_bite;
        
        
         */
}
