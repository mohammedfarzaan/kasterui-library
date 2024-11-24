import React from "react";
import styles from "./Button_review.module.css";

const Button_review = () => (
  <div>
    <button className={styles["btn"]}>Diagonal Swipe</button>
  </div>
);

export default Button_review;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_review = () => (
         <div>
          <button className="btn">
  Diagonal Swipe
</button>
        </div>
        );

        export default Button_review;
        
        
         */
}
