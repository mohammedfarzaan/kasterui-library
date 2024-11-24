import React from "react";
import styles from "./Button_carry.module.css";

const Button_carry = () => (
  <div>
    <button className={styles["button"]} type="button">
      <span className={styles["button__text"]}>Refresh</span>
      <span className={styles["button__icon"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          viewBox="0 0 48 48"
          height="48"
          className={styles["svg"]}
        >
          <path d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"></path>
          <path fill="none" d="M0 0h48v48h-48z"></path>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_carry;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_carry = () => (
         <div>
          <button className="button" type="button">
  <span className="button__text">Refresh</span>
  <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="48" viewBox="0 0 48 48" height="48" className="svg"><path d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"></path><path fill="none" d="M0 0h48v48h-48z"></path></svg></span>
</button>
        </div>
        );

        export default Button_carry;
        
        
         */
}