import React from "react";
import styles from "./Card_among.module.css";

const Card_among = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["content"]}>
        <p className={styles["heading"]}>Card Hover Effect</p>
        <p className={styles["para"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          laboriosam at voluptas minus culpa deserunt delectus sapiente
          inventore pariatur
        </p>
        <button className={styles["btn"]}>Read more</button>
      </div>
    </div>
  </div>
);

export default Card_among;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_among = () => (
         <div>
          <div className="card">
  <div className="content">
    <p className="heading">Card Hover Effect
    </p><p className="para">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
      laboriosam at voluptas minus culpa deserunt delectus sapiente
      inventore pariatur
    </p>
    <button className="btn">Read more</button>
  </div>
</div>
        </div>
        );

        export default Card_among;
        
        
         */
}
