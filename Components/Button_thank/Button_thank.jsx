import React from "react";
import styles from "./Button_thank.module.css";

const Button_thank = () => (
  <div>
    <button className={styles["fancy-3d-button"]}>
      <svg
        role="img"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={styles["button-icon"]}
      >
        <path d="M12 .587l3.668 7.431L24 9.587l-6 5.845L19.335 24 12 20.01 4.665 24 6 15.432 0 9.587l8.332-1.569z"></path>
      </svg>
      <span className={styles["button-text"]}>3D Hover</span>
    </button>
  </div>
);

export default Button_thank;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_thank = () => (
         <div>
          <button className="fancy-3d-button">
  <svg
    role="img"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="button-icon"
  >
    <path
      d="M12 .587l3.668 7.431L24 9.587l-6 5.845L19.335 24 12 20.01 4.665 24 6 15.432 0 9.587l8.332-1.569z"
    ></path>
  </svg>
  <span className="button-text">3D Hover</span>
</button>
        </div>
        );

        export default Button_thank;
        
        
         */
}
