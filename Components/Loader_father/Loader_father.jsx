import React from "react";
import styles from "./Loader_father.module.css";

const Loader_father = () => (
  <div>
    <div className={styles["triangles"]}>
      <div className={styles["tri"] + styles["invert"]}></div>
      <div className={styles["tri"] + styles["invert"]}></div>
      <div className={styles["tri"]}></div>
      <div className={styles["tri"] + styles["invert"]}></div>
      <div className={styles["tri"] + styles["invert"]}></div>
      <div className={styles["tri"]}></div>
      <div className={styles["tri"] + styles["invert"]}></div>
      <div className={styles["tri"]}></div>
      <div className={styles["tri"] + styles["invert"]}></div>
    </div>
  </div>
);

export default Loader_father;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_father = () => (
         <div>
          <div className="triangles">
  <div className="tri invert"></div>
  <div className="tri invert"></div>
  <div className="tri"></div>
  <div className="tri invert"></div>
  <div className="tri invert"></div>
  <div className="tri"></div>
  <div className="tri invert"></div>
  <div className="tri"></div>
  <div className="tri invert"></div>
</div>
        </div>
        );

        export default Loader_father;
        
        
         */
}
