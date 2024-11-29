import React from "react";
import styles from "./Toggle_shadow.module.css";

const Toggle_shadow = () => (
  <div>
    <div className={styles["container"]}>
      <label className={styles["label"]}>
        <input className={styles["input"]} type="checkbox" />
        <span className={styles["circle"]}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={styles["icon"]}
          >
            <path
              d="M12 19V5m0 14-4-4m4 4 4-4"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
            ></path>
          </svg>
          <div className={styles["square"]}></div>
        </span>
        <p className={styles["title"]}>Download</p>
        <p className={styles["title"]}>Open</p>
      </label>
    </div>
  </div>
);

export default Toggle_shadow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_shadow = () => (
         <div>
          <div className="container">
  <label className="label">
    <input className="input" type="checkbox" />
    <span className="circle"
      ><svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="icon"
      >
        <path
          d="M12 19V5m0 14-4-4m4 4 4-4"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
        ></path>
      </svg>
      <div className="square"></div>
    </span>
    <p className="title">Download</p>
    <p className="title">Open</p>
  </label>
</div>
        </div>
        );

        export default Toggle_shadow;
        
        
         */
}
