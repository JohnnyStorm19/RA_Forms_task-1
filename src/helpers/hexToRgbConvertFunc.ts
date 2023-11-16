import { THexToRgbResult } from "../models";
import { hexChecker } from "./hexChecker";

export const hexToRgbConvert = (hex:string): THexToRgbResult => {

    const isHex = hexChecker(hex);

    if (!isHex) {
        return {success: false};
    }

  if (hex.length === 4) {
      const slicedR = hex.slice(1,2);
      const slicedG = hex.slice(2,3);
      const slicedB = hex.slice(3,4);
  
      const r = parseInt(slicedR + slicedR, 16);
      const g = parseInt(slicedG + slicedG, 16);
      const b = parseInt(slicedB + slicedB, 16);
    
      const res = `rgb(${r}, ${g}, ${b})`;
  
      return {success: true, rgb: res};
  }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const res = `rgb(${r}, ${g}, ${b})`;

    return {success: true, rgb: res, hex: hex};
}