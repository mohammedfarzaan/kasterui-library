import React from "react";
import styles from "./Button_plates.module.css";

const Button_plates = () => (
  <div>
    <button className={styles["bt"]}>Button</button>
  </div>
);

export default Button_plates;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_plates = () => (
         <div>
          <button className="bt">
  Button

</button>
        </div>
        );

        export default Button_plates;
        
        
         */
}
