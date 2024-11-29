import React from "react";
import styles from "./Input_back.module.css";

const Input_back = () => (
  <div>
    <label className={styles["label"]}>
      <span className={styles["icon"]}>
        <svg
          className={
            styles["w-6"] +
            styles["h-6"] +
            styles["text-gray-800"] +
            styles["dark:text-white"]
          }
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.25"
            d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          ></path>
        </svg>
      </span>
      <input
        type="text"
        className={styles["input"]}
        placeholder="Enter name"
        autocomplete="off"
      />
    </label>
  </div>
);

export default Input_back;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_back = () => (
         <div>
          <label className="label">
  <span className="icon">
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeWidth="1.25"
        d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      ></path>
    </svg>
  </span>
  <input
    type="text"
    className="input"
    placeholder="Enter name"
    autocomplete="off"
  />
</label>
        </div>
        );

        export default Input_back;
        
        
         */
}
