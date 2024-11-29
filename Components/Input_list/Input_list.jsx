import React from "react";
import styles from "./Input_list.module.css";

const Input_list = () => (
  <div>
    <div className={styles["container"]}>
      <input checked="" className={styles["checkbox"]} type="checkbox" />
      <div className={styles["mainbox"]}>
        <div className={styles["iconContainer"]}>
          <svg
            viewBox="0 0 512 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            className={styles["search_icon"]}
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
          </svg>
        </div>
        <input
          className={styles["search_input"]}
          placeholder="search"
          type="text"
        />
      </div>
    </div>
  </div>
);

export default Input_list;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_list = () => (
         <div>
          <div className="container">
        <input checked="" className="checkbox" type="checkbox" /> 
        <div className="mainbox">
            <div className="iconContainer">
                <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="search_icon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
            </div>
         <input className="search_input" placeholder="search" type="text" />
        </div>
    </div>
        </div>
        );

        export default Input_list;
        
        
         */
}
