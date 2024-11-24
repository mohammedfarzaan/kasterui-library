import React from "react";
import styles from "./Button_taken.module.css";

const Button_taken = () => (
  <div>
    <div className={styles["main__action"]}>
      <a className={styles["main__scroll"]} href="#">
        <div className={styles["main__scroll-box"]}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
              fill="rgba(28,28,30,1)"
            ></path>
          </svg>
        </div>

        <span className={styles["main__scroll-text"]}>Scroll</span>
      </a>
    </div>
  </div>
);

export default Button_taken;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_taken = () => (
         <div>
          <div className="main__action">
  <a className="main__scroll" href="#">
    <div className="main__scroll-box">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  	    <path d="M0 0h24v24H0z" fill="none"></path>
  	    <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="rgba(28,28,30,1)">
  	    </path>
	  </svg>
    </div>

    <span className="main__scroll-text">Scroll</span>
  </a>
</div>
        </div>
        );

        export default Button_taken;
        
        
         */
}
