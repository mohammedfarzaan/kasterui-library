import React from "react";
import styles from "./Card_bottom.module.css";

const Card_bottom = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["top"]}>
        <p className={styles["title"]}>script.py</p>
        <span className={styles["buttons"]}>
          <button className={styles["minimize"]}>
            <svg viewBox="0 0 10.2 1" y="0px" x="0px">
              <rect height="1" width="10.2" y="50%" x="0"></rect>
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
      <div className={styles["topfix"]}></div>
      <hr />
      <div className={styles["content"]}>
        <p>
          <code>
            <i className={styles["c1"]}>import</i> os, sys
            <br />
            <b className={styles["c2"]}>os</b>.system
            <b className={styles["c3"]}>(</b>
            <b className={styles["c4"]}>"title test script"</b>
            <b className={styles["c3"]}>)</b>
            <br />
            <b className={styles["c2"]}>print</b>
            <b className={styles["c3"]}>(</b>
            <b className={styles["c4"]}>"Hello UIVERSE.io!"</b>
            <b className={styles["c3"]}>)</b>
            <br />
            <b className={styles["c2"]}>sys</b>.exit
            <b className={styles["c3"]}>(</b>
            <b className={styles["c3"]}>)</b>
            <br />
            <i className={styles["comment"]}>#this is a comment.</i>
          </code>
        </p>
      </div>
    </div>
  </div>
);

export default Card_bottom;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_bottom = () => (
         <div>
          <div className="card">
  <div className="top">
    <p className="title">script.py</p>
    <span className="buttons">
    <button className="minimize">
			<svg viewBox="0 0 10.2 1" y="0px" x="0px"><rect height="1" width="10.2" y="50%" x="0"></rect></svg>
		</button>
    <button className="maximize">
			<svg viewBox="0 0 10 10"><path d="M0,0v10h10V0H0z M9,9H1V1h8V9z"></path></svg>
		</button>
    <button className="close">
			<svg viewBox="0 0 10 10"><polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"></polygon></svg>
		</button>
    </span>

  </div>
  <div className="topfix">
  </div>
<hr />
  <div className="content">
    <p>
      <code>
        <i className="c1">import</i> os, sys<br />
        <b className="c2">os</b>.system<b className="c3">(</b><b className="c4">"title test script"</b><b className="c3">)</b><br />
        <b className="c2">print</b><b className="c3">(</b><b className="c4">"Hello UIVERSE.io!"</b><b className="c3">)</b><br />
        <b className="c2">sys</b>.exit<b className="c3">(</b><b className="c3">)</b><br />
        <i className="comment">#this is a comment.</i>
      </code>
    </p>
  </div>
</div>
        </div>
        );

        export default Card_bottom;
        
        
         */
}
