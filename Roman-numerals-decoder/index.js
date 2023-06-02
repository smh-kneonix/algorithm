function solution(roman) {
    const alphabet = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    let result = 0;
    const array = roman.split("");
    array.forEach(function (elemetn, index) {
        const current = alphabet.get(elemetn);
        const next = alphabet.get(array[index + 1]);
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    });
    return result;
}

console.log(solution("XXI", 21));
console.log(solution("I", 1));
console.log(solution("IV", 4));
console.log(solution("MMVIII", 2008));
