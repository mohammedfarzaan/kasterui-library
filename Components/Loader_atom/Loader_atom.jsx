import React from "react";
import styles from "./Loader_atom.module.css";

const Loader_atom = () => (
  <div>
    <div className={styles["follow-the-leader-line"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader_atom;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_atom = () => (
         <div>
          <div className="follow-the-leader-line">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
        </div>
        );

        export default Loader_atom;
        
        
         */
}
