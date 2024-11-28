import React from "react";
import styles from "./Input_stand.module.css";

const Input_stand = () => (
  <div>
    <div className={styles["search"]}>
      <div className={styles["search-box"]}>
        <div className={styles["search-field"]}>
          <input
            placeholder="Search..."
            className={styles["input"]}
            type="text"
          />
          <div className={styles["search-box-icon"]}>
            <button className={styles["btn-icon-content"]}>
              <i className={styles["search-icon"]}>
                <svg
                  xmlns="://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                    fill="#fff"
                  ></path>
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Input_stand;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_stand = () => (
         <div>
          <div className="search">
  <div className="search-box">
    <div className="search-field">
      <input placeholder="Search..." className="input" type="text" />
      <div className="search-box-icon">
        <button className="btn-icon-content">
          <i className="search-icon">
            <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff"></path></svg>
          </i>
        </button>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Input_stand;
        
        
         */
}
