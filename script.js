function firstNonRepeatedChar(str) {
  // Create a frequency map to store character counts
  let charCount = {};

  // Count occurrences of each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character that occurs only once
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return str[i];
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Test the function
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));


// function firstNonRepeatedChar(str) {
//  // Write your code here
// 	str.split(' ').sort().join(' ');
// 	for(let i=1 ; i<str.length ; i=i+2){
// 		if(str[i] != str[i-1]){
// 			return str[i-1];
// 		}
		
// 	}
// 	return null;
// }
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
