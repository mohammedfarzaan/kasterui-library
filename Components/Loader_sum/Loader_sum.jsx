import React from "react";
import styles from "./Loader_sum.module.css";

const Loader_sum = () => (
  <div>
    <section className={styles["area"]}>
      <div className={styles["ball"]}></div>
    </section>
  </div>
);

export default Loader_sum;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_sum = () => (
         <div>
          <section className="area">
  <div className="ball"></div>
</section>
        </div>
        );

        export default Loader_sum;
        
        
         */
}
