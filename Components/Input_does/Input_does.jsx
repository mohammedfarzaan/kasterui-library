import React from "react";
import styles from "./Input_does.module.css";

const Input_does = () => (
  <div>
    <div className={styles["search"]}>
      <input
        placeholder="Search"
        className={styles["search__input"]}
        type="text"
      />
      <button className={styles["search__button"]}>
        <svg
          viewBox="0 0 16 16"
          className={styles["bi"] + styles["bi-search"]}
          fill="currentColor"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
        </svg>
      </button>
    </div>
  </div>
);

export default Input_does;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_does = () => (
         <div>
          <div className="search">
  <input placeholder="Search" className="search__input" type="text" />
  <button className="search__button">
    <svg
      viewBox="0 0 16 16"
      className="bi bi-search"
      fill="currentColor"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
      ></path>
    </svg>
  </button>
</div>
        </div>
        );

        export default Input_does;
        
        
         */
}
