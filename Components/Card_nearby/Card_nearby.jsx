import React from "react";
import styles from "./Card_nearby.module.css";

const Card_nearby = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["content"]}>
        <div className={styles["front"]}>
          <h3 className={styles["title"]}>Hey</h3>
          <p className={styles["subtitle"]}>Hover me :)</p>
        </div>

        <div className={styles["back"]}>
          <p className={styles["description"]}>
            Cool description so you can read it too my friend
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_nearby;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_nearby = () => (
         <div>
          <div className="card">
       <div className="content">
           <div className="front">
               <h3 className="title">Hey</h3>
               <p className="subtitle">Hover me :)</p>
           </div>

           <div className="back">
               <p className="description">
                   Cool description so you can read it too my friend
               </p>
           </div>
       </div>
   </div>
        </div>
        );

        export default Card_nearby;
        
        
         */
}
