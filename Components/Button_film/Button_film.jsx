import React from "react";
import styles from "./Button_film.module.css";

const Button_film = () => (
  <div>
    <button className={styles["neu-button"]}>Press me</button>
  </div>
);

export default Button_film;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_film = () => (
         <div>
          <button className="neu-button">Press me</button>
        </div>
        );

        export default Button_film;
        
        
         */
}
