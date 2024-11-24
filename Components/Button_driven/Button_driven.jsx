import React from "react";
import styles from "./Button_driven.module.css";

const Button_driven = () => (
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
            stroke-width="1.6"
            fill="none"
            data-slot="icon"
            className={styles["icon"]}
          >
            <path
              className={styles["bm"]}
              d="M12.0017 6V4M8.14886 7.40371L6.86328 5.87162M15.864 7.40367L17.1496 5.87158"
            ></path>
            <path
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              stroke-linejoin="round"
              stroke-linecap="round"
              className={styles["link"]}
            ></path>
          </svg>
        </div>
      </div>
    </label>
  </div>
);

export default Button_driven;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_driven = () => (
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
        stroke-width="1.6"
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
          stroke-linejoin="round"
          stroke-linecap="round"
          className="link"
        ></path>
      </svg>
    </div>
  </div>
</label>
        </div>
        );

        export default Button_driven;
        
        
         */
}