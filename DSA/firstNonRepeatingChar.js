
const nonRepeat = (str) => {

    let freq = {};

    for(let i = 0; i < str.length; i++) {
        const ch = str[i];
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for(let i in freq) {
        if(freq[i] === 1) {
            return i
        }
    }

    console.log(freq)

}

const str = "abdabcdef"

console.log(nonRepeat(str));