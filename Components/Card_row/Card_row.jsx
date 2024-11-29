import React from "react";
import styles from "./Card_row.module.css";

const Card_row = () => (
  <div>
    <section className={styles["container"]}>
      <div className={styles["card"]}>
        <div className={styles["content"]}>
          <p className={styles["logo"]}>Digital Way</p>
          <div className={styles["h6"]}>Data &amp; Infrastructure Agility</div>
          <div className={styles["hover_content"]}>
            <p>
              mParticle’s customer data platform empowers you to Integrate all
              of your data and orchestrate it across channels, partners, and
              systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Card_row;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_row = () => (
         <div>
          <section className="container">
  <div className="card">
    <div className="content">
    <p className="logo">Digital Way</p>
      <div className="h6">Data &amp; Infrastructure Agility</div>
      <div className="hover_content">
        <p>mParticle’s customer data platform empowers you to Integrate all of your data and orchestrate it across channels, partners, and systems.</p>
      </div>
    </div>
  </div>       
</section>
        </div>
        );

        export default Card_row;
        
        
         */
}
