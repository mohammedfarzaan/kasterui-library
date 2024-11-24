import React from "react";
import styles from "./Button_way.module.css";

const Button_way = () => (
  <div>
    <button className={styles["button"]}></button>
  </div>
);

export default Button_way;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_way = () => (
         <div>
          <button className="button"></button>
        </div>
        );

        export default Button_way;
        
        
         */
}