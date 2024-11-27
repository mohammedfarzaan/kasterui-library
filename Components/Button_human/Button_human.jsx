import React from "react";
import styles from "./Button_human.module.css";

const Button_human = () => (
  <div>
    <button className={styles["button"]}>Send</button>
  </div>
);

export default Button_human;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_human = () => (
         <div>
          <button className="button">
  Send
</button>
        </div>
        );

        export default Button_human;
        
        
         */
}
