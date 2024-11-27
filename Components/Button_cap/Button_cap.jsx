import React from "react";
import styles from "./Button_cap.module.css";

const Button_cap = () => (
  <div>
    <button className={styles["btn"]}>submit</button>
  </div>
);

export default Button_cap;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_cap = () => (
         <div>
          <button className="btn">
  submit
</button>
        </div>
        );

        export default Button_cap;
        
        
         */
}
