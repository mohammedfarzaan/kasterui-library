import React from "react";
import styles from "./Button_slowly.module.css";

const Button_slowly = () => (
  <div>
    <button className={styles["button"]}> Hey, Hover Me</button>
  </div>
);

export default Button_slowly;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_slowly = () => (
         <div>
          <button className="button"> Hey, Hover Me
</button>
        </div>
        );

        export default Button_slowly;
        
        
         */
}
