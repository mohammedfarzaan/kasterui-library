import React from "react";
import styles from "./Button_fix.module.css";

const Button_fix = () => (
  <div>
    <button className={styles["button"]}>
      Apply Now
      <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
        <path
          clipRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_fix;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_fix = () => (
         <div>
          <button className="button">
  Apply Now
  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
    <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
  </svg>
</button>
        </div>
        );

        export default Button_fix;
        
        
         */
}
