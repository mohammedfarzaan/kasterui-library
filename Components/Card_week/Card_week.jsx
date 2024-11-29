import React from "react";
import styles from "./Card_week.module.css";

const Card_week = () => (
  <div>
    <div className={styles["card"]}>
      <p className={styles["card-p"]}>Hover Me</p>
      <div className={styles["card-countent"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
          soluta amet, ipsum quia numquam excepturi veritatis deleniti similique
          ipsam obcaecati nulla dolor, sapiente earum blanditiis pariatur minima
          iure repudiandae.
        </p>
      </div>
    </div>
  </div>
);

export default Card_week;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_week = () => (
         <div>
          <div className="card">
        <p className="card-p">Hover Me</p>
        <div className="card-countent">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic soluta amet, ipsum quia numquam excepturi veritatis deleniti similique ipsam obcaecati nulla dolor, sapiente earum blanditiis pariatur minima iure repudiandae.  
            </p>
        </div>
    </div>
        </div>
        );

        export default Card_week;
        
        
         */
}
