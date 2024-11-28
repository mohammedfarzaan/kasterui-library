import React from "react";
import styles from "./Button_kept.module.css";

const Button_kept = () => (
  <div>
    <button>
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="30px"
        height="30px"
        viewBox="0 0 512 512"
        xml:space="preserve"
        fill="#c673d9"
        transform="rotate(-35)"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <polygon
              className="st0"
              points="154.219,205.188 166.219,335.031 110.922,405.563 96.406,296.563"
            ></polygon>
            <polygon
              className="st0"
              points="357.781,205.188 345.766,335.031 401.063,405.563 415.594,296.563"
            ></polygon>
            <path
              className="st0"
              d="M323.813,62.219C305.125,23.328,275.656,0,256,0s-49.125,23.344-67.813,62.219H323.813z"
            ></path>
            <path
              className="st0"
              d="M331.328,80.469H180.672c-6.641,19.156-10.594,41.094-10.047,65.188 c1.609,69.063,18.047,190.984,18.047,190.984l122.641-0.016l12,0.016c0,0,16.453-121.938,18.031-190.984 C341.922,121.563,337.969,99.609,331.328,80.469z M256,231.031c-23.578,0-42.688-19.094-42.688-42.672s19.125-42.672,42.688-42.672 s42.672,19.094,42.656,42.672C298.672,211.938,279.563,231.031,256,231.031z"
            ></path>
            <path
              className="st0"
              d="M429.516,512c-6.109-17.594-22.859-30.219-42.531-30.219c-6.297,0-12.297,1.281-17.766,3.625 c-1.875-20.578-19.188-36.688-40.25-36.688c-3.047,0-6,0.328-8.844,0.969c0.031-0.563,0.031-1.125,0.031-1.688 c0-15.531-12.594-28.125-28.125-28.125c-4.031,0-7.875,0.844-11.344,2.375c-9.734-17.219-12.563-62.156-12.563-62.156h-25.5 c0,0-3.266,49.344-14.813,65.688c-2.688-1.094-5.656-1.688-8.75-1.688c-13.016,0-23.563,10.547-23.563,23.563 c0,0.984,0.063,1.953,0.188,2.906c-3.719-1.203-3.281-1.844-7.406-1.844c-16.484,0-30.531,10.406-35.938,25 c-6.047-2.516-12.672-3.906-19.625-3.906c-25.156,0-46.063,18.219-50.234,42.188H429.516z"
            ></path>
          </g>
        </g>
      </svg>
      <span>aim for the stars!</span>
    </button>
  </div>
);

export default Button_kept;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_kept = () => (
         <div>
          <button>
    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 512 512" xml:space="preserve" fill="#c673d9" transform="rotate(-35)">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          
          <g>
            <polygon className="st0" points="154.219,205.188 166.219,335.031 110.922,405.563 96.406,296.563"></polygon>
            <polygon className="st0" points="357.781,205.188 345.766,335.031 401.063,405.563 415.594,296.563"></polygon>
            <path className="st0" d="M323.813,62.219C305.125,23.328,275.656,0,256,0s-49.125,23.344-67.813,62.219H323.813z"></path>
            <path className="st0" d="M331.328,80.469H180.672c-6.641,19.156-10.594,41.094-10.047,65.188 c1.609,69.063,18.047,190.984,18.047,190.984l122.641-0.016l12,0.016c0,0,16.453-121.938,18.031-190.984 C341.922,121.563,337.969,99.609,331.328,80.469z M256,231.031c-23.578,0-42.688-19.094-42.688-42.672s19.125-42.672,42.688-42.672 s42.672,19.094,42.656,42.672C298.672,211.938,279.563,231.031,256,231.031z"></path>
            <path className="st0" d="M429.516,512c-6.109-17.594-22.859-30.219-42.531-30.219c-6.297,0-12.297,1.281-17.766,3.625 c-1.875-20.578-19.188-36.688-40.25-36.688c-3.047,0-6,0.328-8.844,0.969c0.031-0.563,0.031-1.125,0.031-1.688 c0-15.531-12.594-28.125-28.125-28.125c-4.031,0-7.875,0.844-11.344,2.375c-9.734-17.219-12.563-62.156-12.563-62.156h-25.5 c0,0-3.266,49.344-14.813,65.688c-2.688-1.094-5.656-1.688-8.75-1.688c-13.016,0-23.563,10.547-23.563,23.563 c0,0.984,0.063,1.953,0.188,2.906c-3.719-1.203-3.281-1.844-7.406-1.844c-16.484,0-30.531,10.406-35.938,25 c-6.047-2.516-12.672-3.906-19.625-3.906c-25.156,0-46.063,18.219-50.234,42.188H429.516z"></path>
          </g>
        </g>
    </svg>
    <span>aim for the stars!</span>
</button>
        </div>
        );

        export default Button_kept;
        
        
         */
}
