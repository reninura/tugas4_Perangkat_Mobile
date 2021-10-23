function angkaPalindrome(num) {
    let leftSide = 1;
    let rightSide = 2;
    
    while (leftSide !== rightSide) {
      num++
      let string = num.toString();
      leftSide = string.slice(0, Math.ceil(string.length/2));
      rightSide = string.slice(Math.floor(string.length/2), string.length).split('').reverse().join('');
    }
    return num;
  }

  const string = prompt('Input Kata: ');

  const value = angkaPalindrome(Number);
  
  console.log(value);
  