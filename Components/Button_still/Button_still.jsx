import React from "react";
import styles from "./Button_still.module.css";

const Button_still = () => (
  <div>
    <button>
      <div className={styles["blackhole"]}>
        <span className={styles["rocket-path"]}>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="rocket"
          >
            {" "}
            <g>
              {" "}
              <path d="M0 0h24v24H0z" fill="none"></path>{" "}
              <path d="M8.498 20h7.004A6.523 6.523 0 0 1 12 23.502 6.523 6.523 0 0 1 8.498 20zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>{" "}
            </g>{" "}
          </svg>
        </span>
        <span className={styles["ring"]}>
          <span className={styles["block"]}></span>
        </span>
      </div>
      <span className={styles["text"]}>Don't get lost</span>
    </button>
  </div>
);

export default Button_still;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_still = () => (
         <div>
          <button>
  <div className="blackhole">
    <span className="rocket-path">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="rocket"> <g> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M8.498 20h7.004A6.523 6.523 0 0 1 12 23.502 6.523 6.523 0 0 1 8.498 20zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path> </g> </svg>
    </span>
    <span className="ring">
      <span className="block"></span>
    </span>
  </div>
  <span className="text">Don't get lost</span>
</button>
        </div>
        );

        export default Button_still;
        
        
         */
}
