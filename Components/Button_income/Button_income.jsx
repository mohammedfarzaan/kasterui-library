import React from "react";
import styles from "./Button_income.module.css";

const Button_income = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        viewBox="0 0 20 20"
        height="20"
        fill="none"
        className={styles["svg-icon"]}
      >
        <g stroke-width="1.5" stroke-linecap="round" stroke="#de8a2a">
          <circle r="7.5" cy="10" cx="10"></circle>
          <path d="m9.99998 7.5v5"></path>
          <path d="m7.5 9.99998h5"></path>
        </g>
      </svg>
      <span className={styles["lable"]}>Add</span>
    </button>
  </div>
);

export default Button_income;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_income = () => (
         <div>
          <button className="button">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20" fill="none" className="svg-icon"><g stroke-width="1.5" stroke-linecap="round" stroke="#de8a2a"><circle r="7.5" cy="10" cx="10"></circle><path d="m9.99998 7.5v5"></path><path d="m7.5 9.99998h5"></path></g></svg>
  <span className="lable">Add</span>
</button>
        </div>
        );

        export default Button_income;
        
        
         */
}
