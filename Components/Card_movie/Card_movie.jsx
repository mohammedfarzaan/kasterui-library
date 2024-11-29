import React from "react";
import styles from "./Card_movie.module.css";

const Card_movie = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["emojis"]}>
        <button>😄</button>
        <button>😁</button>
        <button>😆</button>
        <button>😂</button>
      </div>
      <div className={styles["emojis"]}>
        <button>😄</button>
        <button>😁</button>
        <button>😆</button>
        <button>😂</button>
      </div>
    </div>
  </div>
);

export default Card_movie;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_movie = () => (
         <div>
          <div className="card">
  <div className="emojis">
    <button>😄</button>
    <button>😁</button>
    <button>😆</button>
    <button>😂</button>
  </div>
  <div className="emojis">
    <button>😄</button>
    <button>😁</button>
    <button>😆</button>
    <button>😂</button>
  </div>
</div>
        </div>
        );

        export default Card_movie;
        
        
         */
}
