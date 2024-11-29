import React from "react";
import styles from "./Loader_nor.module.css";

const Loader_nor = () => (
  <div>
    <div className={styles["container"]}>
      <svg width="100%" height="100" viewBox="-1 -1 22 22">
        <path
          style={{ "--order": "7" }}
          className={styles["eight"] + styles["e-8"]}
        ></path>
        <path
          style={{ "--order": "6" }}
          className={styles["eight"] + styles["e-7"]}
        ></path>
        <path
          style={{ "--order": "5" }}
          className={styles["eight"] + styles["e-6"]}
        ></path>
        <path
          style={{ "--order": "4" }}
          className={styles["eight"] + styles["e-5"]}
        ></path>
        <path
          style={{ "--order": "3" }}
          className={styles["eight"] + styles["e-4"]}
        ></path>
        <path
          style={{ "--order": "2" }}
          className={styles["eight"] + styles["e-3"]}
        ></path>
        <path
          style={{ "--order": "1" }}
          className={styles["eight"] + styles["e-2"]}
        ></path>
        <path
          style={{ "--order": "0" }}
          className={styles["eight"] + styles["e-1"]}
        ></path>
      </svg>
    </div>
  </div>
);

export default Loader_nor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_nor = () => (
         <div>
          <div className="container">
    <svg width="100%" height="100" viewBox="-1 -1 22 22">
        <path style={{'--order':"7"}} className="eight e-8"></path>
        <path style={{'--order':"6"}} className="eight e-7"></path>
        <path style={{'--order':"5"}} className="eight e-6"></path>
        <path style={{'--order':"4"}} className="eight e-5"></path>
        <path style={{'--order':"3"}} className="eight e-4"></path>
        <path style={{'--order':"2"}} className="eight e-3"></path>
        <path style={{'--order':"1"}} className="eight e-2"></path>
        <path style={{'--order':"0"}} className="eight e-1"></path>
    </svg>
</div>
        </div>
        );

        export default Loader_nor;
        
        
         */
}
