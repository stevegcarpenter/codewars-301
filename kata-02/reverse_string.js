function fixTheMeerkat(arr) {
  let right = arr.length - 1; 
  for (let left = 0; left < right; left++, right--) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
  }
  return arr;
}
