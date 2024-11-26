import React from "react";
import styles from "./Button_shirt.module.css";

const Button_shirt = () => (
  <div>
    <div className={styles["btn"] + styles["btn--huge"]}>
      <div className={styles["btn--huge__text"]}>
        <div>
          Explore More
          <span>Explore More</span>
        </div>
      </div>
    </div>
  </div>
);

export default Button_shirt;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_shirt = () => (
         <div>
          <div className="btn btn--huge">
  <div className="btn--huge__text">
    <div>
      Explore More
      <span>Explore More</span>
    </div>
  </div>
</div>
        </div>
        );

        export default Button_shirt;
        
        
         */
}
