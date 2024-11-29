import React from "react";
import styles from "./Button_race.module.css";

const Button_race = () => (
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
        <g strokeWidth="2" strokeLinecap="round" stroke="#fff">
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

export default Button_race;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_race = () => (
         <div>
          <button className="button">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" className="svg-icon"><g strokeWidth="2" strokeLinecap="round" stroke="#fff"><rect y="5" x="4" width="16" rx="2" height="16"></rect><path d="m8 3v4"></path><path d="m16 3v4"></path><path d="m4 11h16"></path></g></svg>
  <span className="lable">Add to Calendar</span>
</button>
        </div>
        );

        export default Button_race;
        
        
         */
}
