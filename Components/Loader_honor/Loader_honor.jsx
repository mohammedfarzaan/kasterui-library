import React from "react";
import styles from "./Loader_honor.module.css";

const Loader_honor = () => (
  <div>
    <section className={styles["loader"]}>
      <div>
        <div>
          <span className={styles["one"] + styles["h6"]}></span>
          <span className={styles["two"] + styles["h3"]}></span>
        </div>
      </div>

      <div>
        <div>
          <span className={styles["one"] + styles["h1"]}></span>
        </div>
      </div>

      <div>
        <div>
          <span className={styles["two"] + styles["h2"]}></span>
        </div>
      </div>
      <div>
        <div>
          <span className={styles["one"] + styles["h4"]}></span>
        </div>
      </div>
    </section>
  </div>
);

export default Loader_honor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_honor = () => (
         <div>
          <section className="loader">
      <div>
        <div>
          <span className="one h6"></span>
          <span className="two h3"></span>
        </div>
      </div>

      <div>
        <div>
          <span className="one h1"></span>
        </div>
      </div>

      <div>
        <div>
          <span className="two h2"></span>
        </div>
      </div>
      <div>
        <div>
          <span className="one h4"></span>
        </div>
      </div>
    </section>
        </div>
        );

        export default Loader_honor;
        
        
         */
}
