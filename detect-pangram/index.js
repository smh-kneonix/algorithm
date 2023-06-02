function isPangram(string) {
    string = string.replace(/[0-9]/g, " ").toLowerCase();

    const alphabet = new Set([...string]);
    alphabet.delete(" ");
    alphabet.delete(",");
    alphabet.delete(".");

    return alphabet.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
