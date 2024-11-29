import React from "react";
import styles from "./Card_after.module.css";

const Card_after = () => (
  <div>
    <article className={styles["card"]}>
      <div className={styles["card-int"]}>
        <span className={styles["card__span"]}>Category</span>
        <div className={styles["img"]}></div>
        <div className={styles["card-data"]}>
          <p className={styles["title"]}>This is a test title</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className={styles["button"]}>More info</button>
        </div>
      </div>
    </article>
  </div>
);

export default Card_after;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_after = () => (
         <div>
          <article className="card">
    <div className="card-int">
        <span className="card__span">Category</span>
        <div className="img"></div>
        <div className="card-data">
          <p className="title">This is a test title
          </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="button">More info</button>
        </div>
    </div>
</article>
        </div>
        );

        export default Card_after;
        
        
         */
}
