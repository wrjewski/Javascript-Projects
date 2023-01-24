//Whales speak in vowels and they double the E and U. we must extract the vowels from the english sentence to get the whale translation
const input = 'I am learning JavaScript'

const vowels = ['a'. 'e', 'i', 'o', 'u']

const resultArray = []

//calculates how many letters are in Input Variable
for(let inputIndex = 0; inputIndex<input.length; inputIndex++){
  
  //console.log('inputIndex is ' + inputIndex + '.')
  
  //If 'e' is found thius will double it
  if(input[inputIndex] === 'e'){
    resultArray.push(input[inputIndex]);
  }
  //If 'u is found thius will double it
  if(input[inputIndex] === 'u){
    resultArray.push(input[inputIndex]);
  }

  //counts how many vowel arrays we have
  for(let vowelsIndex = 0; vowelsIndex<vowels.length; vowelsIndex++){
    //console.log('vowel index is ' + vowelsIndex + '.')
    
    //displays the vowels that are in the Input Variable
    if(input[inputIndex] === vowels[vowelsIndex]){
      //console.log(input[inputIndex])
      resultArray.push(input[inputIndex]);
    }
  }
}

//console.log(resultArray);

//joins all the selected arrays we pulled
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);
