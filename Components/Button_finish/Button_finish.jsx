import React from "react";
import styles from "./Button_finish.module.css";

const Button_finish = () => (
  <div>
    <input
      className={styles["toggle-checkbox"]}
      id="toggle-checkbox"
      type="checkbox"
    />
    <label className={styles["button"]} for="toggle-checkbox">
      <div className={styles["content"]}>
        <span className={styles["letters"]}>
          <span style="--i: 1" data-label="C">
            C
          </span>
          <span style="--i: 2" data-label="o">
            o
          </span>
          <span style="--i: 3" data-label="p">
            p
          </span>
          <span style="--i: 4" data-label="y">
            y
          </span>
          <span style="--i: 5" data-label="L">
            L
          </span>
          <span style="--i: 6" data-label="i">
            i
          </span>
          <span style="--i: 7" data-label="n">
            n
          </span>
          <span style="--i: 8" data-label="k">
            k
          </span>
        </span>
        <div className={styles["icon-container"]}>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="none"
            data-slot="icon"
            className="icon"
          >
            <path
              className="bm"
              d="M12.0017 6V4M8.14886 7.40371L6.86328 5.87162M15.864 7.40367L17.1496 5.87158"
            ></path>
            <path
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              strokeLinejoin="round"
              strokeLinecap="round"
              className="link"
            ></path>
          </svg>
        </div>
      </div>
    </label>
  </div>
);

export default Button_finish;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_finish = () => (
         <div>
          <input className="toggle-checkbox" id="toggle-checkbox" type="checkbox" />
<label className="button" for="toggle-checkbox">
  <div className="content">
    <span className="letters">
      <span style="--i: 1" data-label="C">C</span>
      <span style="--i: 2" data-label="o">o</span>
      <span style="--i: 3" data-label="p">p</span>
      <span style="--i: 4" data-label="y">y</span>
      <span style="--i: 5" data-label="L">L</span>
      <span style="--i: 6" data-label="i">i</span>
      <span style="--i: 7" data-label="n">n</span>
      <span style="--i: 8" data-label="k">k</span>
    </span>
    <div className="icon-container">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        data-slot="icon"
        className="icon"
      >
        <path
          className="bm"
          d="M12.0017 6V4M8.14886 7.40371L6.86328 5.87162M15.864 7.40367L17.1496 5.87158"
        ></path>
        <path
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="link"
        ></path>
      </svg>
    </div>
  </div>
</label>
        </div>
        );

        export default Button_finish;
        
        
         */
}
