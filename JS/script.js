
//PALINDROME BLOCK
const palindrome_input = document.getElementById('palindrome_input');
const palindrome_res_span = document.getElementById('palindrome_res');
function checkPalindrome(){
    // get value from input to str and then call isPalindrome(str)
    const stringForCheck = normalizeStringForReverse(palindrome_input.value);
    palindrome_res_span.textContent = isPalindrome(stringForCheck).toString();
}
function isPalindrome(str){
    palindrome_input.value = '';
    const strArr1 = str.split('');
    const strArr2 = (str.split('').reverse());
    let result = true;
    for (let strArrIterator = 0; strArrIterator < strArr1.length; strArrIterator++) {
        if (strArr1[strArrIterator] !== strArr2[strArrIterator]) {
            result = false;
        }
    }
    return result;
}

//REVERSE BLOCK
const reverse_input = document.getElementById('reverse_input');
const reverse_result =document.getElementById('reverse_result');
function reverseString(){
    // get value from input to str and then call reverseString(str)
    const stringForInput = reverse_input.value;
    reverse_result.textContent = reverseStringCanNotBeOverloaded(stringForInput);
}
function reverseStringCanNotBeOverloaded(str){
    return str.split('').reverse().join('');
}

//COUNTER BLOCK
const string_value = document.getElementById('string_value');
const character_value = document.getElementById('character_value');
const res_calc = document.getElementById('res_calc');
function getCount(){
    // get value from input to str and c and then call countChar(str,c)
    console.clear();
    const stringForCounting = inputCheckForCounting(string_value.value);
    const charForCounting = inputCheckForCounting(character_value.value);
    res_calc.textContent =  countChar(stringForCounting, charForCounting).toString();
}

function countChar(str,c){
    let stringForCounting = str;
    const charForCounting = c;
    let positionForSearch = 0;
    let counter = 0;
    do {
        let testString = stringForCounting.substring(positionForSearch,(positionForSearch+charForCounting.length));
        if(testString.includes(charForCounting)) {
            counter++;
            positionForSearch += (charForCounting.length - 1);
        }
        positionForSearch++;
    } while (stringForCounting.length >= (charForCounting.length + positionForSearch));
    console.log(counter);
    return counter;
}


// ADDITIONAL FUNCTIONS
function normalizeStringForReverse(stringForNormalize){
    const result = stringForNormalize.toLowerCase().trim();
    if (result.length<2){
        alert('string is too shot for palindroming');
        return '';
    }
    return result;
}

function inputCheckForCounting(stringForCheck) {
    if(stringForCheck === ''){
        alert('must use one symbol or more');
        return '';
    } else return stringForCheck;
}