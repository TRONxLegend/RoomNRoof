/**
 * Utility function for merging classNames (similar to shadcn's cn function)
 * Combines multiple className strings or conditionally includes classes
 */
export function cn(...inputs) {
  const classes = [];
  
  for (const input of inputs) {
    if (!input) continue;
    
    if (typeof input === 'string') {
      classes.push(input);
    } else if (typeof input === 'object') {
      if (Array.isArray(input)) {
        classes.push(cn(...input));
      } else {
        for (const key in input) {
          if (input[key]) {
            classes.push(key);
          }
        }
      }
    }
  }
  
  return classes.filter(Boolean).join(' ');
}
