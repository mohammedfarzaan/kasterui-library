import React from "react";
import styles from "./Button_cage.module.css";

const Button_cage = () => (
  <div>
    <div className={styles["gas"] + styles["ne"]}>
      <span className={styles["number"]}>10</span>
      <div className={styles["symbol"]}>Ne</div>
      <p className={styles["name"]}>Neon</p>
    </div>
  </div>
);

export default Button_cage;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_cage = () => (
         <div>
          <div className="gas ne">
  <span className="number">10</span>
  <div className="symbol">Ne</div>
  <p className="name">Neon</p>
</div>
        </div>
        );

        export default Button_cage;
        
        
         */
}
