import React from "react";
import styles from "./Card_four.module.css";

const Card_four = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["titlebar"]}>
        <span className={styles["buttons"]}>
          <button className={styles["minimize"]}>
            <svg x="0px" y="0px" viewBox="0 0 10.2 1">
              <rect x="0" y="50%" width="10.2" height="1"></rect>
            </svg>
          </button>
          <button className={styles["maximize"]}>
            <svg viewBox="0 0 10 10">
              <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z"></path>
            </svg>
          </button>
          <button className={styles["close"]}>
            <svg viewBox="0 0 10 10">
              <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"></polygon>
            </svg>
          </button>
        </span>
      </div>
      <div className={styles["cppcode"]}>
        <pre id="pre">
          <code>
            <span className={styles["s1"]}>#include</span>{" "}
            <span className={styles["s2"]}>&lt;iostream&gt;</span>
            using<span className={styles["s3"]}> namespace </span>std
            <span className={styles["sc"]}>;</span>
            <span className={styles["s3"]}>int</span>{" "}
            <span className={styles["s2"]}>main()</span>{" "}
            <span className={styles["curlies"]}>&#123;</span>
            <span className={styles["s3"]}>int</span>{" "}
            <span className={styles["s4"]}>a</span>{" "}
            <span className={styles["operator"]}>=</span> 12
            <span className={styles["sc"]}>;</span>
            <span className={styles["s3"]}>int</span>{" "}
            <span className={styles["s4"]}>b</span>{" "}
            <span className={styles["operator"]}>=</span> 5
            <span className={styles["sc"]}>;</span>
            <span className={styles["s4"]}>cout</span>{" "}
            <span className={styles["s5"]}>&lt;&lt;</span>{" "}
            <span className={styles["s1"]}>"Sum of the numbers is: "</span>{" "}
            <span className={styles["s5"]}>&lt;&lt;</span>{" "}
            <span className={styles["rounds"]}>(</span>
            <span className={styles["s4"]}>a </span>
            <span className={styles["operator"]}>+</span>
            <span className={styles["s4"]}> b</span>
            <span className={styles["rounds"]}>)</span>
            <span className={styles["sc"]}>;</span>
            <span className={styles["s6"]}>return</span> 0
            <span className={styles["sc"]}>;</span>
            <span className={styles["curlies"]}>&#125;</span>
          </code>
        </pre>
      </div>
    </div>
  </div>
);

export default Card_four;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_four = () => (
         <div>
          <div className="card">
  <div className="titlebar">
    <span className="buttons">
      <button className="minimize">
        <svg x="0px" y="0px" viewBox="0 0 10.2 1">
          <rect x="0" y="50%" width="10.2" height="1"></rect>
        </svg>
      </button>
      <button className="maximize">
        <svg viewBox="0 0 10 10">
          <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z"></path>
        </svg>
      </button>
      <button className="close">
        <svg viewBox="0 0 10 10">
          <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1">
          </polygon>
        </svg>
      </button>
    </span>
  </div>
  <div className="cppcode">
    <pre id="pre"><code><span className="s1">#include</span> <span className="s2">&lt;iostream&gt;</span>
using<span className="s3"> namespace </span>std<span className="sc">;</span>

<span className="s3">int</span> <span className="s2">main()</span> <span className="curlies">&#123;</span>

  <span className="s3">int</span> <span className="s4">a</span> <span className="operator">=</span> 12<span className="sc">;</span>
  <span className="s3">int</span> <span className="s4">b</span> <span className="operator">=</span> 5<span className="sc">;</span>

  <span className="s4">cout</span> <span className="s5">&lt;&lt;</span> <span className="s1">"Sum of the numbers
    is: "</span> <span className="s5">&lt;&lt;</span> <span className="rounds">(</span><span className="s4">a </span><span className="operator">+</span><span className="s4"> b</span><span className="rounds">)</span><span className="sc">;</span>

  <span className="s6">return</span> 0<span className="sc">;</span>

<span className="curlies">&#125;</span>
    </code></pre>
  </div>
</div>
        </div>
        );

        export default Card_four;
        
        
         */
}
