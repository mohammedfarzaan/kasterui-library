import React from "react";
import styles from "./Button_former.module.css";

const Button_former = () => (
  <div>
    <button className={styles["button"]}>Subscribe</button>
  </div>
);

export default Button_former;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_former = () => (
         <div>
          <button className="button">
  Subscribe
</button>
        </div>
        );

        export default Button_former;
        
        
         */
}
