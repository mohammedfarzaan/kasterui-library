import React from "react";
import styles from "./Button_dry.module.css";

const Button_dry = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["button-inner-curve"]}>
        <div className={styles["icon"]}>
          <svg
            class=""
            xml:space="preserve"
            style={{ enableBackground: "new 0 0 512 512" }}
            viewBox="0 0 24 24"
            y="0"
            x="0"
            height="20"
            width="20"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g fill="#000">
                <path
                  class=""
                  data-original="#000000"
                  opacity="1"
                  fill="#000000"
                  d="M14.22 21.63c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.17 0-1.17.83-2.85 4.79-4.18l8.49-2.83c2.12-.71 3.89-.5 4.98.58s1.3 2.86.59 4.98l-2.83 8.49c-1.33 3.98-3 4.81-4.18 4.81zM7.64 7.03c-2.78.93-3.77 2.03-3.77 2.75 0 .72.99 1.82 3.77 2.74l2.52.84c.22.07.4.25.47.47l.84 2.52c.92 2.78 2.03 3.77 2.75 3.77s1.82-.99 2.75-3.77l2.83-8.49c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22z"
                ></path>
                <path
                  class=""
                  data-original="#000000"
                  opacity="1"
                  fill="#000000"
                  d="M10.11 14.4c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.58-3.59c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3.58 3.59c-.14.15-.34.22-.53.22z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <p>Send Message</p>
      </div>
    </button>
  </div>
);

export default Button_dry;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_dry = () => (
         <div>
          <button className="button">
  <div className="button-inner-curve">
    <div className="icon">
      <svg
        class=""
        xml:space="preserve"
        style={{enableBackground:"new 0 0 512 512"}}
        viewBox="0 0 24 24"
        y="0"
        x="0"
        height="20"
        width="20"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g fill="#000">
            <path
              class=""
              data-original="#000000"
              opacity="1"
              fill="#000000"
              d="M14.22 21.63c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.17 0-1.17.83-2.85 4.79-4.18l8.49-2.83c2.12-.71 3.89-.5 4.98.58s1.3 2.86.59 4.98l-2.83 8.49c-1.33 3.98-3 4.81-4.18 4.81zM7.64 7.03c-2.78.93-3.77 2.03-3.77 2.75 0 .72.99 1.82 3.77 2.74l2.52.84c.22.07.4.25.47.47l.84 2.52c.92 2.78 2.03 3.77 2.75 3.77s1.82-.99 2.75-3.77l2.83-8.49c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22z"
            ></path>
            <path
              class=""
              data-original="#000000"
              opacity="1"
              fill="#000000"
              d="M10.11 14.4c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.58-3.59c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3.58 3.59c-.14.15-.34.22-.53.22z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
    <p>Send Message</p>
  </div>
</button>
        </div>
        );

        export default Button_dry;
        
        
         */
}
