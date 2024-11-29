import React from "react";
import styles from "./Button_beside.module.css";

const Button_beside = () => (
  <div>
    <a id="scroll-up" className={styles["scroll-up"]} href="#">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          fill="rgba(255,255,255,1)"
          d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
        ></path>
      </svg>
    </a>
  </div>
);

export default Button_beside;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_beside = () => (
         <div>
          <a id="scroll-up" className="scroll-up" href="#">
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M0 0h24v24H0z" fill="none"></path>
		<path fill="rgba(255,255,255,1)" d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z">
		</path>
	</svg>
</a>
        </div>
        );

        export default Button_beside;
        
        
         */
}
