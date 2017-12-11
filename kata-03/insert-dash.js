function insertDash(num) {
    let dashArr = [];
    let numArr = String(num).split('')
    for (var i = 1; i < numArr.length; i++) {
          dashArr.push(numArr[i - 1]);
          if (parseInt(numArr[i - 1]) % 2 && parseInt(numArr[i]) % 2) {
                  dashArr.push('-');
                }
        }
    dashArr.push(numArr[i - 1]);
    return dashArr.join('');
}
