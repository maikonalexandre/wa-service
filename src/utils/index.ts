export function removeDigitByIndex(str: string, index: number) {
  return str.slice(0, index) + str.slice(index + 1);
}
