
// creating a function to check a panagram

function checkPangram(str)
{

	Array1 = new Array(26).fill(false);

	let index;
	for (let i = 0; i < str.length; i++) {

		if ('A' <= str[i] && str[i] <= 'Z')
			index = str.charCodeAt(i) - 'A'.charCodeAt(0);

		else if ('a' <= str[i] && str[i] <= 'z')
			index = str.charCodeAt(i) - 'a'.charCodeAt(0);

		else continue;

		Array1[index] = true;
	}
	for (let i = 0; i <= 25; i++)
		if (Array1[i] == false)
			return false;
	return true;
}


let str = "The quick brown fox jumps over the lazy dog";

console.log(str,"</br>")

if (checkPangram(str) == true)
	console.log("is a pangram");
else
	console.log("is not a pangram");


