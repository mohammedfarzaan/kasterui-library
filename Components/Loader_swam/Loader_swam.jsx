import React from "react";
import styles from "./Loader_swam.module.css";

const Loader_swam = () => (
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

export default Loader_swam;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_swam = () => (
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

        export default Loader_swam;
        
        
         */
}
