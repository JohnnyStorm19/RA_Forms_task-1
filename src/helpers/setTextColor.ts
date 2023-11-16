import chroma from "chroma-js";
import { CSSProperties } from "react";

export function setTextColor(color:string):CSSProperties {
    if (color.length === 0) {
        return {
            color: 'black',
            fontWeight: 'bold',
            fontSize: '1.4rem',
        };
    }
    const luminance = chroma(color).luminance();
    const newColor = luminance > 0.5 ? 'black' : 'white'; 
    return {
        color: newColor,
        fontSize: '1.4rem',
        fontWeight: 'bold',
    };
}