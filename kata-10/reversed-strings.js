function solution(str) {
  let ret = [];
  if (str) {
    for (let i = 0; i < str.length; i++) {
      ret.push(str[str.length - 1 - i]);
    }
  }
  return ret.join('');
}
