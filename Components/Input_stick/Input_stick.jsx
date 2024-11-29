import React from "react";
import styles from "./Input_stick.module.css";

const Input_stick = () => (
  <div>
    <div className={styles["search-bar"]}>
      <div className={styles["blob"]}></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={styles["icon"]}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        ></path>
      </svg>
      <input
        type="text"
        id="ser"
        className={styles["inner"]}
        placeholder="Search ..."
      />
    </div>
  </div>
);

export default Input_stick;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_stick = () => (
         <div>
          <div className="search-bar">
  <div className="blob"></div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="icon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    ></path>
  </svg>
  <input type="text" id="ser" className="inner" placeholder="Search ..." />
</div>
        </div>
        );

        export default Input_stick;
        
        
         */
}
