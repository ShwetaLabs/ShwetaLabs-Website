import { Variants } from 'framer-motion';  
import { useMediaQuery } from 'react-responsive';
const minWidthForDesktop = '800px';
export const isDesktop = () => {
  return useMediaQuery({ minWidth: minWidthForDesktop });
};


export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number): Variants => {  
    return {  
        hidden: {  
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,  
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,  
            opacity: 0, // Ensure to set opacity to 0 for hidden state  
        },  
        show: {  
            x: 0,  
            y: 0, // Add y: 0 for the show state as well  
            opacity: 1,  
            transition: { // Move transition here  
                type: 'tween',  
                duration: 1.2,  
                delay: delay,  
                ease: [0.25, 0.25, 0.25, 0.75],  
            },  
        },  
    };  
}