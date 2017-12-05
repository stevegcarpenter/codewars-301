function abbrevName(name){
  return name.split(' ').map(function (word) {
    return word[0].toUpperCase();
  }).join('.');
}