import React from "react";
import styles from "./Card_mine.module.css";

const Card_mine = () => (
  <div>
    <div className={styles["card"]}>
      <p className={styles["heading"]}>Form</p>

      <div className={styles["input-div"]}>
        <input type="text" className={styles["input"]} placeholder="Email" />
      </div>
      <div className={styles["input-div"]}>
        <input className={styles["input"]} type="text" placeholder="Phone" />
      </div>
      <div className={styles["input-div"]}>
        <input className={styles["input"]} type="text" placeholder="Message" />
      </div>
      <div className={styles["button-div"]}>
        <button className={styles["submit"]}>Submit</button>
      </div>
    </div>
  </div>
);

export default Card_mine;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_mine = () => (
         <div>
          <div className="card">
  <p className="heading">Form</p>
  
 <div className="input-div">
    <input type="text" className="input" placeholder="Email" />
    </div>
    <div className="input-div">
    <input className="input" type="text" placeholder="Phone" />
    </div>
    <div className="input-div">
    <input className="input" type="text" placeholder="Message" />
    </div>
    <div className="button-div">
      <button className="submit">Submit</button>
    </div>
</div>
        </div>
        );

        export default Card_mine;
        
        
         */
}
