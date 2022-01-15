function typedOut(str1, str2) {
    
    while (`${str1}${str2}`.includes('#')) {
        if (str1.includes('#')) {
            let pos1 = str1.indexOf('#');
            str1 = `${str1.substring(0, pos1 - 1)}${str1.substring(pos1 + 1, str1.length)}`;
        }
        if (str2.includes('#')) {
            let pos2 = str2.indexOf('#');
            str2 = `${str2.substring(0, pos2 - 1)}${str2.substring(pos2 + 1, str2.length)}`;
        }
    }

    console.log(str1, str2);
    return str1 === str2;
}

module.exports = typedOut;