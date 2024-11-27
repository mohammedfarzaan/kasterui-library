import React from "react";
import styles from "./Loader_none.module.css";

const Loader_none = () => (
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

export default Loader_none;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_none = () => (
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

        export default Loader_none;
        
        
         */
}
