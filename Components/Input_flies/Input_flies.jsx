import React from "react";
import styles from "./Input_flies.module.css";

const Input_flies = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["shadow-container"]}></div>
      <label className={styles["search-bar"]} for="text">
        <i className={styles["icon"]}>
          <svg viewBox="0 0 512 512">
            <path
              d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"
              strokeWidth="32"
              stroke-miterlimit="10"
              stroke="currentColor"
              fill="none"
            ></path>
            <path
              d="M338.29 338.29L448 448"
              strokeWidth="32"
              stroke-miterlimit="10"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
            ></path>
          </svg>
        </i>
        <input
          placeholder="Search..."
          className={styles["input"]}
          name="text"
          type="text"
          id="text"
        />
        <button className={styles["icon"] + styles["filter"]} type="button">
          <svg viewBox="0 0 24 24">
            <path
              color="currentColor"
              d="M8.857 12.506C6.37 10.646 4.596 8.6 3.627 7.45c-.3-.356-.398-.617-.457-1.076c-.202-1.572-.303-2.358.158-2.866S4.604 3 6.234 3h11.532c1.63 0 2.445 0 2.906.507c.461.508.36 1.294.158 2.866c-.06.459-.158.72-.457 1.076c-.97 1.152-2.747 3.202-5.24 5.065a1.05 1.05 0 0 0-.402.747c-.247 2.731-.475 4.227-.617 4.983c-.229 1.222-1.96 1.957-2.888 2.612c-.552.39-1.222-.074-1.293-.678a196 196 0 0 1-.674-6.917a1.05 1.05 0 0 0-.402-.755"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
            ></path>
          </svg>
        </button>
      </label>
    </div>
  </div>
);

export default Input_flies;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_flies = () => (
         <div>
          <div className="container">
  <div className="shadow-container"></div>
  <label className="search-bar" for="text">
    <i className="icon">
      <svg viewBox="0 0 512 512">
        <path
          d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"
          strokeWidth="32"
          stroke-miterlimit="10"
          stroke="currentColor"
          fill="none"
        ></path>
        <path
          d="M338.29 338.29L448 448"
          strokeWidth="32"
          stroke-miterlimit="10"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
        ></path>
      </svg>
    </i>
    <input
      placeholder="Search..."
      className="input"
      name="text"
      type="text"
      id="text"
    />
    <button className="icon filter" type="button">
      <svg viewBox="0 0 24 24">
        <path
          color="currentColor"
          d="M8.857 12.506C6.37 10.646 4.596 8.6 3.627 7.45c-.3-.356-.398-.617-.457-1.076c-.202-1.572-.303-2.358.158-2.866S4.604 3 6.234 3h11.532c1.63 0 2.445 0 2.906.507c.461.508.36 1.294.158 2.866c-.06.459-.158.72-.457 1.076c-.97 1.152-2.747 3.202-5.24 5.065a1.05 1.05 0 0 0-.402.747c-.247 2.731-.475 4.227-.617 4.983c-.229 1.222-1.96 1.957-2.888 2.612c-.552.39-1.222-.074-1.293-.678a196 196 0 0 1-.674-6.917a1.05 1.05 0 0 0-.402-.755"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
        ></path>
      </svg>
    </button>
  </label>
</div>
        </div>
        );

        export default Input_flies;
        
        
         */
}
