import React from "react";
import styles from "./Button_fierce.module.css";

const Button_fierce = () => (
  <div>
    <div>
      <button className={styles["button"]}>Hover Me!</button>
      <span className={styles["backdrop"]}></span>
    </div>
  </div>
);

export default Button_fierce;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_fierce = () => (
         <div>
          <div>
<button className="button">
  Hover Me!
</button>
<span className="backdrop"></span>
</div>
        </div>
        );

        export default Button_fierce;
        
        
         */
}
