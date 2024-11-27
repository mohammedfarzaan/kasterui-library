import React from "react";
import styles from "./Button_death.module.css";

const Button_death = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["blob1"]}></div>
      <div className={styles["blob2"]}></div>
      <div className={styles["inner"]}>Realism</div>
    </button>
  </div>
);

export default Button_death;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_death = () => (
         <div>
          <button className="button">
  <div className="blob1"></div>
  <div className="blob2"></div>
  <div className="inner">Realism</div>
</button>
        </div>
        );

        export default Button_death;
        
        
         */
}
