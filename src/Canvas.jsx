import React, { useEffect, useRef, useState } from 'react'
import canvasimages from './canvasimages';
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';


function Canvas({details}) {
    const {startIndex, numImages, duration, size, top, left, zIndex}=details; //destructuring
    const canvasRef =useRef(null); // creating a ref for each canvas
    const [index, setIndex] =useState({value :startIndex }); //now as i will update value of usestate index it will render neeche
    
    useGSAP(() => {
        gsap.to(index, {
            value: startIndex+ 149,
            duration: duration,
            repeat:-1, //loop animation infinitely
            ease: "linear",
            onUpdate: ()=> //called everytime animation val changes, updates react state
            {
                setIndex({value: Math.round(index.value)});
                //triggers re-renders
            },
        });

        gsap.from(canvasRef.current,{
          opacity: 0,
          duration:1.1,
          ease:"power2.inOut",
        });
    });





    useEffect(()=> {
      const scale= window.devicePixelRatio;
      const canvas = canvasRef.current; // attaching the ref with canvas
      const ctx = canvas.getContext('2d'); //ctx is drawing tool 
      const img = new window.Image(); //made a new image
      img.src = canvasimages[index.value];//will show accd to curr val of index above in usestate
      img.onload = ()=> {
        canvas.width = canvas.offsetWidth *scale;
        canvas.height = canvas.offsetHeight * scale;
        canvas.style.width= `{canvas.offsetWidth}px `;
        canvas.style.height=`{canvas.offsetHeight}px`;

        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
      };
    },[index.value]);
    return (
        <canvas
          data-scroll
          data-scroll-speed={Math.random().toFixed(1)}
          ref={canvasRef}
          className="absolute"
          style={{
            width: `${size * 1.2}px`,
            height: `${size * 1.2}px`,
            top: `${top}%`,
            left: `${left}%`,
            zIndex: `${zIndex}`,
          }}
          id="canvas"
        ></canvas>
      );
    }
    
    export default Canvas;