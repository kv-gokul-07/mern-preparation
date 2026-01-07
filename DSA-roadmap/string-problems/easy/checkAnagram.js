const str1 = "team";
const str2 = "eatm";

const checkAnagram = (s1, s2) => {
      
    if (s1.length !== s2.length) {
     return "Not an Anagram";
    }
    const map = new Map();

    for(let i = 0; i < s1.length; i++){
        map.set(s1[i], s1[i])
    }

    for(let i = 0; i < s2.length; i++){
       if(!map.has(s2[i])) {
            return "Not a Anagram"
       }
    }

    return "Its Anagram"
    
}

console.log(checkAnagram(str1, str2))