export const htmlFontSize = 18;
export const baseLinePX = 20;
export const base = (multiplier = 1): string => `${(baseLinePX / htmlFontSize) * multiplier}rem`;


