import React from "react";
import styles from "./Radio_simple.module.css";

const Radio_simple = () => (
  <div>
    <div className={styles["select"]}>
      <div
        className={styles["selected"]}
        data-default="All"
        data-one="option-1"
        data-two="option-2"
        data-three="option-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          className={styles["arrow"]}
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
      </div>
      <div className={styles["options"]}>
        <div title="all">
          <input id="all" name="option" type="radio" checked="" />
          <label className={styles["option"]} for="all" data-txt="All"></label>
        </div>
        <div title="option-1">
          <input id="option-1" name="option" type="radio" />
          <label
            className={styles["option"]}
            for="option-1"
            data-txt="option-1"
          ></label>
        </div>
        <div title="option-2">
          <input id="option-2" name="option" type="radio" />
          <label
            className={styles["option"]}
            for="option-2"
            data-txt="option-2"
          ></label>
        </div>
        <div title="option-3">
          <input id="option-3" name="option" type="radio" />
          <label
            className={styles["option"]}
            for="option-3"
            data-txt="option-3"
          ></label>
        </div>
      </div>
    </div>
  </div>
);

export default Radio_simple;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_simple = () => (
         <div>
          <div className="select">
  <div
    className="selected"
    data-default="All"
    data-one="option-1"
    data-two="option-2"
    data-three="option-3"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
      className="arrow"
    >
      <path
        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
      ></path>
    </svg>
  </div>
  <div className="options">
    <div title="all">
      <input id="all" name="option" type="radio" checked="" />
      <label className="option" for="all" data-txt="All"></label>
    </div>
    <div title="option-1">
      <input id="option-1" name="option" type="radio" />
      <label className="option" for="option-1" data-txt="option-1"></label>
    </div>
    <div title="option-2">
      <input id="option-2" name="option" type="radio" />
      <label className="option" for="option-2" data-txt="option-2"></label>
    </div>
    <div title="option-3">
      <input id="option-3" name="option" type="radio" />
      <label className="option" for="option-3" data-txt="option-3"></label>
    </div>
  </div>
</div>
        </div>
        );

        export default Radio_simple;
        
        
         */
}
