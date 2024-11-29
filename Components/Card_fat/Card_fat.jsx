import React from "react";
import styles from "./Card_fat.module.css";

const Card_fat = () => (
  <div>
    <div className={styles["YoutubeVideo"]}>
      <div className={styles["Image"]}></div>
      <div className={styles["Icon"]}></div>
      <div className={styles["Title"]}></div>
      <div className={styles["Name"]}></div>
    </div>
  </div>
);

export default Card_fat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_fat = () => (
         <div>
          <div className="YoutubeVideo">
  <div className="Image"></div>
  <div className="Icon"></div>
  <div className="Title"></div>
  <div className="Name"></div>
</div>
        </div>
        );

        export default Card_fat;
        
        
         */
}
