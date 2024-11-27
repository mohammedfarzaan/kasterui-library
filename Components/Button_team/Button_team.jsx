import React from "react";
import styles from "./Button_team.module.css";

const Button_team = () => (
  <div>
    <button className={styles["button"]}>click me</button>
  </div>
);

export default Button_team;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_team = () => (
         <div>
          <button className="button">
click me
</button>
        </div>
        );

        export default Button_team;
        
        
         */
}
