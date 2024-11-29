import React from "react";
import styles from "./Card_lake.module.css";

const Card_lake = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["title"]}>
        <p className={styles["heading"]}>MONOCHROMIA</p>
        <p className={styles["desc"]}>palette reference</p>
      </div>
      <div className={styles["wrapper"]}>
        <div className={styles["color"] + styles["black"]}>
          black
          <span className={styles["hex"]}>#000000</span>
        </div>
        <div className={styles["color"] + styles["eerie-black"]}>
          eerie-black
          <span className={styles["hex"]}>#1b1b1b</span>
        </div>
        <div className={styles["color"] + styles["chinese-black"]}>
          chinese-black
          <span className={styles["hex"]}>#141414</span>
        </div>
        <div className={styles["color"] + styles["night-rider"]}>
          night rider
          <span className={styles["hex"]}>#2e2e2e</span>
        </div>
        <div className={styles["color"] + styles["chinese-white"]}>
          chinese-white
          <span className={styles["hex"]}>#e1e1e1</span>
        </div>
        <div className={styles["color"] + styles["anti-flash-white"]}>
          anti-flash-white
          <span className={styles["hex"]}>#f3f3f3</span>
        </div>
        <div className={styles["color"] + styles["white"]}>
          white
          <span className={styles["hex"]}>#ffffff</span>
        </div>
        <div className={styles["border"]}>
          common border radius <span>5px | 8px</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card_lake;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_lake = () => (
         <div>
          <div className="card">
  <div className="title">
    <p className="heading">MONOCHROMIA</p>
    <p className="desc">palette reference</p>
  </div>
  <div className="wrapper">
    <div className="color black">
      black
      <span className="hex">#000000</span>
    </div>
    <div className="color eerie-black">
      eerie-black
      <span className="hex">#1b1b1b</span>
    </div>
    <div className="color chinese-black">
      chinese-black
      <span className="hex">#141414</span>
    </div>
     <div className="color night-rider">
      night rider
      <span className="hex">#2e2e2e</span>
    </div>
    <div className="color chinese-white">
      chinese-white
      <span className="hex">#e1e1e1</span>
    </div>
    <div className="color anti-flash-white">
      anti-flash-white
      <span className="hex">#f3f3f3</span>
    </div>
    <div className="color white">
      white
      <span className="hex">#ffffff</span>
    </div>
  <div className="border">common border radius <span>5px | 8px</span></div>
  </div>
</div>
        </div>
        );

        export default Card_lake;
        
        
         */
}
