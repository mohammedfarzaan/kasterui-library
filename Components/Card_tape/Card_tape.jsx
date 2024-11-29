import React from "react";
import styles from "./Card_tape.module.css";

const Card_tape = () => (
  <div>
    <div className={styles["card"]}>
      <p>
        <span>HOVER ME</span>
      </p>
      <p>
        <span>HOVER ME</span>
      </p>
      <p>
        <span>HOVER ME</span>
      </p>
    </div>
  </div>
);

export default Card_tape;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_tape = () => (
         <div>
          <div className="card">
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
</div>
        </div>
        );

        export default Card_tape;
        
        
         */
}
