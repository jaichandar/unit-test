exports.charCount = (str) => {
    if (typeof str === 'string') {
        str = str.split(' ').map(a => a).join('')
        const result = {};
        for (let i = 0; i < str.length; i++) {
            if (str[i].toLowerCase() in result) {
                result[str[i].toLowerCase()]++;
            } else {
                result[str[i].toLowerCase()] = 1;
            }
        }
        return result;
    } else {
        throw new Error('Please Enter String');
    }
}