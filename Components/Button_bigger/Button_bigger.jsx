import React from "react";
import styles from "./Button_bigger.module.css";

const Button_bigger = () => (
  <div>
    <div className={styles["del"]}>
      <div>Hover</div>
    </div>
  </div>
);

export default Button_bigger;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_bigger = () => (
         <div>
          <div className="del">
    <div>
      Hover
    </div>     
</div>
        </div>
        );

        export default Button_bigger;
        
        
         */
}
