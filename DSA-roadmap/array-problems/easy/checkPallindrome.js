
const arr = [1, 2, 3, 3, 2, 0]

const checkPallindrome = (arra) => {

    for(let i = 0; i < arra.length; i++) {
        
        if(arra[i] !== arra[arra.length - i - 1]) {
            return "Not a palindrome"
        }
    }
    return "Its Palindrome"
}

console.log(checkPallindrome(arr))