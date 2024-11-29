import React from "react";
import styles from "./Card_oldest.module.css";

const Card_oldest = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__image"]}></div>
      <div className={styles["card__content"]}>
        <span className={styles["title"]}>Title card</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          blandit vitae orci quis dignissim.
        </p>
      </div>
    </div>
  </div>
);

export default Card_oldest;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_oldest = () => (
         <div>
          <div className="card">
  <div className="card__image"></div>
  <div className="card__content">
    <span className="title">Title card</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit vitae orci quis dignissim.</p>
  </div>
</div>
        </div>
        );

        export default Card_oldest;
        
        
         */
}
