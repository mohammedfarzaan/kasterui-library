import React from "react";
import styles from "./Button_hole.module.css";

const Button_hole = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        viewBox="0 0 24 24"
        height="24"
        fill="none"
        className={styles["svg-icon"]}
      >
        <g stroke-width="2" stroke-linecap="round" stroke="#fff">
          <rect y="5" x="4" width="16" rx="2" height="16"></rect>
          <path d="m8 3v4"></path>
          <path d="m16 3v4"></path>
          <path d="m4 11h16"></path>
        </g>
      </svg>
      <span className={styles["lable"]}>Add to Calendar</span>
    </button>
  </div>
);

export default Button_hole;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_hole = () => (
         <div>
          <button className="button">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" className="svg-icon"><g stroke-width="2" stroke-linecap="round" stroke="#fff"><rect y="5" x="4" width="16" rx="2" height="16"></rect><path d="m8 3v4"></path><path d="m16 3v4"></path><path d="m4 11h16"></path></g></svg>
  <span className="lable">Add to Calendar</span>
</button>
        </div>
        );

        export default Button_hole;
        
        
         */
}
