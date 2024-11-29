import React from "react";
import styles from "./Card_fell.module.css";

const Card_fell = () => (
  <div>
    <div className={styles["card"]}>
      <p className={styles["title"]}>Who to follow</p>
      <div className={styles["user__container"]}>
        <div className={styles["user"]}>
          <div className={styles["image"]}></div>
          <div className={styles["user__content"]}>
            <div className={styles["text"]}>
              <span className={styles["name"]}>Name</span>
              <p className={styles["username"]}>@namedlorem</p>
            </div>
            <button className={styles["follow"]}>Follow</button>
          </div>
        </div>
        <div className={styles["user"]}>
          <div className={styles["image"]}></div>
          <div className={styles["user__content"]}>
            <div className={styles["text"]}>
              <span className={styles["name"]}>Name</span>
              <p className={styles["username"]}>@namedlorem</p>
            </div>
            <button className={styles["follow"]}>Follow</button>
          </div>
        </div>
        <div className={styles["user"]}>
          <div className={styles["image"]}></div>
          <div className={styles["user__content"]}>
            <div className={styles["text"]}>
              <span className={styles["name"]}>Name</span>
              <p className={styles["username"]}>@namedlorem</p>
            </div>
            <button className={styles["follow"]}>Follow</button>
          </div>
        </div>
      </div>
      <a className={styles["more"]} href="#">
        See more
      </a>
    </div>
  </div>
);

export default Card_fell;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_fell = () => (
         <div>
          <div className="card">
  <p className="title">Who to follow</p>
  <div className="user__container">
    <div className="user">
      <div className="image"></div>
      <div className="user__content">
        <div className="text">
          <span className="name">Name</span>
          <p className="username">@namedlorem</p>
        </div>
        <button className="follow">Follow</button>
      </div>
      
    </div> 
    <div className="user">
      <div className="image"></div>
      <div className="user__content">
        <div className="text">
          <span className="name">Name</span>
          <p className="username">@namedlorem</p>
        </div>
        <button className="follow">Follow</button>
      </div>
      
    </div> 
    <div className="user">
      <div className="image"></div>
      <div className="user__content">
        <div className="text">
          <span className="name">Name</span>
          <p className="username">@namedlorem</p>
        </div>
        <button className="follow">Follow</button>
      </div>
      
    </div> 

  </div>
  <a className="more" href="#">See more</a>
</div>
        </div>
        );

        export default Card_fell;
        
        
         */
}
