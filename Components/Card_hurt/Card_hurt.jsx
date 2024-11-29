import React from "react";
import styles from "./Card_hurt.module.css";

const Card_hurt = () => (
  <div>
    <div className={styles["container"] + styles["scroll-1"]}>
      <div className={styles["card"]}>
        <div className={styles["card__image"]}></div>
        <div className={styles["card__content"]}>
          <span className={styles["card__title"]}>Hello</span>
          <p className={styles["card__describe"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className={styles["card"]}>
        <div className={styles["card__image"]}></div>
        <div className={styles["card__content"]}>
          <span className={styles["card__title"]}>Hello</span>
          <p className={styles["card__describe"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className={styles["card"]}>
        <div className={styles["card__image"]}></div>
        <div className={styles["card__content"]}>
          <span className={styles["card__title"]}>Hello</span>
          <p className={styles["card__describe"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_hurt;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_hurt = () => (
         <div>
          <div className="container scroll-1">
  <div className="card">
    <div className="card__image"></div>
    <div className="card__content">
        <span className="card__title">Hello</span>
        <p className="card__describe">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
  </div>
  <div className="card">
    <div className="card__image"></div>
    <div className="card__content">
        <span className="card__title">Hello</span>
        <p className="card__describe">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
  </div>
  <div className="card">
    <div className="card__image"></div>
    <div className="card__content">
        <span className="card__title">Hello</span>
        <p className="card__describe">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_hurt;
        
        
         */
}
