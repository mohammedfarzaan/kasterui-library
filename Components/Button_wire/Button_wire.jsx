import React from "react";
import styles from "./Button_wire.module.css";

const Button_wire = () => (
  <div>
    <button className={styles["beautiful-button"]}>Click me!</button>
  </div>
);

export default Button_wire;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_wire = () => (
         <div>
          <button className="beautiful-button">
  Click me!
</button>
        </div>
        );

        export default Button_wire;
        
        
         */
}
