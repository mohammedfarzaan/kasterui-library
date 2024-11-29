import React from "react";
import styles from "./Card_ought.module.css";

const Card_ought = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <p className={styles["title"]}>Card title</p>
        <div className={styles["card-hidden"]}>
          <p className={styles["title-in"]}>Card title</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            est orci. Nam molestie pellentesque mi nec lacinia.
          </p>
          <a className={styles["button"]}>Button</a>
        </div>
      </div>
      <div className={styles["card-border"]}></div>
    </div>
  </div>
);

export default Card_ought;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_ought = () => (
         <div>
          <div className="container">
      <div className="card">
          <p className="title">Card title</p>
          <div className="card-hidden">
              <p className="title-in">Card title</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia.</p>
              <a className="button">Button</a>
          </div>

      </div>
      <div className="card-border"></div>
  </div>
        </div>
        );

        export default Card_ought;
        
        
         */
}
