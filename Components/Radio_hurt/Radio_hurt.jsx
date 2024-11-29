import React from "react";
import styles from "./Radio_hurt.module.css";

const Radio_hurt = () => (
  <div>
    <div className={styles["radio-input"]}>
      <div>
        <label for="circrad1">
          <input
            value="circvalue-1"
            id="circrad1"
            name="namcircle"
            type="radio"
            checked=""
          />
        </label>
        <label for="circrad2">
          <input
            value="circvalue-2"
            id="circrad2"
            name="namcircle"
            type="radio"
          />
        </label>
        <label for="circrad3">
          <input
            value="circvalue-3"
            id="circrad3"
            name="namcircle"
            type="radio"
          />
        </label>
      </div>
      <div className={styles["circ-container"]}>
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
      </div>
    </div>
  </div>
);

export default Radio_hurt;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_hurt = () => (
         <div>
          <div className="radio-input">
  <div>
    <label for="circrad1">
    <input value="circvalue-1" id="circrad1" name="namcircle" type="radio" checked="" />
    </label>
    <label for="circrad2">
    <input value="circvalue-2" id="circrad2" name="namcircle" type="radio" />
    </label>
    <label for="circrad3">
    <input value="circvalue-3" id="circrad3" name="namcircle" type="radio" />
    </label>
  </div>
  <div className="circ-container">
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  </div>
</div>
        </div>
        );

        export default Radio_hurt;
        
        
         */
}
