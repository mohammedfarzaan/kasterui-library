import React from "react";
import styles from "./Card_lesson.module.css";

const Card_lesson = () => (
  <div>
    <div id="card" className={styles["card"]}>
      <div className={styles["content"]}>
        <div className={styles["card-body"]}>
          <div className={styles["code-container"] + styles["float-animation"]}>
            <span className={styles["line"]}>
              <span className={styles["code-comment"]}>
                // Código de ejemplo
              </span>
            </span>
            <span className={styles["line"]}>
              <span className={styles["code-keyword"]}>function</span>{" "}
              <span className={styles["code-function"]}>example</span>()
            </span>
            <span className={styles["line"]}>&#123;</span>
            <span className={styles["line"] + styles["indent"]}>
              <span className={styles["code-keyword"]}>let</span>{" "}
              <span className={styles["code-variable"]}>message</span> =
              <span className={styles["code-string"]}>"Hello, World!"</span>;
            </span>
            <span className={styles["line"] + styles["indent"]}>
              <span className={styles["code-built-in"]}>console</span>.
              <span className={styles["code-method"]}>log</span>(
              <span className={styles["code-variable"]}>message</span>);
            </span>
            <span className={styles["line"]}>&#125;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_lesson;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_lesson = () => (
         <div>
          <div id="card" className="card">
  <div className="content">
    <div className="card-body">
      <div className="code-container float-animation">
        <span className="line"><span className="code-comment">// Código de ejemplo</span></span>
        <span className="line"><span className="code-keyword">function</span> <span
            className="code-function">example</span>()</span>
        <span className="line">&#123;</span>
        <span className="line indent"><span className="code-keyword">let</span> <span className="code-variable">message</span> =
          <span className="code-string">"Hello, World!"</span>;</span>
        <span className="line indent"><span className="code-built-in">console</span>.<span className="code-method">log</span>(<span
            className="code-variable">message</span>);</span>
        <span className="line">&#125;</span>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_lesson;
        
        
         */
}
