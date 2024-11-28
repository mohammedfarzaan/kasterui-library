import React from "react";
import styles from "./Button_have.module.css";

const Button_have = () => (
  <div>
    <button className={styles["fancy-3d-button"]}>
      <svg
        role="img"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="button-icon"
      >
        <path d="M12 .587l3.668 7.431L24 9.587l-6 5.845L19.335 24 12 20.01 4.665 24 6 15.432 0 9.587l8.332-1.569z"></path>
      </svg>
      <span className={styles["button-text"]}>3D Hover</span>
    </button>
  </div>
);

export default Button_have;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_have = () => (
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

        export default Button_have;
        
        
         */
}
