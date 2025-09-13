// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
function VowelCounter(str) {
    let num = 0
    str = str.toLowerCase();
    for (const val of str) {
       if (val == 'a'||val =='e'||val =='i'||val =='o'||val =='u'){
num++
       }
    }
    return num;
}

console.log(VowelCounter("DevVerma"));
