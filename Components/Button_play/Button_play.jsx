import React from "react";
import styles from "./Button_play.module.css";

const Button_play = () => (
  <div>
    <button className={styles["loading"]}>
      <p>Loading...</p>
    </button>
  </div>
);

export default Button_play;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_play = () => (
         <div>
          <button className="loading">
  <p>Loading...</p>
</button>
        </div>
        );

        export default Button_play;
        
        
         */
}
