import React from "react";
import styles from "./Button_about.module.css";

const Button_about = () => (
  <div>
    <div className={styles["button"]}>
      <div className={styles["button-wrapper"]}>
        <div className={styles["text"]}>Download</div>
        <span className={styles["icon"]}>For Free!</span>
      </div>
    </div>
  </div>
);

export default Button_about;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_about = () => (
         <div>
          <div className="button">
    <div className="button-wrapper">
        <div className="text">Download</div>
        <span className="icon">
            For Free!
        </span>
    </div>
</div>
        </div>
        );

        export default Button_about;
        
        
         */
}
