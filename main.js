let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
console.log(secretMessage.pop());
console.log(secretMessage.length);

//The push() method adds one or more elements to the end of an array and returns the new length of the array.
console.log(secretMessage.push('to','Program'));
console.log(secretMessage);

//The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
const isWordEasily = (element) => element === 'easily';
console.log(secretMessage.findIndex(isWordEasily));

//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(secretMessage.shift());

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(secretMessage.unshift('Programming'));

//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
console.log(secretMessage);
secretMessage.splice(6, 5, 'know');

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
console.log(secretMessage.join(' '));