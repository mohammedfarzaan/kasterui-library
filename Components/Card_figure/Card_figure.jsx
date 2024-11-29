import React from "react";
import styles from "./Card_figure.module.css";

const Card_figure = () => (
  <div>
    <div className={styles["laptop"]}>
      <div className={styles["screen"]}>
        <div className={styles["header"]}></div>
        <div className={styles["text"]}>Hello MackBook</div>
      </div>
      <div className={styles["keyboard"]}></div>
    </div>
  </div>
);

export default Card_figure;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_figure = () => (
         <div>
          <div className="laptop">
  <div className="screen">
    <div className="header"></div>
    <div className="text">Hello MackBook</div>
  </div>
  <div className="keyboard"></div>
</div>
        </div>
        );

        export default Card_figure;
        
        
         */
}
