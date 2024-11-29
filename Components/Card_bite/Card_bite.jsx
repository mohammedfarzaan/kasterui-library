import React from "react";
import styles from "./Card_bite.module.css";

const Card_bite = () => (
  <div>
    <div className={styles["truck"]}>
      <div className={styles["truck__body"]}>
        <div className={styles["truck__body"] + styles["truck__body--top"]}>
          <div className={styles["truck__window"]}>
            <div className={styles["truck__window-glass"]}></div>
          </div>
        </div>
        <div className={styles["truck__body"] + styles["truck__body--mid"]}>
          <div className={styles["truck__mid-body"]}></div>
        </div>
        <div className={styles["truck__body"] + styles["truck__body--bottom"]}>
          <div className={styles["truck__underpanel"]}></div>
          <div className={styles["truck__rear-bumper"]}></div>
          <div className={styles["truck__side-skirt"]}></div>
        </div>
      </div>
      <div className={styles["truck__wheel"] + styles["truck__wheel--front"]}>
        <div className={styles["truck__wheel-arch"]}></div>
        <div
          className={
            styles["truck__wheel-arch-trim"] +
            styles["truck__wheel-arch-trim--top"]
          }
        ></div>
        <div
          className={
            styles["truck__wheel-arch-trim"] +
            styles["truck__wheel-arch-trim--left"]
          }
        ></div>
        <div
          className={
            styles["truck__wheel-arch-trim"] +
            styles["truck__wheel-arch-trim--right"]
          }
        ></div>
        <div className={styles["truck-wheel"]}>
          <div className={styles["truck-wheel__rim"]}>
            <div
              style="--index: 0;"
              className={styles["truck-wheel__spoke"]}
            ></div>
            <div
              style="--index: 1;"
              className={styles["truck-wheel__spoke"]}
            ></div>
            <div
              style="--index: 2;"
              className={styles["truck-wheel__spoke"]}
            ></div>
            <div
              style="--index: 3;"
              className={styles["truck-wheel__spoke"]}
            ></div>
            <div
              style="--index: 4;"
              className={styles["truck-wheel__spoke"]}
            ></div>
            <div
              style="--index: 5;"
              className={styles["truck-wheel__spoke"]}
            ></div>
            <div
              style="--index: 6;"
              className={styles["truck-wheel__spoke"]}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles["truck__wheel"] + styles["truck__wheel--rear"]}>
        <div className={styles["truck__wheel-arch"]}></div>
        <div
          className={
            styles["truck__wheel-arch-trim"] +
            styles["truck__wheel-arch-trim--top"]
          }
        ></div>
        <div
          className={
            styles["truck__wheel-arch-trim"] +
            styles["truck__wheel-arch-trim--left"]
          }
        ></div>
        <div
          className={
            styles["truck__wheel-arch-trim"] +
            styles["truck__wheel-arch-trim--right"]
          }
        ></div>
        <div className={styles["truck-wheel"]}>
          <div className={styles["truck-wheel__rim"]}>
            <div
              style="--index: 0;"
              className={styles["truck-wheel__spoke"]}
            ></div>
            <div
              style="--index: 1;"
              className={styles["truck-wheel__spoke"]}
            ></div>
            <div
              style="--index: 2;"
              className={styles["truck-wheel__spoke"]}
            ></div>
            <div
              style="--index: 3;"
              className={styles["truck-wheel__spoke"]}
            ></div>
            <div
              style="--index: 4;"
              className={styles["truck-wheel__spoke"]}
            ></div>
            <div
              style="--index: 5;"
              className={styles["truck-wheel__spoke"]}
            ></div>
            <div
              style="--index: 6;"
              className={styles["truck-wheel__spoke"]}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles["truck__headlight"]}></div>
      <div className={styles["truck__taillight"]}></div>
      <div className={styles["truck__indicator"]}></div>
      <div className={styles["truck__foglight"]}></div>
    </div>
  </div>
);

export default Card_bite;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_bite = () => (
         <div>
          <div className="truck">
  <div className="truck__body">
    <div className="truck__body truck__body--top">
      <div className="truck__window">
        <div className="truck__window-glass"></div>
      </div>
    </div>
    <div className="truck__body truck__body--mid">
      <div className="truck__mid-body"></div>
    </div>
    <div className="truck__body truck__body--bottom">
      <div className="truck__underpanel"></div>
      <div className="truck__rear-bumper"></div>
      <div className="truck__side-skirt"></div>
    </div>
  </div>
  <div className="truck__wheel truck__wheel--front">
    <div className="truck__wheel-arch"></div>
    <div className="truck__wheel-arch-trim truck__wheel-arch-trim--top"></div>
    <div className="truck__wheel-arch-trim truck__wheel-arch-trim--left"></div>
    <div className="truck__wheel-arch-trim truck__wheel-arch-trim--right"></div>
    <div className="truck-wheel">
      <div className="truck-wheel__rim">
        <div style="--index: 0;" className="truck-wheel__spoke"></div>
        <div style="--index: 1;" className="truck-wheel__spoke"></div>
        <div style="--index: 2;" className="truck-wheel__spoke"></div>
        <div style="--index: 3;" className="truck-wheel__spoke"></div>
        <div style="--index: 4;" className="truck-wheel__spoke"></div>
        <div style="--index: 5;" className="truck-wheel__spoke"></div>
        <div style="--index: 6;" className="truck-wheel__spoke"></div>
      </div>
    </div>
  </div>
  <div className="truck__wheel truck__wheel--rear">
    <div className="truck__wheel-arch"></div>
    <div className="truck__wheel-arch-trim truck__wheel-arch-trim--top"></div>
    <div className="truck__wheel-arch-trim truck__wheel-arch-trim--left"></div>
    <div className="truck__wheel-arch-trim truck__wheel-arch-trim--right"></div>
    <div className="truck-wheel">
      <div className="truck-wheel__rim">
        <div style="--index: 0;" className="truck-wheel__spoke"></div>
        <div style="--index: 1;" className="truck-wheel__spoke"></div>
        <div style="--index: 2;" className="truck-wheel__spoke"></div>
        <div style="--index: 3;" className="truck-wheel__spoke"></div>
        <div style="--index: 4;" className="truck-wheel__spoke"></div>
        <div style="--index: 5;" className="truck-wheel__spoke"></div>
        <div style="--index: 6;" className="truck-wheel__spoke"></div>
      </div>
    </div>
  </div>
  <div className="truck__headlight"></div>
  <div className="truck__taillight"></div>
  <div className="truck__indicator"></div>
  <div className="truck__foglight"></div>
</div>
        </div>
        );

        export default Card_bite;
        
        
         */
}
