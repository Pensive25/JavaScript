const input = document.getElementsByTagName('input')[0];


let reverseString = (str) => {
    return str.split('').reverse().join('');
}


let check = () => {


    let value= reverseString(input.value);

    if (input.value === value) {
        alert(`${input.value} is a Palindrome`);
    } 
    
    else {
        alert(`${input.value} is not a Palindrome`);
    }

    input.value = '';
    
};