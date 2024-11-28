import React from "react";
import styles from "./Input_some.module.css";

const Input_some = () => (
  <div>
    <div className={styles["container"]}>
      <input
        type="text"
        name="text"
        className={styles["input"]}
        required=""
        placeholder="Type to search..."
      />
      <div className={styles["icon"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Search</title>
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            strokeWidth="32"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            stroke-miterlimit="10"
            strokeWidth="32"
            d="M338.29 338.29L448 448"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Input_some;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_some = () => (
         <div>
          <div className="container">
    <input type="text" name="text" className="input" required="" placeholder="Type to search..." />
    <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
            <title>Search</title>
            <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" strokeWidth="32"></path>
            <path fill="none" stroke="currentColor" strokeLinecap="round" stroke-miterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path>
        </svg>
    </div>
</div>
        </div>
        );

        export default Input_some;
        
        
         */
}
