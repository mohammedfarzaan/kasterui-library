import React from "react";
import styles from "./Radio_daily.module.css";

const Radio_daily = () => (
  <div>
    <div className={styles["container"]}>
      <label>
        <input name="e" type="radio" /> Click
      </label>
      <label>
        <input name="e" type="radio" /> Me
      </label>
      <label>
        <input name="e" type="radio" /> to
      </label>
      <label>
        <input disabled="" name="e" type="radio" /> And so on ..
      </label>
    </div>
  </div>
);

export default Radio_daily;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_daily = () => (
         <div>
          <div className="container">
  <label><input name="e" type="radio" /> Click</label>
  <label><input name="e" type="radio" /> Me</label>
  <label><input name="e" type="radio" /> to</label>
  <label><input disabled="" name="e" type="radio" /> And so on ..</label>
</div>
        </div>
        );

        export default Radio_daily;
        
        
         */
}
