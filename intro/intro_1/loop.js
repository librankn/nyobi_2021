// for (let i = 0; i < 100; i++) {
//   document.write(i + ' ');
// }

for (let i = 0; i < 16; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    document.write(i + 'FizzBuzz');
  } else if (i % 3 === 0) {
    document.write(i + 'Fizz');
  } else if (i % 5 === 0) {
    document.write(i + 'Buzz');
  }
}
