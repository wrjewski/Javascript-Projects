let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Find how may arrays there are
secretMessage.length;

//Remove last string of array
secretMessage.pop();

//Verify length went down by 1 array
secretMessage.length;

//Add to the end of array
secretMessage.push('to', 'Program');

//Find the index of a specific array
secretMessage.indexOf('easily');

//Change the array of index 7
secretMessage[7] = 'right';

//Remove first array
secretMessage.shift();

//change first array to soemthing else
secretMessage.unshift('Programming');

//change arrays 6-10 to 'know,'
secretMessage.splice(6, 5, 'know,');

//log the message by joining all the arrays
console.log(secretMessage.join(' '));
