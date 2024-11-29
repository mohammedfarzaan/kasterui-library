import React from "react";
import styles from "./Card_wife.module.css";

const Card_wife = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["svgContainer"]}>
        <svg
          className={styles["svg-icon"] + styles["dartboard"]}
          viewBox="0 0 20 20"
        >
          <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
        </svg>

        <svg
          className={styles["svg-icon"] + styles["eyehole"]}
          viewBox="0 0 20 20"
        >
          <path d="M17.659,9.597h-1.224c-0.199-3.235-2.797-5.833-6.032-6.033V2.341c0-0.222-0.182-0.403-0.403-0.403S9.597,2.119,9.597,2.341v1.223c-3.235,0.2-5.833,2.798-6.033,6.033H2.341c-0.222,0-0.403,0.182-0.403,0.403s0.182,0.403,0.403,0.403h1.223c0.2,3.235,2.798,5.833,6.033,6.032v1.224c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403v-1.224c3.235-0.199,5.833-2.797,6.032-6.032h1.224c0.222,0,0.403-0.182,0.403-0.403S17.881,9.597,17.659,9.597 M14.435,10.403h1.193c-0.198,2.791-2.434,5.026-5.225,5.225v-1.193c0-0.222-0.182-0.403-0.403-0.403s-0.403,0.182-0.403,0.403v1.193c-2.792-0.198-5.027-2.434-5.224-5.225h1.193c0.222,0,0.403-0.182,0.403-0.403S5.787,9.597,5.565,9.597H4.373C4.57,6.805,6.805,4.57,9.597,4.373v1.193c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403V4.373c2.791,0.197,5.026,2.433,5.225,5.224h-1.193c-0.222,0-0.403,0.182-0.403,0.403S14.213,10.403,14.435,10.403"></path>
        </svg>
        <svg className={styles["svg-icon"] + styles["batman"]}>
          <path
            className={styles["svg-fill-primary"]}
            d="M86.578,41.004s-8.219,.295-8.607,7.685c0,0-9.824-4.379-11.571,7.874,0,0-8.653-5.402-14.586,9.744l-1.861-3.908-1.861,3.908c-5.933-15.146-14.586-9.744-14.586-9.744-1.752-12.253-11.571-7.874-11.571-7.874-.366-6.927-7.609-7.621-8.514-7.68,11.643,.442,15.904-7.314,15.904-7.314,3.015,13.499,14.097,14.603,14.097,14.603l2.43-9.335,1.461,4.379h5.28l1.457-4.379,2.43,9.335s11.087-1.103,14.102-14.603c0,0,4.282,7.798,15.996,7.31Z"
          ></path>
        </svg>
      </div>
      <div className={styles["card-info"]}>
        <span>Stance and Aim</span>
        <p>Visualize the trajectory and mentally aim for your desired spot.</p>
        <a href="#" className={styles["challengeButton"]}>
          Challenge
        </a>
      </div>
    </div>
  </div>
);

export default Card_wife;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_wife = () => (
         <div>
          <div className="card">
<div className="svgContainer">
  <svg className="svg-icon dartboard" viewBox="0 0 20 20">
    <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
  </svg>
  
  <svg className="svg-icon eyehole" viewBox="0 0 20 20">
    <path d="M17.659,9.597h-1.224c-0.199-3.235-2.797-5.833-6.032-6.033V2.341c0-0.222-0.182-0.403-0.403-0.403S9.597,2.119,9.597,2.341v1.223c-3.235,0.2-5.833,2.798-6.033,6.033H2.341c-0.222,0-0.403,0.182-0.403,0.403s0.182,0.403,0.403,0.403h1.223c0.2,3.235,2.798,5.833,6.033,6.032v1.224c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403v-1.224c3.235-0.199,5.833-2.797,6.032-6.032h1.224c0.222,0,0.403-0.182,0.403-0.403S17.881,9.597,17.659,9.597 M14.435,10.403h1.193c-0.198,2.791-2.434,5.026-5.225,5.225v-1.193c0-0.222-0.182-0.403-0.403-0.403s-0.403,0.182-0.403,0.403v1.193c-2.792-0.198-5.027-2.434-5.224-5.225h1.193c0.222,0,0.403-0.182,0.403-0.403S5.787,9.597,5.565,9.597H4.373C4.57,6.805,6.805,4.57,9.597,4.373v1.193c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403V4.373c2.791,0.197,5.026,2.433,5.225,5.224h-1.193c-0.222,0-0.403,0.182-0.403,0.403S14.213,10.403,14.435,10.403"></path>
  </svg>
  <svg className="svg-icon batman">
    <path className="svg-fill-primary" d="M86.578,41.004s-8.219,.295-8.607,7.685c0,0-9.824-4.379-11.571,7.874,0,0-8.653-5.402-14.586,9.744l-1.861-3.908-1.861,3.908c-5.933-15.146-14.586-9.744-14.586-9.744-1.752-12.253-11.571-7.874-11.571-7.874-.366-6.927-7.609-7.621-8.514-7.68,11.643,.442,15.904-7.314,15.904-7.314,3.015,13.499,14.097,14.603,14.097,14.603l2.43-9.335,1.461,4.379h5.28l1.457-4.379,2.43,9.335s11.087-1.103,14.102-14.603c0,0,4.282,7.798,15.996,7.31Z">
  </path>
  </svg>
  

</div>
<div className="card-info">
  <span>Stance and Aim</span>
  <p>Visualize the trajectory and mentally aim for your desired spot.</p>
  <a href="#" className="challengeButton">Challenge</a>
</div>
</div>
        </div>
        );

        export default Card_wife;
        
        
         */
}