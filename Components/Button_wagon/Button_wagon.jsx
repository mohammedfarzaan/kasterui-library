import React from "react";
import styles from "./Button_wagon.module.css";

const Button_wagon = () => (
  <div>
    <button className={styles["buttonDownload"]}>Download</button>
  </div>
);

export default Button_wagon;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_wagon = () => (
         <div>
          <button className="buttonDownload">Download</button>
        </div>
        );

        export default Button_wagon;
        
        
         */
}
