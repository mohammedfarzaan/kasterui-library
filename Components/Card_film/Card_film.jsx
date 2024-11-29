import React from "react";
import styles from "./Card_film.module.css";

const Card_film = () => (
  <div>
    <div className={styles["main"]}>
      <div className={styles["card"]} id="c1"></div>
      <div className={styles["card"]} id="c2"></div>
      <div className={styles["card"]} id="c3"></div>
      <div className={styles["card"]} id="c4"></div>
    </div>
  </div>
);

export default Card_film;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_film = () => (
         <div>
          <div className="main">
  <div className="card" id="c1"></div>
  <div className="card" id="c2"></div>
  <div className="card" id="c3"></div>
  <div className="card" id="c4"></div>
</div>
        </div>
        );

        export default Card_film;
        
        
         */
}
