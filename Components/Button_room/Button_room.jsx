import React from "react";
import styles from "./Button_room.module.css";

const Button_room = () => (
  <div>
    <button className={styles["box"]}>
      <p className={styles["text-button"]}>Button</p>
    </button>
  </div>
);

export default Button_room;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_room = () => (
         <div>
          <button className="box">
  <p className="text-button">Button</p>
</button>
        </div>
        );

        export default Button_room;
        
        
         */
}
