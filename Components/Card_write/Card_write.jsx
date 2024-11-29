import React from "react";
import styles from "./Card_write.module.css";

const Card_write = () => (
  <div>
    <div className={styles["card"]}>
      <p className={styles["heading"]}>Card Hover</p>
      <p className={styles["para"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
      <div className={styles["overlay"]}></div>
      <button className={styles["card-btn"]}>Click</button>
    </div>
  </div>
);

export default Card_write;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_write = () => (
         <div>
          <div className="card">
  <p className="heading">Card Hover</p>
  <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </p><div className="overlay"></div>
  <button className="card-btn">Click</button>
</div>
        </div>
        );

        export default Card_write;
        
        
         */
}
