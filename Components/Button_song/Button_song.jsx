import React from "react";
import styles from "./Button_song.module.css";

const Button_song = () => (
  <div>
    <button className={styles["button"]}>Let`s go →</button>
  </div>
);

export default Button_song;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_song = () => (
         <div>
          <button className="button">
  Let`s go →
</button>
        </div>
        );

        export default Button_song;
        
        
         */
}
