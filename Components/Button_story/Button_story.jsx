import React from "react";
import styles from "./Button_story.module.css";

const Button_story = () => (
  <div>
    <div className={styles["content"]}>
      <div className={styles["text"]}>LOADING...</div>
      <div className={styles["text"]}>LOADING...</div>
    </div>
  </div>
);

export default Button_story;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_story = () => (
         <div>
          <div className="content">
  <div className="text">LOADING...</div>
  <div className="text">LOADING...</div>
</div>
        </div>
        );

        export default Button_story;
        
        
         */
}
