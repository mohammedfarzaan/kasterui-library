import React from "react";
import styles from "./Button_pipe.module.css";

const Button_pipe = () => (
  <div>
    <div className={styles["notification"]}>
      <div className={styles["bell-container"]}>
        <div className={styles["bell"]}></div>
      </div>
    </div>
  </div>
);

export default Button_pipe;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_pipe = () => (
         <div>
          <div className="notification">
  <div className="bell-container">
    <div className="bell"></div>
  </div>
</div>
        </div>
        );

        export default Button_pipe;
        
        
         */
}
