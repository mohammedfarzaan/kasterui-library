import React from "react";
import styles from "./Loader_zipper.module.css";

const Loader_zipper = () => (
  <div>
    <div className={styles["master-container"]}>
      <div className={styles["container"]}>
        <div className={styles["crescent"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["star"] + styles["s1"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["star"] + styles["s2"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["star"] + styles["s3"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["star"] + styles["s4"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["star"] + styles["s5"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["small-star"] + styles["ss1"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["small-star"] + styles["ss2"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["small-star"] + styles["ss3"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["small-star"] + styles["ss4"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["small-star"] + styles["ss5"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["small-star"] + styles["ss6"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["small-star"] + styles["ss7"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["small-star"] + styles["ss8"]}>
          <span></span>
          <span></span>
        </div>
        <div className={styles["hut"]}>
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <div className={styles["doorway"]}>
            <hr className={styles["split"]} />
          </div>
        </div>
        <div className={styles["fire-pit"]}>
          <div className={styles["fire"]}>
            <div className={styles["inner-fire"]}></div>
          </div>
          <hr className={styles["log1"]} />
          <hr className={styles["log2"]} />
        </div>
        <div className={styles["tree"] + styles["one"]}>
          <hr className={styles["trunc"]} />
          <hr className={styles["leaves"]} />
          <hr className={styles["leaves"]} />
          <hr className={styles["leaves"]} />
          <hr className={styles["leaves"]} />
        </div>
        <div className={styles["tree"] + styles["two"]}>
          <hr className={styles["trunc"]} />
          <hr className={styles["leaves"]} />
          <hr className={styles["leaves"]} />
          <hr className={styles["leaves"]} />
          <hr className={styles["leaves"]} />
        </div>
        <div className={styles["tree"] + styles["three"]}>
          <hr className={styles["trunc"]} />
          <hr className={styles["leaves"]} />
          <hr className={styles["leaves"]} />
          <hr className={styles["leaves"]} />
          <hr className={styles["leaves"]} />
        </div>
        <div className={styles["tree"] + styles["four"]}>
          <hr className={styles["trunc"]} />
          <hr className={styles["leaves"]} />
          <hr className={styles["leaves"]} />
          <hr className={styles["leaves"]} />
          <hr className={styles["leaves"]} />
        </div>
        <div className={styles["hill"]}></div>
      </div>
      <span className={styles["loading-text"]}>
        Loading Page.. Please Wait!
      </span>
    </div>
  </div>
);

export default Loader_zipper;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_zipper = () => (
         <div>
          <div className="master-container">
  <div className="container">
  <div className="crescent">
    <span></span><span></span>
  </div>
  <div className="star s1">
    <span></span><span></span>
  </div>
  <div className="star s2">
    <span></span><span></span>
  </div>
  <div className="star s3">
    <span></span><span></span>
  </div>
  <div className="star s4">
    <span></span><span></span>
  </div>
  <div className="star s5">
    <span></span><span></span>
  </div>
  <div className="small-star ss1">
    <span></span><span></span>
  </div>
  <div className="small-star ss2">
    <span></span><span></span>
  </div>
  <div className="small-star ss3">
    <span></span><span></span>
  </div>
  <div className="small-star ss4">
    <span></span><span></span>
  </div>
  <div className="small-star ss5">
    <span></span><span></span>
  </div>
  <div className="small-star ss6">
    <span></span><span></span>
  </div>
  <div className="small-star ss7">
    <span></span><span></span>
  </div>
  <div className="small-star ss8">
    <span></span><span></span>
  </div>
  <div className="hut">
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <div className="doorway">
      <hr className="split" />
    </div>
  </div>
  <div className="fire-pit">
    <div className="fire">
  <div className="inner-fire">
</div>
</div>
    <hr className="log1" />
    <hr className="log2" />
  </div>
  <div className="tree one">
    <hr className="trunc" />
    <hr className="leaves" />
    <hr className="leaves" />
    <hr className="leaves" />
    <hr className="leaves" />
  </div>
  <div className="tree two">
    <hr className="trunc" />
    <hr className="leaves" />
    <hr className="leaves" />
    <hr className="leaves" />
    <hr className="leaves" />
  </div>
  <div className="tree three">
    <hr className="trunc" />
    <hr className="leaves" />
    <hr className="leaves" />
    <hr className="leaves" />
    <hr className="leaves" />
  </div>
  <div className="tree four">
    <hr className="trunc" />
    <hr className="leaves" />
    <hr className="leaves" />
    <hr className="leaves" />
    <hr className="leaves" />
  </div>
  <div className="hill"></div>
</div>
<span className="loading-text">Loading Page.. Please Wait!</span>
</div>
        </div>
        );

        export default Loader_zipper;
        
        
         */
}
