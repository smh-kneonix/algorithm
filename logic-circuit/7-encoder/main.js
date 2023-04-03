//this code work for valid encoder and normal encoder
function encoder(inp) {
  if (inp.length === 1) return `your input length should be bigger than 1`;

  let log = Math.log2(inp.length);

  if (log === Math.round(log)) {
    for (let j = 0; j < inp.length; j++) {
      if (+inp[j]) {
        let decimal = inp.length - 1 - j;
        let binary = decimal.toString(2);
        return binary.split("");
      }
      if (inp.length - 1 === j) {
        let arrPut = [];
        arrPut.length = log;
        arrPut.fill("0");
        return arrPut;
      }
    }
  } else {
    return `your input should be (2^n = input.length)`;
  }
}
encoder("00100000");
