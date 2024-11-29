import React from "react";
import styles from "./Input_seven.module.css";

const Input_seven = () => (
  <div>
    <div className={styles["messageBox"]}>
      <div className={styles["fileUploadWrapper"]}>
        <label for="file">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 337 337"
          >
            <circle
              strokeWidth="20"
              stroke="#6c6c6c"
              fill="none"
              r="158.5"
              cy="168.5"
              cx="168.5"
            ></circle>
            <path
              strokeLinecap="round"
              strokeWidth="25"
              stroke="#6c6c6c"
              d="M167.759 79V259"
            ></path>
            <path
              strokeLinecap="round"
              strokeWidth="25"
              stroke="#6c6c6c"
              d="M79 167.138H259"
            ></path>
          </svg>
          <span className={styles["tooltip"]}>Add an image</span>
        </label>
        <input type="file" id="file" name="file" />
      </div>
      <input
        required=""
        placeholder="Message..."
        type="text"
        id="messageInput"
      />
      <button id="sendButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 664 663"
        >
          <path
            fill="none"
            d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="33.67"
            stroke="#6c6c6c"
            d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
          ></path>
        </svg>
      </button>
    </div>
  </div>
);

export default Input_seven;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_seven = () => (
         <div>
          <div className="messageBox">
  <div className="fileUploadWrapper">
    <label for="file">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
        <circle
          strokeWidth="20"
          stroke="#6c6c6c"
          fill="none"
          r="158.5"
          cy="168.5"
          cx="168.5"
        ></circle>
        <path
          strokeLinecap="round"
          strokeWidth="25"
          stroke="#6c6c6c"
          d="M167.759 79V259"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="25"
          stroke="#6c6c6c"
          d="M79 167.138H259"
        ></path>
      </svg>
      <span className="tooltip">Add an image</span>
    </label>
    <input type="file" id="file" name="file" />
  </div>
  <input required="" placeholder="Message..." type="text" id="messageInput" />
  <button id="sendButton">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
      <path
        fill="none"
        d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="33.67"
        stroke="#6c6c6c"
        d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
      ></path>
    </svg>
  </button>
</div>
        </div>
        );

        export default Input_seven;
        
        
         */
}
