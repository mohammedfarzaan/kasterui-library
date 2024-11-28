import React from "react";
import styles from "./Loader_into.module.css";

const Loader_into = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["road"]}>
        <div className={styles["police"]}>
          <div className={styles["light_beam"]}></div>
          <p>Police</p>
          <article>Police</article>
          <div className={styles["side_mirror"]}></div>
          <span>
            <b></b>
            <i></i>
          </span>
        </div>
        <div className={styles["police"]}>
          <div className={styles["light_beam"]}></div>
          <p>Police</p>
          <article>Police</article>
          <div className={styles["side_mirror"]}></div>
          <span>
            <b></b>
            <i></i>
          </span>
        </div>
        <div className={styles["taxi"]}>
          <div className={styles["light_beam"]}></div>
          <div className={styles["side_mirror"]}></div>
          <span>
            <b></b>
            <i></i>
          </span>
        </div>
      </div>
      <span className={styles["loading"]}>Loading..</span>
    </div>
  </div>
);

export default Loader_into;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_into = () => (
         <div>
          <div className="container">
  <div className="road">
    <div className="police">
      <div className="light_beam"></div>
      <p>Police</p>
      <article>Police</article>
      <div className="side_mirror"></div>
      <span>
        <b></b>
        <i></i>
      </span>
    </div>
    <div className="police">
      <div className="light_beam"></div>
      <p>Police</p>
      <article>Police</article>
      <div className="side_mirror"></div>
      <span>
        <b></b>
        <i></i>
      </span>
    </div>
    <div className="taxi">
      <div className="light_beam"></div>
      <div className="side_mirror"></div>
      <span>
        <b></b>
        <i></i>
      </span>
    </div>
  </div>
  <span className="loading">Loading..</span>
</div>
        </div>
        );

        export default Loader_into;
        
        
         */
}
