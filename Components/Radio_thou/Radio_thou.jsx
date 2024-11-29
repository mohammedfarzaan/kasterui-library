import React from "react";
import styles from "./Radio_thou.module.css";

const Radio_thou = () => (
  <div>
    <div className={styles["radio-input"]}>
      <label className={styles["container"]}>
        <svg>
          <rect className={styles["hi"]} pathLength="800"></rect>
        </svg>
        <input
          type="radio"
          id="value-1"
          name="value-radio"
          checked=""
          value="value-1"
        />
      </label>
      <label className={styles["container"]}>
        <svg>
          <rect className={styles["hi"]} pathLength="600"></rect>
        </svg>
        <input type="radio" id="value-2" name="value-radio" value="value-2" />
      </label>
      <label className={styles["container"]}>
        <svg>
          <rect className={styles["hi"]} pathLength="700"></rect>
        </svg>
        <input type="radio" id="value-3" name="value-radio" value="value-3" />
      </label>
    </div>
  </div>
);

export default Radio_thou;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_thou = () => (
         <div>
          <div className="radio-input">
  <label className="container">
    <svg>
      <rect className="hi" pathLength="800"></rect>
    </svg>
    <input type="radio" id="value-1" name="value-radio" checked="" value="value-1" />
  </label>
  <label className="container">
    <svg>
      <rect className="hi" pathLength="600"></rect>
    </svg>
    <input type="radio" id="value-2" name="value-radio" value="value-2" />
  </label>
  <label className="container">
    <svg>
      <rect className="hi" pathLength="700"></rect>
    </svg>
    <input type="radio" id="value-3" name="value-radio" value="value-3" />
  </label>
</div>
        </div>
        );

        export default Radio_thou;
        
        
         */
}
