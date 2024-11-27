import React from "react";
import styles from "./Button_tree.module.css";

const Button_tree = () => (
  <div>
    <button className={styles["button-3d"]}>
      <span className={styles["button-text"]}>CLICK ME</span>
    </button>
  </div>
);

export default Button_tree;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_tree = () => (
         <div>
          <button className="button-3d">
  <span className="button-text">CLICK ME</span>
</button>
        </div>
        );

        export default Button_tree;
        
        
         */
}
