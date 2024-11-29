import React from "react";
import styles from "./Card_lady.module.css";

const Card_lady = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <p className={styles["title"]}>Rick Sanchez</p>
      </div>
      <div className={styles["card"]}>
        <p className={styles["title"]}>Morty Smith</p>
      </div>
      <div className={styles["card"]}>
        <p className={styles["title"]}>Summer Smith</p>
      </div>

      <div className={styles["card"]}>
        <p className={styles["title"]}>Beth Smith</p>
      </div>
    </div>
  </div>
);

export default Card_lady;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_lady = () => (
         <div>
          <div className="container">
  <div className="card">
    <p className="title">
      Rick Sanchez
    </p>
  </div>
  <div className="card">
    <p className="title">
      Morty Smith
    </p>
  </div>
  <div className="card">
    <p className="title">
      Summer Smith
    </p>
  </div>

  <div className="card">
    <p className="title">
      Beth Smith
    </p>
  </div>
</div>
        </div>
        );

        export default Card_lady;
        
        
         */
}
