export function hexChecker(hex: string): boolean {
    let isHex = null;
    if (hex.length === 7) {
      isHex = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i); 
    }
    if (hex.length === 4) {
      isHex = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    } 
    if (!hex.includes('#') || !isHex) {
        return false;
    }
    return true;
  }