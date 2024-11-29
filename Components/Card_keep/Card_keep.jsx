import React from "react";
import styles from "./Card_keep.module.css";

const Card_keep = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["header"]}>
        <div className={styles["top"]}>
          <div className={styles["circle"]}>
            <span className={styles["red"] + styles["circle2"]}></span>
          </div>
          <div className={styles["circle"]}>
            <span className={styles["yellow"] + styles["circle2"]}></span>
          </div>
          <div className={styles["circle"]}>
            <span className={styles["green"] + styles["circle2"]}></span>
          </div>
          <div className={styles["title"]}>
            <p id="title2">style.css</p>
          </div>
        </div>
      </div>
      <div className={styles["code-container"]}>
        <textarea className={styles["area"]} id="code" name="code" readonly="">
          .card &#123;&#10; width: 300px;&#10; height: 400px;&#10; margin: 0
          auto;&#10; background-color: #24233b;&#10; border-radius: 8px;&#10;
          z-index: 1;&#10; box-shadow: 0px 10px 10px rgb(73, 70, 92);&#10;
          transition: 0.5s;&#10; &#125;&#10; .card:hover &#123;&#10; transform:
          translateY(-7px);&#10; box-shadow: 0px 10px 10px black;&#10;
          &#125;&#10; .top &#123;&#10; display: flex;&#10; align-items:
          center;&#10; padding-left: 10px;&#10; &#125;
        </textarea>
      </div>
    </div>
  </div>
);

export default Card_keep;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_keep = () => (
         <div>
          <div className="card">
  <div className="header">
    <div className="top">
      <div className="circle">
        <span className="red circle2"></span>
      </div>
      <div className="circle">
        <span className="yellow circle2"></span>
      </div>
      <div className="circle">
        <span className="green circle2"></span>
      </div>
      <div className="title">
        <p id="title2">style.css</p>
      </div>
    </div>
  </div>
  <div className="code-container">
    <textarea className="area" id="code" name="code" readonly="">
      .card &#123;&#10;
        width: 300px;&#10;
        height: 400px;&#10;
        margin: 0 auto;&#10;
        background-color: #24233b;&#10;
        border-radius: 8px;&#10;
        z-index: 1;&#10;
        box-shadow: 0px 10px 10px rgb(73, 70, 92);&#10;
        transition: 0.5s;&#10;
      &#125;&#10;
      
      .card:hover &#123;&#10;
        transform: translateY(-7px);&#10;
        box-shadow: 0px 10px 10px black;&#10;
      &#125;&#10;
      
      .top &#123;&#10;
        display: flex;&#10;
        align-items: center;&#10;
        padding-left: 10px;&#10;
      &#125;
      </textarea>


  </div>
</div>
        </div>
        );

        export default Card_keep;
        
        
         */
}
