import React from "react";
import styles from "./Button_vast.module.css";

const Button_vast = () => (
  <div>
    <button className={styles["btn"]}> Shop now</button>
  </div>
);

export default Button_vast;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_vast = () => (
         <div>
          <button className="btn"> Shop now
</button>
        </div>
        );

        export default Button_vast;
        
        
         */
}
