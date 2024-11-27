import React from "react";
import styles from "./Button_pride.module.css";

const Button_pride = () => (
  <div>
    <button type="submit" className={styles["button"]}>
      <span>Hello</span>
    </button>
  </div>
);

export default Button_pride;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_pride = () => (
         <div>
          <button type="submit" className="button">
  <span>Hello</span>
</button>
        </div>
        );

        export default Button_pride;
        
        
         */
}
