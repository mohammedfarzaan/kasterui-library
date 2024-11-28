import React from "react";
import styles from "./Input_type.module.css";

const Input_type = () => (
  <div>
    <div className={styles["info-panels"]}>
      <div className={styles["input-color-group-one"]}>
        <input
          className={styles["input-color"]}
          autocomplete="on"
          name="text"
          type="text"
          required=""
          placeholder="255, 255, 255, 0.5"
        />
        <label className={styles["color-label"]}>RGBA</label>
        <button className={styles["btn-copy"]}>
          <svg
            className="svgs"
            id="icon-btn-copy"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.98,13.96h-4.74c-.13,0-.24-.11-.24-.24V7.07c0-.13,.11-.24,.24-.24h4.74c.13,0,.24,.11,.24,.24v6.64c0,.13-.11,.24-.24,.24Zm-6.77-7.72V14.55c0,.66,.53,1.19,1.19,1.19h6.41c.66,0,1.19-.53,1.19-1.19V6.24c0-.66-.53-1.19-1.19-1.19h-6.41c-.66,0-1.19,.53-1.19,1.19Z"></path>
            <path d="M15.68,18.95H7.19c-.66,0-1.19-.53-1.19-1.19V7.37c0-.49,.4-.89,.89-.89s.89,.4,.89,.89v9.57c0,.13,.1,.23,.23,.23h7.67c.49,0,.89,.4,.89,.89s-.4,.89-.89,.89Z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Input_type;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_type = () => (
         <div>
          <div className="info-panels">
  <div className="input-color-group-one">
    <input className="input-color" autocomplete="on" name="text" type="text" required="" placeholder="255, 255, 255, 0.5" />
		<label className="color-label">RGBA</label>
		<button className="btn-copy">
	  	<svg className="svgs" id="icon-btn-copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.98,13.96h-4.74c-.13,0-.24-.11-.24-.24V7.07c0-.13,.11-.24,.24-.24h4.74c.13,0,.24,.11,.24,.24v6.64c0,.13-.11,.24-.24,.24Zm-6.77-7.72V14.55c0,.66,.53,1.19,1.19,1.19h6.41c.66,0,1.19-.53,1.19-1.19V6.24c0-.66-.53-1.19-1.19-1.19h-6.41c-.66,0-1.19,.53-1.19,1.19Z"></path><path d="M15.68,18.95H7.19c-.66,0-1.19-.53-1.19-1.19V7.37c0-.49,.4-.89,.89-.89s.89,.4,.89,.89v9.57c0,.13,.1,.23,.23,.23h7.67c.49,0,.89,.4,.89,.89s-.4,.89-.89,.89Z"></path></svg>		
		</button>
  </div>
</div>
        </div>
        );

        export default Input_type;
        
        
         */
}
