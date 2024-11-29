import React from "react";
import styles from "./Card_put.module.css";

const Card_put = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["top"]}>
        <div className={styles["dots"]}>
          <div className={styles["dot"] + styles["dot-1"]}></div>
          <div className={styles["dot"] + styles["dot-2"]}></div>
          <div className={styles["dot"] + styles["dot-3"]}></div>
        </div>
        <p className={styles["g-color"]}>_&gt;</p>
      </div>
      <div className={styles["bottom"]}>
        <p className={styles["code"]}>
          <span className={styles["red"]}>function</span>{" "}
          <span className={styles["violet"]}>helloWorld</span>
          <span className={styles["blue"]}>(</span>
          <span className={styles["orange"]}>text</span>
          <span className={styles["blue"]}>)</span>
          <span className={styles["blue"]}>&#123;</span>
          <br />
          <span className={styles["red"] + styles["space-4"]}>for</span>
          <span className={styles["orange"]}>(</span>
          <span className={styles["red"]}>let</span>{" "}
          <span className={styles["white"]}>i</span>{" "}
          <span className={styles["red"]}>=</span>{" "}
          <span className={styles["blue"]}>0</span>{" "}
          <span className={styles["white"]}>; i</span>{" "}
          <span className={styles["red"]}>&lt;</span>{" "}
          <span className={styles["blue"]}>10</span>{" "}
          <span className={styles["white"]}>; i</span>
          <span className={styles["red"]}>++</span>
          <span className={styles["orange"]}>)&#123;</span>
          <br />
          <span className={styles["blue"] + styles["space-4x2"]}>console</span>
          <span className={styles["white"]}>.</span>
          <span className={styles["violet"]}>log(</span>
          <span className={styles["blue"]}>`$&#123;</span>
          <span className={styles["orange"]}>text</span>
          <span className={styles["blue"]}>&#125;`</span>
          <span className={styles["violet"]}>)</span>
          <span className={styles["white"]}>;</span>
          <br />
          <span className={styles["orange"] + styles["space-4"]}>&#125;</span>
          <br />
          <span className={styles["blue"]}>&#125;</span>
          <br />
          <br />
          <span className={styles["violet"]}>helloWorld</span>
          <span className={styles["blue"]}>('Hello World')</span>
          <span className={styles["white"]}>;</span>
        </p>
      </div>
    </div>
  </div>
);

export default Card_put;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_put = () => (
         <div>
          <div className="card">
        <div className="top">
            <div className="dots">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
              </div>
            <p className="g-color">_&gt;</p>
        </div>
        <div className="bottom">
            <p className="code">
                <span className="red">function</span> <span className="violet">helloWorld</span><span className="blue">(</span><span className="orange">text</span><span className="blue">)</span><span className="blue">&#123;</span><br />
                    <span className="red space-4">for</span><span className="orange">(</span><span className="red">let</span> <span className="white">i</span> <span className="red">=</span> <span className="blue">0</span> <span className="white">; i</span> <span className="red">&lt;</span> <span className="blue">10</span> <span className="white">; i</span><span className="red">++</span><span className="orange">)&#123;</span><br />
                        <span className="blue space-4x2">console</span><span className="white">.</span><span className="violet">log(</span><span className="blue">`$&#123;</span><span className="orange">text</span><span className="blue">&#125;`</span><span className="violet">)</span><span className="white">;</span><br />
                    <span className="orange space-4">&#125;</span><br />
                <span className="blue">&#125;</span><br />
                <br />
                <span className="violet">helloWorld</span><span className="blue">('Hello World')</span><span className="white">;</span>
            </p>            
        </div>
      </div>
        </div>
        );

        export default Card_put;
        
        
         */
}
