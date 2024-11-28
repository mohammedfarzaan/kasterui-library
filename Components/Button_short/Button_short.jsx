import React from "react";
import styles from "./Button_short.module.css";

const Button_short = () => (
  <div>
    <button className={styles["game-button"]}>
      <svg className="play-icon" viewBox="0 0 40 40">
        <path d="M 10,10 L 30,20 L 10,30 z"></path>
      </svg>
      Play Now
    </button>
  </div>
);

export default Button_short;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_short = () => (
         <div>
          <button className="game-button">
    <svg className="play-icon" viewBox="0 0 40 40">
        <path d="M 10,10 L 30,20 L 10,30 z"></path>
    </svg>
    Play Now
</button>
        </div>
        );

        export default Button_short;
        
        
         */
}
