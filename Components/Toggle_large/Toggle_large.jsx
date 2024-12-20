import React from "react";
import styles from "./Toggle_large.module.css";

const Toggle_large = () => (
  <div>
    <svg
      xml:space="preserve"
      viewBox="0 0 500 300"
      y="0px"
      x="0px"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      className={styles["svg-switch-container"]}
      version="1.1"
    >
      <defs>
        <linearGradient
          y2="331.0775"
          x2="360"
          y1="149.0088"
          x1="360"
          gradientUnits="userSpaceOnUse"
          id="SVGID_1_"
        >
          <stop style={{ stopColor: "#636F7C" }} offset="0"></stop>
          <stop style={{ stopColor: "#5A6571" }} offset="1"></stop>
        </linearGradient>

        <filter
          height="160%"
          width="200%"
          y="-30%"
          x="-50%"
          id="inset-shadow-big-bottom"
        >
          <feOffset dy="2" dx="0"></feOffset>
          <feGaussianBlur
            result="offset-blur"
            stdDeviation="1"
          ></feGaussianBlur>
          <feComposite
            result="inverse"
            in2="offset-blur"
            in="SourceGraphic"
            operator="out"
          ></feComposite>
          <feFlood
            result="color"
            flood-opacity="1"
            flood-color="#FFF"
          ></feFlood>
          <feComposite
            result="shadow"
            in2="inverse"
            in="color"
            operator="in"
          ></feComposite>
          <feComponentTransfer result="shadow" in="shadow">
            <feFuncA type="linear"></feFuncA>
          </feComponentTransfer>
          <feComposite
            result="final-shadow-1"
            in2="SourceGraphic"
            in="shadow"
            operator="over"
          ></feComposite>

          <feOffset dy="-4" dx="0"></feOffset>
          <feGaussianBlur
            result="offset-blur"
            stdDeviation="2"
          ></feGaussianBlur>
          <feComposite
            result="inverse"
            in2="offset-blur"
            in="final-shadow-1"
            operator="out"
          ></feComposite>
          <feFlood
            result="color"
            flood-opacity="1"
            flood-color="#999"
          ></feFlood>
          <feComposite
            result="shadow"
            in2="inverse"
            in="color"
            operator="in"
          ></feComposite>
          <feComponentTransfer result="shadow" in="shadow">
            <feFuncA type="linear"></feFuncA>
          </feComponentTransfer>
          <feComposite
            result="final-shadow-2"
            in2="final-shadow-1"
            in="shadow"
            operator="over"
          ></feComposite>

          <feGaussianBlur
            result="blur"
            stdDeviation="4"
            in="SourceAlpha"
          ></feGaussianBlur>
          <feOffset result="offsetblur" dy="3" dx="0"></feOffset>

          <feComponentTransfer in="offsetblur" result="shadow1">
            <feFuncA type="linear"></feFuncA>
          </feComponentTransfer>

          <feMerge>
            <feMergeNode in="shadow1"></feMergeNode>
            <feMergeNode in="final-shadow-2"></feMergeNode>
          </feMerge>
        </filter>

        <filter id="inset-shadow-container">
          <feOffset dy="2" dx="0"></feOffset>
          <feGaussianBlur
            result="offset-blur"
            stdDeviation="2"
          ></feGaussianBlur>
          <feComposite
            result="inverse"
            in2="offset-blur"
            in="SourceGraphic"
            operator="out"
          ></feComposite>
          <feFlood
            result="color"
            flood-opacity="1"
            flood-color="#555"
          ></feFlood>
          <feComposite
            result="shadow"
            in2="inverse"
            in="color"
            operator="in"
          ></feComposite>
          <feComponentTransfer result="shadow" in="shadow">
            <feFuncA type="linear"></feFuncA>
          </feComponentTransfer>
          <feComposite
            in2="SourceGraphic"
            in="shadow"
            operator="over"
          ></feComposite>
        </filter>

        <filter id="inset-shadow-container-big">
          <feOffset dy="0" dx="0"></feOffset>
          <feGaussianBlur
            result="offset-blur"
            stdDeviation="5"
          ></feGaussianBlur>
          <feComposite
            result="inverse"
            in2="offset-blur"
            in="SourceGraphic"
            operator="out"
          ></feComposite>
          <feFlood
            result="color"
            flood-opacity="1"
            flood-color="#555"
          ></feFlood>
          <feComposite
            result="shadow"
            in2="inverse"
            in="color"
            operator="in"
          ></feComposite>
          <feComponentTransfer result="shadow" in="shadow">
            <feFuncA type="linear"></feFuncA>
          </feComponentTransfer>
          <feComposite
            in2="SourceGraphic"
            in="shadow"
            operator="over"
          ></feComposite>
        </filter>

        <filter
          height="150%"
          width="150%"
          y="-20%"
          x="-50%"
          id="big-gaussian-blur"
        >
          <feGaussianBlur result="base-blur" stdDeviation="25"></feGaussianBlur>
        </filter>

        <filter height="120%" width="150%" y="0" x="-10%" id="drop-shadow">
          <feOffset
            dy="14"
            dx="0"
            in="SourceGraphic"
            result="offOut"
          ></feOffset>
          <feColorMatrix
            values="0.2 0 0 
              0 0 0 0.2 
              0 0 0 0 0 
              0.2 0 0 0 
              0 0 0.5 0"
            type="matrix"
            in="offOut"
            result="matrixOut"
          ></feColorMatrix>
          <feGaussianBlur
            stdDeviation="6"
            in="matrixOut"
            result="blurOut"
          ></feGaussianBlur>
          <feBlend mode="normal" in2="blurOut" in="SourceGraphic"></feBlend>
        </filter>

        <filter
          height="120%"
          width="120%"
          y="0"
          x="-10%"
          id="drop-shadow-checkbox"
        >
          <feOffset
            dy="10"
            dx="0"
            in="SourceGraphic"
            result="offOut"
          ></feOffset>
          <feColorMatrix
            values="0.0 0 0 
              0 0 0 0.0 
              0 0 0 0 0 
              0.0 0 0 0 
              0 0 0.35 0"
            type="matrix"
            in="offOut"
            result="matrixOut"
          ></feColorMatrix>
          <feGaussianBlur
            stdDeviation="10"
            in="matrixOut"
            result="blurOut"
          ></feGaussianBlur>
          <feBlend mode="normal" in2="blurOut" in="SourceGraphic"></feBlend>
        </filter>
      </defs>
      <g transform="translate(-130 -110)" className={styles["svg-switch"]}>
        <g
          filter="url(#big-gaussian-blur)"
          opacity="1"
          style={{ fill: "#F4847D" }}
          id="mild-glow"
        >
          <path
            d="M254.949,330.381l-79.336-79.336c-6.1-6.1-6.1-15.991,0-22.091l79.336-79.336c6.1-6.1,15.991-6.1,22.091,0l79.336,79.336
				c6.1,6.1,6.1,15.991,0,22.091l-79.336,79.336C270.939,336.481,261.049,336.481,254.949,330.381z"
          ></path>
        </g>
        <path
          d="M452.006,140.624H266.328c-0.848,0-1.665,0.132-2.431,0.376c-4.598,0.832-8.878,3.06-12.188,6.37
		l-76.344,76.344c-8.98,8.98-8.98,23.592,0,32.572l76.344,76.344c3.31,3.31,7.59,5.537,12.188,6.37
		c0.767,0.244,1.584,0.376,2.431,0.376h185.678c6.152,0,11.936-2.396,16.286-6.746l76.344-76.344c8.98-8.98,8.98-23.592,0-32.572
		l-76.344-76.344C463.942,143.02,458.158,140.624,452.006,140.624L452.006,140.624z"
          style={{ fill: "#F3F3F0" }}
          filter="url(#drop-shadow)"
          id="base-outline"
        ></path>
        <path
          d="M538.979,229.371l-76.344-76.344c-2.935-2.935-6.782-4.403-10.629-4.403H266.328v0.101
		c-3.274,0.363-6.452,1.791-8.962,4.301l-76.344,76.344c-5.87,5.87-5.87,15.388,0,21.258l76.344,76.344
		c2.51,2.51,5.689,3.938,8.962,4.301v0.101h185.678c3.847,0,7.694-1.468,10.629-4.403l76.344-76.344
		C544.849,244.759,544.849,235.241,538.979,229.371z"
          filter="url(#inset-shadow-container-big)"
          style={{ fill: "url(#SVGID_1_)" }}
          id="base-container"
        ></path>
        <path
          d="M257.071,313.013l-64.09-64.09c-4.928-4.928-4.928-12.918,0-17.846
		l64.09-64.09c4.928-4.928,12.918-4.928,17.846,0l64.09,64.09c4.928,4.928,4.928,12.918,0,17.846l-64.09,64.09
		C269.989,317.94,261.999,317.94,257.071,313.013z"
          filter="url(#inset-shadow-container)"
          className={styles["position-container"]}
          style={{ fill: "#525C6B" }}
          id="start_container"
        ></path>
        <path
          d="M445.083,313.013l-64.09-64.09c-4.928-4.928-4.928-12.918,0-17.846
		l64.09-64.09c4.928-4.928,12.918-4.928,17.846,0l64.09,64.09c4.928,4.928,4.928,12.918,0,17.846l-64.09,64.09
		C458.001,317.94,450.011,317.94,445.083,313.013z"
          filter="url(#inset-shadow-container)"
          style={{ fill: "#525C6B" }}
          className={styles["position-container"]}
          id="end_container"
        ></path>
        <text
          y="255"
          x="225"
          className={styles["text-label"] + styles["noselect"]}
        >
          OFF
        </text>
        <text
          y="255"
          x="430"
          className={styles["text-label"] + styles["noselect"]}
        >
          ON
        </text>
        <g transform="translate(0)" id="checkbox-off">
          <path
            d="M257.071,313.013l-64.09-64.09c-4.928-4.928-4.928-12.918,0-17.846l64.09-64.09
			c4.928-4.928,12.918-4.928,17.846,0l64.09,64.09c4.928,4.928,4.928,12.918,0,17.846l-64.09,64.09
			C269.989,317.94,261.999,317.94,257.071,313.013z"
            filter="url(#drop-shadow-checkbox)"
            style={{ fill: "#F5F3EE" }}
            id="off-bot-cap"
          ></path>
          <path
            d="M257.942,305.884l-57.832-57.832c-4.447-4.447-4.447-11.656,0-16.103l57.832-57.832
			c4.447-4.447,11.656-4.447,16.103,0l57.832,57.832c4.447,4.447,4.447,11.656,0,16.103l-57.832,57.832
			C269.599,310.331,262.389,310.331,257.942,305.884z"
            style={{ fill: "#F4847D" }}
            id="off-color"
          ></path>
          <path
            d="M259.757,291.032l-44.795-44.795c-3.444-3.444-3.444-9.029,0-12.473
			l44.795-44.795c3.444-3.444,9.029-3.444,12.473,0l44.795,44.795c3.444,3.444,3.444,9.029,0,12.473l-44.795,44.795
			C268.786,294.477,263.202,294.477,259.757,291.032z"
            filter="url(#inset-shadow-big-bottom)"
            style={{ fill: "#FFFFFF" }}
            id="off-top-cap"
          ></path>
        </g>
        <g id="control-group">
          <path
            d="M452.006,140.624H266.328c-0.848,0-1.665,0.132-2.431,0.376c-4.598,0.832-8.878,3.06-12.188,6.37 
		l-76.344,76.344c-8.98,8.98-8.98,23.592,0,32.572l76.344,76.344c3.31,3.31,7.59,5.537,12.188,6.37
		c0.767,0.244,1.584,0.376,2.431,0.376h185.678c6.152,0,11.936-2.396,16.286-6.746l76.344-76.344c8.98-8.98,8.98-23.592,0-32.572
		l-76.344-76.344C463.942,143.02,458.158,140.624,452.006,140.624L452.006,140.624z"
            style={{ fill: "transparent" }}
            id="controlon"
            className={styles["control-element"]}
          ></path>

          <path
            d="M452.006,140.624H266.328c-0.848,0-1.665,0.132-2.431,0.376c-4.598,0.832-8.878,3.06-12.188,6.37 
		l-76.344,76.344c-8.98,8.98-8.98,23.592,0,32.572l76.344,76.344c3.31,3.31,7.59,5.537,12.188,6.37
		c0.767,0.244,1.584,0.376,2.431,0.376h185.678c6.152,0,11.936-2.396,16.286-6.746l76.344-76.344c8.98-8.98,8.98-23.592,0-32.572
		l-76.344-76.344C463.942,143.02,458.158,140.624,452.006,140.624L452.006,140.624z"
            style={{ fill: "transparent" }}
            transform="translate(0 300)"
            className={styles["control-element"]}
            id="controloff"
          ></path>
        </g>
        <animateTransform
          values="0 0 ; 0 300"
          fill="freeze"
          dur="0.01s"
          begin="controlon.click"
          type="translate"
          attributeType="XML"
          attributeName="transform"
          xlinkHref="#controlon"
        ></animateTransform>
        <animateTransform
          values="0 300 ; 0 0"
          fill="freeze"
          dur="0.01s"
          begin="controlon.click"
          type="translate"
          attributeType="XML"
          attributeName="transform"
          xlinkHref="#controloff"
        ></animateTransform>
        <animateTransform
          values="0 300 ; 0 0"
          fill="freeze"
          dur="0.01s"
          begin="controloff.click"
          type="translate"
          attributeType="XML"
          attributeName="transform"
          xlinkHref="#controlon"
        ></animateTransform>
        <animateTransform
          values="0 0 ; 0 300"
          fill="freeze"
          dur="0.01s"
          begin="controloff.click"
          type="translate"
          attributeType="XML"
          attributeName="transform"
          xlinkHref="#controloff"
        ></animateTransform>
        <animateTransform
          keyTimes="0;0.1;0.5; 0.9;1"
          values="0;-5;200;180;188;"
          fill="freeze"
          dur="0.3s"
          begin="controlon.click"
          type="translate"
          attributeType="XML"
          attributeName="transform"
          xlinkHref="#checkbox-off"
        ></animateTransform>
        <animateTransform
          keyTimes="0;0.1;0.5; 0.9;1"
          values="188;193;-12; 8; 0"
          fill="freeze"
          dur="0.3s"
          begin="controloff.click"
          type="translate"
          attributeType="XML"
          attributeName="transform"
          xlinkHref="#checkbox-off"
        ></animateTransform>
        <animateTransform
          keyTimes="0;0.1;0.5; 0.9;1"
          values="188;193;-12; 8; 0"
          fill="freeze"
          dur="0.3s"
          begin="controloff.click"
          type="translate"
          attributeType="XML"
          attributeName="transform"
          xlinkHref="#mild-glow"
        ></animateTransform>
        <animateTransform
          keyTimes="0;0.1;0.5; 0.9;1"
          values="0;-5;200;180;188;"
          fill="freeze"
          dur="0.3s"
          begin="controlon.click"
          type="translate"
          attributeType="XML"
          attributeName="transform"
          xlinkHref="#mild-glow"
        ></animateTransform>
        ?&gt;
      </g>
    </svg>
  </div>
);

export default Toggle_large;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_large = () => (
         <div>
          <svg xml:space="preserve" viewBox="0 0 500 300" y="0px" x="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="svg-switch-container" version="1.1">
  <defs>
     <linearGradient y2="331.0775" x2="360" y1="149.0088" x1="360" gradientUnits="userSpaceOnUse" id="SVGID_1_">
		<stop style={{stopColor:"#636F7C"}} offset="0"></stop>
		<stop style={{stopColor:"#5A6571"}} offset="1"></stop>
	</linearGradient>
    
    <filter height="160%" width="200%" y="-30%" x="-50%" id="inset-shadow-big-bottom">
        <feOffset dy="2" dx="0"></feOffset>                                                         
        <feGaussianBlur result="offset-blur" stdDeviation="1"></feGaussianBlur>                           
        <feComposite result="inverse" in2="offset-blur" in="SourceGraphic" operator="out"></feComposite> 
        <feFlood result="color" flood-opacity="1" flood-color="#FFF"></feFlood>                     
        <feComposite result="shadow" in2="inverse" in="color" operator="in"></feComposite>               
        <feComponentTransfer result="shadow" in="shadow">                                   
            <feFuncA type="linear"></feFuncA>
        </feComponentTransfer>
        <feComposite result="final-shadow-1" in2="SourceGraphic" in="shadow" operator="over"></feComposite>                    
      
        <feOffset dy="-4" dx="0"></feOffset>                                                         
        <feGaussianBlur result="offset-blur" stdDeviation="2"></feGaussianBlur>                           
        <feComposite result="inverse" in2="offset-blur" in="final-shadow-1" operator="out"></feComposite> 
        <feFlood result="color" flood-opacity="1" flood-color="#999"></feFlood>                     
        <feComposite result="shadow" in2="inverse" in="color" operator="in"></feComposite>               
        <feComponentTransfer result="shadow" in="shadow">                                   
            <feFuncA type="linear"></feFuncA> 
        </feComponentTransfer>
        <feComposite result="final-shadow-2" in2="final-shadow-1" in="shadow" operator="over"></feComposite>                    
      
      
      <feGaussianBlur result="blur" stdDeviation="4" in="SourceAlpha"></feGaussianBlur> 
      <feOffset result="offsetblur" dy="3" dx="0"></feOffset>

      <feComponentTransfer in="offsetblur" result="shadow1">
        <feFuncA type="linear"></feFuncA>
      </feComponentTransfer>
      
      <feMerge> 
        <feMergeNode in="shadow1"></feMergeNode>
        <feMergeNode in="final-shadow-2"></feMergeNode> 
      </feMerge>
      
      
    </filter>
    
     <filter id="inset-shadow-container">
        <feOffset dy="2" dx="0"></feOffset>                                                         
        <feGaussianBlur result="offset-blur" stdDeviation="2"></feGaussianBlur>                           
        <feComposite result="inverse" in2="offset-blur" in="SourceGraphic" operator="out"></feComposite> 
        <feFlood result="color" flood-opacity="1" flood-color="#555"></feFlood>                     
        <feComposite result="shadow" in2="inverse" in="color" operator="in"></feComposite>               
        <feComponentTransfer result="shadow" in="shadow">                                   
            <feFuncA type="linear"></feFuncA>
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" in="shadow" operator="over"></feComposite>                    
    </filter>
    
    <filter id="inset-shadow-container-big">
        <feOffset dy="0" dx="0"></feOffset>                                                         
        <feGaussianBlur result="offset-blur" stdDeviation="5"></feGaussianBlur>                           
        <feComposite result="inverse" in2="offset-blur" in="SourceGraphic" operator="out"></feComposite> 
        <feFlood result="color" flood-opacity="1" flood-color="#555"></feFlood>                     
        <feComposite result="shadow" in2="inverse" in="color" operator="in"></feComposite>               
        <feComponentTransfer result="shadow" in="shadow">                                   
            <feFuncA type="linear"></feFuncA>
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" in="shadow" operator="over"></feComposite>                    
    </filter>
    
    <filter height="150%" width="150%" y="-20%" x="-50%" id="big-gaussian-blur">
      <feGaussianBlur result="base-blur" stdDeviation="25"></feGaussianBlur>
    </filter>
    

    
    <filter height="120%" width="150%" y="0" x="-10%" id="drop-shadow">
      <feOffset dy="14" dx="0" in="SourceGraphic" result="offOut"></feOffset>
      <feColorMatrix values="0.2 0 0 
              0 0 0 0.2 
              0 0 0 0 0 
              0.2 0 0 0 
              0 0 0.5 0" type="matrix" in="offOut" result="matrixOut"></feColorMatrix>
      <feGaussianBlur stdDeviation="6" in="matrixOut" result="blurOut"></feGaussianBlur>
      <feBlend mode="normal" in2="blurOut" in="SourceGraphic"></feBlend>
    </filter>
    
        
    <filter height="120%" width="120%" y="0" x="-10%" id="drop-shadow-checkbox">
      <feOffset dy="10" dx="0" in="SourceGraphic" result="offOut"></feOffset>
      <feColorMatrix values="0.0 0 0 
              0 0 0 0.0 
              0 0 0 0 0 
              0.0 0 0 0 
              0 0 0.35 0" type="matrix" in="offOut" result="matrixOut"></feColorMatrix>
      <feGaussianBlur stdDeviation="10" in="matrixOut" result="blurOut"></feGaussianBlur>
      <feBlend mode="normal" in2="blurOut" in="SourceGraphic"></feBlend>
    </filter>

    
  </defs>
<g transform="translate(-130 -110)" className="svg-switch">
	<g filter="url(#big-gaussian-blur)" opacity="1" style={{fill:"#F4847D"}} id="mild-glow">
			<path d="M254.949,330.381l-79.336-79.336c-6.1-6.1-6.1-15.991,0-22.091l79.336-79.336c6.1-6.1,15.991-6.1,22.091,0l79.336,79.336
				c6.1,6.1,6.1,15.991,0,22.091l-79.336,79.336C270.939,336.481,261.049,336.481,254.949,330.381z"></path>
	</g>
	<path d="M452.006,140.624H266.328c-0.848,0-1.665,0.132-2.431,0.376c-4.598,0.832-8.878,3.06-12.188,6.37
		l-76.344,76.344c-8.98,8.98-8.98,23.592,0,32.572l76.344,76.344c3.31,3.31,7.59,5.537,12.188,6.37
		c0.767,0.244,1.584,0.376,2.431,0.376h185.678c6.152,0,11.936-2.396,16.286-6.746l76.344-76.344c8.98-8.98,8.98-23.592,0-32.572
		l-76.344-76.344C463.942,143.02,458.158,140.624,452.006,140.624L452.006,140.624z" style={{fill:"#F3F3F0"}} filter="url(#drop-shadow)" id="base-outline"></path>

	<path d="M538.979,229.371l-76.344-76.344c-2.935-2.935-6.782-4.403-10.629-4.403H266.328v0.101
		c-3.274,0.363-6.452,1.791-8.962,4.301l-76.344,76.344c-5.87,5.87-5.87,15.388,0,21.258l76.344,76.344
		c2.51,2.51,5.689,3.938,8.962,4.301v0.101h185.678c3.847,0,7.694-1.468,10.629-4.403l76.344-76.344
		C544.849,244.759,544.849,235.241,538.979,229.371z" filter="url(#inset-shadow-container-big)" style={{fill:"url(#SVGID_1_)"}} id="base-container"></path>
	

   <path d="M257.071,313.013l-64.09-64.09c-4.928-4.928-4.928-12.918,0-17.846
		l64.09-64.09c4.928-4.928,12.918-4.928,17.846,0l64.09,64.09c4.928,4.928,4.928,12.918,0,17.846l-64.09,64.09
		C269.989,317.94,261.999,317.94,257.071,313.013z" filter="url(#inset-shadow-container)" className="position-container" style={{fill:"#525C6B"}} id="start_container"></path> 
  
    <path d="M445.083,313.013l-64.09-64.09c-4.928-4.928-4.928-12.918,0-17.846
		l64.09-64.09c4.928-4.928,12.918-4.928,17.846,0l64.09,64.09c4.928,4.928,4.928,12.918,0,17.846l-64.09,64.09
		C458.001,317.94,450.011,317.94,445.083,313.013z" filter="url(#inset-shadow-container)" style={{fill:"#525C6B"}} className="position-container" id="end_container"></path>
	
  
   <text y="255" x="225" className="text-label noselect">OFF</text>
   <text y="255" x="430" className="text-label noselect">ON</text>  
  
  <g transform="translate(0)" id="checkbox-off"> 
		<path d="M257.071,313.013l-64.09-64.09c-4.928-4.928-4.928-12.918,0-17.846l64.09-64.09
			c4.928-4.928,12.918-4.928,17.846,0l64.09,64.09c4.928,4.928,4.928,12.918,0,17.846l-64.09,64.09
			C269.989,317.94,261.999,317.94,257.071,313.013z" filter="url(#drop-shadow-checkbox)" style={{fill:"#F5F3EE"}} id="off-bot-cap"></path>
		<path d="M257.942,305.884l-57.832-57.832c-4.447-4.447-4.447-11.656,0-16.103l57.832-57.832
			c4.447-4.447,11.656-4.447,16.103,0l57.832,57.832c4.447,4.447,4.447,11.656,0,16.103l-57.832,57.832
			C269.599,310.331,262.389,310.331,257.942,305.884z" style={{fill:"#F4847D"}} id="off-color"></path>
		<path d="M259.757,291.032l-44.795-44.795c-3.444-3.444-3.444-9.029,0-12.473
			l44.795-44.795c3.444-3.444,9.029-3.444,12.473,0l44.795,44.795c3.444,3.444,3.444,9.029,0,12.473l-44.795,44.795
			C268.786,294.477,263.202,294.477,259.757,291.032z" filter="url(#inset-shadow-big-bottom)" style={{fill:"#FFFFFF"}} id="off-top-cap"></path>
	</g>
  
  <g id="control-group">
    	<path d="M452.006,140.624H266.328c-0.848,0-1.665,0.132-2.431,0.376c-4.598,0.832-8.878,3.06-12.188,6.37 
		l-76.344,76.344c-8.98,8.98-8.98,23.592,0,32.572l76.344,76.344c3.31,3.31,7.59,5.537,12.188,6.37
		c0.767,0.244,1.584,0.376,2.431,0.376h185.678c6.152,0,11.936-2.396,16.286-6.746l76.344-76.344c8.98-8.98,8.98-23.592,0-32.572
		l-76.344-76.344C463.942,143.02,458.158,140.624,452.006,140.624L452.006,140.624z" style={{fill:"transparent"}} id="controlon" className="control-element"></path>
    
        	<path d="M452.006,140.624H266.328c-0.848,0-1.665,0.132-2.431,0.376c-4.598,0.832-8.878,3.06-12.188,6.37 
		l-76.344,76.344c-8.98,8.98-8.98,23.592,0,32.572l76.344,76.344c3.31,3.31,7.59,5.537,12.188,6.37
		c0.767,0.244,1.584,0.376,2.431,0.376h185.678c6.152,0,11.936-2.396,16.286-6.746l76.344-76.344c8.98-8.98,8.98-23.592,0-32.572
		l-76.344-76.344C463.942,143.02,458.158,140.624,452.006,140.624L452.006,140.624z" style={{fill:"transparent"}} transform="translate(0 300)" className="control-element" id="controloff"></path>
  </g>
  
   <animateTransform values="0 0 ; 0 300" fill="freeze" dur="0.01s" begin="controlon.click" type="translate" attributeType="XML" attributeName="transform" xlinkHref="#controlon"></animateTransform>
  
    <animateTransform values="0 300 ; 0 0" fill="freeze" dur="0.01s" begin="controlon.click" type="translate" attributeType="XML" attributeName="transform" xlinkHref="#controloff"></animateTransform>
  
  <animateTransform values="0 300 ; 0 0" fill="freeze" dur="0.01s" begin="controloff.click" type="translate" attributeType="XML" attributeName="transform" xlinkHref="#controlon"></animateTransform>
  
    <animateTransform values="0 0 ; 0 300" fill="freeze" dur="0.01s" begin="controloff.click" type="translate" attributeType="XML" attributeName="transform" xlinkHref="#controloff"></animateTransform>  
  
  
  
    <animateTransform keyTimes="0;0.1;0.5; 0.9;1" values="0;-5;200;180;188;" fill="freeze" dur="0.3s" begin="controlon.click" type="translate" attributeType="XML" attributeName="transform" xlinkHref="#checkbox-off"></animateTransform>
  
   <animateTransform keyTimes="0;0.1;0.5; 0.9;1" values="188;193;-12; 8; 0" fill="freeze" dur="0.3s" begin="controloff.click" type="translate" attributeType="XML" attributeName="transform" xlinkHref="#checkbox-off"></animateTransform>
  
    <animateTransform keyTimes="0;0.1;0.5; 0.9;1" values="188;193;-12; 8; 0" fill="freeze" dur="0.3s" begin="controloff.click" type="translate" attributeType="XML" attributeName="transform" xlinkHref="#mild-glow"></animateTransform>
  
      <animateTransform keyTimes="0;0.1;0.5; 0.9;1" values="0;-5;200;180;188;" fill="freeze" dur="0.3s" begin="controlon.click" type="translate" attributeType="XML" attributeName="transform" xlinkHref="#mild-glow"></animateTransform>
  
  
  ?&gt;
  
  
  
    
  
   
  
     
  
   
  
  


</g>
</svg>
        </div>
        );

        export default Toggle_large;
        
        
         */
}
