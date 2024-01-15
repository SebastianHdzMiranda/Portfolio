import React, { useEffect, useRef } from 'react'

function Cursor() {

    const refDot = useRef(null);
    const refOut = useRef(null);

    useEffect(() => {
      const cursorDot = refDot.current;
      const cursorOutline = refOut.current;

      window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // cursorOutline.style.left = `${posX}px`;
        // cursorOutline.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`,
        }, { duration: 1550, fill: 'forwards'})
      })
    }, [])
    

  return (
    <div>
        <div className="cursor-dot" ref={refDot}></div>
        <div className="cursor-out" ref={refOut}></div>
    </div>
  )
}

export default Cursor;