import React from "react";
import styles from "./Card_where.module.css";

const Card_where = () => (
  <div>
    <div className={styles["card-container"]}>
      <div className={styles["card-header"]}>Voice Chat</div>
      <div className={styles["card-body"]}>
        <audio controls="">
          <source type="audio/mpeg" src="" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className={styles["card-footer"]}>
        <button className={styles["mute-button"]}>Mute</button>
        <button className={styles["unmute-button"]}>Unmute</button>
      </div>
    </div>
  </div>
);

export default Card_where;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_where = () => (
         <div>
          <div className="card-container">
    <div className="card-header">Voice Chat</div>
    <div className="card-body">
      <audio controls="">
        <source type="audio/mpeg" src="" />
        Your browser does not support the audio element.
      </audio>
    </div>
    <div className="card-footer">
        <button className="mute-button">Mute</button>
        <button className="unmute-button">Unmute</button>
    </div>
</div>
        </div>
        );

        export default Card_where;
        
        
         */
}
