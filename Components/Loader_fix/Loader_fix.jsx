import React from "react";
import styles from "./Loader_fix.module.css";

const Loader_fix = () => (
  <div>
    <section className={styles["area"]}>
      <div className={styles["ball"]}></div>
    </section>
  </div>
);

export default Loader_fix;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_fix = () => (
         <div>
          <section className="area">
  <div className="ball"></div>
</section>
        </div>
        );

        export default Loader_fix;
        
        
         */
}
