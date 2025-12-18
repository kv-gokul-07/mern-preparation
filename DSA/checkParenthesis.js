
const checkParethesis = (b) => {

    const hashMap = {
        "{": "}",
        "[": "]",
        "(": ")"
    };

    for(let i = 0; i < b.length / 2; i++) {
        let ro = hashMap[b[i]];
        if(b[b.length - i - 1] !== ro) {
            return false
        }
    }


    return true
  
}

const brackets = ["{","(", "[","]",")","}"]
console.log(checkParethesis(brackets))