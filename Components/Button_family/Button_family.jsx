import React from "react";
import styles from "./Button_family.module.css";

const Button_family = () => (
  <div>
    <button className={styles["button"]}>
      <div>
        <span>
          <i>W</i>
        </span>
      </div>
      <div>
        <span>
          <i>A</i>
        </span>
      </div>
      <div>
        <span>
          <i>S</i>
        </span>
      </div>
      <div>
        <span>
          <i>D</i>
        </span>
      </div>
    </button>
  </div>
);

export default Button_family;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_family = () => (
         <div>
          <button className="button">
  <div>
    <span>
      <i>W</i>
    </span>
  </div>
  <div>
    <span>
      <i>A</i>
    </span>
  </div>
  <div>
    <span>
      <i>S</i>
    </span>
  </div>
  <div>
    <span>
      <i>D</i>
    </span>
  </div>
</button>
        </div>
        );

        export default Button_family;
        
        
         */
}
