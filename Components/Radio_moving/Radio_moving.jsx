import React from "react";
import styles from "./Radio_moving.module.css";

const Radio_moving = () => (
  <div>
    <div className={styles["radio-input"]}>
      <input
        value="value-1"
        name="value-radio"
        id="value-1"
        type="radio"
        className={styles["star"] + styles["s1"]}
      />
      <input
        value="value-2"
        name="value-radio"
        id="value-2"
        type="radio"
        className={styles["star"] + styles["s2"]}
      />
      <input
        value="value-3"
        name="value-radio"
        id="value-3"
        type="radio"
        className={styles["star"] + styles["s3"]}
      />
      <input
        value="value-4"
        name="value-radio"
        id="value-4"
        type="radio"
        className={styles["star"] + styles["s4"]}
      />
      <input
        value="value-5"
        name="value-radio"
        id="value-5"
        type="radio"
        className={styles["star"] + styles["s5"]}
      />
    </div>
  </div>
);

export default Radio_moving;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_moving = () => (
         <div>
          <div className="radio-input">
  <input
    value="value-1"
    name="value-radio"
    id="value-1"
    type="radio"
    className="star s1"
  />
  <input
    value="value-2"
    name="value-radio"
    id="value-2"
    type="radio"
    className="star s2"
  />
  <input
    value="value-3"
    name="value-radio"
    id="value-3"
    type="radio"
    className="star s3"
  />
  <input
    value="value-4"
    name="value-radio"
    id="value-4"
    type="radio"
    className="star s4"
  />
  <input
    value="value-5"
    name="value-radio"
    id="value-5"
    type="radio"
    className="star s5"
  />
</div>
        </div>
        );

        export default Radio_moving;
        
        
         */
}
