import React from "react";
import styles from "./Toggle_dust.module.css";

const Toggle_dust = () => (
  <div>
    <div className={styles["checkbox-wrapper-8"]}>
      <input
        type="checkbox"
        id="cb3-8"
        className={styles["tgl"] + styles["tgl-skewed"]}
      />
      <label
        for="cb3-8"
        data-tg-on="ON"
        data-tg-off="OFF"
        className={styles["tgl-btn"]}
      ></label>
    </div>
  </div>
);

export default Toggle_dust;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_dust = () => (
         <div>
          <div className="checkbox-wrapper-8">
  <input type="checkbox" id="cb3-8" className="tgl tgl-skewed" />
  <label for="cb3-8" data-tg-on="ON" data-tg-off="OFF" className="tgl-btn"></label>
</div>
        </div>
        );

        export default Toggle_dust;
        
        
         */
}
