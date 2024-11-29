import React from "react";
import styles from "./Card_firm.module.css";

const Card_firm = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["icon"]}></div>

      <div className={styles["content"]}>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
      </div>
    </div>
  </div>
);

export default Card_firm;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_firm = () => (
         <div>
          <div className="card">
    <div className="icon">
    </div>

    <div className="content">
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
    </div>
</div>
        </div>
        );

        export default Card_firm;
        
        
         */
}
