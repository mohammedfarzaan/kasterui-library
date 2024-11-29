import React from "react";
import styles from "./Card_voice.module.css";

const Card_voice = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-info"]}>
        <p>Hover</p>
      </div>
    </div>
  </div>
);

export default Card_voice;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_voice = () => (
         <div>
          <div className="card">
  <div className="card-info"><p>Hover</p></div>
</div>
        </div>
        );

        export default Card_voice;
        
        
         */
}
