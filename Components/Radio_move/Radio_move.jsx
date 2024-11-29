import React from "react";
import styles from "./Radio_move.module.css";

const Radio_move = () => (
  <div>
    <div className={styles["radio-buttons-container"]}>
      <div className={styles["radio-button"]}>
        <input
          name="radio-group"
          id="radio2"
          className={styles["radio-button__input"]}
          type="radio"
        />
        <label for="radio2" className={styles["radio-button__label"]}>
          <span className={styles["radio-button__custom"]}></span>
          Next
        </label>
      </div>
      <div className={styles["radio-button"]}>
        <input
          name="radio-group"
          id="radio1"
          className={styles["radio-button__input"]}
          type="radio"
        />
        <label for="radio1" className={styles["radio-button__label"]}>
          <span className={styles["radio-button__custom"]}></span>
          Svelte
        </label>
      </div>
      <div className={styles["radio-button"]}>
        <input
          name="radio-group"
          id="radio3"
          className={styles["radio-button__input"]}
          type="radio"
        />
        <label for="radio3" className={styles["radio-button__label"]}>
          <span className={styles["radio-button__custom"]}></span>
          Remix
        </label>
      </div>
    </div>
  </div>
);

export default Radio_move;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_move = () => (
         <div>
          <div className="radio-buttons-container">
<div className="radio-button">
  <input name="radio-group" id="radio2" className="radio-button__input" type="radio" />
  <label for="radio2" className="radio-button__label">
    <span className="radio-button__custom"></span>
        
        Next
  </label>
</div>
<div className="radio-button">
  <input name="radio-group" id="radio1" className="radio-button__input" type="radio" />
  <label for="radio1" className="radio-button__label">
    <span className="radio-button__custom"></span>
    
    Svelte
  </label>
</div>
<div className="radio-button">
  <input name="radio-group" id="radio3" className="radio-button__input" type="radio" />
  <label for="radio3" className="radio-button__label">
    <span className="radio-button__custom"></span>
        
        Remix
  </label>
</div>
</div>
        </div>
        );

        export default Radio_move;
        
        
         */
}
