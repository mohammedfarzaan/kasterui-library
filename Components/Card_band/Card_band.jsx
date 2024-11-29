import React from "react";
import styles from "./Card_band.module.css";

const Card_band = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__image"]}></div>
      <div className={styles["card__content"]}>
        <p className={styles["card__title"]}>Card Title</p>
        <p className={styles["card__text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a className={styles["card__button"]} href="#">
          Read More
        </a>
      </div>
    </div>
  </div>
);

export default Card_band;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_band = () => (
         <div>
          <div className="card">
  <div className="card__image">
    
  </div>
  <div className="card__content">
    <p className="card__title">Card Title</p>
    <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a className="card__button" href="#">Read More</a>
  </div>
</div>
        </div>
        );

        export default Card_band;
        
        
         */
}
