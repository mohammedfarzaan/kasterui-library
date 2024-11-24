import React from "react";
import styles from "./Button_nature.module.css";

const Button_nature = () => (
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

export default Button_nature;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_nature = () => (
         <div>
          <button className="cta">
    <span className="hover-underline-animation"> Shop now </span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
        </div>
        );

        export default Button_nature;
        
        
         */
}
