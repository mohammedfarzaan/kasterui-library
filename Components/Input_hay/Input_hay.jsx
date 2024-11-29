import React from "react";
import styles from "./Input_hay.module.css";

const Input_hay = () => (
  <div>
    <div className={styles["search-bar-container"]}>
      <div className={styles["search-bar"]}>
        <span className={styles["search-icon"]}>
          <svg
            height="20"
            width="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.53,20.47l-5-5a8,8,0,1,0-1.06,1.06l5,5a.75.75,0,0,0,1.06-1.06ZM4,10A6,6,0,1,1,10,16,6,6,0,0,1,4,10Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <input placeholder="Search..." type="text" />
        <button className={styles["filter-button"]} type="button">
          <svg
            height="20"
            width="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3,5V7H4L10,13.92V19A1,1,0,0,0,11,20h2a1,1,0,0,0,1-1V13.92L20,7h1V5ZM12,17H12V13a1,1,0,0,0-.29-.71L6.41,7h11.18l-5.29,5.29A1,1,0,0,0,12,13Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Input_hay;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_hay = () => (
         <div>
          <div className="search-bar-container">
  <div className="search-bar">
    <span className="search-icon">
      <svg
        height="20"
        width="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.53,20.47l-5-5a8,8,0,1,0-1.06,1.06l5,5a.75.75,0,0,0,1.06-1.06ZM4,10A6,6,0,1,1,10,16,6,6,0,0,1,4,10Z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
    <input placeholder="Search..." type="text" />
    <button className="filter-button" type="button">
      <svg
        height="20"
        width="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3,5V7H4L10,13.92V19A1,1,0,0,0,11,20h2a1,1,0,0,0,1-1V13.92L20,7h1V5ZM12,17H12V13a1,1,0,0,0-.29-.71L6.41,7h11.18l-5.29,5.29A1,1,0,0,0,12,13Z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  </div>
</div>
        </div>
        );

        export default Input_hay;
        
        
         */
}
