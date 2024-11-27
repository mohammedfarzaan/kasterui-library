import React from "react";
import styles from "./Button_wood.module.css";

const Button_wood = () => (
  <div>
    <button className={styles["btn"]}>DOWNLOAD</button>
  </div>
);

export default Button_wood;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_wood = () => (
         <div>
          <button className="btn">
  DOWNLOAD
</button>
        </div>
        );

        export default Button_wood;
        
        
         */
}
