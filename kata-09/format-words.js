function formatWords(words){
  if (!words || !words.length) return '';
  let cleanwords = words.filter(ele => ele != '');
  let last = '';
  if (cleanwords.length > 1) {
    last = ' and ' + cleanwords.pop();
  }
  return cleanwords.join(', ') + last;
}
