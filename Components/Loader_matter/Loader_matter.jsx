import React from "react";
import styles from "./Loader_matter.module.css";

const Loader_matter = () => (
  <div>
    <div className={styles["vader"]}>
      <div className={styles["shadow"]}></div>
      <div className={styles["head"]}>
        <div className={styles["helmet"]}>
          <span className={styles["left"]}></span>
          <span className={styles["right"]}></span>
        </div>
        <div className={styles["eyes"]}>
          <span className={styles["left"]}></span>
          <span className={styles["right"]}></span>
        </div>
        <span className={styles["grill"]}>
          <span className={styles["left"]}></span>
          <span className={styles["center"]}></span>
          <span className={styles["right"]}></span>
        </span>
        <span className={styles["mask"]}>
          <span className={styles["top"]}></span>
          <span className={styles["left"]}></span>
          <span className={styles["center"]}></span>
          <span className={styles["right"]}></span>
        </span>
        <span className={styles["line"]}></span>
      </div>
      <div className={styles["torso"]}>
        <span className={styles["neck"]}>
          <span className={styles["left"]}></span>
          <span className={styles["center"]}></span>
          <span className={styles["right"]}></span>
          <span className={styles["bottom"]}></span>
        </span>
        <span className={styles["belt"]}>
          <span className={styles["center"]}></span>
        </span>
        <div className={styles["plate"]}>
          <span className={styles["red_top"]}></span>
          <span className={styles["red_center"]}></span>
          <span className={styles["red_bottom"]}></span>
          <span className={styles["blue"]}></span>
          <span className={styles["gray"]}></span>
        </div>
      </div>
      <div className={styles["hand"] + styles["left"]}>
        <span className={styles["hand"]}></span>
      </div>
      <div
        className={styles["hand"] + styles["right"] + styles["animation-right"]}
      >
        <span className={styles["hand"]}></span>
      </div>
      <div className={styles["legs"]}>
        <span className={styles["left"]}></span>
        <span className={styles["right"]}></span>
      </div>
      <div className={styles["boots"]}>
        <span className={styles["left"]}></span>
        <span className={styles["right"]}></span>
      </div>
      <div className={styles["sword"] + styles["animation-left"]}>
        <span className={styles["handle"]}></span>
        <span className={styles["light"]}></span>
      </div>
    </div>
    <p className={styles["text"]}>
      Darth Vader By <a href="https://codepen.io/poziomq">qpoziomek</a>
    </p>
  </div>
);

export default Loader_matter;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_matter = () => (
         <div>
          <div className="vader">
<div className="shadow"></div>
<div className="head"><div className="helmet"><span className="left"></span><span className="right"></span></div><div className="eyes"><span className="left"></span><span className="right"></span></div><span className="grill"><span className="left"></span><span className="center"></span><span className="right"></span></span><span className="mask"><span className="top"></span><span className="left"></span><span className="center"></span><span className="right"></span></span><span className="line"></span></div>
<div className="torso"><span className="neck"><span className="left"></span><span className="center"></span><span className="right"></span><span className="bottom"></span></span><span className="belt"><span className="center"></span></span><div className="plate"><span className="red_top"></span><span className="red_center"></span><span className="red_bottom"></span><span className="blue"></span><span className="gray"></span></div></div>
<div className="hand left"><span className="hand"></span></div>
<div className="hand right animation-right"><span className="hand"></span></div>
<div className="legs"><span className="left"></span><span className="right"></span></div>
<div className="boots"><span className="left"></span><span className="right"></span></div>
<div className="sword animation-left"><span className="handle"></span><span className="light"></span></div>
</div>
<p className="text">Darth Vader By <a href="https://codepen.io/poziomq">qpoziomek</a></p>
        </div>
        );

        export default Loader_matter;
        
        
         */
}
