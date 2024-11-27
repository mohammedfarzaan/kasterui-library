import React from "react";
import styles from "./Button_blind.module.css";

const Button_blind = () => (
  <div>
    <button className={styles["game-button"]}>
      <svg className="play-icon" viewBox="0 0 40 40">
        <path d="M 10,10 L 30,20 L 10,30 z"></path>
      </svg>
      Play Now
    </button>
  </div>
);

export default Button_blind;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_blind = () => (
         <div>
          <button className="game-button">
    <svg className="play-icon" viewBox="0 0 40 40">
        <path d="M 10,10 L 30,20 L 10,30 z"></path>
    </svg>
    Play Now
</button>
        </div>
        );

        export default Button_blind;
        
        
         */
}
