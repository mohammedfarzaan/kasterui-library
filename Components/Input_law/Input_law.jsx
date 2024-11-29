import React from "react";
import styles from "./Input_law.module.css";

const Input_law = () => (
  <div>
    <div className={styles["password"]}>
      <input
        maxlength="1"
        value="5"
        className={styles["input"]}
        name="text"
        type="text"
      />
      <input
        maxlength="1"
        value="7"
        className={styles["input"]}
        name="text"
        type="text"
      />
      <input
        maxlength="1"
        value="1"
        className={styles["input"]}
        name="text"
        type="text"
      />
      <input
        maxlength="1"
        value="6"
        className={styles["input"]}
        name="text"
        type="text"
      />
      <input
        maxlength="1"
        value="3"
        className={styles["input"]}
        name="text"
        type="text"
      />
      <input
        maxlength="1"
        value="2"
        className={styles["input"]}
        name="text"
        type="text"
      />
    </div>
  </div>
);

export default Input_law;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_law = () => (
         <div>
          <div className="password">
  <input maxlength="1" value="5" className="input" name="text" type="text" />
  <input maxlength="1" value="7" className="input" name="text" type="text" />
  <input maxlength="1" value="1" className="input" name="text" type="text" />
  <input maxlength="1" value="6" className="input" name="text" type="text" />
  <input maxlength="1" value="3" className="input" name="text" type="text" />
  <input maxlength="1" value="2" className="input" name="text" type="text" />
</div>
        </div>
        );

        export default Input_law;
        
        
         */
}
