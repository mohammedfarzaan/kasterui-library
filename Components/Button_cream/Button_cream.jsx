import React from "react";
import styles from "./Button_cream.module.css";

const Button_cream = () => (
  <div>
    <button className={styles["btn-white"]} href="#">
      Discover
    </button>
  </div>
);

export default Button_cream;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_cream = () => (
         <div>
          <button className="btn-white" href="#">
  Discover
</button>
        </div>
        );

        export default Button_cream;
        
        
         */
}