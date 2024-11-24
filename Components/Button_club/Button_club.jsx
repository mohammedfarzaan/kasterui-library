import React from "react";
import styles from "./Button_club.module.css";

const Button_club = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["span"]}>🔎</span>
    </button>
  </div>
);

export default Button_club;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_club = () => (
         <div>
          <button className="button">
  <span className="span">🔎</span>
</button>
        </div>
        );

        export default Button_club;
        
        
         */
}
