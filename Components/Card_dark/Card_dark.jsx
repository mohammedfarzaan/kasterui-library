import React from "react";
import styles from "./Card_dark.module.css";

const Card_dark = () => (
  <div>
    <div className={styles["card"]}>
      <span className={styles["title"]}>All tags</span>
      <div className={styles["card__tags"]}>
        <ul className={styles["tag"]}>
          <li className={styles["tag__name"]}>JS</li>
          <li className={styles["tag__name"]}>wordpress</li>
          <li className={styles["tag__name"]}>uiverse</li>
          <li className={styles["tag__name"]}>Css</li>
          <li className={styles["tag__name"]}>html</li>
          <li className={styles["tag__name"]}>go</li>
          <li className={styles["tag__name"]}>java</li>
          <li className={styles["tag__name"]}>ux/ui</li>
          <li className={styles["tag__name"]}>figma</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Card_dark;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_dark = () => (
         <div>
          <div className="card">
  <span className="title">All tags</span>
  <div className="card__tags">
    <ul className="tag">
      <li className="tag__name">JS</li>
      <li className="tag__name">wordpress</li>
      <li className="tag__name">uiverse</li>
      <li className="tag__name">Css</li>
      <li className="tag__name">html</li>
      <li className="tag__name">go</li>
      <li className="tag__name">java</li>
      <li className="tag__name">ux/ui</li>
      <li className="tag__name">figma</li> 
    </ul>
  </div>
</div>
        </div>
        );

        export default Card_dark;
        
        
         */
}
