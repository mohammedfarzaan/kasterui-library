import React from "react";
import styles from "./Button_safety.module.css";

const Button_safety = () => (
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

export default Button_safety;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_safety = () => (
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

        export default Button_safety;
        
        
         */
}
