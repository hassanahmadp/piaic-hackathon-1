export const capitalizeString = (string:string):string => {
  return string.split(' ').map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(' ');
}