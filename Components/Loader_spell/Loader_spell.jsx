import React from "react";
import styles from "./Loader_spell.module.css";

const Loader_spell = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["i"]}></div>
      <div className={styles["a"]}></div>
      <div className={styles["u"]}></div>
    </div>
  </div>
);

export default Loader_spell;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_spell = () => (
         <div>
          <div className="loading">
    <div className="i"></div>
    <div className="a"></div>
    <div className="u"></div>
</div>
        </div>
        );

        export default Loader_spell;
        
        
         */
}
