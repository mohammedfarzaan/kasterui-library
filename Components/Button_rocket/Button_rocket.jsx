import React from "react";
import styles from "./Button_rocket.module.css";

const Button_rocket = () => (
  <div>
    <div className={styles["del"]}>
      <div>Delete</div>
    </div>
  </div>
);

export default Button_rocket;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_rocket = () => (
         <div>
          <div className="del">
    <div>
      Delete
    </div>     
</div>
        </div>
        );

        export default Button_rocket;
        
        
         */
}
