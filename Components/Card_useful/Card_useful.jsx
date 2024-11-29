import React from "react";
import styles from "./Card_useful.module.css";

const Card_useful = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["content"]}>
        <div className={styles["name"]}>Nihilist</div>
        <div className={styles["handle"]}>@0xNihilist</div>
        <div className={styles["title"]}>
          <span className={styles["emoji"]}>😊</span> Happy
          <br />
          Product Designer
        </div>
      </div>
      <div className={styles["dots"] + styles["orange-dots"]}></div>
      <div className={styles["dots"] + styles["pink-dots"]}></div>
    </div>
  </div>
);

export default Card_useful;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_useful = () => (
         <div>
          <div className="card">
  <div className="content">
    <div className="name">Nihilist</div>
    <div className="handle">@0xNihilist</div>
    <div className="title">
      <span className="emoji">😊</span> Happy<br />
      Product Designer
    </div>
  </div>
  <div className="dots orange-dots"></div>
  <div className="dots pink-dots"></div>
</div>
        </div>
        );

        export default Card_useful;
        
        
         */
}
