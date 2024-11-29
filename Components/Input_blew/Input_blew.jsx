import React from "react";
import styles from "./Input_blew.module.css";

const Input_blew = () => (
  <div>
    <div className={styles["search-panels"]}>
      <div className={styles["search-group"]}>
        <input
          required=""
          type="text"
          name="text"
          autocomplete="on"
          className={styles["input"]}
        />
        <label className={styles["enter-label"]}>Search</label>
        <div className={styles["btn-box"]}>
          <button className={styles["btn-search"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
              <circle id="svg-circle" cx="208" cy="208" r="144"></circle>
            </svg>
          </button>
        </div>
        <div className={styles["btn-box-x"]}>
          <button className={styles["btn-cleare"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                id="cleare-line"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Input_blew;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_blew = () => (
         <div>
          <div className="search-panels">
	<div className="search-group">
		<input required="" type="text" name="text" autocomplete="on" className="input" />
		<label className="enter-label">Search</label>
		<div className="btn-box">
			<button className="btn-search">
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path><circle id="svg-circle" cx="208" cy="208" r="144"></circle></svg>
			</button>
		</div>
		<div className="btn-box-x">
			<button className="btn-cleare">
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" id="cleare-line"></path></svg>
			</button>
		</div>
	</div>
</div>
        </div>
        );

        export default Input_blew;
        
        
         */
}
