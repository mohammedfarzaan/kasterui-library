import React from "react";
import styles from "./Loader_trunk.module.css";

const Loader_trunk = () => (
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

export default Loader_trunk;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_trunk = () => (
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

        export default Loader_trunk;
        
        
         */
}
