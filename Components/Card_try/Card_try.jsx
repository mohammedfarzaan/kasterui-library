import React from "react";
import styles from "./Card_try.module.css";

const Card_try = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-image"]}></div>
      <div className={styles["card-description"]}>
        <p className={styles["text-title"]}> Card Title</p>
        <p className={styles["text-body"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
    </div>
  </div>
);

export default Card_try;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_try = () => (
         <div>
          <div className="card">
<div className="card-image"></div>
  <div className="card-description">
    <p className="text-title"> Card Title</p>
    <p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
  </div>
</div>
        </div>
        );

        export default Card_try;
        
        
         */
}
