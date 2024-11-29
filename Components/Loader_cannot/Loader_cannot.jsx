import React from "react";
import styles from "./Loader_cannot.module.css";

const Loader_cannot = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["blackhole"]}>
        <div className={styles["blackhole-circle"]}></div>
        <div className={styles["blackhole-disc"]}></div>
      </div>

      <div className={styles["curve"]}>
        <svg viewBox="0 0 500 500">
          <path
            id="loading"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          ></path>
          <text width="500">
            <textPath xlinkHref="#loading">loading...</textPath>
          </text>
        </svg>
      </div>
    </div>
  </div>
);

export default Loader_cannot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_cannot = () => (
         <div>
          <div className="loader">
  <div className="blackhole">
    <div className="blackhole-circle"></div>
    <div className="blackhole-disc"></div>
  </div>

  <div className="curve">
    <svg viewBox="0 0 500 500">
      <path id="loading" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"></path>
      <text width="500">
        <textPath xlinkHref="#loading">
          loading...
        </textPath>
      </text>
    </svg>
  </div>
</div>
        </div>
        );

        export default Loader_cannot;
        
        
         */
}
