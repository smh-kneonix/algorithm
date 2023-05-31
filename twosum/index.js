function twosum(numbers, target) {
    let result;
    numbers.forEach(function (element, index) {
        numbers.find(function (element2, index2) {
            if (index2 > index && element + element2 === target) {
                result = [index, index2];
                return true;
            }
        });
    });
    return result;
}

twosum([1, 2, 3], 4);
twosum([1234, 5678, 9012], 14690);
