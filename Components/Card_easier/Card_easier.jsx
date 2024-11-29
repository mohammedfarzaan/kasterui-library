import React from "react";
import styles from "./Card_easier.module.css";

const Card_easier = () => (
  <div>
    <article className={styles["card"]}>
      <div className={styles["temporary_text"]}>Place image here</div>
      <div className={styles["card_content"]}>
        <span className={styles["card_title"]}>This is a Title</span>
        <span className={styles["card_subtitle"]}>
          Thsi is a subtitle of this page. Let us see how it looks on the Web.
        </span>
        <p className={styles["card_description"]}>
          Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
          dolor tempora aperiam itaque possimus at, cupiditate earum, quae
          repudiandae aspernatur? Labore minus soluta consequatur placeat.
        </p>
      </div>
    </article>
  </div>
);

export default Card_easier;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_easier = () => (
         <div>
          <article className="card">
    <div className="temporary_text">
        Place image here
    </div>
<div className="card_content">
    <span className="card_title">This is a Title</span>
        <span className="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
        <p className="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
</div>
</article>
        </div>
        );

        export default Card_easier;
        
        
         */
}
