import React from "react";
import styles from "./Card_minute.module.css";

const Card_minute = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["content"]}>
        <p className={styles["heading"]}>Card</p>
        <p className={styles["para"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          laboriosam at voluptas minus culpa deserunt delectus sapiente
          inventore pariatur.
        </p>
      </div>
    </div>
  </div>
);

export default Card_minute;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_minute = () => (
         <div>
          <div className="card">
  <div className="content">
    <p className="heading">Card</p>
    <p className="para">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam
      at voluptas minus culpa deserunt delectus sapiente inventore pariatur.
    </p>
  </div>
</div>
        </div>
        );

        export default Card_minute;
        
        
         */
}
