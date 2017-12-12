function isNice(arr){
  let lut = {};
  let nice = true;
  if (arr.length === 0) return false;
  arr.forEach(num => lut[num] = true);
  for (i in arr) {
    if (lut[arr[i] + 1] || lut[arr[i] - 1]) continue;
    nice = false;
    break;
  }
  return nice;
}
