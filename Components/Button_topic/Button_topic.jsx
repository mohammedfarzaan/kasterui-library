import React from "react";
import styles from "./Button_topic.module.css";

const Button_topic = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["button__int"]}>
        <span className={styles["button__span"]}>Button</span>
      </div>
    </button>
  </div>
);

export default Button_topic;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_topic = () => (
         <div>
          <button className="button">
  <div className="button__int">
    <span className="button__span">Button</span>
  </div>
</button>
        </div>
        );

        export default Button_topic;
        
        
         */
}
