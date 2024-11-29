import React from "react";
import styles from "./Input_throat.module.css";

const Input_throat = () => (
  <div>
    <div className={styles["input-box"]}>
      <input required="" type="text" className={styles["input"]} />
      <label className={styles["label"] + styles["text--flicking"]}>
        Name<sup>*</sup>
      </label>
    </div>
  </div>
);

export default Input_throat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_throat = () => (
         <div>
          <div className="input-box">
    <input required="" type="text" className="input" />
    <label className="label text--flicking">Name<sup>*</sup></label>
</div>
        </div>
        );

        export default Input_throat;
        
        
         */
}
