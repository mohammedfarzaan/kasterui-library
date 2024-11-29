import React from "react";
import styles from "./Card_good.module.css";

const Card_good = () => (
  <div>
    <div className={styles["card"]}>
      <header className={styles["card-header"]}>
        <p>May 3rd 2023</p>
        <span className={styles["title"]}>A Tale of Two Divs</span>
      </header>
      <div className={styles["card-author"]}>
        <a className={styles["author-avatar"]} href="#">
          <span></span>
        </a>
        <svg className={styles["half-circle"]} viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>
        <div className={styles["author-name"]}>
          <div className={styles["author-name-prefix"]}>Author</div> Folarin
          Lawal
        </div>
      </div>
      <div className={styles["tags"]}>
        <a href="#">html</a>
        <a href="#">css</a>
        <a href="#">web-dev</a>
      </div>
    </div>
  </div>
);

export default Card_good;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_good = () => (
         <div>
          <div className="card">
<header className="card-header">
  <p>May 3rd 2023</p>
  <span className="title">A Tale of Two Divs</span>
</header>
<div className="card-author">
  <a className="author-avatar" href="#">
    <span>
  </span></a>
  <svg className="half-circle" viewBox="0 0 106 57">
    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
  </svg>
  <div className="author-name">
    <div className="author-name-prefix">Author</div> Folarin Lawal
    </div>
  </div>
  <div className="tags">
    <a href="#">html</a>
    <a href="#">css</a>
    <a href="#">web-dev</a>
  </div>
</div>
        </div>
        );

        export default Card_good;
        
        
         */
}
