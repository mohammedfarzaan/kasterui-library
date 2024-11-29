import React from "react";
import styles from "./Card_mud.module.css";

const Card_mud = () => (
  <div>
    <div className={styles["card"]}>
      <a className={styles["card1"]} href="#">
        <p>This is heading</p>
        <p className={styles["small"]}>
          Card description with lots of great facts and interesting details.
        </p>
        <div className={styles["go-corner"]} href="#">
          <div className={styles["go-arrow"]}>→</div>
        </div>
      </a>
    </div>
  </div>
);

export default Card_mud;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_mud = () => (
         <div>
          <div className="card">
   <a className="card1" href="#">
    <p>This is heading</p>
    <p className="small">Card description with lots of great facts and interesting details.</p>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
</div>
        </div>
        );

        export default Card_mud;
        
        
         */
}
