import React from "react";
import styles from "./Card_build.module.css";

const Card_build = () => (
  <div>
    <div className={styles["card-container"]}>
      <div className={styles["card"]}>
        <div className={styles["front-content"]}>
          <p>Hover me</p>
        </div>
        <div className={styles["content"]}>
          <p className={styles["heading"]}>Card Hover</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia
            pariatur odit, ab minus ratione adipisci accusamus vel est excepturi
            laboriosam magnam necessitatibus dignissimos molestias.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_build;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_build = () => (
         <div>
          <div className="card-container">
  <div className="card">
  <div className="front-content">
    <p>Hover me</p>
  </div>
  <div className="content">
    <p className="heading">Card Hover</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipii
      voluptas ten mollitia pariatur odit, ab
      minus ratione adipisci accusamus vel est excepturi laboriosam magnam
      necessitatibus dignissimos molestias.
    </p>
  </div>
</div>
</div>
        </div>
        );

        export default Card_build;
        
        
         */
}
