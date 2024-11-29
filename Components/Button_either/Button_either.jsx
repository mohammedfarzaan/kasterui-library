import React from "react";
import styles from "./Button_either.module.css";

const Button_either = () => (
  <div>
    <button className={styles["buttonDownload"]}>Download</button>
  </div>
);

export default Button_either;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_either = () => (
         <div>
          <button className="buttonDownload">Download</button>
        </div>
        );

        export default Button_either;
        
        
         */
}
