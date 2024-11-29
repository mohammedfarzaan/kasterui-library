import React from "react";
import styles from "./Card_kill.module.css";

const Card_kill = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__corner"]}></div>
      <div className={styles["card__img"]}>
        <span className={styles["card__span"]}>Category</span>
      </div>
      <div className={styles["card-int"]}>
        <p className={styles["card-int__title"]}>This is the article title</p>
        <p className={styles["excerpt"]}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, donec
          suspendisse vulputate dictumst enim per mus imperdiet, platea non
          massa dictum tempus sapien.
        </p>
        <button className={styles["card-int__button"]}>Show</button>
      </div>
    </div>
  </div>
);

export default Card_kill;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_kill = () => (
         <div>
          <div className="card">
  <div className="card__corner"></div>
  <div className="card__img">
    <span className="card__span">Category</span>
  </div>
  <div className="card-int">
    <p className="card-int__title">This is the article title</p>
    <p className="excerpt">Lorem ipsum dolor sit amet consectetur adipiscing elit, donec suspendisse vulputate dictumst enim per mus imperdiet, platea non massa dictum tempus sapien.</p>
    <button className="card-int__button">Show</button>
  </div>
</div>
        </div>
        );

        export default Card_kill;
        
        
         */
}
