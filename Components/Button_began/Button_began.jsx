import React from "react";
import styles from "./Button_began.module.css";

const Button_began = () => (
  <div>
    <button className={styles["button"]}>
      <span>Submit</span>
    </button>
  </div>
);

export default Button_began;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_began = () => (
         <div>
          <button className="button">
  <span>Submit</span>
</button>
        </div>
        );

        export default Button_began;
        
        
         */
}
