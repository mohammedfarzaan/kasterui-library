import React from "react";
import styles from "./Card_fix.module.css";

const Card_fix = () => (
  <div>
    <div className={styles["cardBox"]}>
      <div className={styles["card"]}>
        <div className={styles["h4"]}>Animated card</div>

        <div className={styles["content"]}>
          <div className={styles["h3"]}>How's it goin Fam ?</div>
          <p>
            This is Pradeep Saran, your tech mate!!! I love you all. Lets make
            this world a better place for all of us. Keep prospering...Keep
            learning!!!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_fix;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_fix = () => (
         <div>
          <div className="cardBox">
  <div className="card">
     <div className="h4">Animated card</div>
   
    <div className="content">
      <div className="h3">How's it goin Fam ?</div>
      <p>This is Pradeep Saran, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_fix;
        
        
         */
}
