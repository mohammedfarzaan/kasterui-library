import React from "react";
import styles from "./Loader_member.module.css";

const Loader_member = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box-1"]}></div>
      <span>Loading.....</span>
    </div>
  </div>
);

export default Loader_member;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_member = () => (
         <div>
          <div className="loader">
     <div className="box-1">
     </div>
     <span>
         Loading.....
     </span>
 </div>
        </div>
        );

        export default Loader_member;
        
        
         */
}
