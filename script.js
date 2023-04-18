
  //Complete the function
	function letterCombinations(digits) {
    if (digits.length === 0) return [];
    const phone = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    let result = [''];
    for (let digit of digits) {
        let temp = [];
        for (let res of result) {
            for (let char of phone[digit]) {
                temp.push(res + char);
            }
        }
        result = temp;
    }
    return result;
}
}

module.exports = letterCombinations;
