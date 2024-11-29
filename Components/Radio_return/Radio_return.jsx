import React from "react";
import styles from "./Radio_return.module.css";

const Radio_return = () => (
  <div>
    <div className={styles["radio"]}>
      <label>
        <input checked="" value="1" name="radio" type="radio" />
        <span>Cyber Punk</span>
        <div className={styles["rotor"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
      <label>
        <input value="2" name="radio" type="radio" />
        <span>Solar Punk</span>
        <div className={styles["rotor"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
      <label>
        <input value="3" name="radio" type="radio" />
        <span>Steam Punk</span>
        <div className={styles["rotor"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
    </div>
  </div>
);

export default Radio_return;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_return = () => (
         <div>
          <div className="radio">
      <label>
        <input checked="" value="1" name="radio" type="radio" />
        <span>Cyber Punk</span>
        <div className="rotor">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
      <label>
        <input value="2" name="radio" type="radio" />
        <span>Solar Punk</span>
        <div className="rotor">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
      <label>
        <input value="3" name="radio" type="radio" />
        <span>Steam Punk</span>
        <div className="rotor">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
    </div>
        </div>
        );

        export default Radio_return;
        
        
         */
}
