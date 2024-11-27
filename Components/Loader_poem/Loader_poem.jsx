import React from "react";
import styles from "./Loader_poem.module.css";

const Loader_poem = () => (
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

export default Loader_poem;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_poem = () => (
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

        export default Loader_poem;
        
        
         */
}
