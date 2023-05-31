function spinWords(string) {
    let array = string.split(" ");

    array.forEach(function (element, index) {
        if (element.length >= 5) {
            array[index] = element.split("").reverse().join("")
        }
    });

    console.log(array.join(" "));
}

spinWords("Hey fellow warriors");
