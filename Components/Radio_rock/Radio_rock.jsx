import React from "react";
import styles from "./Radio_rock.module.css";

const Radio_rock = () => (
  <div>
    <div className={styles["container"]}>
      <label>
        <input name="list" type="radio" />
        <span>
          <p className={styles["a"]}>Yes</p>
          <p className={styles["b"]}>No</p>
        </span>
        Easy
      </label>
      <label>
        <input checked="" name="list" type="radio" />
        <span>
          <p className={styles["a"]}>Yes</p>
          <p className={styles["b"]}>No</p>
        </span>
        Normal
      </label>
      <label>
        <input name="list" type="radio" />
        <span>
          <p className={styles["a"]}>Yes</p>
          <p className={styles["b"]}>No</p>
        </span>
        Hard
      </label>
    </div>
  </div>
);

export default Radio_rock;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_rock = () => (
         <div>
          <div className="container">
  <label>
    <input name="list" type="radio" />
    <span>
      <p className="a">Yes</p>
      <p className="b">No</p>
    </span>
    Easy
  </label>
  <label>
    <input checked="" name="list" type="radio" />
    <span>
      <p className="a">Yes</p>
      <p className="b">No</p>
    </span>
    Normal
  </label>
  <label>
    <input name="list" type="radio" />
    <span>
      <p className="a">Yes</p>
      <p className="b">No</p>
    </span>
    Hard
  </label>
</div>
        </div>
        );

        export default Radio_rock;
        
        
         */
}
