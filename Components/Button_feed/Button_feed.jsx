import React from "react";
import styles from "./Button_feed.module.css";

const Button_feed = () => (
  <div>
    <button className={styles["button"]}>Click here ..</button>
  </div>
);

export default Button_feed;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_feed = () => (
         <div>
          <button className="button">
  Click here ..
</button>
        </div>
        );

        export default Button_feed;
        
        
         */
}
