import React from "react";
import styles from "./Button_phrase.module.css";

const Button_phrase = () => (
  <div>
    <button className={styles["cta"]}>
      <span className={styles["hover-underline-animation"]}> Shop now </span>
      <svg
        viewBox="0 0 46 16"
        height="10"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        id="arrow-horizontal"
      >
        <path
          transform="translate(30)"
          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
          data-name="Path 10"
          id="Path_10"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_phrase;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_phrase = () => (
         <div>
          <button className="cta">
    <span className="hover-underline-animation"> Shop now </span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
        </div>
        );

        export default Button_phrase;
        
        
         */
}
