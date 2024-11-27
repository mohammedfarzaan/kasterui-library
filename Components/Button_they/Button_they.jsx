import React from "react";
import styles from "./Button_they.module.css";

const Button_they = () => (
  <div>
    <button className={styles["Btn"]}></button>
  </div>
);

export default Button_they;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_they = () => (
         <div>
          <button className="Btn">
</button>
        </div>
        );

        export default Button_they;
        
        
         */
}
