function fullAdder(x, y, z) {
  let c, s;
  let xXORy = !x * y + x * !y;
  if (!xXORy * z + xXORy * !z) {
    s = 1;
  } else {
    s = 0;
  }
  if (x * y + xXORy * z) {
    c = 1;
  } else {
    c = 0;
  }
  return [c,s];
}
fullAdder(1, 1, 0);
