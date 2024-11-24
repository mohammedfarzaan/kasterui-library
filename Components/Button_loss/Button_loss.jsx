import React from "react";
import styles from "./Button_loss.module.css";

const Button_loss = () => (
  <div>
    <button>
      <div className={styles["progress"]}>
        <div className={styles["progress-bar"]}> </div>
      </div>

      <p className={styles["before-scan"]}>Find aliens</p>
      <p className={styles["scaning"]}>Scanning</p>
      <p className={styles["complete"]}>No aliens found</p>
    </button>
  </div>
);

export default Button_loss;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_loss = () => (
         <div>
          <button>
  <div className="progress">
     <div className="progress-bar"> </div>
  </div>
  
  <p className="before-scan">Find aliens</p>
  <p className="scaning">Scanning</p>
  <p className="complete">No aliens found</p>
</button>
        </div>
        );

        export default Button_loss;
        
        
         */
}
