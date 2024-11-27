import React from "react";
import styles from "./Button_actual.module.css";

const Button_actual = () => (
  <div>
    <button className={styles["space-button"]}>
      <span className={styles["space-button-text"]}>Explore Space</span>
      <svg
        className="space-button-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 0C8.411 0 5.418 2.993 5.418 6.582c0 3.153 2.443 5.792 5.595 6.473v2.526c0 .748.603 1.352 1.352 1.352s1.352-.604 1.352-1.352V13.05c3.152-.68 5.595-3.32 5.595-6.473C18.582 2.993 15.589 0 12 0zm0 9.288a3.706 3.706 0 1 1 0-7.412 3.706 3.706 0 0 1 0 7.412zM7.292 6.582c0-2.129 1.733-3.862 3.862-3.862s3.862 1.733 3.862 3.862c0 2.129-1.733 3.862-3.862 3.862s-3.862-1.733-3.862-3.862z"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_actual;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_actual = () => (
         <div>
          <button className="space-button">
  <span className="space-button-text">Explore Space</span>
  <svg className="space-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 0C8.411 0 5.418 2.993 5.418 6.582c0 3.153 2.443 5.792 5.595 6.473v2.526c0 .748.603 1.352 1.352 1.352s1.352-.604 1.352-1.352V13.05c3.152-.68 5.595-3.32 5.595-6.473C18.582 2.993 15.589 0 12 0zm0 9.288a3.706 3.706 0 1 1 0-7.412 3.706 3.706 0 0 1 0 7.412zM7.292 6.582c0-2.129 1.733-3.862 3.862-3.862s3.862 1.733 3.862 3.862c0 2.129-1.733 3.862-3.862 3.862s-3.862-1.733-3.862-3.862z"></path>
  </svg>
</button>
        </div>
        );

        export default Button_actual;
        
        
         */
}
