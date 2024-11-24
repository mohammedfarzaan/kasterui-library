import React from "react";
import styles from "./Button_broken.module.css";

const Button_broken = () => (
  <div>
    <button>
      <span className={styles["box"]}>Hover!</span>
    </button>
  </div>
);

export default Button_broken;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_broken = () => (
         <div>
          <button>
    <span className="box">
        Hover!
    </span>
</button>
        </div>
        );

        export default Button_broken;
        
        
         */
}
