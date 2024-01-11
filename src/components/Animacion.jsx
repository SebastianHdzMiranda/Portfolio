import {motion, useAnimation, useInView} from 'framer-motion' 
import { useEffect, useRef } from 'react';

const Animacion = ({children, position, slide}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true});
    const controls = useAnimation();
    const slideConstrols = useAnimation();

    useEffect(() => {
      if(isInView) {
        // animacion
        controls.start('visible');
        slideConstrols.start('visible');
      }
    }, [isInView])
    

    return (
        <div 
            ref={ref} 
            style={slide &&{ position: 'relative', overflow: 'hidden', maxWidth: 'fit-content', height: 'fit-content'}}
        >
            <motion.div
                variants={
                    position ? 
                        {
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                        }
                    :
                        {
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                        }
                        
                }
                initial='hidden'
                animate={controls}
                transition={
                    position ? 
                        { duration: .5, delay: 0.5}
                    :
                        { duration: 0.6, delay: 0.25}
                }
            >
            {children}  
            </motion.div>
            {slide &&
                <motion.div
                    variants={{
                        hidden: {left: 0},
                        visible: {left: '100%'},
                    }}
                    initial='hidden'
                    animate={slideConstrols}
                    transition={{ duration: 0.5, ease: 'easeIn'}}
                    style={{
                        position:'absolute',
                        top: 4,
                        bottom: 4,
                        left: 0,
                        right: 0,
                        background: '#55e6a5',
                        zIndex: 20,
                    }}
                />
            }

        </div>
    );
};

export default Animacion;