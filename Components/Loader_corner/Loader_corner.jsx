import React from "react";
import styles from "./Loader_corner.module.css";

const Loader_corner = () => (
  <div>
    <div className={styles["spinnerContainer"]}>
      <div className={styles["spinner"]}></div>
      <div className={styles["loader"]}>
        <p>loading</p>
        <div className={styles["words"]}>
          <span className={styles["word"]}>posts</span>
          <span className={styles["word"]}>images</span>
          <span className={styles["word"]}>followers</span>
          <span className={styles["word"]}>hashtags</span>
          <span className={styles["word"]}>posts</span>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_corner;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_corner = () => (
         <div>
          <div className="spinnerContainer">
  <div className="spinner"></div>
  <div className="loader">
    <p>loading</p>
    <div className="words">
      <span className="word">posts</span>
      <span className="word">images</span>
      <span className="word">followers</span>
      <span className="word">hashtags</span>
      <span className="word">posts</span>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_corner;
        
        
         */
}
