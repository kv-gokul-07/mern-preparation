const countCharacter = "abcdefabcz";

const countChar = (char) => {

    let temp = {};

    for(let i = 0; i < char.length; i++) {
        if(temp[char[i]]) {
            temp[char[i]] = 1 + Number(temp[char[i]])
        }
        else {
            temp[char[i]] = 1
        }
    }

    return temp;
}

console.log(countChar(countCharacter))