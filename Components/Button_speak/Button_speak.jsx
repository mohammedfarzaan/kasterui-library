import React from "react";
import styles from "./Button_speak.module.css";

const Button_speak = () => (
  <div>
    <button className={styles["space-button"]}>
      To a Galaxy far far away
      <span className={styles["space-icon"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 256 256"
        >
          <path
            fill="white"
            d="M148 224a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4Zm71.1-67.3l-12.4 55.6a12 12 0 0 1-7.7 8.8a14.4 14.4 0 0 1-4 .6a12 12 0 0 1-7.5-2.6L158.6 196H97.4l-28.9 23.1a12 12 0 0 1-7.5 2.6a14.4 14.4 0 0 1-4-.6a12 12 0 0 1-7.7-8.8l-12.4-55.6a12.4 12.4 0 0 1 2.5-10.3l30.5-36.5a117.4 117.4 0 0 1 7.9-35.8c11.8-30.5 33.8-50.3 42.7-57.5a12 12 0 0 1 15 .1c10.9 8.8 30.9 28.1 42.2 57.4a119 119 0 0 1 7.8 35l31.1 37.3a12.4 12.4 0 0 1 2.5 10.3ZM98.3 188h59.4c50.4-91.6-8-149.5-27.2-165.1a3.9 3.9 0 0 0-5 0C106 38.5 46.8 96.3 98.3 188Zm-7.5 3c-13-23.5-20-46.4-21-68.5l-24.2 29a4.1 4.1 0 0 0-.8 3.5l12.3 55.6a4 4 0 0 0 2.6 2.9a4 4 0 0 0 3.8-.6Zm119.6-39.5l-24.7-29.6c-.8 22.3-7.7 45.4-20.6 69.1l27.4 21.9a4 4 0 0 0 3.8.6a4 4 0 0 0 2.6-2.9l12.3-55.6a4.1 4.1 0 0 0-.8-3.5ZM128 104a8 8 0 1 0-8-8a8 8 0 0 0 8 8Z"
          ></path>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_speak;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_speak = () => (
         <div>
          <button className="space-button">
  To a Galaxy far far away 
  <span className="space-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="white" d="M148 224a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4Zm71.1-67.3l-12.4 55.6a12 12 0 0 1-7.7 8.8a14.4 14.4 0 0 1-4 .6a12 12 0 0 1-7.5-2.6L158.6 196H97.4l-28.9 23.1a12 12 0 0 1-7.5 2.6a14.4 14.4 0 0 1-4-.6a12 12 0 0 1-7.7-8.8l-12.4-55.6a12.4 12.4 0 0 1 2.5-10.3l30.5-36.5a117.4 117.4 0 0 1 7.9-35.8c11.8-30.5 33.8-50.3 42.7-57.5a12 12 0 0 1 15 .1c10.9 8.8 30.9 28.1 42.2 57.4a119 119 0 0 1 7.8 35l31.1 37.3a12.4 12.4 0 0 1 2.5 10.3ZM98.3 188h59.4c50.4-91.6-8-149.5-27.2-165.1a3.9 3.9 0 0 0-5 0C106 38.5 46.8 96.3 98.3 188Zm-7.5 3c-13-23.5-20-46.4-21-68.5l-24.2 29a4.1 4.1 0 0 0-.8 3.5l12.3 55.6a4 4 0 0 0 2.6 2.9a4 4 0 0 0 3.8-.6Zm119.6-39.5l-24.7-29.6c-.8 22.3-7.7 45.4-20.6 69.1l27.4 21.9a4 4 0 0 0 3.8.6a4 4 0 0 0 2.6-2.9l12.3-55.6a4.1 4.1 0 0 0-.8-3.5ZM128 104a8 8 0 1 0-8-8a8 8 0 0 0 8 8Z"></path></svg>
    </span>
  </button>
        </div>
        );

        export default Button_speak;
        
        
         */
}
