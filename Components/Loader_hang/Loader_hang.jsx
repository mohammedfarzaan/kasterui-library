import React from "react";
import styles from "./Loader_hang.module.css";

const Loader_hang = () => (
  <div>
    <div className={styles["semicircle"]}>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_hang;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_hang = () => (
         <div>
          <div className="semicircle">
  <div>
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_hang;
        
        
         */
}
