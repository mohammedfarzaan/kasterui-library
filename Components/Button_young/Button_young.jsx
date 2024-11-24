import React from "react";
import styles from "./Button_young.module.css";

const Button_young = () => (
  <div>
    <button className={styles["btn"]}>Button</button>
  </div>
);

export default Button_young;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_young = () => (
         <div>
          <button className="btn">
    Button
</button>
        </div>
        );

        export default Button_young;
        
        
         */
}
