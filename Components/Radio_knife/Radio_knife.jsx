import React from "react";
import styles from "./Radio_knife.module.css";

const Radio_knife = () => (
  <div>
    <div className={styles["radio-inputs"]}>
      <label className={styles["radio"]}>
        <input type="radio" name="radio" checked="" />
        <span className={styles["name"]}>HTML</span>
      </label>
      <label className={styles["radio"]}>
        <input type="radio" name="radio" />
        <span className={styles["name"]}>React</span>
      </label>

      <label className={styles["radio"]}>
        <input type="radio" name="radio" />
        <span className={styles["name"]}>Vue</span>
      </label>
    </div>
  </div>
);

export default Radio_knife;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_knife = () => (
         <div>
          <div className="radio-inputs">
  <label className="radio">
    <input type="radio" name="radio" checked="" />
    <span className="name">HTML</span>
  </label>
  <label className="radio">
    <input type="radio" name="radio" />
    <span className="name">React</span>
  </label>

  <label className="radio">
    <input type="radio" name="radio" />
    <span className="name">Vue</span>
  </label>
</div>
        </div>
        );

        export default Radio_knife;
        
        
         */
}
