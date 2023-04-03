function decoder(inp) {
  const bit = parseInt(inp, 2);
  let out = [];
  out.length = 2 ** inp.length;
  out.fill(0);

  //note in if statement Condition you should put your enable
  if (+inp[0]) {
    out[bit] = 1;
  }
  return out;

  /* (whith no enable)

  let bit = parseInt(inp, 2);
  out.length = 2 ** inp.length;
  let out = [];
  out.fill(0);
  out[bit] = 1;

  */
}

decoder("111");
