import React, {useEffect , useRef} from 'react';
import {animate, scale} from 'framer-motion'

function AnimatedNumbers({to , suffix , label}){
     const nodeRef = useRef();
     useEffect (() => {
        const node = nodeRef.current;
        const controls = animate(0,to,{
            duration : 1.5,
            onUpdate(value){
                node.textContent = Math.round(value).toLocaleString() + suffix;
            },
        });
        return () => controls.stop();
     },[to,suffix]);
    return(
        <div className='flex flex-col text-center'>
            <span ref={nodeRef} className='text-5xl font-bold text-white mb-2'></span>
            <span className='text-gray-400'>{label}</span>
        </div>
    )
}
export default AnimatedNumbers;