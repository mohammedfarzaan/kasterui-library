import React from "react";
import styles from "./Input_image.module.css";

const Input_image = () => (
  <div>
    <div className={styles["box-input"]}>
      <div className={styles["border"]}>
        <input
          type="text"
          name="text"
          className={styles["input"]}
          placeholder="Name"
        />
      </div>
    </div>
  </div>
);

export default Input_image;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_image = () => (
         <div>
          <div className="box-input">
  <div className="border">
    <input type="text" name="text" className="input" placeholder="Name" />
  </div>
</div>
        </div>
        );

        export default Input_image;
        
        
         */
}
