import React from "react";
import styles from "./Button_hall.module.css";

const Button_hall = () => (
  <div>
    <button className={styles["ui-btn"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_hall;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_hall = () => (
         <div>
          <button className="ui-btn">
  <span>
    Button 
  </span>
</button>
        </div>
        );

        export default Button_hall;
        
        
         */
}