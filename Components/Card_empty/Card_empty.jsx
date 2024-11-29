import React from "react";
import styles from "./Card_empty.module.css";

const Card_empty = () => (
  <div>
    <div className={styles["page"]}>
      <div className={styles["margin"]}></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris
        risus, lobortis a neque aliquet, ornare rutrum purus. Integer hendrerit
        ac est non cursus. Integer quis risus tincidunt nunc mattis ultricies.
        Proin sed enim tellus.
      </p>
    </div>
  </div>
);

export default Card_empty;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_empty = () => (
         <div>
          <div className="page">
  <div className="margin"></div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris risus, lobortis a neque aliquet, ornare rutrum purus. Integer hendrerit ac est non cursus. Integer quis risus tincidunt nunc mattis ultricies. Proin sed enim tellus.</p>
</div>
        </div>
        );

        export default Card_empty;
        
        
         */
}
