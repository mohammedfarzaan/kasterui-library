import React from "react";
import styles from "./Button_pony.module.css";

const Button_pony = () => (
  <div>
    <button className={styles["download"]}>
      Download
      <span className={styles["tooltip"]}>10Mo</span>
    </button>
  </div>
);

export default Button_pony;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_pony = () => (
         <div>
          <button className="download">
  Download
  <span className="tooltip">10Mo</span>
</button>
        </div>
        );

        export default Button_pony;
        
        
         */
}
