import React from "react";
import styles from "./Button_slave.module.css";

const Button_slave = () => (
  <div>
    <div className={styles["gas"] + styles["ne"]}>
      <span className={styles["number"]}>10</span>
      <div className={styles["symbol"]}>Ne</div>
      <p className={styles["name"]}>Neon</p>
    </div>
  </div>
);

export default Button_slave;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_slave = () => (
         <div>
          <div className="gas ne">
  <span className="number">10</span>
  <div className="symbol">Ne</div>
  <p className="name">Neon</p>
</div>
        </div>
        );

        export default Button_slave;
        
        
         */
}
