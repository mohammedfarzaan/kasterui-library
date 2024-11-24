import React from "react";
import styles from "./Button_mighty.module.css";

const Button_mighty = () => (
  <div>
    <button className={styles["button"]}>
      <span>Hover!</span>
    </button>
  </div>
);

export default Button_mighty;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_mighty = () => (
         <div>
          <button className="button">
  <span>Hover!</span>
</button>
        </div>
        );

        export default Button_mighty;
        
        
         */
}
