import React from "react";
import styles from "./Loader_than.module.css";

const Loader_than = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__skeleton"] + styles["card__title"]}></div>
      <div className={styles["card__skeleton"] + styles["card__description"]}>
        {" "}
      </div>
    </div>
  </div>
);

export default Loader_than;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_than = () => (
         <div>
          <div className="card">
  <div className="card__skeleton card__title"></div>
  <div className="card__skeleton card__description">         </div>
</div>
        </div>
        );

        export default Loader_than;
        
        
         */
}
