import React from "react";
import styles from "./Card_found.module.css";

const Card_found = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["header"]}>
        <div className={styles["img-box"]}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
              fill="rgba(66,193,110,1)"
            ></path>
          </svg>
        </div>
        <span className={styles["title"]}>Features</span>
      </div>

      <div className={styles["content"]}>
        <p>
          Lorem ipsum dolor sit tali amet, consectus uy adipiscing it amet it...
        </p>

        <a className={styles["btn-link"]}>Read More...</a>
      </div>
    </div>
  </div>
);

export default Card_found;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_found = () => (
         <div>
          <div className="card">
    <div className="header">
        <div className="img-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" fill="rgba(66,193,110,1)"></path>
            </svg>
        </div>
        <span className="title">Features
    </span></div>

    <div className="content">
        <p>
            Lorem ipsum dolor sit tali amet, consectus uy
            adipiscing it amet it...
        </p>

        <a className="btn-link">Read More...</a>
    </div>
</div>
        </div>
        );

        export default Card_found;
        
        
         */
}
