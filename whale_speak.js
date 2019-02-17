const input = 'Hi, Human';
const Vowels = ['a','i','u','e','o'];
let resultArray = [];
for (let i = 0;  i < input.length; i++) {
  //console.log(i)
  for (let j = 0; j < Vowels.length; j++){
   //console.log(j)
    if (input[i] === Vowels[j]){
     //console.log(input[i])
      resultArray.push(input[i])
      if (input[i] === 'e') {
       resultArray.push(input[i])
      } 
      if (input[i] === 'u') {
       resultArray.push(input[i])
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase())