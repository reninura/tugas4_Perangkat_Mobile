function cekPalindrome(str) {

    // find the length of a string
    const len = string.length;

    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'Bukan palindrome';
        }
    }
    return 'palindrome';
}
const string = prompt('Input Kata: ');

const value = cekPalindrome(string);

console.log(value);