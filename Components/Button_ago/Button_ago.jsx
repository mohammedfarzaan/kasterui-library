import React from "react";
import styles from "./Button_ago.module.css";

const Button_ago = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        className={styles["svg-icon"]}
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#a649da" stroke-linecap="round" stroke-width="2">
          <path d="m20 20h-16"></path>
          <path
            clip-rule="evenodd"
            d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z"
            fill-rule="evenodd"
          ></path>
        </g>
      </svg>
      <span className={styles["lable"]}>Edit</span>
    </button>
  </div>
);

export default Button_ago;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_ago = () => (
         <div>
          <button className="button">
  <svg className="svg-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#a649da" stroke-linecap="round" stroke-width="2"><path d="m20 20h-16"></path><path clip-rule="evenodd" d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z" fill-rule="evenodd"></path></g></svg>
  <span className="lable">Edit</span>
</button>
        </div>
        );

        export default Button_ago;
        
        
         */
}
