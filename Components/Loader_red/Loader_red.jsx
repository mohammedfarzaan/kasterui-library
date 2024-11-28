import React from "react";
import styles from "./Loader_red.module.css";

const Loader_red = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["content__container"]}>
          <p className={styles["content__container__text"]}>Hello</p>

          <ul className={styles["content__container__list"]}>
            <li className={styles["content__container__list__item"]}>
              world !
            </li>
            <li className={styles["content__container__list__item"]}>
              coder !
            </li>
            <li className={styles["content__container__list__item"]}>
              users !
            </li>
            <li className={styles["content__container__list__item"]}>
              uiverse
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_red;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_red = () => (
         <div>
          <div className="container">
  <div className="content">
    <div className="content__container">
      <p className="content__container__text">
        Hello
      </p>
    
      <ul className="content__container__list">
        <li className="content__container__list__item">world !</li>
        <li className="content__container__list__item">coder !</li>
        <li className="content__container__list__item">users !</li>
        <li className="content__container__list__item">uiverse</li>
      </ul>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_red;
        
        
         */
}
