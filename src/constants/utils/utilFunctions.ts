export const capitalizeString = (string: string): string => {
  let splitString = string.split(" ")
  if (splitString.length <= 0) return ""
  return splitString.map(s => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase()).join(" ")
}
