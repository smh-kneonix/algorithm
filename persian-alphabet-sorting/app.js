const alphabetical = [
    "ا",
    "ب",
    "پ",
    "ت",
    "ث",
    "ج",
    "چ",
    "ح",
    "خ",
    "د",
    "ذ",
    "ر",
    "ز",
    "ژ",
    "س",
    "ش",
    "ص",
    "ض",
    "ط",
    "ظ",
    "ع",
    "غ",
    "ف",
    "ق",
    "ک",
    "گ",
    "ل",
    "م",
    "ن",
    "و",
    "ه",
    "ی",
];
function alphabeticalSorting(words) {
    const len = words.length;
    for (let every = 0; every <= len; every++) {
        for (let i = 1; i < len; i++) {
            const len2 = words[i].length;
            for (let j = 0; j < len2; j++) {
                if (
                    alphabetical.indexOf(words[i][j]) <
                    alphabetical.indexOf(words[i - 1][j])
                ) {
                    const test = words[i - 1];
                    words[i - 1] = words[i];
                    words[i] = test;
                    break;
                } else if (
                    alphabetical.indexOf(words[i][j]) >
                    alphabetical.indexOf(words[i - 1][j])
                ) {
                    break;
                } else {
                    continue;
                }
            }
        }
    }
    return words;
}
console.log(alphabeticalSorting(["سلام", "سپر", "سلاح", "فرد"]));
