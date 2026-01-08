
const str = "yaruda adu pumdamawa";

const nonRepeatChar = (strs) => {

    let temp = {};

    for (let i = 0; i < strs.length; i++) {

        if (temp[strs[i]]) {
            temp[strs[i]] = temp[strs[i]] + 1;
        }
        else {
            temp[strs[i]] = 1;
        }
    }

    for (let i in temp) {
        if (temp[i] === 1) {
            return `${i} is the first non repeated char`
        }
    }

}

console.log(nonRepeatChar(str));