import React from "react";
import styles from "./Card_check.module.css";

const Card_check = () => (
  <div>
    <div className={styles["code-editor"]}>
      <div className={styles["header"]}>
        <span className={styles["title"]}>CSS</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className={styles["icon"]}
        >
          <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#4C4F5A"
              d="M6 6L18 18"
            ></path>{" "}
            <path
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#4C4F5A"
              d="M18 6L6 18"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className={styles["editor-content"]}>
        <code className={styles["code"]}>
          <p>
            <span className={styles["color-0"]}>.code-editor </span>{" "}
            <span>&#123;</span>
          </p>

          <p className={styles["property"]}>
            <span className={styles["color-2"]}>max-width</span>
            <span>:</span>
            <span className={styles["color-1"]}>300px</span>;
          </p>
          <p className={styles["property"]}>
            <span className={styles["color-2"]}>background-color</span>
            <span>:</span>
            <span className={styles["color-preview-1"]}></span>
            <span class="">#1d1e22</span>;
          </p>
          <p className={styles["property"]}>
            <span className={styles["color-2"]}> box-shadow</span>
            <span>:</span>
            <span className={styles["color-1"]}>
              0px 4px 30px <span className={styles["color-preview-2"]}></span>
              <span className={styles["color-3"]}>rgba(</span>0, 0, 0, 0.5
              <span className={styles["color-3"]}>)</span>
            </span>
            ;
          </p>
          <p className={styles["property"]}>
            <span className={styles["color-2"]}>border-radius</span>
            <span>:</span>
            <span className={styles["color-1"]}>8px</span>;
          </p>
          <span>&#125;</span>
        </code>
      </div>
    </div>
  </div>
);

export default Card_check;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_check = () => (
         <div>
          <div className="code-editor">
      <div className="header">
        <span className="title">CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path strokeLinecap="round" strokeWidth="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path strokeLinecap="round" strokeWidth="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div className="editor-content">
        <code className="code">
          <p><span className="color-0">.code-editor </span> <span>&#123;</span></p>

          <p className="property">
            <span className="color-2">max-width</span><span>:</span>
            <span className="color-1">300px</span>;
          </p>
          <p className="property">
            <span className="color-2">background-color</span><span>:</span>
            <span className="color-preview-1"></span><span class="">#1d1e22</span>;
          </p>
          <p className="property">
            <span className="color-2"> box-shadow</span><span>:</span>
            <span className="color-1">0px 4px 30px  <span className="color-preview-2"></span><span className="color-3">rgba(</span>0, 0, 0, 0.5<span className="color-3">)</span></span>;
          </p>
          <p className="property">
            <span className="color-2">border-radius</span><span>:</span>
            <span className="color-1">8px</span>;
          </p>
          <span>&#125;</span>
        </code>
      </div>
    </div>
        </div>
        );

        export default Card_check;
        
        
         */
}
