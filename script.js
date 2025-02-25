function firstNonRepeatedChar(str) {
 // Write your code here
	str.split(' ').sort().join(' ');
	for(let i=1 ; i<str.length ; i=i+2){
		if(str[i] != str[i-1]){
			return str[i-1];
		}
		
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
