import React from "react";
import styles from "./Button_wonder.module.css";

const Button_wonder = () => (
  <div>
    <button className={styles["btn"]}>Button</button>
  </div>
);

export default Button_wonder;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_wonder = () => (
         <div>
          <button className="btn">Button
</button>
        </div>
        );

        export default Button_wonder;
        
        
         */
}
