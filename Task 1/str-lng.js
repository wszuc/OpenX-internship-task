let strlng = function (string) {
    // check datatypes and covert to string if needed
    if ((typeof string) != 'string') {
        throw 'Only string type is accepted';
    }
    if (string === '') {
        return 0;
    }
    const length = string.length;
    let substrings = [];
    for (let i = 0; i < length; i++) {
        let temp = ''; // collects non-repeating characters that at the end are placed in substrings array
        for (let j = i; j < length; j++) {
            if (temp.includes(string[j]) == false) {
                temp += string[j];
            } else {
                break;
            }
        }
        if (temp.length == length) {
            return length;
        }
        substrings.push(temp);
    }
    return Math.max(...(substrings.map(elem => elem.length)));
}

module.exports = strlng;