
const str = "yaruda da adu maadu";

const freqCount = (strs) => {

    let temp = {};
    let dummy = {value: 0, char: ""}

    for (let i = 0; i < strs.length; i++) {
            temp[strs[i]] = (temp[strs[i]] || 0) + 1;
    }

    console.log(temp, "temp")

    for (let i in temp) {
        if(temp[i] > dummy.value) {
            dummy = {value: temp[i], char: i};
        }
    }

    return dummy
}

console.log(freqCount(str));