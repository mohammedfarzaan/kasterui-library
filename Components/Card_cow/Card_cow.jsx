import React from "react";
import styles from "./Card_cow.module.css";

const Card_cow = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["infos"]}>
        <div className={styles["image"]}></div>
        <div className={styles["info"]}>
          <div>
            <p className={styles["name"]}>John Doe</p>
            <p className={styles["function"]}>Front-end dev</p>
          </div>
          <div className={styles["stats"]}>
            <p className={styles["flex"] + styles["flex-col"]}>
              Articles
              <span className={styles["state-value"]}>34</span>
            </p>
            <p className={styles["flex"]}>
              Followers
              <span className={styles["state-value"]}>455</span>
            </p>
          </div>
        </div>
      </div>
      <button className={styles["request"]} type="button">
        Add friend
      </button>
    </div>
  </div>
);

export default Card_cow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_cow = () => (
         <div>
          <div className="card">
    <div className="infos">
        <div className="image"></div>
        <div className="info">
            <div>
                <p className="name">
                    John Doe
                </p>
                <p className="function">
                    Front-end dev 
                </p>
            </div>
            <div className="stats">
                    <p className="flex flex-col">
                        Articles
                        <span className="state-value">
                            34
                        </span>
                    </p>
                    <p className="flex">
                        Followers
                        <span className="state-value">
                            455
                        </span>
                    </p>
                    
            </div>
        </div>
    </div>
    <button className="request" type="button">
            Add friend
        </button>
</div>
        </div>
        );

        export default Card_cow;
        
        
         */
}
