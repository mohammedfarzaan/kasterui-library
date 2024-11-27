import React from "react";
import styles from "./Button_writer.module.css";

const Button_writer = () => (
  <div>
    <div className={styles["button-borders"]}>
      <button className={styles["primary-button"]}> BUTTON</button>
    </div>
  </div>
);

export default Button_writer;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_writer = () => (
         <div>
          <div className="button-borders">
  <button className="primary-button"> BUTTON
  </button>
</div>
        </div>
        );

        export default Button_writer;
        
        
         */
}
