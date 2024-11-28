import React from "react";
import styles from "./Button_slave.module.css";

const Button_slave = () => (
  <div>
    <button className={styles["btn"]}>
      <p className={styles["paragraph"]}> delete </p>
      <span className={styles["icon-wrapper"]}>
        <svg
          className="icon"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_slave;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_slave = () => (
         <div>
          <button className="btn">
  <p className="paragraph"> delete </p>
  <span className="icon-wrapper">
    <svg className="icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  </span>
</button>
        </div>
        );

        export default Button_slave;
        
        
         */
}
